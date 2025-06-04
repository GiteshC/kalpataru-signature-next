import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image src="/images/hero-interior.png" alt="Luxury interior" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4">KAIHATARU AZURO</h1>
          <p className="text-lg md:text-xl font-light tracking-wide">EXCEPTIONAL LIVING SPACES</p>
        </div>
      </section>

      {/* Ocean and City Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">CONSTANTLY LINKED TO OCEAN AND CITY</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect harmony between urban sophistication and natural beauty. Our residences offer
              unparalleled views that connect you to both the vibrant city life and the serene ocean.
            </p>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Modern interior with ocean and mountain views"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sea of Billionaires Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">HOME TO A SEA OF BILLIONAIRES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community where luxury meets lifestyle. Our prestigious development attracts the world's
              most discerning residents.
            </p>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Luxury residential complex"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Finest Luxuries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">THE FINEST LUXURIES AWAIT YOU HERE</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Indulge in world-class amenities and services designed to exceed your every expectation. From private
              pools to concierge services, every detail has been carefully curated.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Luxury pool area" fill className="object-cover" />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Premium interior amenities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">DISCOVER YOUR EXTRAORDINARY LIFESTYLE</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Schedule a private viewing and experience the pinnacle of luxury living. Our exclusive residences are
            waiting for the most discerning individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors">
              SCHEDULE VIEWING
            </button>
            <button className="border border-white text-white px-8 py-3 font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-colors">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
