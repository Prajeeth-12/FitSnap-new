API contract (dev notes)

- POST /predict-fit
  body: { chest?: number, waist?: number, hips?: number }
  resp: { recommended: 'S'|'M'|'L'|'XL', rules: string }

- GET /clothing
- POST /clothing
- DELETE /clothing/{id}
