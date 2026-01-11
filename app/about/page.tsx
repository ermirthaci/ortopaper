"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Factory, Cog } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    { name: "Hashim Thaçi", role: "Founder/CEO", image: "/team/member1.jpg" },
    { name: "Besim Thaçi", role: "Chief of Production", image: "/team/member2.jpg" },
    { name: "Endrit Thaçi", role: "COO", image: "/team/member3.jpg" },
    { name: "Freskim Farizi", role: "Quality Manager", image: "/team/member3.jpg" },
    { name: "Amrush Bajrami", role: "CFO", image: "/team/member4.jpg" },
  ]

  const stats = [
    { label: "about.stats.bags", value: "10M+" },
    { label: "about.stats.clients", value: "100+" },
    { label: "about.stats.year", value: "10+" },
  ]

  return (
    <div className="min-h-screen bg-[#3c3232] pt-1.5">
      <Header />

      <main className="pt-32 pb-12 space-y-8">
        {/* Hero Section */}
        <section className="w-[95%] mx-auto rounded-[16px] md:rounded-[24px] lg:rounded-[33px] bg-[#3c3232] overflow-hidden">
          <div className="px-6 md:px-8 lg:px-16 py-12 md:py-20 lg:py-32 text-center">
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-4">{t("nav.about")}</p>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-light text-white mb-8">
              {t("about.title")}
            </h1>
          </div>
        </section>

        <section className="w-full border-t-1 border-b-1 border-[#8CA033] bg-[#3c3232]">
          <div className="px-6 md:px-8 lg:px-16 py-8 md:py-12 text-center leading-3">
            <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
              {t("about.description")}
            </p>
          </div>
        </section>

        {/* Background Image Section with Features */}
        <section className="w-full relative overflow-hidden">
          {/* Background Image with grayscale and fade effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-img.svg"
              alt="Stacked paper products"
              fill
              className="object-cover grayscale"
            />
            {/* Gradient overlay that fades from transparent to solid background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3c3232]/80 to-[#3c3232]"></div>
          </div>

          {/* Content with relative positioning */}
          <div className="relative z-10 px-6 md:px-8 lg:px-16 py-12">
            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 pt-[100px] md:pt-[200px] pb-12 md:pb-20">
              {/* Left Column - Where sustainability meets style */}
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-8">
                  {t("about.where")}
                </h2>
              </div>

              {/* Right Column - Features */}
              <div className="space-y-8">
                {/* Wood Factory */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <Factory className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs md:text-sm">
                      {t("about.history.title")}
                    </h3>
                    <p className="text-[#FFFFFF]/70 text-xs md:text-sm leading-relaxed">
                      {t("about.history.desc")}
                    </p>
                  </div>
                </div>

                {/* Process */}
                <div className="flex gap-4 mt-8 md:mt-16">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <Cog className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 uppercase tracking-wider text-xs md:text-sm">
                      {t("about.mission.title")}
                    </h3>
                    <p className="text-[#FFFFFF]/70 text-xs md:text-sm leading-relaxed">
                      {t("about.mission.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-[95%] mx-auto rounded-[16px] md:rounded-[24px] lg:rounded-[33px] bg-[#3c3232] overflow-hidden">
          <div className="px-6 md:px-8 lg:px-16 py-8 md:py-12">
            <div className="space-y-6 md:space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between py-6 md:py-8 border-t border-[#707070]/35">
                  <p className="text-white text-l md:text-2xl">{t(stat.label)}</p>
                  <p className="text-white text-4xl md:text-6xl lg:text-7xl font-light">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-[95%] mx-auto rounded-[16px] md:rounded-[24px] lg:rounded-[33px] bg-[#3c3232] overflow-hidden">
          <div className="px-6 md:px-8 lg:px-16 py-8 md:py-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-6 md:mb-8">{t("about.team")}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-[8px] md:rounded-[12px] overflow-hidden group">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-4 bg-[#3c3232]">
                    <h3 className="text-[#8CA033] font-semibold text-sm md:text-base">{member.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
