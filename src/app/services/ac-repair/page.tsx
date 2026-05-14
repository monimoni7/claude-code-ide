import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'AC Repair Phoenix, AZ | Same-Day Service — ProClimate',
  description: 'Fast, reliable AC repair in Phoenix & surrounding areas. Same-day service available 24/7. Licensed HVAC technicians. Call (555) 800-4822 for immediate service.',
}

export default function ACRepairPage() {
  return (
    <ServicePageTemplate
      title="AC Repair in Phoenix, AZ"
      subtitle="Same-day service. Expert diagnosis. Honest pricing."
      description="When your AC breaks down in the Arizona heat, every minute matters. Our NATE-certified technicians diagnose and repair all makes and models of air conditioning systems — fast. We carry common parts on every truck for same-day repairs."
      service="AC Repair"
      category="hvac"
      benefits={[
        'Same-day and emergency AC repair available 7 days a week',
        'NATE-certified technicians with 10+ years average experience',
        'Upfront pricing — you approve before we start any work',
        'We repair all major brands: Trane, Carrier, Lennox, Rheem, and more',
        'Fully stocked trucks for most same-day repairs',
        'Written warranty on all parts and labor',
        '4.9-star Google rating with hundreds of AC repair reviews',
        'No overtime charges for evenings or weekends',
      ]}
      features={[
        'Full diagnostic inspection of your AC system',
        'Identify the root cause — not just the symptom',
        'Upfront written repair estimate before any work begins',
        'Refrigerant leak detection and recharge',
        'Compressor, capacitor, and contactor testing & replacement',
        'Evaporator and condenser coil cleaning and inspection',
        'Thermostat diagnosis and replacement if needed',
        'Test run and performance verification after repair',
      ]}
      faqs={[
        { q: 'How quickly can you fix my AC?', a: 'Most AC repairs are completed same-day. We carry common parts on every service truck so we can fix most issues in one visit. Emergency service is available 24/7.' },
        { q: 'How much does AC repair cost in Phoenix?', a: 'AC repair costs vary depending on the issue. Minor repairs like capacitor replacement may cost $150–$300. Larger repairs like compressor work range from $600–$1,500. We always provide an upfront quote before any work begins.' },
        { q: 'Should I repair or replace my AC?', a: 'Generally, if your system is under 10 years old and the repair cost is less than 50% of a new system, repair makes sense. Our technicians will give you an honest recommendation based on your specific situation.' },
        { q: 'Do you offer a warranty on repairs?', a: 'Yes. All parts and labor come with a written warranty. Parts are typically warranted for 1 year, and labor for 90 days. Manufacturer warranties on parts may be longer.' },
        { q: 'What AC brands do you repair?', a: 'We repair all major brands including Trane, Carrier, Lennox, Rheem, York, Goodman, American Standard, Daikin, and more.' },
      ]}
      relatedServices={[
        { name: 'AC Installation', href: '/services/ac-installation' },
        { name: 'AC Maintenance', href: '/services/ac-maintenance' },
        { name: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
        { name: 'Ductless Mini Splits', href: '/services/ductless-mini-splits' },
        { name: 'Emergency Service', href: '/emergency' },
      ]}
    />
  )
}
