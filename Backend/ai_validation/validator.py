from typing import Literal
import re

try:
    from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
    from nltk.tokenize import word_tokenize
    import jiwer
except ImportError:
    raise ImportError("Please install nltk and jiwer: pip install nltk jiwer")

TaskType = Literal["translation", "image_tagging", "audio_transcription"]

def validate_task(task_type: TaskType, reference: str, submission: str) -> dict:
    """
    Validates a user submission against reference using AI logic.

    Args:
        task_type (str): The type of the task (translation, image_tagging, audio_transcription)
        reference (str): Ground truth or expected output
        submission (str): User-submitted answer

    Returns:
        dict: {
            "score": float,
            "passed": bool,
            "details": dict
        }
    """
    task_type = task_type.lower().strip()
    
    if task_type == "translation":
        return _validate_translation(reference, submission)
    elif task_type == "image_tagging":
        return _validate_image_tagging(reference, submission)
    elif task_type == "audio_transcription":
        return _validate_audio_transcription(reference, submission)
    else:
        raise ValueError(f"Unsupported task type: {task_type}")


def _validate_translation(reference: str, submission: str) -> dict:
    ref_tokens = word_tokenize(reference)
    sub_tokens = word_tokenize(submission)
    smoothie = SmoothingFunction().method4
    score = sentence_bleu([ref_tokens], sub_tokens, smoothing_function=smoothie)
    passed = score >= 0.75
    return {
        "score": round(score, 4),
        "passed": passed,
        "details": {
            "metric": "BLEU",
            "threshold": 0.75
        }
    }


def _validate_image_tagging(reference: str, submission: str) -> dict:
    # Assume comma-separated tags (e.g., "car, road, traffic light")
    ref_tags = set(tag.strip().lower() for tag in reference.split(",") if tag.strip())
    sub_tags = set(tag.strip().lower() for tag in submission.split(",") if tag.strip())
    
    if not ref_tags:
        return {"score": 0.0, "passed": False, "details": {"error": "Empty reference tags"}}
    
    intersection = ref_tags.intersection(sub_tags)
    score = len(intersection) / len(ref_tags)
    passed = score >= 0.8
    
    return {
        "score": round(score, 4),
        "passed": passed,
        "details": {
            "matched_tags": list(intersection),
            "metric": "Tag Overlap",
            "threshold": 0.8
        }
    }


def _validate_audio_transcription(reference: str, submission: str) -> dict:
    transform = jiwer.Compose([
        jiwer.ToLowerCase(),
        jiwer.RemovePunctuation(),
        jiwer.Strip(),
        jiwer.RemoveMultipleSpaces()
    ])

    # Apply transformations and split into words
    ref_words = transform(reference).split()
    sub_words = transform(submission).split()

    # Calculate WER
    wer_score = jiwer.wer(ref_words, sub_words)
    passed = wer_score <= 0.25  # Lower WER is better
    
    return {
        "score": round(wer_score, 4),
        "passed": passed,
        "details": {
            "metric": "WER",
            "threshold": 0.25
        }
    }

