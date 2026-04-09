"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">05. What&apos;s Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          I&apos;m currently looking for new opportunities and my inbox is always
          open. Whether you have a question, want to discuss a project, or just
          want to make a connection, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="text-primary" size={18} />
            <span>chelakositany2@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="text-primary" size={18} />
            <span>+254 700 000 000</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="text-primary" size={18} />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <Button asChild size="lg" className="px-12">
          <Link href="mailto:ruthjelagat@example.com">Connect</Link>
        </Button>
      </div>
    </section>
  )
}
