import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Award, Users, CheckCircle, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'About ProClimate HVAC & Roofing | Phoenix\'s Trusted Home Service Experts',
  description: 'Learn about ProClimate — Greater Phoenix\'s most trusted HVAC and roofing company. 15+ years of experience, family owned, licensed & insured.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">About Us</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phoenix&apos;s Most Trusted HVAC & Roofing Team</h1>
            <p className="text-xl text-gray-300 mb-8">Family-owned, community-driven, and committed to excellence since 2008. We&apos;ve built our reputation one satisfied customer at a time.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5558004822" className="btn-primary"><Phone className="w-5 h-5" /> Call Us Today</a>
              <Link href="/contact" className="btn-secondary text-navy-DEFAULT">Get Free Estimate</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['15+', 'Years in Business'], ['500+', '5-Star Reviews'], ['10,000+', 'Jobs Completed'], ['24/7', 'Emergency Service']].map(([num, label]) => (
              <div key={label} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-DEFAULT">{num}</div>
                <div className="text-sm text-gray-300 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-DEFAULT mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">ProClimate was founded in 2008 by Marcus and Elena Reyes, two Arizona natives who saw a gap in the market: homeowners needed a trustworthy, professional HVAC and roofing company that actually showed up on time and didn&apos;t overcharge.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">Starting with a single van and a commitment to doing right by every customer, ProClimate grew quickly — not through advertising alone, but through word of mouth. Neighbor told neighbor. Family referred family.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">Today, we operate a fleet of 30+ service vehicles, employ over 80 certified technicians and roofers, and serve tens of thousands of homeowners and businesses across Greater Phoenix. But our values haven&apos;t changed: honesty, quality, and genuine care for our customers.</p>
            <div className="flex flex-col gap-3">
              {['Family-owned and operated since 2008', 'Over 80 certified HVAC & roofing professionals', '4.9-star Google rating with 500+ reviews', 'Licensed, bonded, and insured — ROC #298745'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-DEFAULT mb-6">Our Certifications</h3>
            <div className="space-y-4">
              {[
                { icon: Shield, title: 'ROC Licensed — #298745', desc: 'Registered with the Arizona Registrar of Contractors' },
                { icon: Award, title: 'NATE Certified Technicians', desc: 'North American Technician Excellence certification' },
                { icon: Award, title: 'BBB Accredited — A+ Rating', desc: 'Better Business Bureau accredited since 2010' },
                { icon: Users, title: 'ACCA Member', desc: 'Air Conditioning Contractors of America member' },
                { icon: Shield, title: 'GAF Master Elite Roofer', desc: 'Top 3% of roofing contractors nationwide' },
                { icon: Award, title: 'Energy Star Partner', desc: 'Certified to install Energy Star rated equipment' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="bg-orange-DEFAULT/10 rounded-lg p-2 flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-DEFAULT" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-DEFAULT text-sm">{title}</div>
                    <div className="text-gray-500 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🤝', title: 'Honesty', desc: 'We tell you what you need — not what makes us the most money.' },
              { emoji: '⚡', title: 'Speed', desc: 'Fast response, fast service, fast resolution. Your time matters.' },
              { emoji: '🏆', title: 'Quality', desc: 'We use premium materials and certified techniques on every job.' },
              { emoji: '💛', title: 'Care', desc: 'We treat your home like our own — with respect and attention to detail.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="text-xl font-bold text-navy-DEFAULT mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Meet the Team That Has Your Back</h2>
          <p className="text-gray-400 mb-8">Ready to experience the ProClimate difference? Get a free estimate today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Book Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
