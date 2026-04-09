"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard. Built with a focus on performance and user experience.",
    image: "/images/project-ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/ruthjelagat/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application featuring real-time updates, drag-and-drop functionality, team workspaces, and detailed analytics. Implements role-based access control.",
    image: "/images/project-taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com/ruthjelagat/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy. Integrates with OpenAI&apos;s GPT API for intelligent content suggestions.",
    image: "/images/project-ai.jpg",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Vercel AI SDK"],
    github: "https://github.com/ruthjelagat/ai-content-generator",
    live: "https://ai-content-demo.vercel.app",
    featured: true,
  },
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description:
      "A weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/ruthjelagat/weather-dashboard",
    live: "https://weather-demo.vercel.app",
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers with dark mode, animations, and easy configuration.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ruthjelagat/portfolio-template",
    live: null,
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blog platform with markdown support, comments, categories, and SEO optimization.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    github: "https://github.com/ruthjelagat/blog-platform",
    live: "https://blog-demo.vercel.app",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance management app with budgeting tools, expense categorization, and visual reports.",
    technologies: ["React Native", "Firebase", "Chart.js"],
    github: "https://github.com/ruthjelagat/expense-tracker",
    live: null,
  },
  {
    title: "Recipe Finder",
    description:
      "A recipe search application with filtering options, favorites, and meal planning features.",
    technologies: ["Vue.js", "Spoonacular API", "Vuex"],
    github: "https://github.com/ruthjelagat/recipe-finder",
    live: "https://recipe-demo.vercel.app",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/ruthjelagat/chat-app",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">04.</span> Some
            Things I&apos;ve Built
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative aspect-video rounded overflow-hidden group ${
                  index % 2 === 0
                    ? "md:col-start-1"
                    : "md:col-start-6 md:row-start-1"
                }`}
              >
                <Link
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                </Link>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 relative z-10 ${
                  index % 2 === 0
                    ? "md:col-start-6 md:-ml-12"
                    : "md:col-start-1 md:row-start-1 md:-mr-12"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  <Link
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <div className="bg-card p-6 rounded shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded group hover:-translate-y-2 transition-transform"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-primary" size={40} />
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
