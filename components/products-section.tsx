"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function ProductsSection() {
  const { t } = useLanguage()

  const products = [
    {
      nameKey: "products.thase-letre",
      image: "/thase.png",
      slug: "thase-letre",
    },
    {
      nameKey: "products.qese-pjekurina",
      image: "/images/pjekurina.png",
      slug: "qese-pjekurina",
    },
    {
      nameKey: "products.qese-letre",
      image: "/images/qese.png",
      slug: "qese-letre",
    },
  ]

  const borderRadiusClasses = [
    "rounded-tl-[120px] rounded-br-[40px] md:rounded-tl-[240px] md:rounded-br-[60px] lg:rounded-tl-[366px] lg:rounded-br-[86px]",
    "rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] lg:rounded-tl-[86px] lg:rounded-br-[86px]",
    "rounded-tr-[120px] rounded-bl-[40px] md:rounded-tr-[240px] md:rounded-bl-[60px] lg:rounded-tr-[366px] lg:rounded-bl-[86px]",
  ]

  return (
    <section className="w-[95%] mx-auto rounded-[16px] md:rounded-[24px] lg:rounded-[33px] overflow-hidden bg-[#E5E5E5] lg:mt-6">
      <div className="px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3c3232] mb-4 leading-tight">
            {t("products.title")}
          </h2>
          <Link
            href="/products"
            className="text-[#3c3232] text-base md:text-lg underline underline-offset-4 hover:text-[#332828] transition-colors"
          >
            {t("products.cta")}
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className={`relative aspect-square overflow-hidden group cursor-pointer ${borderRadiusClasses[index]}`}
            >
              {/* Border container - stays visible */}
              <div
                className={`absolute inset-0 border-[#747474] border-solid border ${borderRadiusClasses[index]} z-30 pointer-events-none`}
              />

              <div className="absolute inset-0 flex items-end justify-center px-6 md:px-8 pt-6 md:pt-8 z-10 transition-all duration-500 delay-500 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={t(product.nameKey)}
                    fill
                    className="object-contain object-bottom grayscale transition-[filter] duration-200 group-hover:grayscale-0"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center z-20 opacity-0 translate-y-4 transition-all duration-500 delay-700 group-hover:opacity-100 group-hover:-translate-y-1/2">
                <h3 className="text-[#3c3232] text-lg md:text-xl lg:text-2xl font-medium tracking-wider">
                  {t(product.nameKey)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
