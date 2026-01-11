import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Orto Paper - paper packaging production company",
  description: "Our Paper, Your Choice. Rooted in Sustainability, Wrapped in Purpose.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

const polyfillScript = `
(function() {
  try {
    if (typeof Iterator !== 'undefined' && Iterator.prototype && !Iterator.prototype.toArray) {
      Iterator.prototype.toArray = function() { return Array.from(this); };
    }
    var origMapValues = Map.prototype.values;
    Map.prototype.values = function() {
      var it = origMapValues.call(this);
      if (!it.toArray) it.toArray = function() { return Array.from(this); };
      return it;
    };
    var origSetValues = Set.prototype.values;
    Set.prototype.values = function() {
      var it = origSetValues.call(this);
      if (!it.toArray) it.toArray = function() { return Array.from(this); };
      return it;
    };
  } catch(e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: polyfillScript }} />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
