import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* About Header */}
      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            O nama
          </h1>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Otkrijte priču o našoj strasti prema pravljenju savršene pizze
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about/pizzeria.svg"
              alt="Naša picerija"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">
              Naša priča
            </h2>
            <p className="text-gray-600 mb-4">
              Pizza & More je nastala iz ljubavi prema autentičnoj italijanskoj pizzi i želje da 
              Beograđanima pružimo nezaboravno gastronomsko iskustvo. Naša priča počinje 2020. godine, 
              kada smo odlučili da našu strast prema pravljenju pizze podelimo sa svetom.
            </p>
            <p className="text-gray-600">
              Svaka pizza koju pravimo je rezultat pažljivog odabira sastojaka, tradicionalne 
              recepture i posvećenosti detaljima. Naše testo odležava 24 sata, što mu daje 
              posebnu teksturu i ukus koji nas izdvaja od drugih.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-secondary text-center mb-12">
            Naše vrednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/quality.svg"
                  alt="Kvalitet"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-4">
                Vrhunski kvalitet
              </h3>
              <p className="text-gray-600 text-center">
                Koristimo samo najkvalitetnije sastojke i pridržavamo se najviših 
                standarda u pripremi hrane.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/tradition.svg"
                  alt="Tradicija"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-4">
                Tradicionalna priprema
              </h3>
              <p className="text-gray-600 text-center">
                Poštujemo italijansku tradiciju pravljenja pizze, koristeći 
                autentične recepte i tehnike.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/customer.svg"
                  alt="Zadovoljstvo"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-4">
                Zadovoljstvo kupaca
              </h3>
              <p className="text-gray-600 text-center">
                Vaše zadovoljstvo nam je na prvom mestu. Trudimo se da svako 
                iskustvo bude posebno.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-display font-bold text-secondary text-center mb-12">
          Naš tim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: 'Marco Rossi',
    role: 'Glavni pizza majstor',
    description: 'Sa 15 godina iskustva u pravljenju autentičnih italijanskih pizza.',
    image: '/team/chef1.svg',
  },
  {
    name: 'Ana Jovanović',
    role: 'Menadžer',
    description: 'Brine o tome da sve funkcioniše besprekorno i da gosti budu zadovoljni.',
    image: '/team/manager.svg',
  },
  {
    name: 'Nikola Petrović',
    role: 'Šef kuhinje',
    description: 'Kreativni um iza naših specijalnih pizza kombinacija.',
    image: '/team/chef2.svg',
  },
]

export default AboutPage 