import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC & Roofing Careers | Join ProClimate — Phoenix, AZ',
  description: 'Join the ProClimate team. We\'re hiring HVAC technicians, roofers, and support staff. Competitive pay, benefits, and growth opportunities in Phoenix, AZ.',
}

const positions = [
  { title: 'HVAC Service Technician', type: 'Full-Time', location: 'Phoenix Metro', desc: 'Diagnose and repair residential & commercial HVAC systems. NATE certification preferred. 2+ years experience required.' },
  { title: 'Roofing Crew Lead', type: 'Full-Time', location: 'Phoenix Metro', desc: 'Lead roofing installation crews on residential projects. 3+ years roofing experience. Strong leadership skills required.' },
  { title: 'HVAC Installation Technician', type: 'Full-Time', location: 'Phoenix Metro', desc: 'Install new HVAC systems including split systems, packaged units, and ductless mini-splits. EPA 608 certification required.' },
  { title: 'Roofing Sales Consultant', type: 'Full-Time', location: 'Phoenix Metro', desc: 'Meet with homeowners, provide estimates, and close roofing projects. Previous home improvement sales experience preferred.' },
  { title: 'Customer Service Representative', type: 'Full-Time', location: 'Phoenix, AZ (Office)', desc: 'Answer inbound calls, schedule appointments, and support our field team. Excellent communication skills required.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Careers</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Phoenix&apos;s Best</h1>
            <p className="text-xl text-gray-300 mb-8">Join a team that values excellence, rewards hard work, and invests in your future. We&apos;re growing — and we want you with us.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5558004822" className="btn-primary"><Phone className="w-5 h-5" /> Call to Apply</a>
              <Link href="/contact" className="btn-secondary text-navy-DEFAULT">Send Your Resume</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['Competitive Pay', '$22–$45/hour based on experience'], ['Health Benefits', 'Medical, dental & vision coverage'], ['Paid Training', 'We invest in your certifications'], ['Company Vehicle', 'Take-home vehicles for field staff'], ['Retirement Plan', '401(k) with company match'], ['Paid Time Off', '2 weeks PTO to start']].map(([title, desc]) => (
              <div key={title} className="bg-white/10 rounded-xl p-4">
                <div className="font-bold text-white text-sm">{title}</div>
                <div className="text-gray-300 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-DEFAULT/10 rounded-lg p-3 flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-orange-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-DEFAULT text-lg">{pos.title}</h3>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{pos.type}</span>
                        <span>{pos.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">{pos.desc}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-primary whitespace-nowrap text-sm py-3 px-6 flex-shrink-0">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role? Reach Out Anyway.</h2>
          <p className="text-gray-400 mb-8">We&apos;re always looking for great people. Send us your resume and we&apos;ll keep you in mind for future openings.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Send Resume</Link>
          </div>
        </div>
      </section>
    </>
  )
}
