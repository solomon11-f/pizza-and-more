import Image from "next/image";
import Link from "next/link";
import { FaMotorcycle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-pizza.svg"
            alt="Delicious Pizza"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Pizza & More
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Najbolje italijanske pizze pravljene po tradicionalnoj recepturi, 
            sa najsvežijim sastojcima i pečene u pravoj pizza peći.
          </p>
          <Link
            href="/menu"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg transition duration-300"
          >
            Pogledaj meni
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMotorcycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Brza dostava</h3>
              <p className="text-gray-600">Dostavljamo za 30 minuta ili pizza je besplatna!</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/ingredients.png"
                  alt="Fresh Ingredients"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sveži sastojci</h3>
              <p className="text-gray-600">Koristimo samo najkvalitetnije i najsvežije sastojke</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/pizza-oven.png"
                  alt="Wood Fired Oven"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Tradicionalna priprema</h3>
              <p className="text-gray-600">Pizza pečena u pravoj italijanskoj peći na drva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pizzas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Najpopularnije pizze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPizzas.map((pizza) => (
              <div key={pizza.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{pizza.price} RSD</span>
                    <Link
                      href="/order"
                      className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm transition"
                    >
                      Poruči
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const popularPizzas = [
  {
    name: 'Margherita',
    description: 'Paradajz sos, mocarela, bosiljak, maslinovo ulje',
    price: '990',
    image: '/pizzas/margherita.svg',
  },
  {
    name: 'Capricciosa',
    description: 'Paradajz sos, mocarela, šunka, pečurke, masline',
    price: '1190',
    image: '/pizzas/capricciosa.svg',
  },
  {
    name: 'Quattro Formaggi',
    description: 'Paradajz sos, mocarela, gorgonzola, parmezan, dimljeni sir',
    price: '1290',
    image: '/pizzas/quattro-formaggi.svg',
  },
]
