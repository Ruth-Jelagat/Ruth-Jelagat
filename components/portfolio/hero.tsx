"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            <span className="text-balance">Ruth Jelagat.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            <span className="text-balance">I build things for the web.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            I&apos;m a{" "}
            <span className="text-primary font-semibold">
              Full Stack Software Developer Engineer
            </span>{" "}
            specializing in building exceptional digital experiences. Currently
            focused on creating accessible, user-centered applications with
            modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-12">
            <Link
              href="https://github.com/ruthjelagat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/ruthjelagat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:ruthjelagat@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors font-mono text-sm"
          >
            Learn more about me
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="text-muted-foreground" size={24} />
        </Link>
      </div>
    </section>
  )
}
