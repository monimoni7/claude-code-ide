import { Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function StickyCallBar() {
  return (
    <div className="sticky-call">
      <a href="tel:5558004822" className="flex-1 bg-orange-DEFAULT text-white font-bold py-4 text-center flex items-center justify-center gap-2 text-sm">
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <Link href="/contact" className="flex-1 bg-navy-DEFAULT text-white font-bold py-4 text-center flex items-center justify-center gap-2 text-sm">
        <Calendar className="w-5 h-5" />
        Book Online
      </Link>
    </div>
  )
}
