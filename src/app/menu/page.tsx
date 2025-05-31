import Image from 'next/image'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Menu Header */}
      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Naš Meni
          </h1>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Izaberite iz našeg bogatog menija tradicionalnih italijanskih pizza, 
            pravljenih sa ljubavlju i najkvalitetnijim sastojcima.
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <div key={category.name} className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-secondary border-b-2 border-primary pb-2">
                {category.name}
              </h2>
              {category.items.map((item) => (
                <div key={item.name} className="flex space-x-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-secondary">{item.name}</h3>
                      <span className="text-lg font-bold text-primary">{item.price} RSD</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <Link
                      href="/order"
                      className="inline-block mt-2 text-primary hover:text-primary-dark transition"
                    >
                      Poruči →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Spremni da poručite?
          </h2>
          <p className="text-lg mb-6">
            Poručite online ili nas pozovite na +381 11 123 4567
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/order"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg transition"
            >
              Poruči online
            </Link>
            <a
              href="tel:+381111234567"
              className="border-2 border-white hover:bg-white hover:text-secondary px-8 py-3 rounded-full text-lg transition"
            >
              Pozovi nas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const menuItems = [
  {
    name: 'Tradicionalne Pizza',
    items: [
      {
        name: 'Margherita',
        description: 'Paradajz sos, mocarela, bosiljak, maslinovo ulje',
        price: '990',
        image: '/pizzas/margherita.svg',
      },
      {
        name: 'Marinara',
        description: 'Paradajz sos, beli luk, origano, maslinovo ulje',
        price: '890',
        image: '/pizzas/margherita.svg',
      },
      {
        name: 'Napolitana',
        description: 'Paradajz sos, mocarela, inćuni, kapari, masline',
        price: '1290',
        image: '/pizzas/capricciosa.svg',
      },
    ],
  },
  {
    name: 'Specijalne Pizza',
    items: [
      {
        name: 'Quattro Formaggi',
        description: 'Paradajz sos, mocarela, gorgonzola, parmezan, dimljeni sir',
        price: '1290',
        image: '/pizzas/quattro-formaggi.svg',
      },
      {
        name: 'Diavola',
        description: 'Paradajz sos, mocarela, ljuta salama, masline, čili',
        price: '1190',
        image: '/pizzas/quattro-formaggi.svg',
      },
      {
        name: 'Capricciosa',
        description: 'Paradajz sos, mocarela, šunka, pečurke, masline',
        price: '1190',
        image: '/pizzas/capricciosa.svg',
      },
    ],
  },
  {
    name: 'Vegetarijanske Pizza',
    items: [
      {
        name: 'Ortolana',
        description: 'Paradajz sos, mocarela, tikvice, patlidžan, paprika',
        price: '1090',
        image: '/pizzas/ortolana.jpg',
      },
      {
        name: 'Funghi',
        description: 'Paradajz sos, mocarela, mešane pečurke, ruzmarin',
        price: '1090',
        image: '/pizzas/funghi.jpg',
      },
      {
        name: 'Mediterranea',
        description: 'Paradajz sos, mocarela, čeri paradajz, rukola, parmezan',
        price: '1190',
        image: '/pizzas/mediterranea.jpg',
      },
    ],
  },
]

export default MenuPage 