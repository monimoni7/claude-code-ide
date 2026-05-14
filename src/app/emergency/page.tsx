import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, AlertTriangle, Clock, Shield, CheckCircle, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: '24/7 Emergency HVAC & Roofing Service | ProClimate — Phoenix, AZ',
  description: 'AC emergency? Roof leaking? ProClimate offers 24/7 emergency HVAC and roofing service across Greater Phoenix. Call (555) 800-4822 now for immediate response.',
}

export default function EmergencyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-700 to-orange-DEFAULT text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-white/90" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Emergency Service — 24/7</h1>
          <p className="text-xl text-white/90 mb-8">HVAC failure or roof leak? Don&apos;t wait. We respond day, night, weekends, and holidays.</p>
          <a href="tel:5558004822" className="bg-white text-red-600 font-bold text-2xl py-6 px-12 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-2xl">
            <Phone className="w-8 h-8" /> (555) 800-4822
          </a>
          <p className="text-white/70 mt-4 text-sm">Average response time: Under 90 minutes</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">What Counts as an Emergency?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-navy-DEFAULT mb-4 flex items-center gap-2">
                <span className="text-2xl">❄️</span> HVAC Emergencies
              </h3>
              <div className="space-y-3">
                {['AC completely stopped working in extreme heat', 'No heat during cold nights (especially with children/elderly)', 'Gas smell near furnace (leave immediately & call 911 first)', 'Electrical issues with HVAC system — sparking or burning smell', 'Refrigerant leak causing system failure', 'Flooding from HVAC condensation line backup'].map(item => (
                  <div key={item} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-DEFAULT mb-4 flex items-center gap-2">
                <span className="text-2xl">🏠</span> Roofing Emergencies
              </h3>
              <div className="space-y-3">
                {['Active roof leak causing interior damage', 'Tree or debris impact causing structural damage', 'Storm damage with exposed roof decking', 'Collapsed roof section or serious sagging', 'Hail damage leaving your home vulnerable', 'Wind-lifted shingles exposing underlayment'].map(item => (
                  <div key={item} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Our Emergency Response Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', icon: Phone, title: 'You Call', desc: 'Call (555) 800-4822 any time. A real person answers — always.' },
              { num: '02', icon: Zap, title: 'We Dispatch', desc: 'The nearest available technician is dispatched immediately.' },
              { num: '03', icon: Clock, title: 'Fast Arrival', desc: 'Typical response time is under 90 minutes in the Phoenix metro.' },
              { num: '04', icon: Shield, title: 'Problem Solved', desc: 'We assess, quote, and resolve the issue as fast as safely possible.' },
            ].map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-16 h-16 bg-orange-DEFAULT rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-orange-DEFAULT mb-1">{num}</div>
                <h3 className="font-bold text-navy-DEFAULT mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t Wait — Call Now</h2>
          <p className="text-red-100 mb-8">Every minute counts in an emergency. Our team is standing by 24/7.</p>
          <a href="tel:5558004822" className="bg-white text-red-600 font-bold text-xl py-5 px-10 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3">
            <Phone className="w-6 h-6" /> (555) 800-4822
          </a>
        </div>
      </section>
    </>
  )
}
