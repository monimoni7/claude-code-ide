'use client'
import { useState } from 'react'
import { Phone, Calendar, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  title?: string
  subtitle?: string
  service?: string
}

export default function ContactForm({ title = 'Get Your Free Estimate', subtitle = 'We respond within 30 minutes during business hours', service = '' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: service, message: '', urgency: 'scheduled' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-navy-DEFAULT mb-2">We Got Your Request!</h3>
        <p className="text-gray-600 mb-4">Our team will contact you within 30 minutes. For immediate assistance:</p>
        <a href="tel:5558004822" className="btn-primary justify-center w-full">
          <Phone className="w-5 h-5" /> Call (555) 800-4822 Now
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-navy-DEFAULT mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text" required placeholder="Full Name *"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-DEFAULT focus:ring-1 focus:ring-orange-DEFAULT"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="tel" required placeholder="Phone Number *"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-DEFAULT focus:ring-1 focus:ring-orange-DEFAULT"
          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="email" placeholder="Email Address"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-DEFAULT focus:ring-1 focus:ring-orange-DEFAULT"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <select
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-DEFAULT focus:ring-1 focus:ring-orange-DEFAULT text-gray-600"
          value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Select Service *</option>
          <optgroup label="HVAC Services">
            <option>AC Repair</option><option>AC Installation</option><option>AC Maintenance</option>
            <option>Heating Repair</option><option>Heating Installation</option><option>Indoor Air Quality</option>
            <option>Ductless Mini Splits</option><option>Commercial HVAC</option>
          </optgroup>
          <optgroup label="Roofing Services">
            <option>Roof Repair</option><option>Roof Replacement</option><option>Roof Inspection</option>
            <option>Storm Damage</option><option>Emergency Roofing</option><option>Commercial Roofing</option>
            <option>Insurance Claim Help</option>
          </optgroup>
        </select>
        <div>
          <label className="text-xs text-gray-500 font-medium mb-2 block">How urgent is your issue?</label>
          <div className="grid grid-cols-3 gap-2">
            {[['emergency', 'Emergency', '🚨'], ['soon', 'ASAP', '⚡'], ['scheduled', 'Scheduled', '📅']].map(([val, label, icon]) => (
              <button
                key={val} type="button"
                className={`py-2 px-3 rounded-lg text-xs font-medium border-2 transition-all ${form.urgency === val ? 'border-orange-DEFAULT bg-orange-DEFAULT/10 text-orange-DEFAULT' : 'border-gray-200 text-gray-600 hover:border-orange-DEFAULT'}`}
                onClick={() => setForm({ ...form, urgency: val })}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
        <textarea
          placeholder="Describe your issue (optional)"
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-DEFAULT focus:ring-1 focus:ring-orange-DEFAULT resize-none"
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="btn-primary w-full justify-center text-base">
          <Calendar className="w-5 h-5" /> Get My Free Estimate
        </button>
        <p className="text-center text-xs text-gray-400">No spam. No obligation. 100% free.</p>
      </form>
    </div>
  )
}
