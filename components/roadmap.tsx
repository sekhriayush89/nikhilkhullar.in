'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { GraduationCap, Briefcase, Rocket, Star } from 'lucide-react'

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const milestones = [
    {
      icon: GraduationCap,
      title: 'BCA Degree',
      subtitle: 'Aug 2021 – Jun 2024',
      description: 'Completed Bachelor of Computer Applications from Himachal Pradesh University with strong foundation in Web Development.',
      color: 'from-blue-500 to-cyan-500',
      position: 'top-0 left-0',
    },
    {
      icon: Star,
      title: 'UI/UX Certification',
      subtitle: 'Oct 2024 – Mar 2025',
      description: 'Earned ISO Certified UI/UX Design Certification from ITM Mohali, specializing in Figma, wireframing, and design systems.',
      color: 'from-purple-500 to-pink-500',
      position: 'top-0 right-0',
    },
    {
      icon: Briefcase,
      title: 'UI/UX Internship',
      subtitle: 'Oct 2025 – Apr 2026',
      description: 'Interning at MAAC as UI/UX Designer, creating wireframes, prototypes, and responsive components with HTML, CSS, and Bootstrap.',
      color: 'from-green-500 to-emerald-500',
      position: 'bottom-0 left-0',
    },
    {
      icon: Rocket,
      title: 'UI/UX & Frontend Journey',
      subtitle: 'Present & Beyond',
      description: 'Building beautiful, responsive web interfaces and creating user-centered digital experiences with modern design principles.',
      color: 'from-orange-500 to-red-500',
      position: 'bottom-0 right-0',
    },
  ]

  return (
    <section id="roadmap" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground/60">My Career</span> Roadmap
          </h2>
          <p className="text-lg text-foreground/60 mb-16 max-w-2xl">
            A journey from education through professional certification and internship into UI/UX & Frontend development excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Connecting lines for larger screens */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon
              return (
                <div
                  key={idx}
                  className={`group relative p-8 rounded-2xl border border-border/40 hover:border-accent/40 transition-all duration-500 transform hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{
                    transitionDelay: isInView ? `${idx * 150}ms` : '0ms',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${milestone.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-md bg-background flex items-center justify-center">
                        <Icon size={32} className="text-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-4">
                      {milestone.subtitle}
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Connection dot */}
                    <div className="absolute -right-6 top-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background hidden md:block group-hover:bg-accent transition-colors" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Timeline indicator for mobile */}
          <div className="md:hidden mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
              <Star size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Journey in Progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
