import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'HVAC & Roof Maintenance Plans | ProClimate — Phoenix, AZ',
  description: 'Prevent costly breakdowns with ProClimate maintenance plans. Annual HVAC tune-ups, roof inspections, priority service & more. Starting at $149/year.',
}

const plans = [
  {
    name: 'Essential',
    price: '$149',
    period: '/year',
    color: 'border-gray-200',
    badge: '',
    features: ['1 HVAC tune-up per year', 'Filter replacement included', 'Priority scheduling', '10% discount on repairs', '24-point system inspection', 'Digital service report'],
  },
  {
    name: 'ProComfort',
    price: '$249',
    period: '/year',
    color: 'border-orange-DEFAULT',
    badge: 'Most Popular',
    features: ['2 HVAC tune-ups per year', 'Filter replacements included', 'Priority emergency service', '15% discount on repairs', '1 roof inspection per year', 'FREE service calls', 'No overtime charges', 'Transferable to new owners'],
  },
  {
    name: 'Total Home',
    price: '$399',
    period: '/year',
    color: 'border-navy-DEFAULT',
    badge: 'Best Value',
    features: ['Unlimited HVAC tune-ups', 'All filters & belts included', 'VIP emergency response', '20% discount on all services', '2 roof inspections per year', 'Gutter cleaning included', 'No overtime charges', 'Dedicated account manager', 'Transferable coverage'],
  },
]

export default function MaintenancePlansPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Maintenance Plans</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Home. Prevent Surprises.</h1>
          <p className="text-xl text-gray-300">Routine maintenance is the single best investment you can make for your HVAC system and roof. Our plans make it easy and affordable.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Choose Your Plan</h2>
            <p className="section-subtitle">Cancel anytime. All plans include our satisfaction guarantee.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.color} relative`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-DEFAULT text-white text-xs font-bold px-4 py-1.5 rounded-full">{plan.badge}</div>
                )}
                <h3 className="text-2xl font-bold text-navy-DEFAULT mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-orange-DEFAULT">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary w-full justify-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Questions? We&apos;re Happy to Help.</h2>
          <p className="text-gray-400 mb-8">Our team can recommend the right plan for your home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
