import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Commercial HVAC Phoenix, AZ | Business HVAC Service & Install — ProClimate',
  description: 'Commercial HVAC service, repair, and installation in Phoenix. Rooftop units, split systems, and custom solutions for offices, retail, and industrial. Call (555) 800-4822.',
}

export default function CommercialHVACPage() {
  return (
    <ServicePageTemplate
      title="Commercial HVAC in Phoenix, AZ"
      subtitle="Reliable HVAC for businesses — minimal downtime, maximum efficiency."
      description="Your business can't afford HVAC downtime. ProClimate provides fast, professional commercial HVAC service, repair, and installation for offices, retail spaces, restaurants, warehouses, and industrial facilities throughout Greater Phoenix."
      service="Commercial HVAC"
      category="hvac"
      benefits={[
        'Emergency commercial HVAC service available 24/7',
        'Rooftop unit (RTU) service, repair, and replacement',
        'Preventive maintenance contracts to minimize downtime',
        'All commercial brands and system types serviced',
        'HVAC solutions for offices, retail, restaurants, warehouses',
        'Dedicated commercial account managers',
        'Priority scheduling for maintenance contract clients',
        'Detailed service reports and equipment records',
      ]}
      features={[
        'Commercial HVAC system assessment and audit',
        'Rooftop unit inspection, repair, and replacement',
        'Split system and packaged unit service',
        'Chiller and cooling tower maintenance',
        'Ductwork inspection, sealing, and modification',
        'Building automation and controls integration',
        'Preventive maintenance plan development and execution',
        'Energy efficiency audits and improvement recommendations',
        'Indoor air quality solutions for commercial spaces',
      ]}
      faqs={[
        { q: 'Do you offer commercial HVAC maintenance contracts?', a: 'Yes — we offer custom preventive maintenance contracts for commercial clients that include scheduled inspections, priority service, and discounted rates on repairs. Contact us for a custom quote.' },
        { q: 'What types of commercial HVAC systems do you service?', a: 'We service all commercial HVAC equipment including rooftop units (RTUs), split systems, packaged units, VRF/VRV systems, chillers, cooling towers, and commercial heat pumps.' },
        { q: 'How quickly can you respond to a commercial emergency?', a: 'We prioritize commercial emergencies and aim for a response within 2-4 hours. Maintenance contract clients receive priority dispatch.' },
        { q: 'Can you handle large commercial projects?', a: 'Yes — our commercial team has the capacity to handle projects of all sizes, from single-unit replacement to complete HVAC system design and installation for large facilities.' },
        { q: 'Do you work with property management companies?', a: 'Absolutely. We work with property managers, building owners, and facility managers across Greater Phoenix. We can set up consolidated billing and reporting for multi-property portfolios.' },
      ]}
      relatedServices={[
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'AC Installation', href: '/services/ac-installation' },
        { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
        { name: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
      ]}
    />
  )
}
