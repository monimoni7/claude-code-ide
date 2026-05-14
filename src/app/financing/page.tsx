import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, DollarSign, Zap, Calendar } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'HVAC & Roofing Financing | 0% Interest Options — ProClimate Phoenix',
  description: 'Flexible financing for HVAC and roofing in Phoenix. 0% interest, low monthly payments, quick approval. Don\'t let budget stop your comfort.',
}

export default function FinancingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Financing Options</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Don&apos;t Let Cost Get Between You and Comfort</h1>
            <p className="text-xl text-gray-300 mb-8">We believe everyone deserves a safe, comfortable home. Our flexible financing makes it possible — no matter your budget.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5558004822" className="btn-primary"><Phone className="w-5 h-5" /> Ask About Financing</a>
              <Link href="/contact" className="btn-secondary text-navy-DEFAULT">Apply Online</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: DollarSign, title: '0% Interest Financing', desc: 'For 12–18 months on approved credit. No interest if paid in full.' },
              { icon: Calendar, title: 'Low Monthly Payments', desc: 'Spread the cost with payments as low as $49/month.' },
              { icon: Zap, title: '60-Second Pre-Approval', desc: 'Check your eligibility online with no credit score impact.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-xl p-5 flex items-start gap-4">
                <div className="bg-orange-DEFAULT rounded-lg p-2 flex-shrink-0"><Icon className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="font-bold text-white">{title}</div>
                  <div className="text-gray-300 text-sm mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-DEFAULT mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { num: '01', title: 'Apply in 60 Seconds', desc: 'Fill out our short online application. It won\'t affect your credit score to check eligibility.' },
                { num: '02', title: 'Get Approved Instantly', desc: 'Most customers receive a decision within minutes. Multiple lender options available.' },
                { num: '03', title: 'Schedule Your Service', desc: 'Once approved, we schedule your HVAC or roofing service at your convenience.' },
                { num: '04', title: 'Enjoy Comfortable Payments', desc: 'Make simple monthly payments that fit your budget. No surprise fees.' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-DEFAULT rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <div className="font-bold text-navy-DEFAULT">{step.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-navy-DEFAULT mb-4">What You Can Finance</h3>
              {['New AC system installation', 'Heating system replacement', 'Full roof replacement', 'Emergency HVAC repairs', 'Ductless mini split installation', 'Commercial HVAC projects', 'Indoor air quality systems', 'Storm damage roof repairs'].map(item => (
                <div key={item} className="flex items-center gap-2 py-1">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm title="Apply for Financing" subtitle="Quick application — no obligation" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Questions About Financing?</h2>
          <p className="text-gray-400 mb-8">Our team can walk you through all available options over the phone.</p>
          <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> Call (555) 800-4822</a>
        </div>
      </section>
    </>
  )
}
