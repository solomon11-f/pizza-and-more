'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState<'traditional' | 'special' | 'vegetarian'>('traditional')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    try {
      setUploading(true)

      // 1. Upload image to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const { error: uploadError } = await supabase.storage
        .from('pizza-images')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // 2. Get public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('pizza-images')
        .getPublicUrl(fileName)

      // 3. Insert pizza data into the database
      const { error: insertError } = await supabase
        .from('pizzas')
        .insert({
          name,
          description,
          price: parseFloat(price),
          image_url: publicUrl,
          category
        })

      if (insertError) throw insertError

      // Reset form
      setFile(null)
      setName('')
      setDescription('')
      setPrice('')
      setCategory('traditional')

      alert('Pizza successfully added!')
    } catch (error) {
      alert('Error uploading pizza')
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Add New Pizza</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (RSD)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as 'traditional' | 'special' | 'vegetarian')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              >
                <option value="traditional">Traditional</option>
                <option value="special">Special</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Add Pizza'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 