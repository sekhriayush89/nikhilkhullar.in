"use client"

import { useInView } from "@/hooks/use-in-view"
import { ExternalLink, Sparkles, Video } from "lucide-react"
import { useRef } from "react"

export default function AIShowreel() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const reels = [
    {
      title: "Prompt to Product",
      description: "Fast AI concept frames that turn rough prompts into polished product storyboards and social-ready visuals.",
      tools: ["Claude", "ChatGpt", "Gemini"],
    },
    {
      title: "Motion Concepts",
      description: "Short cinematic loops and transition studies designed to help brands preview an idea before full production.",
      tools: ["Google Flow", "Motion Ai", "Leonardo Ai"],
    },
    {
      title: "Visual Experiments",
      description: "Experimental AI art directions built for mood boards, campaign exploration, and visual identity testing.",
      tools: ["Google Flow", "Uizard Ai", "Uxpilot Ai"],
    },
  ]

  return (
    <section id="ai-showreel" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              AI Showreel
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
              <span className="text-foreground/60">Creative</span>{" "}
              <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">AI Experiments</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              A curated set of AI-driven visuals, motion ideas, and concept studies built for modern brand storytelling.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold text-foreground/80 transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5"
          >
            <Video className="w-4 h-4" />
            Discuss a reel
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className={`lg:col-span-5 relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-accent/15 via-background to-primary/10 p-8 md:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative flex h-full min-h-112 flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-foreground/10 bg-background/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 backdrop-blur-sm">
                  Featured Reel
                </span>
                <ExternalLink className="h-5 w-5 text-foreground/50" />
              </div>

              <div className="space-y-6">
                <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
                  High-energy concept montage for product launches, campaign teasers, and visual direction pitches.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Style", "Cinematic / Editorial"],
                    ["Output", "Static + Motion"],
                    ["Use case", "Social / Brand / Pitch"],
                    ["Tools", "AI + Design Stack"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-foreground/10 bg-background/55 p-4 backdrop-blur-sm">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/45">{label}</div>
                      <div className="mt-2 text-sm font-semibold text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/55 px-4 py-3 backdrop-blur-sm">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-foreground/45">Availability</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">Open for collaborations</div>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 md:grid-cols-3">
            {reels.map((reel, index) => (
              <article
                key={reel.title}
                className={`group rounded-3xl border border-foreground/10 bg-background/60 p-6 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${index * 120 + 100}ms` : "0ms" }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    0{index + 1}
                  </span>
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/70 group-hover:bg-accent transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{reel.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{reel.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {reel.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}