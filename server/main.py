from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from valuation import Valuation
from property import Property, Generate_Property
from market import Market
from pydantic import BaseModel, ValidationError
from sqlalchemy.orm import Session

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
        json: Shows that the API is working.
    """
    return {"Hello": "World", "users": {"max", "icarus", "ransford", "solomon"}}


@app.post(api_prefix + "/property-value/")
async def get_property_value(valuation: Valuation):
    """Get the value of a property.

    Args:
        valuation (Valuation): The property to be valued.

    Returns:
        json: The value of the property.
    """

    return {"data": valuation}


@app.post(api_prefix + "/property-rental-income/")
async def get_annual_rental_income(valuation: Valuation):
    """Get the annual rental income of a property.

    Args:
        valuation (Valuation): The property to get the annual rental income for.

    Returns:
        json: The annual rental income of the property.
    """
    return {"data": valuation.get_annual_rental_income()}


@app.post(api_prefix + "/property-roi/")
async def calculate_roi(valuation: Valuation):
    """Calculate the return on investment of a property.

    Args:
        valuation (Valuation): The property to calculate the ROI for.

    Returns:
        json: The return on investment of the property.
    """
    return {"data": valuation.calculate_roi()}


@app.post(api_prefix + "/property-square-foot-price/")
async def calculate_price_per_square_foot(valuation: Valuation):
    """Calculate the price per square foot of a property.

    Args:
        valuation (Valuation): The property to calculate the price per square foot for.

    Returns:
        json: The price per square foot of the property.
    """
    return {"data": valuation.calculate_price_per_square_foot()}


@app.post(api_prefix + "/property-rent-multiplier/")
async def calculate_gross_rent_multiplier(valuation: Valuation):
    """Calculate the gross rent multiplier of a property.

    Args:
        valuation (Valuation): The property to calculate the gross rent multiplier for.

    Returns:
        json: The gross rent multiplier of the property.
    """
    return {"data": valuation.calculate_gross_rent_multiplier()}


@app.post(api_prefix + "/property-cap-rate/")
async def calculate_cap_rate(valuation: Valuation):
    """Calculate the capitalization rate of a property.

    Args:
        valuation (Valuation): The property to calculate the cap rate for.

    Returns:
        json: The capitalization rate of the property.
    """
    return {"data": valuation.calculate_cap_rate()}


@app.post(api_prefix + "/property-comparables/")
async def get_comparable_properties(valuation: Valuation, max_results: int = 5):
    """Get comparable properties for a property.

    Args:
        valuation (Valuation): The property to get comparable properties for.
        max_results (int, optional): The maximum number of comparable properties to get. Defaults to 5.

    Returns:
        json: The comparable properties for the property.
    """
    valuation.get_comparable_properties(
        property_type=valuation.property.propertyType, max_results=max_results
    )
    return {"data": valuation}


@app.post(api_prefix + "/market/")
async def get_market(market: Market):
    """Get the market data in a certain state.

    Args:
        market (Market): The market data for a certain state.

    Returns:
        json: The market data for the a certain state.
    """

    market.set_valuations()
    market.set_min_price()
    market.set_max_price()
    market.set_avg_price()
    return {"data": market}
