/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://dlyvbzyvqzuhfhwgcsjm.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseXZienl2cXp1aGZod2djc2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MjQ4MDAsImV4cCI6MjAyNTUwMDgwMH0.Ry8bvqQIufVO1N8MnHy8IqO_nBXEZJFJ8YBXQiVD_Ow'
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['dlyvbzyvqzuhfhwgcsjm.supabase.co']
  }
}

module.exports = nextConfig 