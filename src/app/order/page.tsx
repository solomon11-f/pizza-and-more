import Link from 'next/link'
import { FaMotorcycle, FaPhone } from 'react-icons/fa'
import { SiGlovo } from 'react-icons/si'

const OrderPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Order Header */}
      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Poručite online
          </h1>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Izaberite način dostave koji vam najviše odgovara. 
            Dostavljamo za 30 minuta ili pizza je besplatna!
          </p>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wolt */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-[#00C1B2] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMotorcycle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Wolt dostava</h2>
              <p className="text-gray-600 text-center mb-6">
                Brza i pouzdana dostava preko Wolt servisa. 
                Pratite vašu porudžbinu u realnom vremenu.
              </p>
              <Link
                href="https://wolt.com"
                target="_blank"
                className="block w-full bg-[#00C1B2] text-white text-center py-3 rounded-full hover:bg-[#00A99E] transition"
              >
                Poruči preko Wolt-a
              </Link>
            </div>
          </div>

          {/* Glovo */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-[#FFC244] rounded-full flex items-center justify-center mx-auto mb-6">
                <SiGlovo className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Glovo dostava</h2>
              <p className="text-gray-600 text-center mb-6">
                Pouzdana dostava preko Glovo servisa. 
                Posebne ponude i popusti za Glovo Prime korisnike.
              </p>
              <Link
                href="https://glovo.com"
                target="_blank"
                className="block w-full bg-[#FFC244] text-white text-center py-3 rounded-full hover:bg-[#FFB620] transition"
              >
                Poruči preko Glovo-a
              </Link>
            </div>
          </div>

          {/* Phone Order */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Telefonom</h2>
              <p className="text-gray-600 text-center mb-6">
                Pozovite nas direktno i poručite vašu omiljenu pizzu. 
                Dostupni smo 7 dana u nedelji.
              </p>
              <a
                href="tel:+381111234567"
                className="block w-full bg-primary text-white text-center py-3 rounded-full hover:bg-primary-dark transition"
              >
                Pozovi nas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-secondary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Informacije o dostavi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Zona dostave</h3>
              <p>Dostavljamo na teritoriji grada Beograda. Za detaljnije informacije o zoni dostave, pozovite nas.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Vreme dostave</h3>
              <p>Prosečno vreme dostave je 30 minuta. U slučaju kašnjenja preko 30 minuta, pizza je besplatna!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage 