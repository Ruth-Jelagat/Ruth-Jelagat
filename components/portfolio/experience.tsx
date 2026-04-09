"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Tech Solutions Ltd",
    companyUrl: "https://example.com",
    role: "Senior Full Stack Developer",
    period: "2023 — Present",
    description: [
      "Lead development of scalable web applications using React, Next.js, and Node.js, serving over 100,000 users daily.",
      "Collaborated with cross-functional teams to deliver features that increased user engagement by 25%.",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    company: "Digital Innovations Inc",
    companyUrl: "https://example.com",
    role: "Full Stack Developer",
    period: "2021 — 2023",
    description: [
      "Developed and maintained multiple client-facing web applications using modern JavaScript frameworks.",
      "Built RESTful APIs and integrated third-party services to enhance application functionality.",
      "Implemented responsive designs and ensured cross-browser compatibility for optimal user experience.",
      "Reduced application load time by 50% through code optimization and lazy loading strategies.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Flask"],
  },
  {
    company: "StartUp Hub",
    companyUrl: "https://example.com",
    role: "Junior Developer",
    period: "2020 — 2021",
    description: [
      "Assisted in the development of web applications using HTML, CSS, JavaScript, and React.",
      "Participated in agile development processes and daily stand-ups.",
      "Fixed bugs and implemented new features based on user feedback.",
      "Gained hands-on experience with version control using Git and GitHub.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">03.</span>{" "}
            Where I&apos;ve Worked
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors relative ${
                  activeTab === index
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {activeTab === index && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
                )}
                {activeTab === index && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary md:hidden" />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="flex-1 min-h-[350px]">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].role}{" "}
              <Link
                href={experiences[activeTab].companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                @ {experiences[activeTab].company}
                <ExternalLink size={14} />
              </Link>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3 mb-6">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
