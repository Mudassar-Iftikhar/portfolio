"use client"

import { useEffect, useRef, useState } from "react"

export default function Projects() {
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

  const projects = [
    {
      title: "E-commerce Store",
      description: "Modern Shopify store with custom theme and optimization. 60% increase in conversion rate.",
      tags: ["Shopify", "Liquid", "Performance"],
      category: "Shopify",
      image: "/shopify-ecommerce-store.jpg",
    },
    {
      title: "Corporate WordPress Site",
      description: "Custom WordPress theme with advanced features, SEO optimization, and CMS integration.",
      tags: ["WordPress", "PHP", "ACF"],
      category: "WordPress",
      image: "./projects/tech.png",
    },
    {
      title: "BYD EV / PHEV cars",
      description: "Interactive admin dashboard built with React and Next.js with real-time data visualization.",
      tags: ["React", "Next.js", "TypeScript"],
      category: "Frontend",
      image: "./projects/byd.png",
    },
    {
      title: "Binghatti Luxury Real Estate",
      description: "High-converting landing page with animations and optimized for mobile. Built with Next.js.",
      tags: ["HTML", "Css", "Animations"],
      category: "Frontend",
      image: "./projects/binghatti.png",
    },
    {
      title: "WooCommerce Store",
      description: "Custom WooCommerce setup with payment integration and inventory management system.",
      tags: ["WordPress", "WooCommerce", "PHP"],
      category: "WordPress",
      image: "./projects/shose.png",
    },
    {
      title: "Mobile App Landing",
      description: "Responsive landing page with scroll animations and interactive elements for mobile app.",
      tags: ["React", "Animations", "Responsive"],
      category: "Frontend",
      image: "/mobile-app-landing-page.jpg",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className={`mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg">Recent work across different platforms and technologies</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`${isVisible ? "animate-scale-in" : "opacity-0"} group will-animate`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative overflow-hidden bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 h-full flex flex-col cursor-pointer">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg?height=192&width=384&query=project"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-animate"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
