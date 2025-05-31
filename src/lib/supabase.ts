import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Pizza = {
  id: number
  name: string
  description: string
  price: number
  image_url: string
  category: 'traditional' | 'special' | 'vegetarian'
  created_at: string
}

export type TeamMember = {
  id: number
  name: string
  role: string
  description: string
  image_url: string
  created_at: string
}

export type Settings = {
  id: number
  key: string
  value: string
  created_at: string
} 