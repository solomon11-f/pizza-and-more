import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Pizza, TeamMember, Settings } from '@/lib/supabase'

export function usePizzas(category?: string) {
  const [pizzas, setPizzas] = useState<Pizza[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPizzas() {
      try {
        let query = supabase.from('pizzas').select('*')
        if (category) {
          query = query.eq('category', category)
        }
        const { data, error } = await query.order('id')
        
        if (error) throw error
        setPizzas(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [category])

  return { pizzas, loading, error }
}

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMembers() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('id')
        
        if (error) throw error
        setMembers(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  return { members, loading, error }
}

export function useSetting(key: string) {
  const [value, setValue] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSetting() {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', key)
          .single()
        
        if (error) throw error
        setValue(data?.value || null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSetting()
  }, [key])

  return { value, loading, error }
} 