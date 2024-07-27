from pydantic import BaseModel


class Property(BaseModel):
    address: str
    propertyType: str
    size: float
    bedrooms: int
    bathrooms: int

    def getComparableProperties(self) -> list["Property"]:
        pass

    def to_dict(self) -> dict:
        return {
            "address": self.address,
            "propertyType": self.propertyType,
            "size": self.size,
            "bedrooms": self.bedrooms,
            "bathrooms": self.bathrooms,
        }
