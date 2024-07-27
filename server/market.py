from pydantic import BaseModel
from typing import List, Optional
from valuation import Valuation


class Market(BaseModel):
    minPrice: Optional[float] = 0.0
    maxPrice: Optional[float] = 0.0
    avgPrice: Optional[float] = 0.0
    valuations: Optional[List["Valuation"]] = []
    state: str

    def getMinPrice(self) -> float:
        pass

    def getMaxPrice(self) -> float:
        pass

    def getAvgPrice(self) -> float:
        pass

    def to_dict(self) -> dict:
        return {
            "minPrice": self.minPrice,
            "maxPrice": self.maxPrice,
            "avgPrice": self.avgPrice,
            "state": self.state,
            "zipCode": self.zipCode,
        }
