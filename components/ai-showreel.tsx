"use client"

import { useInView } from "@/hooks/use-in-view"
import { Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export default function AIShowreel() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.muted = true
    videoRef.current.volume = 0
  }, [])

  useEffect(() => {
    if (!videoRef.current) return
    if (isInView) {
      videoRef.current.play().then(() => {}).catch(() => {})
    }
  }, [isInView])

  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState<string | null>(null)
  const sampleMp4 = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  const [diag, setDiag] = useState<{canWebm?: string; canMp4?: string; fetchStatus?: string; readyState?: number; width?: number; height?: number; duration?: number} | null>(null)

  const handleVideoEnded = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play().catch(() => {})
  }

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
              Book a call to connect with me and explore AI-driven visuals, motion ideas, and concept studies for modern brand storytelling.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className={`lg:col-span-5 relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-accent/15 via-background to-primary/10 p-8 md:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative min-h-112">
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-foreground/10 bg-black shadow-2xl shadow-black/30">
                <video
                  ref={videoRef}
                  title="AI Showreel video"
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  poster="/placeholder.jpg"
                  onEnded={handleVideoEnded}
                  onError={(e) => {
                    console.error("Video error event:", e)
                    const err = videoRef.current?.error
                    if (err) {
                      let msg = ''
                      switch (err.code) {
                        case 1:
                          msg = 'Media aborted (code 1)'
                          break
                        case 2:
                          msg = 'Network error while fetching media (code 2)'
                          break
                        case 3:
                          msg = 'Decoding error or corrupt media (code 3)'
                          break
                        case 4:
                          msg = 'Media source not supported (code 4)'
                          break
                        default:
                          msg = `Unknown media error (code ${err.code})`
                      }
                      setVideoError(msg)
                      // enable native controls so user can see built-in messages
                      try {
                        videoRef.current.controls = true
                      } catch (err) {}
                    } else {
                      setVideoError('Failed to load or decode video')
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (!videoRef.current) return
                    if (videoRef.current.videoWidth === 0 || videoRef.current.videoHeight === 0) {
                      setVideoError('Video metadata indicates zero dimensions (unsupported codec?)')
                    } else {
                      setVideoError(null)
                    }
                  }}
                >
                  <source src="/images/chroma-keyed-video-20-281-29.webm" type="video/webm" />
                  {/* Fallback hint: add an MP4 at the same path if available */}
                  <source src="/images/chroma-keyed-video-20-281-29.mp4" type="video/mp4" />
                  <track kind="captions" srcLang="en" />
                  <p className="text-xs text-foreground/60">Your browser does not support the video element.</p>
                </video>

                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                <button
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  onClick={() => {
                    if (!videoRef.current) return
                    if (videoRef.current.paused) {
                      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
                    } else {
                      videoRef.current.pause()
                      setIsPlaying(false)
                    }
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
                >
                  <div className="rounded-full bg-black/40 p-3 text-white opacity-90 hover:scale-105 transition-transform">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </div>
                </button>
                <div className="absolute left-4 bottom-4 z-30 flex gap-2">
                  <button
                    className="rounded-md bg-black/60 text-white px-3 py-1 text-sm"
                    onClick={() => {
                      if (!videoRef.current) return
                      videoRef.current.controls = true
                      videoRef.current.load()
                    }}
                  >
                    Enable controls
                  </button>
                  <button
                    className="rounded-md bg-black/60 text-white px-3 py-1 text-sm"
                    onClick={() => {
                      if (!videoRef.current) return
                      // switch to a known-good sample MP4 to verify player
                      videoRef.current.src = sampleMp4
                      videoRef.current.load()
                      videoRef.current.play().catch(() => {})
                      setVideoError(null)
                    }}
                  >
                    Try sample MP4
                  </button>
                  <button
                    className="rounded-md bg-black/60 text-white px-3 py-1 text-sm"
                    onClick={async () => {
                      const canWebm = document.createElement('video').canPlayType('video/webm; codecs="vp8, vorbis"')
                      const canMp4 = document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
                      let fetchStatus = ''
                      try {
                        const res = await fetch('/images/chroma-keyed-video-20-281-29.webm', { method: 'HEAD' })
                        fetchStatus = `${res.status} ${res.statusText}; content-type: ${res.headers.get('content-type')}`
                      } catch (err) {
                        fetchStatus = `Fetch failed: ${String(err)}`
                      }

                      const v = videoRef.current
                      setDiag({
                        canWebm: canWebm || 'maybe/empty',
                        canMp4: canMp4 || 'maybe/empty',
                        fetchStatus,
                        readyState: v ? v.readyState : -1,
                        width: v ? v.videoWidth : 0,
                        height: v ? v.videoHeight : 0,
                        duration: v ? v.duration : 0,
                      })
                      console.log('Video diagnostics', { canWebm, canMp4, fetchStatus, readyState: v?.readyState, width: v?.videoWidth, height: v?.videoHeight, duration: v?.duration })
                    }}
                  >
                    Run diagnostics
                  </button>
                </div>
                {videoError && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                    <div className="bg-black/70 text-white p-4 rounded-lg">
                      <p className="text-sm">Video playback error: {videoError}</p>
                      <button
                        className="mt-2 underline text-sm"
                        onClick={() => {
                          if (!videoRef.current) return
                          videoRef.current.controls = true
                          videoRef.current.load()
                        }}
                      >
                        Enable controls
                      </button>
                    </div>
                  </div>
                )}
                {diag && (
                  <div className="absolute right-4 top-4 z-40 bg-black/70 text-white p-3 rounded-md text-sm">
                    <div><strong>canPlayType webm:</strong> {diag.canWebm}</div>
                    <div><strong>canPlayType mp4:</strong> {diag.canMp4}</div>
                    <div><strong>HEAD fetch:</strong> {diag.fetchStatus}</div>
                    <div><strong>readyState:</strong> {diag.readyState}</div>
                    <div><strong>size:</strong> {diag.width}x{diag.height}</div>
                    <div><strong>duration:</strong> {isFinite(diag.duration) ? Math.round(diag.duration) + 's' : '---'}</div>
                  </div>
                )}
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
                  {reel.title === "Prompt to Product" ? (
                    <div className="flex flex-col gap-2">
                      {reel.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex w-fit rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors group-hover:border-accent/40 group-hover:text-accent"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  ) : (
                    reel.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      {tool}
                    </span>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}