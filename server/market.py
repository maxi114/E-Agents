from pydantic import BaseModel
from typing import List, Optional
from valuation import Valuation, Generate_Valuation


class Market(BaseModel):
    minPrice: Optional[float] = 0.0
    maxPrice: Optional[float] = 0.0
    avgPrice: Optional[float] = 0.0
    valuations: Optional[List["Valuation"]] = []
    state: str
    city: str
    propertyType: str

    def set_min_price(self):
        if not self.valuations:
            return 0.0

        min_price = min(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        self.minPrice = min_price

    def set_max_price(self):
        if not self.valuations:
            return 0.0

        max_price = max(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        self.maxPrice = max_price

    def set_avg_price(self):
        if not self.valuations:
            return 0.0

        total = sum(
            val.estimatedValue
            for val in self.valuations
            if val.estimatedValue is not None
        )
        count = sum(1 for val in self.valuations if val.estimatedValue is not None)
        avg_price = total / count if count > 0 else 0.0
        self.avgPrice = round(avg_price, 2)

    def set_valuations(self, max_results: int = 10):
        self.valuations = [
            Generate_Valuation(
                propertyType=self.propertyType, state=self.state, city=self.city
            )
            for _ in range(max_results)
        ]
