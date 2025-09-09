# FitSnap Backend (FastAPI)

## Quickstart

- Create a virtual environment and install deps:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

- Test:
  - GET http://localhost:8000/
  - POST http://localhost:8000/predict-fit {"chest": 92}
  - GET http://localhost:8000/clothing
