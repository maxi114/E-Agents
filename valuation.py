from property import Property
from pydantic import BaseModel, validator
from typing import Optional


class Valuation(BaseModel):
    estimatedValue: Optional[float] = 0.0
    confidenceScore: Optional[float] = 0.0
    property: Property

    def calculateValuation(self) -> float:
        pass

    def to_dict(self) -> dict:
        return {
            "estimatedValue": self.estimatedValue,
            "confidenceScore": self.confidenceScore,
            "property": self.property.to_dict(),
        }
