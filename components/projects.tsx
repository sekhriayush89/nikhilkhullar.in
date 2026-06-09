"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const projects = [
    {
      title: "Healix Health Care",
      description:
        "End-to-end UI/UX design for a healthcare application including user research, wireframing, interactive prototyping, and responsive interface implementation with clean, accessible design.",
      tech: ["HTML5", "CSS3", "Bootstrap5", "JavaScript"],
      status: "Live",
      link: "https://nikhilkhullar0.github.io/healix/",
    },
    {
      title: "Stride Footwear Website",
      description:
        "Responsive footwear website with modern UI, optimized navigation, and mobile-friendly layouts. Engineered responsive interfaces using HTML5, CSS3, and Bootstrap5.",
      tech: ["HTML5", "CSS3", "Bootstrap5", "JavaScript", "Figma"],
      status: "Live",
      link: "https://nikhilkhullar0.github.io/stride/",
    },
  ]

  const uiDesigns = [
    {
      title: "Healix Case Study",
      description: "End-to-end UI/UX design process for healthcare application with user research, wireframing, prototyping, and clean responsive interfaces.",
      link: "https://behance.net/nikhilkhullar",
    },
    {
      title: "Phone Website UI/UX",
      description: "Modern responsive design for a phone website with focus on mobile-first approach, clean interfaces, and optimal user experience.",
      link: "https://www.figma.com/design/JYmoSDS3o1g8NtnCWN9Qcw/Phone-Website?node-id=0-1&t=KoifF2EuNBHeW91v-1",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            <span className="text-foreground/60">Featured</span>{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg">Innovative solutions built with modern technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const ProjectWrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
            } : {};

            return (
              <ProjectWrapper
                key={idx}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-xl border border-foreground/10 transition-all duration-500 transform hover:shadow-2xl hover:shadow-accent/20 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{
                  transitionDelay: isInView ? `${idx * 100}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>

                <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-72">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent/20 text-accent backdrop-blur-sm border border-accent/40 group-hover:bg-accent/30 transition-all">
                      {project.status}
                    </span>
                    <span className="text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </div>

                  <div className="flex-1 mb-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-foreground/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-foreground/5 text-xs font-semibold text-foreground/70 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-200 border border-foreground/10 group-hover:border-accent/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ProjectWrapper>
            )
          })}
        </div>

        <div className="mt-24">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
              <span className="text-foreground/60">UI/UX</span>{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Designs</span>
            </h2>
            <p className="text-foreground/60 text-lg">Beautiful and user-centric design solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {uiDesigns.map((design, idx) => {
              return (
                <a
                  key={idx}
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl border border-foreground/10 transition-all duration-500 transform hover:shadow-2xl hover:shadow-accent/20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{
                    transitionDelay: isInView ? `${(idx + 4) * 100}ms` : "0ms",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  </div>

                  <div className="relative p-6 md:p-8 h-full flex flex-col justify-between min-h-64">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent/20 text-accent backdrop-blur-sm border border-accent/40 group-hover:bg-accent/30 transition-all">
                        Figma Design
                      </span>
                      <ExternalLink className="w-4 h-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-accent" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {design.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {design.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-auto">
                      <span className="inline-block text-xs font-semibold text-accent group-hover:text-accent transition-colors">
                        View on Figma →
                      </span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
