"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Ruth, a passionate Full Stack Software Developer
              based in Kenya. I enjoy creating things that live on the internet,
              whether that be websites, applications, or anything in between. My
              goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I graduated with a degree in Computer Science and have since been
              working on various projects ranging from small business websites to
              complex enterprise applications. I&apos;m passionate about creating
              efficient, scalable solutions and continuously learning new
              technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-muted-foreground">
              {[
                "JavaScript ",
                "TypeScript",
                "React & Next.js",
                "Node.js",
                "Python",
                "PostgreSQL",
                
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative w-full aspect-square max-w-[280px] mx-auto">
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative w-full h-full rounded overflow-hidden bg-primary/20">
                <Image
                  src="/images/public/Port.png.jpeg"
                  alt="Ruth Jelagat - Full Stack Developer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 280px, 280px"
                />
                <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
