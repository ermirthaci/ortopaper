import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { ProductsSection } from "@/components/products-section"
import { ClientStoriesSection } from "@/components/client-stories-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col gap-4 md:gap-6 lg:gap-0 pb-4 md:pb-6 pt-1.5">
      <HeroSection />
      <ContentSection />
      <ProductsSection />
      <ClientStoriesSection />
      <Footer />
    </main>
  )
}
