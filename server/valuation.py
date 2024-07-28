from property import Property
from pydantic import BaseModel
from typing import Optional, List
import random


class Valuation(BaseModel):
    property: Property

    estimatedValue: Optional[float] = 0.0
    confidenceScore: Optional[float] = 0.0
    comparable_properties: Optional[List["Property"]] = []
    estimatedValue: Optional[float] = round(random.uniform(100000, 800000), 2)
    confidenceScore: Optional[float] = round(random.uniform(70, 100), 2)
    annualExpenses: Optional[float] = round(random.uniform(5000, 20000), 2)

    def get_annual_rental_income(self) -> float:
        months_in_30_years = 30 * 12
        return self.estimatedValue / months_in_30_years

    def calculate_roi(self) -> float:
        netProfit = self.get_annual_rental_income() - self.annualExpenses
        roi = (netProfit / self.property.purchasePrice) * 100
        return roi

    def calculate_price_per_square_foot(self) -> float:
        return (
            round(self.estimatedValue / self.property.size, 2)
            if self.property.size
            else 0.0
        )

    def calculate_gross_rent_multiplier(self) -> float:
        annual_rent = self.get_annual_rental_income() * 12
        grm = self.property.purchasePrice / annual_rent if annual_rent else 0.0
        return round(grm, 2)

    def calculate_cap_rate(self) -> float:
        net_operating_income = self.get_annual_rental_income() - self.annualExpenses
        cap_rate = (net_operating_income / self.estimatedValue) * 100
        return round(cap_rate, 2)
