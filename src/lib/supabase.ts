import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    },
    global: {
      headers: {
        'X-Client-Info': 'pizza-and-more@1.0.0'
      }
    }
  }
)

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