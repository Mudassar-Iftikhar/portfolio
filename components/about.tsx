"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"} will-animate`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate frontend developer with a keen eye for design and a strong foundation in modern web
              technologies. With expertise spanning React, Next.js, WordPress, and Shopify, I create beautiful,
              functional digital experiences that users love.
            </p>
            <p>
              Over the years, I've worked with startups and established brands to build responsive websites, custom
              WordPress solutions, and high-converting Shopify stores. I believe in the power of clean code, thoughtful
              design, and performance optimization.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"} will-animate`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4 hover:border-accent transition-colors duration-300">
                  <h3 className="font-semibold text-lg text-primary">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="border-l-4 border-accent pl-4 hover:border-primary transition-colors duration-300">
                  <h3 className="font-semibold text-lg text-accent">WordPress</h3>
                  <p className="text-sm text-muted-foreground">Custom themes, plugins, WooCommerce integration</p>
                </div>
                <div className="border-l-4 border-primary pl-4 hover:border-accent transition-colors duration-300">
                  <h3 className="font-semibold text-lg text-primary">E-commerce</h3>
                  <p className="text-sm text-muted-foreground">Shopify, Liquid, custom store development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
