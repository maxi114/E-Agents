from property import Property


class Valuation:
    def __init__(
        self,
        estimatedValue: float,
        comparableProperties: list["Property"],
        confidenceScore: float,
    ):
        self.estimatedValue = estimatedValue
        self.comparableProperties = comparableProperties
        self.confidenceScore = confidenceScore

    def calculateValuation(self) -> float:
        pass
