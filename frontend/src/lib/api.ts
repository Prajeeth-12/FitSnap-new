export async function predictFit(baseUrl: string, data: { chest?: number; waist?: number; hips?: number }){
  const res = await fetch(`${baseUrl}/predict-fit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to predict fit')
  return res.json() as Promise<{ recommended: string; rules: string }>
}
