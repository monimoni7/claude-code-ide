import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Clock, Star, CheckCircle, ArrowRight, Zap, DollarSign, ThumbsUp, AlertTriangle } from 'lucide-react'
import ReviewCard from '@/components/ReviewCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'ProClimate HVAC & Roofing | Phoenix AC Repair & Roof Replacement',
  description: 'Greater Phoenix\'s top-rated HVAC & Roofing company. 24/7 emergency service, free estimates, financing available. AC repair, roof replacement & more. Call (555) 800-4822.',
}

const hvacServices = [
  { name: 'AC Repair', desc: 'Fast diagnosis & repair — same day available', href: '/services/ac-repair', icon: '❄️' },
  { name: 'AC Installation', desc: 'Energy-efficient systems with expert installation', href: '/services/ac-installation', icon: '🔧' },
  { name: 'AC Maintenance', desc: 'Annual tune-ups to prevent breakdowns', href: '/services/ac-maintenance', icon: '⚙️' },
  { name: 'Heating Repair', desc: 'Keep your home warm all winter long', href: '/services/heating-repair', icon: '🔥' },
  { name: 'Heating Installation', desc: 'High-efficiency furnaces & heat pumps', href: '/services/heating-installation', icon: '🏠' },
  { name: 'Indoor Air Quality', desc: 'Breathe cleaner, healthier air', href: '/services/indoor-air-quality', icon: '💨' },
  { name: 'Ductless Mini Splits', desc: 'Flexible, efficient zone cooling & heating', href: '/services/ductless-mini-splits', icon: '🌡️' },
  { name: 'Commercial HVAC', desc: 'Business-grade HVAC solutions', href: '/services/commercial-hvac', icon: '🏢' },
]

const roofingServices = [
  { name: 'Roof Repair', desc: 'Stop leaks fast — certified roofers', href: '/services/roof-repair', icon: '🔨' },
  { name: 'Roof Replacement', desc: 'Full replacement with premium materials', href: '/services/roof-replacement', icon: '🏚️' },
  { name: 'Roof Inspection', desc: 'Thorough inspection & detailed report', href: '/services/roof-inspection', icon: '🔍' },
  { name: 'Storm Damage Repair', desc: 'Emergency repairs after storms', href: '/services/storm-damage', icon: '⛈️' },
  { name: 'Emergency Roofing', desc: '24/7 emergency tarping & repairs', href: '/services/emergency-roofing', icon: '🚨' },
  { name: 'Commercial Roofing', desc: 'Flat & low-slope commercial solutions', href: '/services/commercial-roofing', icon: '🏗️' },
  { name: 'Insurance Claims', desc: 'We handle the entire claims process', href: '/services/insurance-claims', icon: '📋' },
]

const reviews = [
  { name: 'Jennifer M.', location: 'Scottsdale, AZ', rating: 5, text: 'My AC went out on the hottest day of the year. ProClimate had a tech at my door within 90 minutes. Fixed fast, price was fair, and the tech was super professional. Won\'t call anyone else!', service: 'AC Repair', date: '1 week ago' },
  { name: 'Robert T.', location: 'Chandler, AZ', rating: 5, text: 'Had ProClimate replace my entire roof after monsoon damage. The crew was clean, efficient, and the quality of work is outstanding. They handled my insurance claim too — took all the stress away!', service: 'Roof Replacement', date: '2 weeks ago' },
  { name: 'Linda H.', location: 'Gilbert, AZ', rating: 5, text: "Been using ProClimate for 4 years for annual HVAC tune-ups. They're always on time, always thorough, always honest. Best home service company I've ever used.", service: 'HVAC Maintenance', date: '3 weeks ago' },
]

const cities = ['Phoenix', 'Scottsdale', 'Tempe', 'Chandler', 'Gilbert', 'Mesa', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Litchfield Park', 'Sun City', 'Paradise Valley', 'Fountain Hills']

const faqs = [
  { q: 'How quickly can you respond to an emergency?', a: 'We offer same-day and emergency service 24/7. Most emergency calls are responded to within 1-2 hours, often faster in the Phoenix metro area.' },
  { q: 'Do you offer free estimates?', a: 'Yes — all inspections and estimates are 100% free with absolutely no obligation to book.' },
  { q: 'Are you licensed and insured?', a: 'Yes. We are fully licensed (ROC #298745), bonded, and insured for all HVAC and roofing work in Arizona.' },
  { q: 'Do you offer financing?', a: 'Yes! We offer multiple financing options including 0% interest plans for qualified customers. Apply in 60 seconds online.' },
  { q: 'What areas do you serve?', a: 'We serve Phoenix, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Glendale, Peoria, and all surrounding Greater Phoenix communities.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-DEFAULT rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-DEFAULT rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-DEFAULT/20 border border-orange-DEFAULT/30 text-orange-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              Greater Phoenix&apos;s #1 Rated HVAC & Roofing Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert HVAC & Roofing —{' '}
              <span className="text-orange-DEFAULT">When Comfort Can&apos;t Wait</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable, licensed service across Phoenix, Scottsdale, Chandler, Gilbert, Mesa & beyond. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:5558004822" className="btn-primary text-lg py-5 px-8">
                <Phone className="w-5 h-5" /> Call (555) 800-4822
              </a>
              <Link href="/contact" className="btn-secondary text-lg py-5 px-8 border-white text-navy-DEFAULT">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {[['4.9★ Google Rated', Star], ['500+ Reviews', ThumbsUp], ['15+ Years', Shield], ['Licensed & Insured', CheckCircle]].map(([label, Icon]) => (
                <div key={label as string} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-orange-DEFAULT" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 shadow-2xl">
              <ContactForm title="Get Your Free Estimate" subtitle="We respond within 30 minutes" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white shadow-md py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['4.9 / 5.0', 'Google Star Rating'], ['500+', '5-Star Reviews'], ['15+', 'Years in Business'], ['10,000+', 'Jobs Completed']].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-orange-DEFAULT">{num}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Complete HVAC & Roofing Solutions</h2>
            <p className="section-subtitle">Everything your home needs — one trusted company.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* HVAC */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-DEFAULT rounded-xl p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-DEFAULT">HVAC Services</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hvacServices.map((s) => (
                  <Link key={s.href} href={s.href} className="service-card">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="font-bold text-navy-DEFAULT group-hover:text-orange-DEFAULT transition-colors">{s.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{s.desc}</div>
                    <div className="text-orange-DEFAULT text-xs font-semibold mt-2 flex items-center gap-1">Learn More <ArrowRight className="w-3 h-3" /></div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Roofing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-navy-DEFAULT rounded-xl p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-DEFAULT">Roofing Services</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roofingServices.map((s) => (
                  <Link key={s.href} href={s.href} className="service-card">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="font-bold text-navy-DEFAULT group-hover:text-orange-DEFAULT transition-colors">{s.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{s.desc}</div>
                    <div className="text-orange-DEFAULT text-xs font-semibold mt-2 flex items-center gap-1">Learn More <ArrowRight className="w-3 h-3" /></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Phoenix Trusts ProClimate</h2>
            <p className="section-subtitle">We built our reputation one satisfied customer at a time.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: 'Same-Day Service', desc: 'Available 7 days a week. We show up when you need us most.', color: 'bg-blue-50 text-blue-600' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'ROC licensed, fully bonded and insured for complete peace of mind.', color: 'bg-green-50 text-green-600' },
              { icon: DollarSign, title: 'Upfront Pricing', desc: 'No hidden fees — ever. You approve the price before we start.', color: 'bg-yellow-50 text-yellow-600' },
              { icon: Zap, title: 'Financing Available', desc: '0% interest financing options available for qualified customers.', color: 'bg-purple-50 text-purple-600' },
              { icon: ThumbsUp, title: 'Satisfaction Guarantee', desc: "If you're not happy, we make it right — no questions asked.", color: 'bg-orange-50 text-orange-600' },
              { icon: AlertTriangle, title: '24/7 Emergency', desc: 'Day, night, weekends, holidays — we are always here for you.', color: 'bg-red-50 text-red-600' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-DEFAULT mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">3 Simple Steps to Home Comfort</h2>
            <p className="section-subtitle">Getting expert help has never been easier.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-orange-DEFAULT/30" />
            {[
              { num: '01', title: 'Call or Book Online', desc: 'Reach us 24/7 by phone or book online in minutes. We confirm your appointment immediately.' },
              { num: '02', title: 'Free Inspection & Estimate', desc: 'A certified technician arrives on time, assesses your situation, and gives you an upfront price.' },
              { num: '03', title: 'Expert Service, Guaranteed', desc: 'We complete the job with precision, clean up completely, and guarantee our work in writing.' },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-24 h-24 bg-navy-DEFAULT rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-orange-DEFAULT">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:5558004822" className="btn-primary text-lg">
              <Phone className="w-5 h-5" /> Start Now — Call (555) 800-4822
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="flex justify-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <h2 className="section-title mb-2">What Our Customers Say</h2>
            <p className="text-gray-500">4.9 stars — 500+ verified Google reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">View All 500+ Reviews <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title mb-3">Proudly Serving the Greater Phoenix Area</h2>
          <p className="section-subtitle mb-8">If you&apos;re in the Valley, we come to you — fast.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <Link key={city} href="/service-areas" className="bg-white border border-gray-200 hover:border-orange-DEFAULT hover:text-orange-DEFAULT text-gray-700 px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md">
                {city}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/service-areas" className="text-orange-DEFAULT font-semibold hover:underline text-sm">
              See All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-white/80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">HVAC or Roof Emergency? We&apos;re Ready.</h2>
          <p className="text-xl text-white/90 mb-8">Available 24/7/365 — including weekends and holidays. Call now for immediate response.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="bg-white text-orange-DEFAULT font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (555) 800-4822 — Call Now
            </a>
            <Link href="/emergency" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Emergency Info
            </Link>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-navy-DEFAULT text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Don&apos;t Let Cost Stop You</h2>
            <p className="text-gray-400 text-lg">Flexible financing options to fit any budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: '0% Interest', subtitle: 'For 12 months on approved credit', icon: '💳' },
              { title: 'Low Monthly Payments', subtitle: 'Starting at $49/month', icon: '📅' },
              { title: 'Quick Approval', subtitle: 'Apply online in 60 seconds', icon: '⚡' },
            ].map((f) => (
              <div key={f.title} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-3">{f.icon}</div>
                <div className="text-xl font-bold mb-1">{f.title}</div>
                <div className="text-gray-400 text-sm">{f.subtitle}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/financing" className="btn-primary text-lg">
              Learn About Financing <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-orange-DEFAULT transition-colors">
                <h3 className="font-bold text-navy-DEFAULT mb-2 flex items-start gap-2">
                  <span className="text-orange-DEFAULT font-bold">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the ProClimate Difference?</h2>
          <p className="text-gray-400 mb-8 text-lg">Free estimates. Same-day service. 100% satisfaction guaranteed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg py-5 px-10">
              <Phone className="w-5 h-5" /> Call (555) 800-4822
            </a>
            <Link href="/contact" className="btn-secondary text-lg py-5 px-10 text-navy-DEFAULT">
              Book Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
