'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const hvacServices = [
  { name: 'AC Repair', href: '/services/ac-repair' },
  { name: 'AC Installation', href: '/services/ac-installation' },
  { name: 'AC Maintenance', href: '/services/ac-maintenance' },
  { name: 'Heating Repair', href: '/services/heating-repair' },
  { name: 'Heating Installation', href: '/services/heating-installation' },
  { name: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  { name: 'Ductless Mini Splits', href: '/services/ductless-mini-splits' },
  { name: 'Commercial HVAC', href: '/services/commercial-hvac' },
]

const roofingServices = [
  { name: 'Roof Repair', href: '/services/roof-repair' },
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Inspection', href: '/services/roof-inspection' },
  { name: 'Storm Damage Repair', href: '/services/storm-damage' },
  { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
  { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
  { name: 'Insurance Claims', href: '/services/insurance-claims' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-orange-DEFAULT rounded-lg p-2">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-navy-DEFAULT text-lg leading-tight">ProClimate</div>
              <div className="text-xs text-gray-500 leading-tight">HVAC & Roofing</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 min-w-[600px] grid grid-cols-2 gap-6 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div>
                    <div className="text-xs font-bold text-orange-DEFAULT uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      HVAC Services
                    </div>
                    {hvacServices.map((s) => (
                      <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-gray-600 hover:text-orange-DEFAULT hover:translate-x-1 transition-all">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-orange-DEFAULT uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      Roofing Services
                    </div>
                    {roofingServices.map((s) => (
                      <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-gray-600 hover:text-orange-DEFAULT hover:translate-x-1 transition-all">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/service-areas" className="text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors">Service Areas</Link>
            <Link href="/financing" className="text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors">Financing</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors">About</Link>
            <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-orange-DEFAULT transition-colors">Reviews</Link>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:5558004822" className="flex items-center gap-2 text-navy-DEFAULT font-bold hover:text-orange-DEFAULT transition-colors">
              <div className="bg-orange-DEFAULT/10 rounded-full p-2">
                <Phone className="w-4 h-4 text-orange-DEFAULT" />
              </div>
              <div>
                <div className="text-xs text-gray-500">24/7 Emergency</div>
                <div className="text-sm">(555) 800-4822</div>
              </div>
            </a>
            <Link href="/contact" className="btn-primary text-sm py-3 px-6">
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <a href="tel:5558004822" className="flex items-center gap-3 bg-orange-DEFAULT text-white p-4 rounded-xl font-bold text-lg">
              <Phone className="w-6 h-6" />
              (555) 800-4822 — Call Now
            </a>
            <Link href="/" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</Link>
            <div>
              <div className="text-xs font-bold text-orange-DEFAULT uppercase tracking-wider mb-2">HVAC Services</div>
              {hvacServices.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 pl-4 text-sm text-gray-600 border-b border-gray-50" onClick={() => setMobileOpen(false)}>{s.name}</Link>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold text-orange-DEFAULT uppercase tracking-wider mb-2">Roofing Services</div>
              {roofingServices.map((s) => (
                <Link key={s.href} href={s.href} className="block py-2 pl-4 text-sm text-gray-600 border-b border-gray-50" onClick={() => setMobileOpen(false)}>{s.name}</Link>
              ))}
            </div>
            <Link href="/service-areas" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Service Areas</Link>
            <Link href="/financing" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Financing</Link>
            <Link href="/about" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/reviews" className="block py-2 text-gray-700 font-medium border-b border-gray-100" onClick={() => setMobileOpen(false)}>Reviews</Link>
            <Link href="/contact" className="block btn-primary text-center" onClick={() => setMobileOpen(false)}>Get Free Estimate</Link>
          </div>
        </div>
      )}
    </header>
  )
}
