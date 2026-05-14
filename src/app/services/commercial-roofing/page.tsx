import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Commercial Roofing Phoenix, AZ | Flat & Low-Slope Roofing — ProClimate',
  description: 'Expert commercial roofing in Phoenix. TPO, EPDM, flat roofs, and more. Service, repair, and installation for offices, retail, and industrial. Call (555) 800-4822.',
}

export default function CommercialRoofingPage() {
  return (
    <ServicePageTemplate
      title="Commercial Roofing in Phoenix, AZ"
      subtitle="Protect your business with Arizona's commercial roofing experts."
      description="Your business roof is a critical asset. ProClimate specializes in commercial roofing systems designed for Arizona's extreme heat and monsoon conditions — from small retail buildings to large industrial facilities. We minimize business disruption and deliver durable, long-lasting results."
      service="Commercial Roofing"
      category="roofing"
      benefits={[
        'Specialists in flat, low-slope, and commercial roofing systems',
        'TPO, EPDM, modified bitumen, and built-up roofing (BUR)',
        'Work during nights and weekends to minimize business disruption',
        'Rooftop HVAC unit flashing and penetration waterproofing',
        'Commercial roof maintenance contracts available',
        'Insurance claim assistance for storm-damaged commercial roofs',
        'Energy-efficient cool roof coatings available',
        'Single point of contact for all commercial roofing needs',
      ]}
      features={[
        'Comprehensive commercial roof inspection and assessment',
        'Roof core samples and moisture scanning if needed',
        'Custom repair or replacement proposal with ROI analysis',
        'TPO, EPDM, or modified bitumen installation',
        'Roof coating and restoration systems',
        'Penetration and flashing waterproofing',
        'Drainage and ponding water correction',
        'Rooftop equipment support and curb installation',
        'Final inspection with third-party warranty available',
      ]}
      faqs={[
        { q: 'What commercial roofing systems do you install?', a: 'We install TPO (thermoplastic polyolefin), EPDM (rubber), modified bitumen, built-up roofing (BUR), and spray polyurethane foam (SPF) systems — all common commercial flat and low-slope solutions in Phoenix.' },
        { q: 'Can you work around our business hours?', a: 'Absolutely. We can schedule work during nights, weekends, or holiday periods to minimize disruption to your business operations. We\'ll work around your schedule.' },
        { q: 'Do you offer commercial roofing maintenance contracts?', a: 'Yes — we offer annual inspection and maintenance contracts for commercial roofs that can extend roof life, maintain warranties, and prevent costly emergency repairs.' },
        { q: 'How do I know if my commercial roof needs replacement vs. repair?', a: 'Factors include roof age, extent of damage, ponding water issues, and repair history. We\'ll provide an honest assessment with repair cost vs. replacement cost analysis to help you make the best business decision.' },
        { q: 'Are cool roof coatings worth it in Phoenix?', a: 'Absolutely. Reflective roof coatings can reduce roof surface temperatures by 50–80°F in the Arizona sun, significantly lowering cooling costs and extending roof membrane life.' },
      ]}
      relatedServices={[
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Roof Replacement', href: '/services/roof-replacement' },
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Commercial HVAC', href: '/services/commercial-hvac' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
      ]}
    />
  )
}
