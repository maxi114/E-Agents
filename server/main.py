from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import ValidationError
from valuation import Valuation

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
