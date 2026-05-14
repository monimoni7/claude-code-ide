import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Emergency Roofing Phoenix, AZ | 24/7 Roof Emergency Service — ProClimate',
  description: '24/7 emergency roofing in Phoenix. Active leaks, storm damage, tree impacts. Emergency tarping and fast repairs. Call (555) 800-4822 any time.',
}

export default function EmergencyRoofingPage() {
  return (
    <ServicePageTemplate
      title="Emergency Roofing in Phoenix, AZ"
      subtitle="Active leak? Roof damage? We respond 24/7 — day, night, and weekends."
      description="A roof emergency can cause thousands of dollars of interior damage in minutes. Whether it's an active leak during a monsoon, tree impact damage, or a sudden structural failure, ProClimate's emergency roofing team is available around the clock to protect your home immediately."
      service="Emergency Roofing"
      category="roofing"
      benefits={[
        '24/7/365 emergency dispatch — we answer every call',
        'Average response time under 90 minutes in Phoenix metro',
        'Emergency tarping to stop active leaks immediately',
        'Certified roofers on every emergency crew',
        'Debris removal and temporary structural stabilization',
        'Direct insurance contact to begin claims process',
        'Written documentation of all emergency actions taken',
        'Permanent repair or replacement options provided',
      ]}
      features={[
        'Immediate phone consultation and dispatch',
        'Emergency crew deployment to your location',
        'Rapid damage assessment on arrival',
        'Professional-grade emergency tarping of affected areas',
        'Debris removal and site stabilization',
        'Photo documentation of all damage',
        'Insurance documentation started immediately',
        'Written estimate for permanent repairs',
        'Priority scheduling for permanent restoration work',
      ]}
      faqs={[
        { q: 'What should I do if my roof is actively leaking?', a: 'Call us immediately at (555) 800-4822. While waiting, move valuables away from the leak, place buckets to catch water, and take photos of the damage for insurance purposes. Do not climb on the roof yourself.' },
        { q: 'How quickly can you respond to a roofing emergency?', a: 'We typically respond within 90 minutes or less in the Phoenix metro area. We staff emergency crews 24/7 specifically for urgent situations.' },
        { q: 'Is emergency roofing more expensive?', a: 'Emergency tarping services are competitively priced. We\'ll always quote the price upfront before beginning any work. For insurance-covered emergencies, costs are typically covered by your policy.' },
        { q: 'What if a tree hit my roof?', a: 'Call 911 first if there is any structural danger or if anyone is inside. Then call us for emergency stabilization. Do not enter the home until it has been cleared as structurally safe.' },
        { q: 'Do you offer emergency service on holidays?', a: 'Yes — 365 days a year, including all major holidays. Roof emergencies don\'t take days off, and neither do we.' },
      ]}
      relatedServices={[
        { name: 'Roof Repair', href: '/services/roof-repair' },
        { name: 'Storm Damage Repair', href: '/services/storm-damage' },
        { name: 'Roof Inspection', href: '/services/roof-inspection' },
        { name: 'Insurance Claims', href: '/services/insurance-claims' },
        { name: 'Emergency HVAC', href: '/emergency' },
      ]}
    />
  )
}
