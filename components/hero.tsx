"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 md:pt-20 md:pb-20 lg:pt-28">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-32 -left-32 w-72 h-72 bg-accent/25 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 lg:space-y-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="inline-block">
              <div className="px-4 py-2.5 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-md hover:border-primary/70 hover:bg-primary/10 transition-all duration-300 group">
                <p className="text-xs md:text-sm font-semibold text-primary tracking-widest uppercase group-hover:text-accent transition-colors">
                  Frontend Developer & Designer
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-balance">
                <span className="text-foreground">Transform Ideas Into</span>
                <br />
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
                    Digital Reality
                  </span>
                </span>
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
              Crafting beautiful, high-performance web experiences. Specializing in React, Next.js, WordPress & Shopify.
              Let's bring your vision to life with cutting-edge code and thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="#projects" onClick={(e) => handleScrollClick(e, "projects")} className="group">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-base relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 will-animate">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore My Work
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="#contact" onClick={(e) => handleScrollClick(e, "contact")} className="group">
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-primary/60 text-foreground rounded-lg font-bold text-base hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105 active:scale-95 will-animate backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-2">
                    Get In Touch
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-12 pt-12 border-t border-border/40">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  2+
                </p>
                <p className="text-sm text-muted-foreground font-medium">Years Building Web</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  20+
                </p>
                <p className="text-sm text-muted-foreground font-medium">Projects Delivered</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-black text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Client Happy Rate</p>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:flex justify-center items-center ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative w-full h-full min-h-96">
              {/* Main showcase card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl border border-primary/20 backdrop-blur-xl p-12 flex flex-col items-center justify-center overflow-hidden group hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

                {/* Floating code elements */}
                <div className="absolute top-10 right-10 p-4 bg-background/60 border border-primary/30 rounded-lg backdrop-blur-sm group-hover:border-accent/50 transition-all duration-300">
                  {/* <div className="font-mono text-xs text-primary">{"<Component />"}</div> */}
                </div>
                  <img src="./hero/men.jpeg" alt="" className=" pt-44 mt-20"/>

                {/* Decorative floating elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>

              {/* Secondary cards */}
              <div className="absolute -bottom-8 -left-8 p-6 bg-card border border-border/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 will-animate">
                <p className="text-xs font-semibold text-primary mb-2">WordPress</p>
                <p className="text-sm text-foreground font-medium">Custom Themes & Plugins</p>
              </div>

              <div className="absolute -top-8 -right-8 p-6 bg-card border border-border/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 will-animate">
                <p className="text-xs font-semibold text-accent mb-2">Shopify</p>
                <p className="text-sm text-foreground font-medium">Store Development</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
