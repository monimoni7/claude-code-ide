import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Roof Repair Phoenix, AZ | Fast Leak Repair — ProClimate Roofing',
  description: 'Expert roof repair in Phoenix. Stop leaks fast with certified roofers. Same-day emergency service. All roof types. Free estimates. Call (555) 800-4822.',
}

export default function RoofRepairPage() {
  return (
    <ServicePageTemplate
      title="Roof Repair in Phoenix, AZ"
      subtitle="Stop leaks fast. Certified roofers. Guaranteed results."
      description="A roof leak never waits for a convenient time. Whether it's a missing shingle, flashing failure, or monsoon damage, our certified roofers diagnose and repair all types of roof damage quickly and correctly. We protect your home and your belongings — fast."
      service="Roof Repair"
      category="roofing"
      benefits={[
        'Same-day roof repair available for urgent leaks',
        'Certified roofers with 10+ years average experience',
        'All roof types: tile, shingle, flat, metal, foam',
        'Emergency tarping available 24/7 to stop immediate damage',
        'Photo documentation of all damage before and after repair',
        'Written warranty on all repair work',
        'Insurance claim assistance available',
        'Honest assessment — we only recommend what you actually need',
      ]}
      features={[
        'Thorough roof inspection and damage documentation',
        'Detailed photo report of all identified issues',
        'Accurate written estimate before any work begins',
        'Shingle, tile, or flat roof repair as needed',
        'Flashing repair and replacement around penetrations',
        'Valley, ridge, and hip repair',
        'Underlayment repair or replacement',
        'Sealant and caulking of vulnerable areas',
        'Final inspection and quality verification',
        'Photo documentation of completed repairs',
      ]}
      faqs={[
        { q: 'How much does roof repair cost in Phoenix?', a: 'Minor roof repairs like missing shingles or small leak fixes typically run $150–$500. More significant repairs like flashing replacement or larger sections can run $500–$2,000. We always provide a free, written estimate before starting.' },
        { q: 'Can you repair my roof the same day?', a: 'In many cases, yes. For urgent leaks, we can often dispatch a crew same-day for temporary tarping and begin permanent repairs within 24–48 hours.' },
        { q: 'Should I repair or replace my roof?', a: 'If your roof is under 15 years old and the damage is isolated, repair is usually the right choice. If you have widespread damage or your roof is approaching the end of its life, replacement may be more cost-effective. We\'ll give you an honest recommendation.' },
        { q: 'Do you work with insurance for roof repairs?', a: 'Yes — we work with all major insurance companies and can help you navigate the claims process. We provide detailed damage documentation to support your claim.' },
        { q: 'What types of roofs do you repair?', a: 'We repair all roof types common in Phoenix including tile (concrete and clay), asphalt shingles, flat/built-up roofs, foam roofs, and metal roofs.' },
      ]}
      relatedServices={[
        { name: 'Roof Replacement', href: '/services/roof-replacement' },
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Storm Damage Repair', href: '/services/storm-damage' },
        { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
      ]}
    />
  )
}
