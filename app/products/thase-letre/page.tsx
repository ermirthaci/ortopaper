"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientStoriesSection } from "@/components/client-stories-section"
import Image from "next/image"
import { Leaf, FileCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const sizeGroups = [
  {
    headerKey: "product.thase-letre.size.group1",
    sizes: ["58cm x 50cm x 13cm", "67cm x 45cm x 13cm", "50cm x 35cm x 9cm", "49cm x 35cm x 10cm", "56cm x 37cm x 9cm"],
  },
  {
    headerKey: "product.thase-letre.size.group2",
    sizes: ["40cm x 18cm x 12cm", "40cm x 18cm x 12cm", "42cm x 16cm x 10cm", "76cm x 45cm x 13cm", "56cm x 35cm x 10cm"],
  },
]

export default function ThaseletrePage() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#3C3232] min-h-screen pt-1.5">
      <Header />

      {/* Hero Section */}
      <section className="w-[95%] mx-auto rounded-[16px] md:rounded-[24px] lg:rounded-[33px] bg-[#3c3232] pt-32 pb-12 md:pb-16">
        <div className="px-6 md:px-8 lg:px-16">
          <div className="relative aspect-[16/9] rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[160px] md:rounded-br-[160px] lg:rounded-tl-[266px] lg:rounded-br-[266px] overflow-hidden border-[2px] md:border-[3px] border-[#747474] flex items-center justify-center group">
            <div className="absolute inset-0 bg-[#3c3232]/50" />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <Image
                src="/images/thase.png"
                alt="THASE LETRE"
                width={600}
                height={700}
                className="mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 w-[35%] md:w-[40%] lg:w-[45%] max-h-[70%]"
              />
            </div>
            <h1 className="absolute inset-0 z-20 flex items-center justify-center text-xl md:text-4xl lg:text-6xl font-light text-white tracking-[0.1em] md:tracking-[0.3em] px-4">
              {t("products.thase-letre")}
            </h1>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-[95%] mx-auto py-8 md:py-12">
        <div className="px-6 md:px-8 lg:px-16 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Product Description */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6">
              {t("product.thase-letre.description.title")}
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{t("product.thase-letre.description.para1")}</p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{t("product.thase-letre.description.para2")}</p>
          </div>

          {/* Right Column - Features stacked vertically */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Sustainability */}
            <div className="flex gap-4 md:gap-6 border-b border-[#707070]/35 pb-4 md:pb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#8CA033] flex items-center justify-center">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#8CA033]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-2 md:mb-3">
                  {t("product.sustainability")}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{t("product.sustainability.desc")}</p>
              </div>
            </div>

            {/* FDA Compliance */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#8CA033] flex items-center justify-center">
                  <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-[#8CA033]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-2 md:mb-3">{t("product.fda")}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{t("product.fda.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote Section */}
      <section className="w-[95%] mx-auto py-8 md:py-12">
        <div className="px-6 md:px-8 lg:px-16">
          <div className="bg-[#E5E5E5] rounded-[16px] md:rounded-[24px] lg:rounded-[33px] p-6 md:p-12 lg:p-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#3c3232] mb-8 md:mb-12">
              {t("product.quote.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Paper Size */}
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <Image
                                      src="/images/paper-size-icon.svg"
                                      alt="Paper Size"
                                      width={32}
                                      height={37}
                                      className="w-6 h-6 md:w-8 md:h-8"
                                    />
                  <h3 className="text-base md:text-lg font-medium text-[#3c3232]">{t("product.quote.size")}</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {sizeGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="text-sm md:text-base font-medium text-[#3c3232]/70 mb-2 md:mb-3">
                        {t(group.headerKey)}
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {group.sizes.map((size, sizeIndex) => (
                          <button
                            key={sizeIndex}
                            className="px-4 md:px-6 py-2 md:py-3 border border-[#3c3232] rounded-[15px] text-[#3c3232] text-sm md:text-base hover:bg-[#8CA033] hover:border-[#8CA033] hover:text-white transition-colors"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>        
              </div>

              {/* Paper Color */}
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <Image
                                      src="/images/paper-color-icon.svg"
                                      alt="Paper Color"
                                      width={32}
                                      height={37}
                                      className="w-6 h-6 md:w-8 md:h-8"
                                    />
                  <h3 className="text-base md:text-lg font-medium text-[#3c3232]">{t("product.quote.color")}</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <button className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-[#3c3232] rounded-[15px] hover:bg-[#8CA033] hover:border-[#8CA033] transition-colors">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#8e4911]"></div>
                    <span className="text-[#3c3232] text-sm md:text-base group-hover:text-white transition-colors">
                      {t("product.quote.brown")}
                    </span>
                  </button>
                  <button className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-[#3c3232] rounded-[15px] hover:bg-[#8CA033] hover:border-[#8CA033] transition-colors">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ffffff]"></div>
                    <span className="text-[#3c3232] text-sm md:text-base group-hover:text-white transition-colors">
                      {t("product.quote.white")}
                    </span>
                  </button>               
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6 md:mt-8">
              <div>
                <label className="block text-xs md:text-sm text-[#3c3232] mb-2">{t("product.quote.email")}</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 md:py-3 border-b-2 border-[#707070]/35 bg-transparent focus:outline-none focus:border-[#8CA033]"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm text-[#3c3232] mb-2">{t("product.quote.message")}</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 border-b-2 border-[#707070]/35 bg-transparent focus:outline-none focus:border-[#8CA033]"
                />
              </div>
            </div>

            <button className="mt-6 md:mt-8 flex items-center gap-2 text-[#8CA033] font-medium text-sm md:text-base hover:underline">
              {t("product.quote.submit")}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <div className="py-6 md:py-8">
        <ClientStoriesSection />
      </div>

      {/* Footer */}
      <div className="py-6 md:py-8">
        <Footer />
      </div>
    </div>
  )
}
