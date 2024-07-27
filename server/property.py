from pydantic import BaseModel
from typing import List, Optional


class Property(BaseModel):
    address: str
    propertyType: str
    size: Optional[float] = 0.0
    bedrooms: Optional[int] = 1
    bathrooms: Optional[int] = 1
    comparable_properties: Optional[List["Property"]] = []

    def getComparableProperties(self) -> List["Property"]:
        pass

    def to_dict(self) -> dict:
        return {
            "address": self.address,
            "propertyType": self.propertyType,
            "size": self.size,
            "bedrooms": self.bedrooms,
            "bathrooms": self.bathrooms,
        }
