from typing import Union

from fastapi import FastAPI

app = FastAPI()
api_prefix = "/api/v1"


@app.get(api_prefix + "/")
def read_root():
    return {"Hello": "World"}
