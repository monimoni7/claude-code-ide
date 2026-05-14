import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair Phoenix, AZ | Monsoon & Hail Damage — ProClimate',
  description: 'Expert storm damage roof repair in Phoenix. Hail, wind, and monsoon damage specialists. Free inspections. Insurance claim help. Call (555) 800-4822.',
}

export default function StormDamagePage() {
  return (
    <ServicePageTemplate
      title="Storm Damage Roof Repair in Phoenix, AZ"
      subtitle="Monsoon season expert. Hail damage specialists. Insurance claim pros."
      description="Arizona's monsoon season brings violent storms with high winds, hail, and heavy rain that can devastate roofs in minutes. ProClimate is Phoenix's storm damage roofing specialist — we respond fast, document everything, and work directly with your insurance company to get your roof restored."
      service="Storm Damage Repair"
      category="roofing"
      benefits={[
        'Free post-storm roof inspection — always, no obligation',
        'Emergency response teams deployed after major storm events',
        'Specialists in monsoon, hail, and wind damage',
        'Direct insurance company coordination on your behalf',
        'Detailed storm damage documentation for maximum claim value',
        'Temporary tarping to prevent further damage while claim processes',
        'Work directly with all major insurance carriers',
        'No upfront cost — we collect from your insurance',
      ]}
      features={[
        'Immediate post-storm inspection and damage assessment',
        'Comprehensive photo and drone documentation of all damage',
        'Detailed damage report prepared for insurance adjuster',
        'Meeting with your insurance adjuster on-site if needed',
        'Emergency tarping and weatherproofing as needed',
        'Full storm damage repair or replacement as approved',
        'Premium material installation to match or exceed existing',
        'Final inspection and sign-off documentation',
        'Supplement filing assistance if claim is underpaid',
      ]}
      faqs={[
        { q: 'How do I know if my roof has hail damage?', a: 'Hail damage may not be visible from the ground. Look for granule loss in gutters, dents on metal flashing or vents, bruising on shingles, or cracked tiles. Call us for a free inspection — we use drones to check every inch.' },
        { q: 'Will filing a claim raise my insurance rates?', a: 'Weather-related claims (hail, wind, monsoon) are generally classified as "Acts of God" and typically do not raise your rates. We recommend contacting your agent to confirm before filing.' },
        { q: 'How long do I have to file a storm damage claim?', a: 'Most insurance policies require you to report storm damage within 1–3 years of the event, but earlier is always better. Documentation of damage is stronger immediately after the storm.' },
        { q: 'Do I have to pay anything out of pocket?', a: 'Typically only your deductible. We\'ll work to maximize your insurance claim so you receive full value for the damage. We never ask for payment beyond your deductible for insurance-covered work.' },
        { q: 'What if my insurance denies or underpays my claim?', a: 'We can help you file a supplement or dispute an unfair denial. Our team is experienced in negotiating with insurance adjusters to ensure you receive fair compensation.' },
      ]}
      relatedServices={[
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Roof Replacement', href: '/services/roof-replacement' },
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
      ]}
    />
  )
}
