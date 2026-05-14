import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact ProClimate HVAC & Roofing | Free Estimates — Phoenix, AZ',
  description: 'Contact ProClimate for fast HVAC & roofing service in Phoenix. Call (555) 800-4822 for 24/7 emergency service or book a free estimate online.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Estimate Today</h1>
          <p className="text-xl text-gray-300">We respond within 30 minutes. Emergency? Call us directly.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm title="Tell Us About Your Project" subtitle="Fill out the form and we'll be in touch shortly" />
          </div>
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-DEFAULT mb-4">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Phone', value: '(555) 800-4822', href: 'tel:5558004822' },
                  { icon: Mail, label: 'Email', value: 'info@proclimate.com', href: 'mailto:info@proclimate.com' },
                  { icon: MapPin, label: 'Office', value: '123 Commerce Dr, Phoenix, AZ 85001', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-orange-DEFAULT/10 rounded-lg p-2 flex-shrink-0">
                      <Icon className="w-4 h-4 text-orange-DEFAULT" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{label}</div>
                      <a href={href} className="text-navy-DEFAULT font-semibold text-sm hover:text-orange-DEFAULT transition-colors">{value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-DEFAULT mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-orange-DEFAULT" /> Hours of Operation</h3>
              <div className="space-y-2 text-sm">
                {[['Monday – Friday', '7:00 AM – 8:00 PM'], ['Saturday', '8:00 AM – 6:00 PM'], ['Sunday', '9:00 AM – 5:00 PM'], ['Emergency Service', '24/7/365']].map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-600">{day}</span>
                    <span className="font-semibold text-navy-DEFAULT">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-DEFAULT rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2"><MessageSquare className="w-5 h-5" /><span className="font-bold">Prefer to Text?</span></div>
              <p className="text-sm text-orange-100 mb-3">Send us a text and we&apos;ll reply within minutes.</p>
              <a href="sms:5558004822" className="bg-white text-orange-DEFAULT font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-100 transition-colors inline-block">
                Text (555) 800-4822
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
