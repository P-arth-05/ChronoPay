from typing import Tuple, Dict
import jiwer

def preprocess_transcription(text: str) -> str:
    """Apply consistent preprocessing to transcriptions."""
    transformation = jiwer.Compose([
        jiwer.ToLowerCase(),
        jiwer.RemovePunctuation(),
        jiwer.Strip()
    ])
    return transformation(text)

def calculate_metrics(prediction: str, reference: str) -> Dict[str, float]:
    """Compute transcription accuracy metrics."""
    metrics = {}
    metrics['wer'] = jiwer.wer(reference, prediction)
    metrics['cer'] = jiwer.cer(reference, prediction)
    metrics['mer'] = jiwer.mer(reference, prediction)
    metrics['wip'] = jiwer.wip(reference, prediction)
    metrics['wil'] = jiwer.wil(reference, prediction)
    return metrics

def evaluate_audio_task(prediction: str, reference: str) -> Tuple[float, Dict[str, float]]:
    """Evaluate audio transcription using multiple metrics."""
    processed_pred = preprocess_transcription(prediction)
    processed_ref = preprocess_transcription(reference)
    metrics = calculate_metrics(processed_pred, processed_ref)
    overall_score = 1.0 - metrics['wer']
    return overall_score, metrics
