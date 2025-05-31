'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  name: yup.string().required('Ime je obavezno').min(2, 'Ime mora imati najmanje 2 karaktera'),
  email: yup.string().required('Email je obavezan').email('Unesite validnu email adresu'),
  phone: yup.string().required('Telefon je obavezan').matches(/^[0-9+\s-]+$/, 'Unesite validan broj telefona'),
  message: yup.string().required('Poruka je obavezna').min(10, 'Poruka mora imati najmanje 10 karaktera'),
}).required()

type FormData = yup.InferType<typeof schema>

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data)
      alert('Poruka je uspešno poslata!')
      reset()
    } catch (error) {
      alert('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Contact Header */}
      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Tu smo za vas! Kontaktirajte nas za sve informacije, 
            sugestije ili porudžbine.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display font-bold text-secondary">
              Informacije
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Telefon</h3>
                  <p className="text-gray-600">+381 11 123 4567</p>
                  <p className="text-gray-600">+381 64 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Email</h3>
                  <p className="text-gray-600">info@pizzaandmore.rs</p>
                  <p className="text-gray-600">porudzbine@pizzaandmore.rs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Adresa</h3>
                  <p className="text-gray-600">Kralja Petra 1</p>
                  <p className="text-gray-600">11000 Beograd, Srbija</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">Radno vreme</h3>
                  <p className="text-gray-600">Ponedeljak - Petak: 10:00 - 23:00</p>
                  <p className="text-gray-600">Subota: 11:00 - 23:00</p>
                  <p className="text-gray-600">Nedelja: 12:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-8">
              Pošaljite nam poruku
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-full hover:bg-primary-dark transition duration-300"
              >
                Pošalji poruku
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12 h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9359673656447!2d20.4481663!3d44.8186208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab25c703261%3A0x7f3e07f1e8c3c7a9!2sKralja%20Petra%2C%20Beograd!5e0!3m2!1sen!2srs!4v1635959562834!5m2!1sen!2srs"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactPage 