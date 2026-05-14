import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-navy-DEFAULT text-white">
      {/* Top CTA Bar */}
      <div className="bg-orange-DEFAULT py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold">Ready to Get Started?</div>
            <div className="text-orange-100 text-sm">Free estimates — no obligation</div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:5558004822" className="bg-white text-orange-DEFAULT font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> (555) 800-4822
            </a>
            <Link href="/contact" className="bg-navy-DEFAULT text-white font-bold py-3 px-6 rounded-lg hover:bg-navy-light transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-DEFAULT rounded-lg p-2">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-lg leading-tight">ProClimate</div>
              <div className="text-xs text-gray-400 leading-tight">HVAC & Roofing</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Greater Phoenix's most trusted HVAC & Roofing experts. Licensed, insured, and committed to excellence since 2008.
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-DEFAULT" /><a href="tel:5558004822" className="hover:text-white">(555) 800-4822</a></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-DEFAULT" /><a href="mailto:info@proclimate.com" className="hover:text-white">info@proclimate.com</a></div>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-orange-DEFAULT mt-0.5" /><span>123 Commerce Dr, Phoenix, AZ 85001</span></div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-white/10 hover:bg-orange-DEFAULT p-2 rounded-lg transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="bg-white/10 hover:bg-orange-DEFAULT p-2 rounded-lg transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="bg-white/10 hover:bg-orange-DEFAULT p-2 rounded-lg transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        {/* HVAC Services */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">HVAC Services</h4>
          <ul className="space-y-2">
            {[['AC Repair', '/services/ac-repair'], ['AC Installation', '/services/ac-installation'], ['AC Maintenance', '/services/ac-maintenance'], ['Heating Repair', '/services/heating-repair'], ['Heating Installation', '/services/heating-installation'], ['Indoor Air Quality', '/services/indoor-air-quality'], ['Ductless Mini Splits', '/services/ductless-mini-splits'], ['Commercial HVAC', '/services/commercial-hvac']].map(([name, href]) => (
              <li key={href}><Link href={href} className="text-gray-400 hover:text-orange-DEFAULT text-sm transition-colors">{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Roofing Services */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Roofing Services</h4>
          <ul className="space-y-2">
            {[['Roof Repair', '/services/roof-repair'], ['Roof Replacement', '/services/roof-replacement'], ['Roof Inspection', '/services/roof-inspection'], ['Storm Damage Repair', '/services/storm-damage'], ['Emergency Roofing', '/services/emergency-roofing'], ['Commercial Roofing', '/services/commercial-roofing'], ['Insurance Claims', '/services/insurance-claims']].map(([name, href]) => (
              <li key={href}><Link href={href} className="text-gray-400 hover:text-orange-DEFAULT text-sm transition-colors">{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 mb-6">
            {[['About Us', '/about'], ['Reviews', '/reviews'], ['Financing', '/financing'], ['Service Areas', '/service-areas'], ['Maintenance Plans', '/maintenance-plans'], ['Emergency Service', '/emergency'], ['Careers', '/careers'], ['Blog', '/blog'], ['Contact', '/contact']].map(([name, href]) => (
              <li key={href}><Link href={href} className="text-gray-400 hover:text-orange-DEFAULT text-sm transition-colors">{name}</Link></li>
            ))}
          </ul>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-xs text-gray-400 mb-1">Google Rating</div>
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <div className="font-bold text-white">4.9 / 5.0</div>
            <div className="text-xs text-gray-400">Based on 500+ reviews</div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <div>© {currentYear} ProClimate HVAC & Roofing. All rights reserved. License #ROC-298745 | #CR-42891</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
