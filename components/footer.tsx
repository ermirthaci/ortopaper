"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <footer className="w-[95%] mx-auto rounded-[33px] bg-[#3c3232] overflow-hidden">
      <div className="px-8 lg:px-16 py-12 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Keep Earth Breath */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-medium">
              <span className="text-white">{t("footer.tagline1")}</span>
              <br />
              <span className="text-[#9A9A9A]">{t("footer.tagline2")}</span>
            </h3>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center font-light">
            <div className="flex flex-col gap-3 items-start">
              <Link href="/" className="text-white text-xl hover:text-[#8CA033] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="text-white text-xl hover:text-[#8CA033] transition-colors">
                {t("nav.about")}
              </Link>
              <div className="flex flex-col gap-2">
                <Link
                  href="/products/qese-pjekurina"
                  className="hidden lg:block text-white text-xl hover:text-[#8CA033] transition-colors"
                >
                  {t("nav.products")}
                </Link>
                <span className="lg:hidden text-white text-sm">{t("nav.products")}</span>
                <div className="flex flex-col gap-2 pl-4 border-l border-[#747474]/30 lg:hidden">
                  <Link
                    href="/products/qese-pjekurina"
                    className="text-white text-xs hover:text-[#8CA033] transition-colors"
                  >
                    {t("products.qese-pjekurina")}
                  </Link>
                  <Link
                    href="/products/thase-letre"
                    className="text-white text-xs hover:text-[#8CA033] transition-colors"
                  >
                    {t("products.thase-letre")}
                  </Link>
                  <Link
                    href="/products/qese-letre"
                    className="text-white text-xs hover:text-[#8CA033] transition-colors"
                  >
                    {t("products.qese-letre")}
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="text-white text-xl hover:text-[#8CA033] transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xl font-light mb-4">{t("footer.newsletter")} <br /> {t("footer.newsletter2")}</h4>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder={t("footer.email")}
                className="flex-1 bg-transparent border-b border-[#707070]/35 text-white placeholder:text-white py-2 focus:outline-none focus:border-white transition-colors"
              />
              <button className="text-white hover:text-gray-300 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#707070]/35">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Orto Paper" width={120} height={40} className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[#FFFFFF]/40 hover:text-[#8CA033] transition-colors text-sm">
              {t("footer.terms")}
            </Link>
            <Link href="/quality-policy" className="text-[#FFFFFF]/40 hover:text-[#8CA033] transition-colors text-sm">
              {t("footer.quality")}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#FFFFFF]/40" />
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm transition-colors ${
                  language === "en" ? "text-[#8CA033] font-semibold" : "text-[#FFFFFF]/40 hover:text-[#8CA033]"
                }`}
              >
                EN
              </button>
              <span className="text-[#FFFFFF]/40">/</span>
              <button
                onClick={() => setLanguage("sq")}
                className={`text-sm transition-colors ${
                  language === "sq" ? "text-[#8CA033] font-semibold" : "text-[#FFFFFF]/40 hover:text-[#8CA033]"
                }`}
              >
                SQ
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link href="https://facebook.com/ortopaper" className="text-white hover:text-[#8CA033] transition-colors text-sm">
              facebook
            </Link>
            <Link href="https://instagram.com/ortopaper" className="text-white hover:text-[#8CA033] transition-colors text-sm">
              instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
