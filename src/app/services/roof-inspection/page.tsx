import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roof Inspection Phoenix, AZ | Free Roof Inspection — ProClimate',
  description: 'Professional roof inspection in Phoenix. Drone technology, detailed photo reports, and honest findings. Free inspections for storm damage. Call (555) 800-4822.',
}

export default function RoofInspectionPage() {
  return (
    <ServicePageTemplate
      title="Roof Inspection in Phoenix, AZ"
      subtitle="Thorough. Documented. Honest. Know exactly what's on top of your home."
      description="Most homeowners never look at their roof — until there's a problem. A professional roof inspection catches small issues before they become expensive repairs, documents storm damage for insurance claims, and gives you complete peace of mind about one of your home's most critical systems."
      service="Roof Inspection"
      category="roofing"
      benefits={[
        'Free storm damage inspections following monsoons or hail',
        'Drone technology for safe, thorough inspection of all areas',
        'Detailed written report with photos of every finding',
        'Honest assessment — we tell you what you need and what you don\'t',
        'Insurance-ready documentation for claim support',
        'Identify small issues before they become major problems',
        'Same-day inspection availability for urgent situations',
        'Written report delivered within 24 hours',
      ]}
      features={[
        'Full exterior roof inspection of all surfaces',
        'Drone-assisted inspection of hard-to-reach areas',
        'Shingle or tile condition assessment',
        'Flashing inspection at all penetrations and transitions',
        'Gutter and downspout condition check',
        'Attic inspection for signs of moisture or damage',
        'Detailed photo documentation of all findings',
        'Written condition report with recommended actions',
        'Cost estimate for any identified repairs or replacement',
      ]}
      faqs={[
        { q: 'How often should I have my roof inspected?', a: 'We recommend annual roof inspections in Phoenix — especially before and after monsoon season. Also inspect after any significant storm, and before buying or selling a home.' },
        { q: 'Are roof inspections really free?', a: 'Yes — our storm damage inspections are always free. There is no cost and no obligation. We\'ll tell you honestly what we find, even if the answer is "your roof looks great."' },
        { q: 'Do I need a roof inspection before selling my home?', a: 'It\'s strongly recommended. A pre-listing roof inspection identifies issues before a buyer\'s inspector does. You can address problems on your terms rather than under pressure during negotiations.' },
        { q: 'What if the inspection finds no damage?', a: 'Great news! We\'ll document that your roof is in good condition and give you our professional assessment. We never create problems where none exist.' },
        { q: 'Can you inspect my roof for an insurance claim?', a: 'Absolutely. Our inspectors are experienced with insurance documentation. We provide detailed photo reports and damage assessments that are designed to support your insurance claim.' },
      ]}
      relatedServices={[
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Roof Replacement', href: '/services/roof-replacement' },
        { name: 'Storm Damage Repair', href: '/services/storm-damage' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
      ]}
    />
  )
}
