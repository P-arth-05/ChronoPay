import torch
from torchvision import models, transforms
from PIL import Image
import torchaudio
import speech_recognition as sr
import wave
import contextlib
from jiwer import wer, cer
import whisper

from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
from nltk.tokenize import word_tokenize


def evaluate_translation(prediction: str, reference: str):
    reference_tokens = word_tokenize(reference)
    prediction_tokens = word_tokenize(prediction)
    smoothing = SmoothingFunction().method1
    bleu_score = sentence_bleu([reference_tokens], prediction_tokens, smoothing_function=smoothing)
    return bleu_score, {
        "metric": "BLEU",
        "score": round(bleu_score, 4),
        "prediction_tokens": prediction_tokens,
        "reference_tokens": reference_tokens
    }


def evaluate_image_task(prediction: str, reference: str):
    pred_set = set(prediction.lower().split(','))
    ref_set = set(reference.lower().split(','))
    score = len(pred_set & ref_set) / max(len(ref_set), 1)
    return score, {"matched_tags": list(pred_set & ref_set)}


def evaluate_audio_task(prediction: str, reference: str):
    transformation = lambda x: x.lower().strip().translate(str.maketrans('', '', '.,!?'))
    wer_score = wer(reference, prediction, truth_transform=transformation, hypothesis_transform=transformation)
    cer_score = cer(reference, prediction, truth_transform=transformation, hypothesis_transform=transformation)
    return wer_score, cer_score


def evaluate_image(image_path: str):
    model = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
    model.eval()

    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        )
    ])

    image = Image.open(image_path).convert("RGB")
    input_tensor = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(input_tensor)
        probabilities = torch.nn.functional.softmax(outputs[0], dim=0)

    with open("imagenet_classes.txt") as f:
        labels = [line.strip() for line in f.readlines()]

    top_prob, top_class = torch.topk(probabilities, 1)
    predicted_class = labels[top_class.item()]
    confidence = top_prob.item()

    _ = evaluate_image_task("cat, animal", "cat, pet")

    return {"predicted_class": predicted_class, "confidence": round(confidence, 2)}


def evaluate_audio(file_path: str):
    # Get duration
    with contextlib.closing(wave.open(file_path, 'r')) as f:
        frames = f.getnframes()
        rate = f.getframerate()
        duration_seconds = frames / float(rate)

    # Load Whisper model
    model = whisper.load_model("base")  # or "tiny", "small", etc.

    # Transcribe
    result = model.transcribe(file_path)
    transcription = result["text"].strip()

    reference_text = "Please call Stella. Ask her to bring these things with her from the store."

    from jiwer import wer, cer
    error_wer = wer(reference_text.lower(), transcription.lower())
    error_cer = cer(reference_text.lower(), transcription.lower())

    return {
        "duration_seconds": round(duration_seconds, 2),
        "transcription": transcription,
        "reference": reference_text,
        "wer": round(error_wer, 4),
        "cer": round(error_cer, 4),
        "score": max(0.0, 1.0 - error_wer)
    }