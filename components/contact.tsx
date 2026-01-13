"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  // const handleScrollToForm = () => {
  //   formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  // }

  const socialLinks = [
    { name: "GitHub", icon: "github", href: "https://github.com/Mudassar-Iftikhar" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/mudassar-iftikhar/" },
    // { name: "Twitter", icon: "twitter", href: "https://twitter.com" },
    { name: "Email", icon: "email", href: "mailto:mianmudassar9900@gmail.com" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"} will-animate`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-semibold text-primary">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing together.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 mb-16 ${isVisible ? "animate-scale-in" : "opacity-0"} will-animate`}
        >
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 will-animate"
            >
              Send Message
            </button>
            {submitted && (
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-sm text-primary font-medium">Thank you! I'll get back to you soon.</p>
              </div>
            )}
          </form>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question or just want to say hello, feel free to reach out. I'm always open to
                discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="text-primary hover:text-accent transition-colors">
                    mianmudassar9900@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-lg">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Jallo more Lahore</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Follow Me</p>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 will-animate"
                    title={link.name}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <span className="text-lg group-hover:text-primary transition-colors">{getIcon(link.icon)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center pt-12 border-t border-border ${isVisible ? "animate-fade-in" : "opacity-0"} will-animate`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-muted-foreground mb-4">Ready to start your next project?</p>
          <button
            // onClick={handleScrollToForm}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 will-animate cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

function getIcon(iconName: string) {
  const icons: Record<string, string> = {
    github: "💻",
    linkedin: "🔗",
    // twitter: "𝕏",
    email: "✉️",
  }
  return icons[iconName] || "→"
}
