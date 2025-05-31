'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaMotorcycle } from 'react-icons/fa'
import { SiGlovo } from 'react-icons/si'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 rounded-full bg-primary overflow-hidden">
              <Image
                src="/logo.svg"
                alt="Pizza & More Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="ml-3 text-xl font-display font-bold text-secondary">
              Pizza & More
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary hover:text-primary transition">
              Početna
            </Link>
            <Link href="/menu" className="text-secondary hover:text-primary transition">
              Meni
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition">
              O nama
            </Link>
            <Link href="/contact" className="text-secondary hover:text-primary transition">
              Kontakt
            </Link>
          </div>

          {/* Delivery Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://wolt.com" 
              target="_blank"
              className="text-secondary hover:text-primary transition"
            >
              <FaMotorcycle className="w-6 h-6" />
            </Link>
            <Link 
              href="https://glovo.com" 
              target="_blank"
              className="text-secondary hover:text-primary transition"
            >
              <SiGlovo className="w-6 h-6" />
            </Link>
            <Link 
              href="/order" 
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
            >
              Poruči odmah
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar 