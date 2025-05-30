from typing import Tuple, Dict, Set

def parse_tags(tag_string: str) -> Set[str]:
    return set(tag.strip().lower() for tag in tag_string.split(',') if tag.strip())

def compute_tag_overlap(predicted_tags: Set[str], reference_tags: Set[str]) -> Tuple[float, Dict[str, object]]:
    matched = predicted_tags & reference_tags
    score = len(matched) / max(len(reference_tags), 1)
    return score, {
        "matched_tags": sorted(matched),
        "total_predicted": len(predicted_tags),
        "total_reference": len(reference_tags),
        "match_ratio": round(score, 3)
    }

def evaluate_image_task(prediction: str, reference: str) -> Tuple[float, Dict[str, object]]:
    predicted_tags = parse_tags(prediction)
    reference_tags = parse_tags(reference)
    return compute_tag_overlap(predicted_tags, reference_tags)
