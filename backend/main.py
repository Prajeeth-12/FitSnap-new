from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid

app = FastAPI(title="FitSnap Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Measurements(BaseModel):
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None


class PredictResponse(BaseModel):
    recommended: str
    rules: str


class ClothingItem(BaseModel):
    id: str
    name: str
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None


class ClothingCreate(BaseModel):
    name: str
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None


# In-memory store for demo
CLOTHING: List[ClothingItem] = []


@app.get("/")
def root():
    return {"ok": True, "service": "fitsnap-backend"}


@app.post("/predict-fit", response_model=PredictResponse)
async def predict_fit(measurements: Measurements):
    """
    Dummy rules based on chest measurement:
      < 90 => S, < 95 => M, < 102 => L, else XL
    """
    chest = measurements.chest or 0
    if chest < 90:
        size = "S"; rule = "chest < 90 ⇒ S"
    elif chest < 95:
        size = "M"; rule = "90 ≤ chest < 95 ⇒ M"
    elif chest < 102:
        size = "L"; rule = "95 ≤ chest < 102 ⇒ L"
    else:
        size = "XL"; rule = "chest ≥ 102 ⇒ XL"
    return PredictResponse(recommended=size, rules=rule)


@app.get("/clothing", response_model=List[ClothingItem])
def list_clothing():
    return CLOTHING


@app.post("/clothing", response_model=ClothingItem)
def add_clothing(payload: ClothingCreate):
    item = ClothingItem(id=str(uuid.uuid4()), **payload.dict())
    CLOTHING.append(item)
    return item


@app.delete("/clothing/{item_id}")
def delete_clothing(item_id: str):
    global CLOTHING
    before = len(CLOTHING)
    CLOTHING = [i for i in CLOTHING if i.id != item_id]
    return {"deleted": before - len(CLOTHING)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="FitSnap Backend", version="0.1.0")

# CORS for local dev
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictInput(BaseModel):
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None

class PredictOutput(BaseModel):
    recommended: str
    rules: str

class Garment(BaseModel):
    id: str
    name: str
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None

CLOTHING: List[Garment] = [
    Garment(id="tee-1", name="NeoFlex Tee M", chest=98, waist=82, hips=98),
    Garment(id="hoodie-1", name="Brutalist Hoodie L", chest=108, waist=90, hips=108),
]

@app.get("/")
def root():
    return {"ok": True, "service": "fitsnap-backend"}

@app.post("/predict-fit", response_model=PredictOutput)
def predict_fit(body: PredictInput):
    chest = body.chest or 95
    if chest < 90:
        rec = "S"; rule = "chest < 90 → S"
    elif chest < 95:
        rec = "M"; rule = "90 ≤ chest < 95 → M"
    elif chest < 105:
        rec = "L"; rule = "95 ≤ chest < 105 → L"
    else:
        rec = "XL"; rule = "chest ≥ 105 → XL"
    return PredictOutput(recommended=rec, rules=rule)

@app.get("/clothing", response_model=List[Garment])
def list_clothing():
    return CLOTHING

class GarmentCreate(BaseModel):
    name: str
    chest: Optional[float] = None
    waist: Optional[float] = None
    hips: Optional[float] = None

@app.post("/clothing", response_model=Garment)
def create_clothing(item: GarmentCreate):
    new = Garment(
        id=f"g-{len(CLOTHING)+1}",
        name=item.name,
        chest=item.chest,
        waist=item.waist,
        hips=item.hips,
    )
    CLOTHING.append(new)
    return new

@app.delete("/clothing/{gid}")
def delete_clothing(gid: str):
    idx = next((i for i, g in enumerate(CLOTHING) if g.id == gid), None)
    if idx is None:
        raise HTTPException(status_code=404, detail="Not found")
    CLOTHING.pop(idx)
    return {"deleted": gid}
