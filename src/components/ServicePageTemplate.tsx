import Link from 'next/link'
import { Phone, CheckCircle, Shield, Clock, Star, ArrowRight } from 'lucide-react'
import ContactForm from './ContactForm'
import ReviewCard from './ReviewCard'

interface FAQItem { q: string; a: string }
interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  benefits: string[]
  features: string[]
  faqs: FAQItem[]
  service: string
  category: 'hvac' | 'roofing'
  relatedServices: { name: string; href: string }[]
}

export default function ServicePageTemplate({ title, subtitle, description, benefits, features, faqs, service, category, relatedServices }: ServicePageProps) {
  const reviews = [
    { name: 'Michael R.', location: 'Scottsdale, AZ', rating: 5, text: 'ProClimate was at my door within 2 hours. Professional, honest, and got the job done right the first time. Highly recommend!', service, date: '2 weeks ago' },
    { name: 'Sarah L.', location: 'Gilbert, AZ', rating: 5, text: 'I was worried about the cost but their pricing was fair and transparent. No hidden fees. Will use them again for sure.', service, date: '1 month ago' },
    { name: 'David K.', location: 'Chandler, AZ', rating: 5, text: 'Best experience I\'ve had with a home service company. They explained everything clearly and completed the work on time.', service, date: '3 weeks ago' },
  ]

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        provider: { '@type': 'LocalBusiness', name: 'ProClimate HVAC & Roofing', telephone: '555-800-4822' },
        areaServed: 'Greater Phoenix Metro Area',
      })}} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">
              {category === 'hvac' ? '❄️ HVAC Services' : '🏠 Roofing Services'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-xl text-gray-300 mb-6">{subtitle}</p>
            <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:5558004822" className="btn-primary text-lg">
                <Phone className="w-5 h-5" /> Call (555) 800-4822
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {[['Same-Day Available', Clock], ['Licensed & Insured', Shield], ['4.9★ Rating', Star]].map(([label, Icon]) => (
                <div key={label as string} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-orange-DEFAULT" />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2">
            <ContactForm title="Get a Free Quote Today" subtitle="Response within 30 minutes" service={service} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Choose ProClimate for {service}?</h2>
            <p className="section-subtitle">We do it right — every time, on time, at a fair price.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">What's Included</h2>
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-orange-DEFAULT/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-DEFAULT font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy-DEFAULT rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Guarantee</h3>
            <div className="space-y-4">
              {[
                ['100% Satisfaction Guarantee', 'If you\'re not happy, we\'ll make it right — no questions asked.'],
                ['Upfront Pricing', 'You\'ll always know the cost before we start. Zero surprises.'],
                ['Licensed & Insured', 'Fully licensed, bonded, and insured for your complete protection.'],
                ['Warranty on All Work', 'Parts and labor warranty on every service we provide.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-DEFAULT flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">{title}</div>
                    <div className="text-gray-400 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="tel:5558004822" className="btn-primary w-full justify-center mt-6">
              <Phone className="w-5 h-5" /> Call for Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-outline">View All 500+ Reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy-DEFAULT mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-DEFAULT mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {relatedServices.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-gray-200 hover:border-orange-DEFAULT text-gray-700 hover:text-orange-DEFAULT px-5 py-3 rounded-full font-medium text-sm transition-all shadow-sm">
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation estimate. We respond fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg">
              <Phone className="w-5 h-5" /> (555) 800-4822
            </a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  )
}
