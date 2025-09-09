"use client"
import Navbar from '@/components/Navbar'
import { useState } from 'react'

interface Garment { id: string; name: string; chest: number; waist: number; hips: number; }

export default function RetailerPage(){
  const [items, setItems] = useState<Garment[]>([])
  const [form, setForm] = useState({ name:'', chest:'', waist:'', hips:'' })

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    setItems(prev => [...prev, { id: crypto.randomUUID(), name: form.name, chest: Number(form.chest), waist: Number(form.waist), hips: Number(form.hips) }])
    setForm({ name:'', chest:'', waist:'', hips:'' })
  }

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Upload Clothing Measurements</h2>
          <form onSubmit={add} className="grid grid-cols-2 gap-3">
            <input className="col-span-2 bg-transparent border border-white/20 rounded-lg px-3 py-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            {['chest','waist','hips'].map(k => (
              <input key={k} className="bg-transparent border border-white/20 rounded-lg px-3 py-2" placeholder={`${k} (cm)`} value={(form as any)[k]} onChange={e=>setForm({...form,[k]:e.target.value})} />
            ))}
            <button className="btn-primary col-span-2">Save</button>
          </form>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Catalog</h2>
          <ul className="space-y-2">
            {items.map(i => (
              <li key={i.id} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                <span>{i.name}</span>
                <span className="text-white/60 text-sm">C {i.chest} · W {i.waist} · H {i.hips}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
