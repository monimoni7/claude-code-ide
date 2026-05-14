import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Heating Installation Phoenix, AZ | Furnace & Heat Pump Install — ProClimate',
  description: 'New furnace or heat pump installation in Phoenix. High-efficiency systems, expert installation, and financing available. Free estimates. Call (555) 800-4822.',
}

export default function HeatingInstallationPage() {
  return (
    <ServicePageTemplate
      title="Heating Installation in Phoenix, AZ"
      subtitle="High-efficiency heating systems installed right the first time."
      description="Whether you're upgrading an aging furnace or installing a new heat pump system, proper installation is critical for performance, efficiency, and longevity. Our factory-trained technicians ensure your new heating system delivers maximum comfort and efficiency for decades."
      service="Heating Installation"
      category="hvac"
      benefits={[
        'Free in-home assessment and system recommendation',
        'High-efficiency gas furnaces and heat pump systems available',
        'Energy Star certified equipment for utility rebate eligibility',
        'Factory-trained installation technicians',
        'Financing available — 0% interest for qualified buyers',
        '10-year manufacturer equipment warranty',
        '1-year labor warranty on installation',
        'Old system removal and disposal included',
      ]}
      features={[
        'Free in-home heating load calculation',
        'Custom system recommendation for your home\'s specific needs',
        'Complete removal of old heating equipment',
        'New system installation including all connections and venting',
        'Ductwork inspection and repairs if needed',
        'Thermostat upgrade including smart thermostat options',
        'System start-up, commissioning, and performance testing',
        'Homeowner orientation and operational walkthrough',
      ]}
      faqs={[
        { q: 'What type of heating system is best for Phoenix?', a: 'Heat pumps are extremely efficient in the Phoenix climate because winters are mild. For homes with gas, a high-efficiency gas furnace is a great option. We\'ll help you choose based on your home\'s existing infrastructure and budget.' },
        { q: 'How much does heating installation cost?', a: 'Heating system installation in Phoenix typically ranges from $2,500 to $6,000 for a gas furnace or heat pump, depending on system size and efficiency. We provide free, detailed estimates.' },
        { q: 'How long does installation take?', a: 'Most residential heating installations are completed in one day. We\'ll give you an accurate timeline during your free estimate.' },
        { q: 'Do you offer financing?', a: 'Yes — we offer 0% interest financing for qualified customers with payments as low as $49/month. Apply online in 60 seconds.' },
        { q: 'What brands do you install?', a: 'We install Carrier, Trane, Lennox, and Rheem heating systems. We\'ll recommend the best fit for your home and budget.' },
      ]}
      relatedServices={[
        { name: 'Heating Repair', href: '/services/heating-repair' },
        { name: 'AC Installation', href: '/services/ac-installation' },
        { name: 'Ductless Mini Splits', href: '/services/ductless-mini-splits' },
        { name: 'Financing', href: '/financing' },
        { name: 'Maintenance Plans', href: '/maintenance-plans' },
      ]}
    />
  )
}
