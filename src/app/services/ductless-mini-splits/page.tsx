import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Ductless Mini Split Installation Phoenix, AZ | ProClimate HVAC',
  description: 'Ductless mini split installation and repair in Phoenix. Efficient zone cooling and heating for homes, additions, and commercial spaces. Free estimates. Call (555) 800-4822.',
}

export default function DuctlessMiniSplitsPage() {
  return (
    <ServicePageTemplate
      title="Ductless Mini Split Systems in Phoenix, AZ"
      subtitle="Zoned comfort. No ductwork needed. Maximum efficiency."
      description="Ductless mini-split systems are the most efficient way to heat and cool spaces without existing ductwork. Perfect for home additions, garages, sunrooms, older homes, and any space where traditional ducted systems won't work — or aren't cost-effective."
      service="Ductless Mini Splits"
      category="hvac"
      benefits={[
        'No ductwork required — perfect for additions and older homes',
        'Zone-by-zone control — heat or cool only the rooms you use',
        'Up to 40% more efficient than traditional ducted systems',
        'Provides both heating and cooling in one system',
        'Quiet operation — whisper-quiet indoor units',
        'Installation typically completed in one day',
        'Eligible for utility rebates and tax credits',
        'Financing available with 0% interest options',
      ]}
      features={[
        'Free in-home assessment and custom system design',
        'Single-zone or multi-zone system installation',
        'Indoor air handler placement and mounting',
        'Outdoor compressor installation and line set routing',
        'Electrical connections and disconnect installation',
        'Condensate drain line routing',
        'System programming and thermostat/remote setup',
        'Smart home integration options (WiFi control)',
        'Performance testing and customer walkthrough',
      ]}
      faqs={[
        { q: 'What is a ductless mini split?', a: 'A ductless mini-split is a heating and cooling system with an outdoor compressor unit connected to one or more indoor air handlers via refrigerant lines. No ductwork is needed, making it ideal for spaces without existing ducts.' },
        { q: 'How much does mini split installation cost?', a: 'Single-zone mini-split systems typically cost $1,800–$3,500 installed. Multi-zone systems (multiple rooms from one outdoor unit) run $3,500–$8,000+ depending on the number of zones.' },
        { q: 'Are mini splits more efficient than central AC?', a: 'Yes — mini splits are 20–40% more efficient than traditional ducted systems because they eliminate duct losses (which can account for 30% of energy loss in a typical home).' },
        { q: 'Can mini splits heat as well as cool?', a: 'Absolutely. Modern heat pump mini-splits provide excellent heating even in cold weather, making them ideal year-round solutions for Phoenix where winter heating needs are moderate.' },
        { q: 'How long does installation take?', a: 'Most single-zone mini-split installations are completed in one day. Multi-zone systems may take 1–2 days depending on complexity.' },
      ]}
      relatedServices={[
        { name: 'AC Installation', href: '/services/ac-installation' },
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'Commercial HVAC', href: '/services/commercial-hvac' },
        { name: 'Financing', href: '/financing' },
        { name: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      ]}
    />
  )
}
