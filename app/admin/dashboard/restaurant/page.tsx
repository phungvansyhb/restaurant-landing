'use client'

import { useState, useEffect } from 'react'
import { createClient } from '../../../lib/supabase/client'
import Link from 'next/link'

export default function RestaurantAdmin() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data, error } = await supabase.from('restaurant').select('*').single()
    if (data) setData(data)
    setLoading(false)
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const { error } = await supabase.from('restaurant').upsert(data)
    if (error) alert(error.message)
    else alert('Saved successfully!')
    setSaving(false)
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Restaurant Info</h2>
          <Link href="/admin/dashboard" className="text-indigo-600 hover:text-indigo-800">&larr; Back to Dashboard</Link>
      </div>
      <form onSubmit={handleSave} className="space-y-4">
        {['name', 'address', 'phone1', 'phone2', 'facebook', 'email', 'hours', 'capacity'].map(field => (
            <div key={field}>
                <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <input
                    type="text"
                    value={data?.[field] || ''}
                    onChange={(e) => setData({ ...data, [field]: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                />
            </div>
        ))}
        <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">Slogan</label>
            <textarea
                value={data?.slogan || ''}
                onChange={(e) => setData({ ...data, slogan: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}
