import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'AC Installation Phoenix, AZ | New System Install — ProClimate',
  description: 'Expert AC installation in Phoenix. Energy-efficient systems, proper sizing, and professional installation. Free estimates. Financing available. Call (555) 800-4822.',
}

export default function ACInstallationPage() {
  return (
    <ServicePageTemplate
      title="AC Installation in Phoenix, AZ"
      subtitle="Right-sized systems. Expert installation. Lower energy bills."
      description="A properly installed, right-sized AC system can reduce your energy bills by 20–30% and last 15–20 years. Our certified installers use Manual J load calculations to ensure you get the perfect system for your home — never oversized, never undersized."
      service="AC Installation"
      category="hvac"
      benefits={[
        'Free in-home assessment and right-sizing with Manual J calculation',
        'Carrier, Trane, Lennox, and Rheem systems available',
        'Energy Star certified systems for maximum efficiency',
        'Professional installation by factory-trained technicians',
        'Financing available — 0% interest for qualified buyers',
        '10-year manufacturer warranty on parts',
        '1-year labor warranty on installation',
        'Old system haul-away included at no extra charge',
      ]}
      features={[
        'Free in-home assessment and custom system recommendation',
        'Manual J load calculation for proper system sizing',
        'Complete system removal and disposal of old equipment',
        'Installation of new indoor and outdoor units',
        'Refrigerant lines, electrical connections, and drain lines',
        'Thermostat upgrade and smart thermostat installation available',
        'System commissioning and performance testing',
        'Homeowner walkthrough and system orientation',
      ]}
      faqs={[
        { q: 'How much does a new AC system cost in Phoenix?', a: 'A new AC installation in Phoenix typically ranges from $3,500 to $8,500 depending on system size, efficiency rating, and home layout. We provide free, detailed estimates with no obligation.' },
        { q: 'How long does AC installation take?', a: 'Most residential AC installations are completed in one day — typically 4–8 hours. More complex installations may take two days.' },
        { q: 'What SEER rating should I choose?', a: 'In Phoenix, we recommend a minimum of 16 SEER. Higher SEER ratings (18–20+) save more on energy bills and may qualify for utility rebates. Our team will help you analyze the payback period.' },
        { q: 'Do you offer financing for AC installation?', a: 'Yes! We offer 0% interest financing for qualified customers and low monthly payment options. Apply in 60 seconds — most customers are approved immediately.' },
        { q: 'What brands do you install?', a: 'We are authorized dealers for Carrier, Trane, Lennox, and Rheem. We\'ll recommend the best brand and model for your budget and home.' },
      ]}
      relatedServices={[
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'AC Maintenance', href: '/services/ac-maintenance' },
        { name: 'Ductless Mini Splits', href: '/services/ductless-mini-splits' },
        { name: 'Financing', href: '/financing' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
      ]}
    />
  )
}
