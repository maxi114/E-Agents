from property import Property
from pydantic import BaseModel


class Valuation(BaseModel):
    estimatedValue: float | None
    confidenceScore: float | None
    property: Property

    def calculateValuation(self) -> float:
        pass

    def to_dict(self) -> dict:
        return {
            "estimatedValue": self.estimatedValue,
            "confidenceScore": self.confidenceScore,
            "property": self.property.to_dict(),
        }
