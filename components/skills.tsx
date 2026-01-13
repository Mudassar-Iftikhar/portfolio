"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚡",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-primary to-accent",
    },
    {
      title: "WordPress",
      icon: "🔧",
      skills: ["Custom Themes", "Plugin Dev", "WooCommerce", "PHP"],
      color: "from-accent to-primary",
    },
    {
      title: "Shopify",
      icon: "🛒",
      skills: ["Liquid", "Ecommerce", "App Dev", "Optimization"],
      color: "from-primary to-accent",
    },
    {
      title: "Tools",
      icon: "🎨",
      skills: ["Git", "Git Hub ", "Canva", "Performance"],
      color: "from-accent to-primary",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
      <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground">Technologies and tools I master</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className={`${isVisible ? "animate-scale-in" : "opacity-0"} will-animate`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="group relative overflow-hidden bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 group/skill">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-150 transition-transform duration-300`}
                      />
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
