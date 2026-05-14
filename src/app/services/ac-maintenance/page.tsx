import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'AC Maintenance & Tune-Up Phoenix, AZ | ProClimate HVAC',
  description: 'Annual AC tune-up and maintenance in Phoenix. Prevent breakdowns, extend system life, and lower energy bills. Book online or call (555) 800-4822.',
}

export default function ACMaintenancePage() {
  return (
    <ServicePageTemplate
      title="AC Maintenance & Tune-Up in Phoenix, AZ"
      subtitle="Prevent breakdowns. Extend system life. Save on energy bills."
      description="Annual AC maintenance is the single best investment you can make in your comfort. A properly tuned system runs 15% more efficiently, lasts 5+ years longer, and is far less likely to fail when you need it most — during a Phoenix summer heat wave."
      service="AC Maintenance"
      category="hvac"
      benefits={[
        'Comprehensive 24-point system inspection and tune-up',
        'Extends AC system lifespan by 5+ years on average',
        'Reduces energy consumption by up to 15%',
        'Identifies small problems before they become expensive repairs',
        'Improves indoor air quality and air circulation',
        'Maintains manufacturer warranty compliance',
        'Available as part of our ProComfort maintenance plan',
        'Scheduling reminders so you never miss a tune-up',
      ]}
      features={[
        'Inspect and clean evaporator and condenser coils',
        'Check and tighten all electrical connections',
        'Measure refrigerant levels and check for leaks',
        'Lubricate all moving parts and motor bearings',
        'Clean and flush condensate drain line',
        'Inspect and replace air filter if needed',
        'Test thermostat calibration and operation',
        'Check system airflow and static pressure',
        'Measure system efficiency and performance',
        'Provide written report with findings and recommendations',
      ]}
      faqs={[
        { q: 'How often should I service my AC?', a: 'We recommend annual maintenance — ideally in the spring before Phoenix summer heat arrives. If you have a heat pump, twice-yearly service (spring and fall) is recommended.' },
        { q: 'How much does AC maintenance cost?', a: 'A single AC tune-up runs $89–$149 depending on system type and size. Our annual maintenance plans start at $149 and include additional benefits like priority service and repair discounts.' },
        { q: 'What does an AC tune-up include?', a: 'Our 24-point tune-up covers coil cleaning, refrigerant check, electrical inspection, filter replacement, drain line flush, thermostat calibration, and a full performance test — plus a written report.' },
        { q: 'Can maintenance really prevent breakdowns?', a: 'Yes — studies show that well-maintained AC systems are 95% less likely to break down. Most emergency repairs we see could have been prevented with regular maintenance.' },
        { q: 'Do you offer maintenance plans?', a: 'Yes! Our ProComfort plan covers two tune-ups per year, priority scheduling, and a 15% discount on any repairs for $249/year. Our most popular option for Phoenix homeowners.' },
      ]}
      relatedServices={[
        { name: 'AC Repair', href: '/services/ac-repair' },
        { name: 'AC Installation', href: '/services/ac-installation' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
        { name: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
        { name: 'Heating Repair', href: '/services/heating-repair' },
      ]}
    />
  )
}
