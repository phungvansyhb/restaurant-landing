'use client'

import { useState, useEffect } from 'react'
import { createClient } from '../../lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  const sections = [
    { name: 'Restaurant Info', path: '/admin/dashboard/restaurant' },
    { name: 'Combos', path: '/admin/dashboard/combos' },
    { name: 'Hotpots', path: '/admin/dashboard/hotpots' },
    { name: 'Dishes', path: '/admin/dashboard/dishes' },
    { name: 'Drinks', path: '/admin/dashboard/drinks' },
    { name: 'Posts', path: '/admin/dashboard/posts' },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Content Management</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.name}
            href={section.path}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Manage {section.name}
            </h5>
            <p className="font-normal text-gray-700">
              Add, edit, or remove {section.name.toLowerCase()} items.
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
