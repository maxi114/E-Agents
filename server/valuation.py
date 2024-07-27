from property import Property
from pydantic import BaseModel, validator
from typing import Optional


class Valuation(BaseModel):
	estimatedValue: Optional[float] = 0.0
	confidenceScore: Optional[float] = 0.0
	property: Property
	
	purchasePrice: Optional[float] = 0.0
	annualExpenses: Optional[float] = 0.0
	annualRentalIncome: Optional[float] = 0.0

	def calculateValuation(self) -> float:
		pass

	def calculateROI(self) -> float:
		netProfit = self.annualRentalIncome - self.annualExpenses
		roi = (netProfit / self.purchasePrice) * 100 if self.purchasePrice > 0 else 0.0
		return roi

	def to_dict(self) -> dict:
		return {
			"estimatedValue": self.estimatedValue,
			"confidenceScore": self.confidenceScore,
			"property": self.property.to_dict(),
		}
