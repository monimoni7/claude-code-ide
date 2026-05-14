import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | ProClimate HVAC & Roofing — Greater Phoenix, AZ',
  description: 'ProClimate serves Phoenix, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Glendale, Peoria and all Greater Phoenix communities. Same-day service available.',
}

const cities = [
  { name: 'Phoenix', desc: 'Our home base — fast response across all Phoenix zip codes.', zip: '85001–85099' },
  { name: 'Scottsdale', desc: 'Serving North, South, Old Town, and all Scottsdale communities.', zip: '85250–85266' },
  { name: 'Tempe', desc: 'Complete HVAC & roofing coverage throughout Tempe.', zip: '85281–85285' },
  { name: 'Chandler', desc: 'Reliable service for all Chandler residential & commercial properties.', zip: '85224–85249' },
  { name: 'Gilbert', desc: "Gilbert's most trusted HVAC & roofing team.", zip: '85233–85298' },
  { name: 'Mesa', desc: 'Comprehensive coverage across greater Mesa.', zip: '85201–85215' },
  { name: 'Glendale', desc: 'Fast, professional service throughout Glendale.', zip: '85301–85310' },
  { name: 'Peoria', desc: 'Full-service HVAC & roofing for Peoria homeowners.', zip: '85345–85385' },
  { name: 'Surprise', desc: 'Serving Surprise and surrounding West Valley communities.', zip: '85374–85388' },
  { name: 'Goodyear', desc: 'Expert service for Goodyear and Avondale.', zip: '85338–85395' },
  { name: 'Avondale', desc: 'Complete coverage for all Avondale neighborhoods.', zip: '85392–85396' },
  { name: 'Sun City', desc: 'Specialized service for Sun City active adult communities.', zip: '85351–85375' },
  { name: 'Paradise Valley', desc: 'Premium service for Paradise Valley luxury homes.', zip: '85253' },
  { name: 'Fountain Hills', desc: 'Reliable coverage for Fountain Hills residents.', zip: '85268' },
  { name: 'Litchfield Park', desc: 'Full service for Litchfield Park and Waddell.', zip: '85340' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Service Areas</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We Come to You — Across Greater Phoenix</h1>
          <p className="text-xl text-gray-300 mb-8">Same-day service available throughout the Valley. Licensed, insured, and always on time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> Call (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Cities We Serve</h2>
            <p className="section-subtitle">One call — we cover the entire Phoenix metro.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-DEFAULT/10 rounded-lg p-2 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-DEFAULT text-lg">{city.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{city.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">ZIP codes: {city.zip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-DEFAULT mb-6">Why We Serve the Entire Valley</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Greater Phoenix is our home. We&apos;ve built our business here, raised our families here, and are committed to serving every community across the Valley with the same level of care and professionalism.</p>
            <div className="space-y-3">
              {['30+ service vehicles dispatched daily across the Valley', 'Same-day service available in most areas', 'Local technicians who know your neighborhood', '24/7 emergency coverage — no extra travel fees', 'Consistent pricing throughout our service area'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy-DEFAULT rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Not Sure If We Serve Your Area?</h3>
            <p className="text-gray-400 mb-6">Give us a call — if we can get to you, we will. We&apos;re constantly expanding our coverage.</p>
            <a href="tel:5558004822" className="btn-primary w-full justify-center text-lg">
              <Phone className="w-5 h-5" /> Call (555) 800-4822
            </a>
            <p className="text-gray-500 text-xs text-center mt-3">We&apos;ll let you know right away if we can help</p>
          </div>
        </div>
      </section>
    </>
  )
}
