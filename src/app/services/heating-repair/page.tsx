import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Heating Repair Phoenix, AZ | Furnace & Heat Pump Repair — ProClimate',
  description: 'Fast heating repair in Phoenix. Furnace, heat pump, and gas heater repair. Same-day service available. Licensed & insured. Call (555) 800-4822.',
}

export default function HeatingRepairPage() {
  return (
    <ServicePageTemplate
      title="Heating Repair in Phoenix, AZ"
      subtitle="Fast, reliable furnace and heat pump repair when you need warmth."
      description="Phoenix winters can be cold, and a heating system failure at night is a real emergency — especially with children or elderly family members. Our certified technicians repair all types of heating systems quickly and correctly, the first time."
      service="Heating Repair"
      category="hvac"
      benefits={[
        'Same-day heating repair available throughout the Phoenix metro',
        'All heating system types: furnaces, heat pumps, electric, and gas',
        'NATE-certified technicians with manufacturer training',
        'Honest diagnosis — we tell you what you need, not what costs the most',
        'Upfront pricing with your approval before any work begins',
        'Emergency heating service available 24/7',
        'All major brands serviced and repaired',
        'Written warranty on parts and labor',
      ]}
      features={[
        'Complete diagnostic inspection of your heating system',
        'Gas furnace heat exchanger inspection for safety',
        'Burner cleaning and adjustment',
        'Igniter, thermocouple, and gas valve testing and replacement',
        'Heat pump refrigerant check and coil inspection',
        'Blower motor and belt inspection and repair',
        'Thermostat testing and replacement',
        'Carbon monoxide safety check',
        'Full performance test after repair completion',
      ]}
      faqs={[
        { q: 'What are common signs my heater needs repair?', a: 'Signs include: unusual noises, insufficient heat, frequent cycling on/off, higher energy bills, yellow/flickering burner flame, or a heating system that simply won\'t turn on.' },
        { q: 'Is it safe to run a furnace with a cracked heat exchanger?', a: 'No — a cracked heat exchanger is dangerous and can leak carbon monoxide into your home. If we detect this, we\'ll advise you to shut the system off until repaired. We never exaggerate this risk.' },
        { q: 'How much does heating repair cost?', a: 'Heating repairs range from $150 for simple fixes like igniter replacement to $800+ for major components. We provide a complete upfront quote before any work begins.' },
        { q: 'Do you service heat pumps?', a: 'Yes — our technicians are fully trained on heat pump systems, including diagnosis of heating mode issues, refrigerant levels, reversing valve problems, and more.' },
        { q: 'Can you come out the same day?', a: 'In most cases, yes. We offer same-day service across the Phoenix metro and 24/7 emergency service for heating failures.' },
      ]}
      relatedServices={[
        { name: 'Heating Installation', href: '/services/heating-installation' },
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'AC Maintenance', href: '/services/ac-maintenance' },
        { name: 'Emergency Service', href: '/emergency' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
      ]}
    />
  )
}
