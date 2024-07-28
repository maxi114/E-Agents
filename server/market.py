from pydantic import BaseModel
from typing import List, Optional
from valuation import Valuation


class Market(BaseModel):
    minPrice: Optional[float] = 0.0
    maxPrice: Optional[float] = 0.0
    avgPrice: Optional[float] = 0.0
    valuations: Optional[List["Valuation"]] = []
    state: str

    def get_min_price(self) -> float:
        if not self.valuations:
            return 0.0

        min_price = min(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        self.minPrice = min_price

        return min_price

    def get_max_price(self) -> float:
        if not self.valuations:
            return 0.0

        max_price = max(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        self.maxPrice = max_price

        return max_price

    def get_avg_price(self) -> float:
        if not self.valuations:
            return 0.0

        total = sum(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        count = sum(1 for val in self.valuations if val.estimatedValue is not None)
        avg_price = total / count if count > 0 else 0.0
        self.avgPrice = avg_price

        return avg_price
