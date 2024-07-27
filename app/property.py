from valuation import Valuation


class Property:
    def __init__(
        self,
        address: str,
        propertyType: str,
        size: float,
        bedrooms: int,
        bathrooms: int,
    ):
        self.address = address
        self.propertyType = propertyType
        self.size = size
        self.bedrooms = bedrooms
        self.bathrooms = bathrooms

    def getComparableProperties(self) -> list["Property"]:
        pass

    def getValuation(self) -> Valuation:
        pass
