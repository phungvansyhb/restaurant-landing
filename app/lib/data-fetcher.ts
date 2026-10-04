import { createClient } from './supabase/client'

// Keep the browser client for client components
export const browserSupabase = createClient()

export async function fetchRestaurantData() {
  const { data } = await browserSupabase.from('restaurant').select('*').single()
  return data || {}
}

export async function fetchFullMenu() {
  const [combos, hotpots, dishes, drinks] = await Promise.all([
    browserSupabase.from('combos').select('*').order('id'),
    browserSupabase.from('hotpots').select('*').order('id'),
    browserSupabase.from('dishes').select('*').order('id'),
    browserSupabase.from('drinks').select('*').order('id')
  ])

  return {
    combos: combos.data || [],
    hotpots: hotpots.data || [],
    dishes: dishes.data || [],
    drinks: drinks.data || []
  }
}
