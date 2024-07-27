from typing import Union

from fastapi import FastAPI

app = FastAPI()
api_prefix = "/api/v1"


@app.get(api_prefix + "/")
def home():
    """Home route for the API.

    Returns:
        json: shows that the API is working.
    """
    return {"Hello": "World"}
