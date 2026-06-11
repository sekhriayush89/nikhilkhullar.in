"use client"

import { useRef } from "react"
import { Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function AIShowreel() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef)
  const videoSrc = process.env.NEXT_PUBLIC_AI_VIDEO_URL || '/ai.mp4'
  const webmSrc = process.env.NEXT_PUBLIC_AI_VIDEO_URL
    ? process.env.NEXT_PUBLIC_AI_VIDEO_URL.replace(/\.mp4$/, '.webm')
    : '/images/chroma-keyed-video-20-281-29.webm'

  const reels = [
    {
      title: "Prompt to Product",
      description:
        "Fast AI concept frames that turn rough prompts into polished product storyboards and social-ready visuals.",
      tools: ["Claude", "ChatGpt", "Gemini"],
    },
    {
      title: "Motion Concepts",
      description:
        "Short cinematic loops and transition studies designed to help brands preview an idea before full production.",
      tools: ["Google Flow", "Motion Ai", "Leonardo Ai"],
    },
    {
      title: "Visual Experiments",
      description:
        "Experimental AI art directions built for mood boards, campaign exploration, and visual identity testing.",
      tools: ["Google Flow", "Uizard Ai", "Uxpilot Ai"],
    },
  ]

  return (
    <section id="ai-showreel" className="relative px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              AI Showreel
            </div>
            <h2 className="mb-4 text-balance text-4xl font-bold md:text-6xl">
              <span className="text-foreground/60">Book a Call to</span>{" "}
              <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">Connect with me</span>
            </h2>
            <p className="max-w-2xl text-lg text-foreground/60">
              A curated set of AI-driven visuals, motion ideas, and concept studies built for modern brand storytelling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div
            className={`relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-accent/15 via-background to-primary/10 p-8 md:p-10 transition-all duration-700 lg:col-span-5 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="w-full flex justify-center">
              <div className="w-full max-w-480">
                <div className="relative aspect-video overflow-hidden rounded-3xl border border-foreground/10 bg-black shadow-2xl shadow-black/30 group">
                  <video
                    className="absolute inset-0 h-full w-full object-contain bg-black transform transition-transform duration-700 will-change-transform md:group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    poster="/placeholder.jpg"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    <source src={webmSrc} type="video/webm" />
                  </video>

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 md:grid-cols-3">
            {reels.map((reel, index) => (
              <article
                key={reel.title}
                className={`group rounded-3xl border border-foreground/10 bg-background/60 p-6 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: isInView ? `${index * 120 + 100}ms` : "0ms" }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">0{index + 1}</span>
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/70 transition-colors group-hover:bg-accent" />
                </div>

                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-accent">{reel.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{reel.description}</p>

                <div className={reel.title === "Prompt to Product" ? "mt-6 flex flex-col gap-2" : "mt-6 flex flex-wrap gap-2"}>
                  {reel.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex w-fit rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors group-hover:border-accent/40 group-hover:text-accent"
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