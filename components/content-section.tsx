"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function ContentSection() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto w-[95%] rounded-[16px] md:rounded-[24px] lg:rounded-[33px] overflow-hidden lg:mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Left Card - Green Background */}
        <div className="bg-[#8CA033] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-14 flex flex-col justify-between min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <div>
            <h2 className="text-[#ffffff] text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 md:mb-12">
              {t("content.title")}
            </h2>
          </div>
          <div>
            <p className="text-[#ffffff] text-base md:text-lg lg:text-xl font-light mb-6 leading-relaxed">
              {t("content.description")}
            </p>
            <Link
              href="/about"
              className="inline-block text-[#ffffff] text-base md:text-lg underline underline-offset-4 hover:text-[#ffffff]/80 transition-colors"
            >
              {t("content.cta")}
            </Link>
          </div>
        </div>

        {/* Right Card - Image */}
        <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <Image
            src="/rolls-of-paper.png"
            alt="Paper rolls in warehouse"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
