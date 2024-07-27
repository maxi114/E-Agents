from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import ValidationError
from valuation import Valuation
from market import Market
from property import Property

app = FastAPI()
api_prefix = "/api/v1"

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get(api_prefix + "/")
def home():
    """Home route for the API.

    Returns:
        json: shows that the API is working.
    """
    return {"Hello": "World",
            "users":{
                'max',
                "icarus",
                "Ransford",
                "solomon"
            }}

@app.post(api_prefix + "/get_property_value/")
async def get_property_value(valuation: Valuation):
    """Get the value of a property.

    Args:
        valuation (Valuation): The property to be valued.

    Returns:
        json: The value of the property.
    """
    return valuation.to_dict()


@app.post(api_prefix + "/get_comparable_properties/")
async def get_comparable_properties(property: Property):
    """Get the comparable properties for a property.

    Args:
        property (Property): The property to get comparable properties for.

    Returns:
        json: The comparable properties for the property.
    """

    return property.getComparableProperties()


@app.post(api_prefix + "/get_market/")
async def get_market(market: Market):
    """Get the market data in a certain state.

    Args:
        market (Market): The market data for a certain state.

    Returns:
        json: The market data for the a certain state.
    """

    return market.to_dict()


@app.post(api_prefix + "/get_property_roi/")
async def get_property_roi(valuation: Valuation):
    """Get the ROI of a property.

    Args:
        property (Property): The property to get the ROI for.

    Returns:
        json: The ROI of the property.
    """

    return valuation.calculateROI()
