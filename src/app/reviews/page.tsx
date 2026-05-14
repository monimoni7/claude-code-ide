import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Star, ArrowRight } from 'lucide-react'
import ReviewCard from '@/components/ReviewCard'

export const metadata: Metadata = {
  title: '500+ 5-Star Reviews | ProClimate HVAC & Roofing — Phoenix, AZ',
  description: 'Read 500+ verified 5-star reviews for ProClimate HVAC & Roofing. Phoenix\'s most trusted home service company. See why customers keep coming back.',
}

const reviews = [
  { name: 'Jennifer M.', location: 'Scottsdale, AZ', rating: 5, text: 'My AC went out on the hottest day of the year. ProClimate had a tech at my door within 90 minutes. Fixed fast, price was fair. Won\'t call anyone else!', service: 'AC Repair', date: '1 week ago' },
  { name: 'Robert T.', location: 'Chandler, AZ', rating: 5, text: 'Had ProClimate replace my entire roof after monsoon damage. The crew was clean, efficient, and the quality of work is outstanding. They handled my insurance claim too!', service: 'Roof Replacement', date: '2 weeks ago' },
  { name: 'Linda H.', location: 'Gilbert, AZ', rating: 5, text: "Been using ProClimate for 4 years for annual HVAC tune-ups. They're always on time, always thorough, always honest. Best home service company I've ever used.", service: 'HVAC Maintenance', date: '3 weeks ago' },
  { name: 'Kevin P.', location: 'Mesa, AZ', rating: 5, text: 'Got 3 quotes for a new AC system. ProClimate wasn\'t the cheapest but they were the most thorough. 6 months later, couldn\'t be happier. Great investment.', service: 'AC Installation', date: '1 month ago' },
  { name: 'Diane S.', location: 'Phoenix, AZ', rating: 5, text: 'Emergency roof leak at 10 PM. ProClimate answered immediately, dispatched a crew, and had my roof tarped within the hour. Saved my house from serious damage.', service: 'Emergency Roofing', date: '1 month ago' },
  { name: 'Tom and Maria V.', location: 'Peoria, AZ', rating: 5, text: 'ProClimate installed ductless mini splits in our home addition. The team was professional, knowledgeable, and the work is impeccable. Highly recommended!', service: 'Ductless Mini Splits', date: '6 weeks ago' },
  { name: 'Sandra K.', location: 'Tempe, AZ', rating: 5, text: 'The air quality system they installed has changed our lives. My husband\'s allergies are so much better. The team explained everything clearly and the price was fair.', service: 'Indoor Air Quality', date: '2 months ago' },
  { name: 'Brian N.', location: 'Glendale, AZ', rating: 5, text: 'ProClimate handled my roof insurance claim from start to finish. I barely had to do anything. New roof looks amazing and the whole process was stress-free.', service: 'Insurance Claims', date: '2 months ago' },
  { name: 'Rachel W.', location: 'Gilbert, AZ', rating: 5, text: 'Heating system went out in January. ProClimate came out same day, diagnosed the problem quickly, and had us back up and running by evening. Excellent service!', service: 'Heating Repair', date: '3 months ago' },
]

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Customer Reviews</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">500+ Five-Star Reviews</h1>
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />)}
          </div>
          <p className="text-xl text-gray-300">4.9 / 5.0 — Verified Google Reviews</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
          <div className="text-center mt-10">
            <a href="https://g.page/proclimate" target="_blank" rel="noopener noreferrer" className="btn-outline">
              View on Google <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join 10,000+ Happy Customers</h2>
          <p className="text-gray-400 mb-8">Experience the ProClimate difference — free estimate, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> Call (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Book Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
