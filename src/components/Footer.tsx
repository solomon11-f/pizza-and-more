import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-2" />
                <span>+381 11 123 4567</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="w-5 h-5 mr-2" />
                <a href="mailto:info@pizzaandmore.rs">info@pizzaandmore.rs</a>
              </div>
              <div className="flex items-center">
                <MdLocationOn className="w-5 h-5 mr-2" />
                <span>Kralja Petra 1, Beograd</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Brzi linkovi</h3>
            <div className="space-y-2">
              <div><Link href="/menu" className="hover:text-primary transition">Meni</Link></div>
              <div><Link href="/about" className="hover:text-primary transition">O nama</Link></div>
              <div><Link href="/contact" className="hover:text-primary transition">Kontakt</Link></div>
              <div><Link href="/order" className="hover:text-primary transition">Poruči online</Link></div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Radno vreme</h3>
            <div className="space-y-2">
              <div>Ponedeljak - Petak: 10:00 - 23:00</div>
              <div>Subota: 11:00 - 23:00</div>
              <div>Nedelja: 12:00 - 22:00</div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-primary transition">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Pizza & More. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 