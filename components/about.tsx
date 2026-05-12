'use client'

import { useInView } from '@/hooks/use-in-view'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const experiences = [
    {
      role: 'UI/UX Intern',
      company: 'MAAC',
      period: 'Oct 2025 – Apr 2026',
      description: 'Mohali, Punjab',
      highlights: [
        'Designed 20+ wireframes and high-fidelity UI screens using Figma, improving usability and navigation flow',
        'Conducted user research and usability testing, reducing user friction by 20%',
        'Built responsive UI components using HTML, CSS, and Bootstrap'
      ]
    },
  ]

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
          <span className="text-foreground/60">About</span>{' '}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-foreground/60 text-lg mb-16">Software engineer with passion for innovation</p>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm a UI/UX & Frontend Developer with expertise in designing responsive, user-centered digital experiences. Proficient in Figma, HTML5, CSS3, JavaScript, and Bootstrap, with a strong foundation in wireframing, prototyping, and modern UI principles.
              </p>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Passionate about creating scalable and visually engaging web applications with focus on usability, accessibility, and visual hierarchy. Currently pursuing UI/UX Design Certification (ISO Certified) from ITM Mohali. Experienced in cross-functional collaboration and transforming designs into functional frontend interfaces that users love.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-border/40">
              <h3 className="text-xl font-bold mb-6 text-accent">Internship</h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group p-4 rounded-lg border border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h4>
                        <p className="text-sm text-foreground/60">{exp.company} | {exp.description}</p>
                      </div>
                      <span className="text-xs text-foreground/50 whitespace-nowrap ml-4">{exp.period}</span>
                    </div>
                    <ul className="text-sm text-foreground/70 mt-3 space-y-2">
                      {exp.highlights && exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border/40" />
            </div>
          </div>

          {/* Quick facts card */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 rounded-2xl p-6 h-fit hover:border-accent/60 transition-all duration-300">
            <h3 className="font-bold text-lg mb-6 text-accent">Quick Facts</h3>
            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex gap-3 items-start group">
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-foreground transition-colors">BCA from Himachal Pradesh University</span>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-foreground transition-colors">Based in Mohali, Punjab</span>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-foreground transition-colors">UI/UX & Frontend Developer</span>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="text-accent mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-foreground transition-colors">Open to collaborations & opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
