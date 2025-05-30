from typing import Tuple, Dict
from nltk.translate.bleu_score import sentence_bleu, SmoothingFunction
from nltk.tokenize import word_tokenize

def evaluate_translation(prediction: str, reference: str) -> Tuple[float, Dict[str, object]]:
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
