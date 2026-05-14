import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Phoenix, AZ | Air Purifiers & Filtration — ProClimate',
  description: 'Improve indoor air quality in your Phoenix home. Air purifiers, UV systems, whole-home filtration, and humidity control. Call (555) 800-4822 for a free assessment.',
}

export default function IndoorAirQualityPage() {
  return (
    <ServicePageTemplate
      title="Indoor Air Quality Solutions in Phoenix, AZ"
      subtitle="Breathe cleaner, healthier air in your home — guaranteed."
      description="The EPA estimates indoor air can be 2–5x more polluted than outdoor air. In sealed Phoenix homes with windows closed for AC efficiency, pollutants like dust, allergens, VOCs, and mold spores concentrate to harmful levels. Our whole-home IAQ solutions solve this permanently."
      service="Indoor Air Quality"
      category="hvac"
      benefits={[
        'Eliminate up to 99.97% of airborne allergens and pollutants',
        'Reduce allergy and asthma symptoms dramatically',
        'Kill airborne viruses and bacteria with UV germicidal technology',
        'Whole-home solutions — every room, every breath',
        'Improve sleep quality and daily energy levels',
        'Protect your family, especially children and elderly',
        'Professional installation with manufacturer warranty',
        'Free indoor air quality assessment included',
      ]}
      features={[
        'Complete indoor air quality assessment and testing',
        'Whole-home air purifier installation (HEPA or electrostatic)',
        'UV germicidal light installation in air handler',
        'High-MERV air filtration system upgrade',
        'Whole-home humidifier or dehumidifier installation',
        'ERV/HRV fresh air ventilation systems',
        'Duct sealing to prevent contaminant infiltration',
        'Ongoing filter monitoring and replacement service available',
      ]}
      faqs={[
        { q: 'What are the signs of poor indoor air quality?', a: 'Signs include frequent allergies or respiratory issues, musty odors, excessive dust on surfaces, headaches when indoors, or family members feeling better when away from home.' },
        { q: 'Do air purifiers really work?', a: 'Yes — properly sized whole-home air purifiers can remove up to 99.97% of airborne particles including pollen, pet dander, mold spores, dust mites, and even some viruses and bacteria.' },
        { q: 'How much does an IAQ system cost?', a: 'IAQ systems range from $300 for a filter upgrade to $1,500–$2,500 for a complete whole-home solution including UV treatment and HEPA filtration. We\'ll recommend the best solution for your situation and budget.' },
        { q: 'Is IAQ especially important in Phoenix?', a: 'Yes — Phoenix homes are sealed tightly for AC efficiency, trapping indoor pollutants. The desert environment also brings high dust and allergen levels. Whole-home IAQ solutions are especially beneficial here.' },
        { q: 'How is whole-home different from a portable air purifier?', a: 'Whole-home systems are integrated into your HVAC system and treat every cubic foot of air in your home — not just one room. They\'re more effective, quieter, and require less maintenance than portable units.' },
      ]}
      relatedServices={[
        { name: 'AC Maintenance', href: '/services/ac-maintenance' },
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'Ductless Mini Splits', href: '/services/ductless-mini-splits' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
        { name: 'Commercial HVAC', href: '/services/commercial-hvac' },
      ]}
    />
  )
}
