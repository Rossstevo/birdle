from fastapi import FastAPI
from pydantic import BaseModel
from typing import List



app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    sequence: List[str]
    image: str

# Your person array goes here
person = [
  {
    "id": 0,
    "name": "Miley Cyrus",
    "sequence": ["square7", "square6", "square23", "square14", "square15", "square6"],
    "image": "Miley.png",
  },
  {
    "id": 1,
    "name": "Alex Turner",
    "sequence": ["square7", "square6", "square10", "square16", "square7", "square7"],
    "image": "alex.png",
  },
  {
    "id": 2,
    "name": "Miley Cyrus",
    "sequence": ["square7", "square6", "square23", "square14", "square15", "square6"],
    "image": "Miley.png",
  },
  {
    "id": 3,
    "name": "Tom Jones",
    "sequence": ["square7", "square7", "square11", "square15", "square21", "square7"],
    "image": "Tom.png",
  },
  {
    "id": 4,
    "name": "Art Garfunkel",
    "sequence": ["square6", "square7", "square15", "square7", "square15", "square7"],
    "image": "art.png",
  }
]


@app.get("/people", response_model=List[dict])
async def get_people():
    return person