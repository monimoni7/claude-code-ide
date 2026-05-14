import Link from 'next/link'
import { Phone, AlertTriangle } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div className="bg-orange-DEFAULT text-white py-2 px-4 text-center text-sm font-semibold">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <span className="flex items-center gap-1.5 emergency-pulse">
          <AlertTriangle className="w-4 h-4" />
          24/7 EMERGENCY SERVICE AVAILABLE
        </span>
        <span className="hidden sm:inline text-orange-100">|</span>
        <a href="tel:5558004822" className="flex items-center gap-1.5 hover:underline font-bold">
          <Phone className="w-4 h-4" />
          (555) 800-4822
        </a>
        <span className="hidden sm:inline text-orange-100">|</span>
        <Link href="/emergency" className="underline hover:no-underline text-xs">
          Emergency Info →
        </Link>
      </div>
    </div>
  )
}
