"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const clients = [
  {
    name: "Buffalo",
    product: "QESE LETRE",
    image: "/images/bufalo.png",
    logo: "/clients/buffalo-logo.svg",
  },
  {
    name: "Berliner Döner",
    product: "QESE LETRE",
    image: "/images/berlinerdoner.png",
    logo: "/clients/berliner-logo.svg",
  },
  {
    name: "Cowboy Caffe",
    product: "QESE LETRE",
    image: "/images/cowboy.png",
    logo: "/clients/cowboy-logo.svg",
  },
  {
    name: "Straddod Coffee",
    product: "QESE LETRE",
    image: "/images/straddiot.png",
    logo: "/clients/straddod-logo.svg",
  },
  {
    name: "Sushi Co",
    product: "QESE LETRE",
    image: "/images/sushico.png",
    logo: "/clients/sushi-logo.svg",
  },
]

const row1 = clients.slice(0, 3)
const row2 = clients.slice(3, 6)

export function ClientStoriesSection() {
  const { t } = useLanguage()

  return (
    <>
      {/* Heading Section - Contained */}
      <section className="w-[95%] mx-auto rounded-[33px] bg-[#3c3232] overflow-hidden lg:mt-6">
        <div className="px-8 lg:px-16 py-12 lg:py-20">
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-0 max-w-3xl">{t("clients.title")}</h2>
        </div>
      </section>

      {/* Carousel Section - Full Width */}
      <section className="w-full bg-[#3c3232] py-8 lg:py-12 -mt-2">
        {/* Row 1 - Scrolling left to right */}
        <div className="overflow-hidden mb-6 group">
          <div className="flex gap-6 animate-scroll-left group-hover:[animation-play-state:paused]">
            {/* Duplicate items for seamless loop */}
            {[...row1, ...row1, ...row1].map((client, index) => (
              <div key={index} className="relative flex-shrink-0 w-[400px] aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={`${client.name} paper bag`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#3c3232] rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                    {client.name.charAt(0)}
                  </div>
                  <div className="text-white text-sm">
                    <div className="font-medium">{client.name}</div>
                    <div className="text-xs text-gray-400">{client.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling right to left */}
        <div className="overflow-hidden group">
          <div className="flex gap-6 animate-scroll-right group-hover:[animation-play-state:paused]">
            {/* Duplicate items for seamless loop */}
            {[...row2, ...row2, ...row2].map((client, index) => (
              <div key={index} className="relative flex-shrink-0 w-[400px] aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={`${client.name} paper bag`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#3c3232] rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                    {client.name.charAt(0)}
                  </div>
                  <div className="text-white text-sm">
                    <div className="font-medium">{client.name}</div>
                    <div className="text-xs text-gray-400">{client.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
