"use client"
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { predictFit } from '@/lib/api'

export default function TryDemoPage(){
  const [measurements, setMeasurements] = useState({ chest: '', waist: '', hips: '' })
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(null)
    try {
      const base = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        chest: measurements.chest ? Number(measurements.chest) : undefined,
        waist: measurements.waist ? Number(measurements.waist) : undefined,
        hips: measurements.hips ? Number(measurements.hips) : undefined,
      }
      const res = await predictFit(base, payload)
      setResult(`Recommended size: ${res.recommended} (${res.rules})`)
    } catch (err:any) {
      setError(err.message || 'Failed to predict fit')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto card p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Try Your Fit</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-3 gap-3">
          {['chest','waist','hips'].map(key => (
            <input key={key} placeholder={`${key} (cm)`} value={(measurements as any)[key]} onChange={e=>setMeasurements(prev=>({...prev,[key]:e.target.value}))}
              className="col-span-1 bg-transparent border border-white/20 rounded-lg px-3 py-2 outline-none" />
          ))}
          <button disabled={loading} className="btn-primary col-span-3 mt-2" type="submit">{loading ? 'Predicting…' : 'Predict Fit'}</button>
        </form>
        {error && <div className="mt-3 text-red-400">{error}</div>}
        {result && <div className="mt-4 text-teal font-semibold">{result}</div>}
      </div>
    </>
  )
}
