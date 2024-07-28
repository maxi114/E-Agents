from pydantic import BaseModel
from typing import List, Optional
import random


class Property(BaseModel):
    address: str
    city: str
    country: str
    locLat: float
    locLong: float
    state: str
    propertyType: str
    size: Optional[float] = 0.0
    bedrooms: Optional[int] = 1
    bathrooms: Optional[int] = 1

    purchasePrice: Optional[float] = round(random.uniform(50000, 800000), 2)
