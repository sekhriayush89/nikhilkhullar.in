"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeClick = () => {
    const link = document.createElement("a")
    link.href = "/Nikhil_Khullar_Resume.pdf"
    link.download = "Nikhil_Khullar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-accent/30" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          NK
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Services", href: "#services" },
            { label: "Projects", href: "#projects" },
            { label: "AI Showreel", href: "#ai-showreel" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Hobbies", href: "#hobbies" },
            { label: "Roadmap", href: "#roadmap" },
            { label: "Education", href: "#education" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResumeClick}
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm shadow-lg shadow-primary/30"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  )
}
