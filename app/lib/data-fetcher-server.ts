import { createClient as createServerClient } from './supabase/server'

export async function fetchRestaurantDataServer() {
  const supabase = await createServerClient()
  const { data } = await supabase.from('restaurant').select('*').single()
  return data || {}
}

export async function fetchFullMenuServer() {
  const supabase = await createServerClient()
  const [combos, hotpots, dishes, drinks] = await Promise.all([
    supabase.from('combos').select('*').order('id'),
    supabase.from('hotpots').select('*').order('id'),
    supabase.from('dishes').select('*').order('id'),
    supabase.from('drinks').select('*').order('id')
  ])

  return {
    combos: combos.data || [],
    hotpots: hotpots.data || [],
    dishes: dishes.data || [],
    drinks: drinks.data || []
  }
}
