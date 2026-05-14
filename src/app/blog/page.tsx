import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC & Roofing Blog | Tips & Guides — ProClimate Phoenix',
  description: 'Expert HVAC and roofing tips, maintenance guides, and home comfort advice from the ProClimate team. Serving Greater Phoenix, AZ.',
}

const posts = [
  { title: '7 Signs Your AC Needs Repair Before Summer Hits', category: 'HVAC', date: 'May 10, 2026', readTime: '5 min', excerpt: 'Phoenix summers are brutal. Here are the warning signs that your AC system is struggling — and what to do before it fails completely.', slug: 'ac-repair-signs' },
  { title: 'How to Spot Roof Damage After a Monsoon Storm', category: 'Roofing', date: 'May 5, 2026', readTime: '6 min', excerpt: 'Monsoon season brings heavy rain, high winds, and hail. Learn how to inspect your roof for damage and when to call a professional.', slug: 'roof-damage-after-monsoon' },
  { title: 'HVAC Maintenance Checklist: What Every Phoenix Homeowner Should Do', category: 'HVAC', date: 'April 28, 2026', readTime: '7 min', excerpt: 'A properly maintained HVAC system lasts longer, runs more efficiently, and saves you money. Here\'s your complete maintenance checklist.', slug: 'hvac-maintenance-checklist' },
  { title: 'Tile vs. Shingle Roofing: Which Is Right for Your Phoenix Home?', category: 'Roofing', date: 'April 20, 2026', readTime: '8 min', excerpt: 'Choosing the right roofing material matters more in the Arizona desert than almost anywhere else. We break down the pros and cons.', slug: 'tile-vs-shingle-roofing' },
  { title: 'How Much Does a New AC System Cost in Phoenix? (2026 Guide)', category: 'HVAC', date: 'April 15, 2026', readTime: '6 min', excerpt: 'Transparent pricing guide for AC installation in the Phoenix metro. What factors affect cost and how to get the best value.', slug: 'ac-installation-cost-phoenix' },
  { title: 'Filing a Roof Insurance Claim: Step-by-Step Guide', category: 'Roofing', date: 'April 10, 2026', readTime: '9 min', excerpt: 'Navigating a roof insurance claim can be overwhelming. Here\'s exactly how the process works and how ProClimate helps you get the most from your claim.', slug: 'roof-insurance-claim-guide' },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-DEFAULT to-navy-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-orange-DEFAULT text-sm font-bold uppercase tracking-wider mb-3">Expert Insights</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HVAC & Roofing Blog</h1>
          <p className="text-xl text-gray-300">Tips, guides, and expert advice to keep your home comfortable and protected.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
                <div className="bg-gradient-to-br from-navy-DEFAULT to-navy-light h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-2 ${post.category === 'HVAC' ? 'bg-orange-DEFAULT text-white' : 'bg-white text-navy-DEFAULT'}`}>{post.category}</div>
                    <div className="text-white/50 text-xs">{post.title.substring(0, 40)}...</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} read</span>
                  </div>
                  <h2 className="font-bold text-navy-DEFAULT mb-3 group-hover:text-orange-DEFAULT transition-colors leading-tight">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-orange-DEFAULT text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-DEFAULT text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help Now?</h2>
          <p className="text-gray-400 mb-8">Our experts are ready to answer your questions and get your home comfortable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5558004822" className="btn-primary text-lg"><Phone className="w-5 h-5" /> (555) 800-4822</a>
            <Link href="/contact" className="btn-secondary text-navy-DEFAULT text-lg">Get Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
