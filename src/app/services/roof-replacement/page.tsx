import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roof Replacement Phoenix, AZ | Full Reroof — ProClimate Roofing',
  description: 'Professional roof replacement in Phoenix. All materials available. GAF Master Elite certified. Financing available. Free estimates. Call (555) 800-4822.',
}

export default function RoofReplacementPage() {
  return (
    <ServicePageTemplate
      title="Roof Replacement in Phoenix, AZ"
      subtitle="Premium materials. Expert installation. Lifetime peace of mind."
      description="When it's time for a new roof, you need a contractor you can trust. As a GAF Master Elite certified roofing contractor — a designation held by only the top 3% of roofers nationwide — ProClimate delivers exceptional quality, backed by some of the strongest warranties in the industry."
      service="Roof Replacement"
      category="roofing"
      benefits={[
        'GAF Master Elite certified — top 3% of roofers nationwide',
        'Eligible for Golden Pledge Warranty — up to 25 years',
        'All roofing materials available: shingle, tile, metal, flat',
        'Complete tear-off and disposal of old roofing',
        'Premium underlayment and waterproofing included',
        'Financing available — 0% interest for qualified buyers',
        'Insurance claim assistance and coordination',
        'Drone inspection and full photo documentation',
      ]}
      features={[
        'Free comprehensive roof assessment and recommendation',
        'Material selection consultation and samples provided',
        'Complete removal and disposal of existing roof',
        'Deck inspection and repair as needed',
        'Installation of premium synthetic underlayment',
        'New shingles, tile, or alternative material installation',
        'Flashing replacement at all penetrations and transitions',
        'Ridge cap installation and ridge vent upgrade',
        'Final walkthrough with homeowner and quality inspection',
        'Permit pull and final inspection coordination',
      ]}
      faqs={[
        { q: 'How much does roof replacement cost in Phoenix?', a: 'Roof replacement in Phoenix typically ranges from $8,000 to $20,000+ depending on roof size, pitch, material choice, and removal complexity. We provide free, detailed estimates for every project.' },
        { q: 'How long does roof replacement take?', a: 'Most residential roof replacements are completed in 1–3 days. Large or complex roofs may take longer. We\'ll give you an accurate timeline during your free estimate.' },
        { q: 'What roofing materials are best for Phoenix?', a: 'For Phoenix, we recommend Class 4 impact-resistant shingles (for hail protection), concrete or clay tile (excellent durability in heat), or metal roofing (longest lifespan). We\'ll help you choose based on budget, aesthetics, and HOA requirements.' },
        { q: 'Is roof replacement covered by insurance?', a: 'If your roof was damaged by a covered event (hail, wind, storm), your insurance may cover most or all of the replacement cost. We work with all major insurers and help you navigate the claims process.' },
        { q: 'What warranty do I get on a new roof?', a: 'As a GAF Master Elite contractor, we can offer the Golden Pledge warranty — one of the strongest in the industry — covering up to 25 years on materials and 10 years on workmanship.' },
      ]}
      relatedServices={[
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Storm Damage Repair', href: '/services/storm-damage' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
        { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
      ]}
    />
  )
}
