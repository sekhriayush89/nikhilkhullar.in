'use client'

import { useInView } from '@/hooks/use-in-view'
import { useRef } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const testimonials = [
    {
      name: 'Mac',
      company: 'MAAC',
      role: 'Instructor',
      content:
        'Nikhil is an exceptional designer with outstanding UI/UX skills. His attention to detail, user research capabilities, and ability to translate complex requirements into elegant designs make him an invaluable asset to any team.',
      rating: 5,
    },
    {
      name: 'Ayush',
      company: 'Healix Healthcare',
      role: 'Client',
      content:
        'Nikhil delivered an outstanding healthcare platform design. His end-to-end UI/UX process, from research to prototyping, ensured a seamless and accessible user experience that exceeded expectations.',
      rating: 5,
    },
    {
      name: 'Animesh',
      company: 'Design Projects',
      role: 'Client',
      content:
        'Working with Nikhil on design projects was fantastic. His creative vision, responsive design skills, and ability to create visually stunning interfaces while maintaining usability is remarkable.',
      rating: 5,
    },
    {
      name: 'Avee',
      company: 'Design Projects',
      role: 'Client',
      content:
        'Nikhil brings a fresh perspective to UI/UX design with strong technical skills. His ability to combine aesthetics with functionality and create designs that users love is truly impressive.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            <span className="text-foreground/60">Client</span>{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-foreground/60 text-lg">What clients say about working with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-background transition-all duration-500 transform hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent group-hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="pt-6 border-t border-foreground/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-foreground/60">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/40 flex items-center justify-center text-xs font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
