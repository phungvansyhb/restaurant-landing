'use client'

import { useState, useEffect } from 'react'
import { createClient } from '../../lib/supabase/client'
import Link from 'next/link'
import ImageUpload from './ImageUpload'

export default function GenericCRUD({ table, title }: { table: string, title: string }) {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingItem, setEditingItem] = useState<any | null>(null)
  const supabase = createClient()

  useEffect(() => {
    fetchItems()
  }, [table])

  async function fetchItems() {
    setLoading(true)
    const { data, error } = await supabase.from(table).select('*').order('id')
    if (data) setItems(data)
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return
    await supabase.from(table).delete().eq('id', id)
    fetchItems()
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()

    // Ensure id is present for new items
    const payload = { ...editingItem }
    if (!payload.id && table !== 'posts') {
        payload.id = `${table}_${Date.now()}` // fallback for id string if required
    }

    const { error } = await supabase.from(table).upsert(payload)
    if (error) alert(error.message)
    else {
      setEditingItem(null)
      fetchItems()
    }
  }

  if (loading) return <div>Loading...</div>

  if (editingItem !== null) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">{editingItem.id ? 'Edit' : 'New'} Item</h3>
        <form onSubmit={handleSave} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Name / Title</label>
                <input
                    type="text"
                    required
                    value={editingItem.name || editingItem.title || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, [table === 'posts' ? 'title' : 'name']: e.target.value })}
                    className="w-full border p-2 rounded"
                />
            </div>

            {(table === 'dishes' || table === 'hotpots' || table === 'combos' || table === 'drinks') && (
                <div>
                    <label className="block text-sm font-medium">Price</label>
                    <input
                        type="number"
                        value={editingItem.price || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, price: parseInt(e.target.value) })}
                        className="w-full border p-2 rounded"
                    />
                </div>
            )}

            <div>
                <label className="block text-sm font-medium">Description / Content</label>
                <textarea
                    value={editingItem.description || editingItem.content || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, [table === 'posts' ? 'content' : 'description']: e.target.value })}
                    className="w-full border p-2 rounded"
                    rows={4}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Image</label>
                <ImageUpload
                    currentUrl={editingItem.image}
                    onUpload={(url) => setEditingItem({ ...editingItem, image: url })}
                />
            </div>

            <div className="flex gap-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={() => setEditingItem(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="space-x-4">
            <button onClick={() => setEditingItem({})} className="bg-green-600 text-white px-4 py-2 rounded">Add New</button>
            <Link href="/admin/dashboard" className="text-indigo-600 hover:text-indigo-800">Back to Dashboard</Link>
          </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {item.image && <img src={item.image} alt="" className="h-10 w-10 rounded object-cover" />}
                        </td>
                        <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{item.name || item.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => setEditingItem(item)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                            <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}
