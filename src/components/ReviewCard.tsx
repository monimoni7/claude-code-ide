interface ReviewCardProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
  date: string
}

export default function ReviewCard({ name, location, rating, text, service, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-DEFAULT/10 rounded-full flex items-center justify-center font-bold text-orange-DEFAULT text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
      <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-50 pt-3">
        <span className="bg-orange-DEFAULT/10 text-orange-DEFAULT px-2 py-1 rounded-full font-medium">{service}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}
