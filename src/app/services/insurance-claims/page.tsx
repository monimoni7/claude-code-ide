import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roof Insurance Claims Assistance Phoenix, AZ | ProClimate Roofing',
  description: 'Expert roof insurance claims assistance in Phoenix. We handle the entire process — inspection, documentation, adjuster meetings, and full restoration. Call (555) 800-4822.',
}

export default function InsuranceClaimsPage() {
  return (
    <ServicePageTemplate
      title="Roof Insurance Claims Assistance in Phoenix, AZ"
      subtitle="We handle the entire process. You just get a new roof."
      description="Filing a roof insurance claim is confusing, time-consuming, and frustrating — especially when you're already dealing with damage to your home. ProClimate handles everything from initial inspection through final restoration, making the process as stress-free as possible for you."
      service="Insurance Claims"
      category="roofing"
      benefits={[
        'We handle the entire claims process from start to finish',
        'Free inspection and detailed damage documentation',
        'We meet with your insurance adjuster on your behalf',
        'Experience with all major Arizona insurance carriers',
        'Supplement filing if the initial settlement is too low',
        'No upfront costs — we collect payment from your insurer',
        'You only pay your deductible',
        'Transparent process — you\'re informed at every step',
      ]}
      features={[
        'Free storm damage inspection and full documentation',
        'Detailed damage report with photos for your claim file',
        'Assistance completing your initial claim submission',
        'Coordination and on-site meeting with insurance adjuster',
        'Line-by-line review of the adjuster\'s scope of work',
        'Supplement filing for missed or undervalued damage',
        'Full roof repair or replacement as approved by insurance',
        'Final documentation and claim closure assistance',
        'Dispute and appeal support if claim is denied',
      ]}
      faqs={[
        { q: 'What types of roof damage does insurance typically cover?', a: 'Most homeowner policies cover roof damage caused by wind, hail, lightning, falling trees, and other sudden accidental events. Damage from neglect or normal wear and tear is typically not covered.' },
        { q: 'Do I need a contractor before calling my insurance?', a: 'It\'s usually beneficial to have a contractor inspect and document the damage first. This gives you an independent assessment before the insurance adjuster visits, strengthening your claim.' },
        { q: 'What if the insurance adjuster misses damage?', a: 'This happens frequently. We\'ll review the adjuster\'s scope line by line and file a supplement for any missed or undervalued items. Most of our supplement filings are successful.' },
        { q: 'How long does the insurance claim process take?', a: 'A typical roof insurance claim takes 2–6 weeks from first contact to receiving an approval. We\'ll keep you updated throughout and push the process along wherever possible.' },
        { q: 'Is it legal for contractors to help with insurance claims?', a: 'Yes — it is completely legal for licensed contractors to assist homeowners with property insurance claims in Arizona. We act as your advocate throughout the process.' },
      ]}
      relatedServices={[
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Storm Damage Repair', href: '/services/storm-damage' },
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Roof Replacement', href: '/services/roof-replacement' },
        { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
      ]}
    />
  )
}
