"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  
const FacebookFilled = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramFilled = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.072 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus(data?.error || "Failed to send.");
      setLoading(false);
      return;
    }

    setStatus("Message sent!");
    form.reset();
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#3c3232] pt-1.5">
      <Header />

      <div className="w-[95%] max-w-[1400px] mx-auto pt-32 space-y-8 pb-8">
        {/* Contact Section */}
        <section className="bg-[#D5D5D5] rounded-[16px] md:rounded-[24px] lg:rounded-[33px] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-medium text-[#3C3232] mb-8 md:mb-12">
                {t("contact.reach")}
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#332828]" />
                  <a
                    href="tel:+38349111029"
                    className="text-base md:text-xl font-medium text-[#332828] hover:text-[#8CA033] transition-colors"
                  >
                    {t("contact.phone")}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#332828]" />
                  <a
                    href="mailto:info@ortopaper.com"
                    className="text-base md:text-xl font-medium text-[#332828] hover:text-[#8CA033] transition-colors"
                  >
                    {t("contact.email")}
                  </a>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://facebook.com/ortopaper" className="text-[#332828] hover:text-[#8CA033] transition-colors">
                    <FacebookFilled className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="https://instagram.com/ortopaper" className="text-[#332828] hover:text-[#8CA033] transition-colors">
                    <InstagramFilled className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#3C3232] mb-6 md:mb-8">
                {t("contact.form.title")}
              </h2>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Input
                  name="name"
                    type="text"
                    placeholder={t("contact.form.name")}
                    className="bg-transparent border-0 border-b border-[#707070]/35 rounded-none text-[#3C3232] placeholder:text-[#3C3232]/60 h-10 md:h-12 focus:border-[#8CA033] focus-visible:ring-0"
                  />
                </div>

                <div>
                  <Input
                  name="company"
                    type="text"
                    placeholder={t("contact.form.company")}
                    className="bg-transparent border-0 border-b border-[#707070]/35 rounded-none text-[#3C3232] placeholder:text-[#3C3232]/60 h-10 md:h-12 focus:border-[#8CA033] focus-visible:ring-0"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.email")}
                    className="bg-transparent border-0 border-b border-[#707070]/35 rounded-none text-[#3C3232] placeholder:text-[#3C3232]/60 h-10 md:h-12 focus:border-[#8CA033] focus-visible:ring-0"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    rows={4}
                    className="bg-transparent border-0 border-b border-[#707070]/35 rounded-none text-[#3C3232] placeholder:text-[#3C3232]/60 resize-none focus:border-[#8CA033] focus-visible:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-transparent hover:bg-[#8CA033]/10 text-[#8CA033] font-semibold text-base md:text-lg px-0 h-auto"
                >
                  {loading ? t("contact.form.sending") : t("contact.form.send")}
                </Button>
                {status && <p>{status}</p>}
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-[#4a4141] rounded-[16px] md:rounded-[24px] lg:rounded-[33px] overflow-hidden -mt-16 w-[90%] md:w-[80%] mx-auto">
          {/* Company Image with Info Overlay */}
          <div className="relative h-[400px] md:h-[500px]">
            <img src="/images/contact-img.svg" alt="Orto Paper Factory" className="w-full h-full object-cover" />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a4141]/60 to-[#4a4141] flex items-end">
              <div className="w-full md:w-[70%] mx-auto px-6 md:px-8 lg:px-16 py-8 md:py-12 grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Address */}
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-white uppercase tracking-wider mb-2 md:mb-3">
                    {t("contact.address")}
                  </h3>
                  <p className="text-white text-sm md:text-lg font-medium">
                    {t("contact.address.line1")}
                    <br />
                    {t("contact.address.line2")}
                    <br />
                    {t("contact.address.line3")}
                  </p>
                </div>

                {/* Opening Hours */}
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-white uppercase tracking-wider mb-2 md:mb-3">
                    {t("contact.hours")}
                  </h3>
                  <p className="text-white text-sm md:text-lg">
                    {t("contact.hours.weekday")}
                    <br />
                    {t("contact.hours.sunday")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[300px] md:h-[400px] bg-[#2d2525]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2424395793955!2d20.72189959872904!3d42.49233897106073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135375a21ef47999%3A0x4447d6b17560cc71!2sOrto%20Paper!5e1!3m2!1sen!2s!4v1768087190270!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
