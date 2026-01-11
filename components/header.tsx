"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Header({ isInsideHero = false }: { isInsideHero?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const products = [
    { name: t("products.thase-letre"), image: "/images/thase.png", slug: "thase-letre" },
    { name: t("products.qese-pjekurina"), image: "/images/pjekurina.png", slug: "qese-pjekurina" },
    { name: t("products.qese-letre"), image: "/images/qese.png", slug: "qese-letre" },
  ]

  const isProductCategoryPage = pathname.startsWith("/products/") && pathname.split("/").length === 3
  const showBorder = !isProductCategoryPage

  const MobileMenu = () => (
    <nav className="md:hidden bg-[#332828] rounded-2xl mt-2 py-4 px-6 flex flex-col gap-4">
      <Link
        href="/"
        className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
          pathname === "/" ? "font-bold" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("nav.home")}
      </Link>
      <Link
        href="/about"
        className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
          pathname === "/about" ? "font-bold" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("nav.about")}
      </Link>
      <div>
        <button
          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors flex items-center gap-2 w-full ${
            pathname.startsWith("/products") ? "font-bold" : ""
          }`}
        >
          {t("nav.products")}
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
        </button>
        {mobileProductsOpen && (
          <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-[#747474]/30 pl-4">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/products/${product.slug}`}
                className={`text-[#ffffff] text-xs hover:text-[#8CA033] transition-colors ${
                  pathname === `/products/${product.slug}` ? "font-bold text-[#8CA033]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link
        href="/contact"
        className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
          pathname === "/contact" ? "font-bold" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("nav.contact")}
      </Link>
    </nav>
  )

  const HeaderContent = () => (
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-40 h-12">
          <Image src="/logo.svg" alt="Orto Paper" fill className="object-contain" priority />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          {t("nav.home")}
        </Link>
        <Link
          href="/about"
          className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
            pathname === "/about" ? "font-bold" : ""
          }`}
        >
          {t("nav.about")}
        </Link>
        <div className="relative group">
          <span
            className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors cursor-default ${
              pathname.startsWith("/products") ? "font-bold" : ""
            }`}
          >
            {t("nav.products")}
          </span>
          <div className="absolute right-0 top-[40px] w-[85vw] max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="bg-[#3C3232] rounded-[33px] p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${product.slug}`}
                    className="relative group/item block cursor-pointer"
                  >
                    <div className="relative aspect-[3/3.2] border border-[#747474]/30 rounded-tl-[66px] rounded-br-[66px] overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-center px-6 pt-6 transition-opacity duration-500 group-hover/item:opacity-0">
                        <div className="relative w-4/5 h-4/5">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain object-bottom grayscale group-hover/item:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-sm font-light tracking-[0.2em] mb-2">{product.name}</h3>
                        <span className="text-white text-xs underline">{t("products.view")}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/contact"
          className={`text-[#ffffff] text-sm hover:text-[#8CA033] transition-colors ${
            pathname === "/contact" ? "font-bold" : ""
          }`}
        >
          {t("nav.contact")}
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  )

  if (isInsideHero) {
    return (
      <>
        <div className="px-4 md:px-6 lg:px-12 overflow-visible pt-4 md:pt-6">
          <HeaderContent />
          {mobileMenuOpen && <MobileMenu />}
        </div>
        <div className="w-full h-[1px] bg-[#E0E0E0]/50" />
      </>
    )
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 overflow-visible pt-4 md:pt-6">
      <div className="w-[95%] mx-auto px-4 md:px-6 lg:px-12 overflow-visible">
        <div className={showBorder ? "border-b border-[#707070]/35" : ""}>
          <HeaderContent />
        </div>
        {mobileMenuOpen && <MobileMenu />}
      </div>
    </header>
  )
}
