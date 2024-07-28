from pydantic import BaseModel
from typing import List, Optional
import random
from faker import Faker

faker = Faker()


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


def Generate_Property(
    propertyType: str, city: str = None, state: str = None, street: str = None
) -> "Property":
    return Property(
        address=faker.street_address() if street is None else street,
        city=faker.city() if city is None else city,
        country="US",
        locLat=faker.latitude(),
        locLong=faker.longitude(),
        state=faker.state_abbr() if state is None else state,
        propertyType=propertyType,
        size=round(random.uniform(500, 5000), 2),
        bedrooms=random.randint(1, 5),
        bathrooms=random.randint(1, 5),
    )
