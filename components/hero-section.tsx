"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      titleKey: "hero.title1",
      subtitleKey: "hero.subtitle1",
      image: "/slide01.svg",
    },
    {
      titleKey: "hero.title2",
      subtitleKey: "hero.subtitle2",
      image: "/slide02.svg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen bg-[#332828] overflow-hidden mx-auto w-[95%] rounded-[16px] md:rounded-[24px] lg:rounded-[33px]">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header isInsideHero={true} />
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 rounded-[16px] md:rounded-[24px] lg:rounded-[33px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt="Orto Paper products"
                fill
                className="object-cover object-right"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#332828]/90 via-[#332828]/60 to-[#332828]/20" />
          </div>
        ))}
      </div>

      {/* Content - Fixed position on left */}
      <div className="relative container mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-5xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <h1 className="text-[#ffffff] text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-4">
                {t(slide.titleKey)}
              </h1>
              <p className="text-[#ffffff] text-lg md:text-2xl lg:text-3xl font-light mb-8">{t(slide.subtitleKey)}</p>
              <Link
                href="#products"
                className="inline-block text-[#d5d5d570] text-base md:text-lg underline underline-offset-4 hover:text-[#8CA033] transition-colors"
              >
                {t("hero.cta")}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-[#8CA033] w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
