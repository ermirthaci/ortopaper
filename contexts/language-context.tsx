"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "sq"

type TranslationKeys = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "home",
    "nav.about": "about",
    "nav.products": "products",
    "nav.contact": "contact",

    // Hero
    "hero.title1": "Breathe Life into Every Carry",
    "hero.subtitle1": "Our Paper, Your Choice.",
    "hero.title2": "Sustainably Crafted, Naturally",
    "hero.subtitle2": "Carried Our Paper, Your Planet.",
    "hero.cta": "Our Products",

    // Content Section
    "content.title": "Rooted in Sustainability, Wrapped in Purpose",
    "content.description": "Ortopaper is a paper packaging production company established in 2014 as part of Lirimi Group. Ortopaper produces a variety of packaging solutions marked by quality, innovation, and sustainability. With an unwavering commitment to quality, innovation, and the environment, the company specializes in producing a wide range of paper-based packaging tailored to meet the unique demands of the industrial and food sectors.",
    "content.cta": "About Us",

    // Products Section
    "products.title": "Bagging Goodness, Baking Dreams",
    "products.cta": "Our Products",
    "products.qese-pjekurina": "BAKERY BAGS",
    "products.thase-letre": "PAPER SACKS",
    "products.qese-letre": "PAPER BAGS",
    "products.view": "View",

    // Client Stories
    "clients.title": "Paper Perfection: Client Stories in Customized Bagging Solutions.",

    // Product Pages
    "product.sustainability": "SUSTAINABILITY",
    "product.sustainability.desc":
      "Ortopaper is committed to sustainable production and environmental protection. Our products are manufactured from renewable resources and are fully recyclable.",
    "product.fda": "ISO & FSSC COMPLIANCE",
    "product.fda.desc":
      "Ortopaper is certified according to ISO and FSSC standards. All of our products meet the required standards and are safe for food contact. We ensure the highest levels of quality and safety for our customers.",
    "product.quote.title": "Get a Quote",
    "product.quote.size": "PAPER SIZE",
    "product.quote.color": "PAPER COLOR",
    "product.quote.brown": "BROWN",
    "product.quote.white": "WHITE",
    "product.quote.email": "Email Address",
    "product.quote.message": "Message",
    "product.quote.submit": "GET A QUOTE",
    // Product Details
    "product.description.title": "Where sustainability meets style",
    "product.description.para1":
      "Nam consequat fingllia magna quis venenatis mauris ultrices et. Vestibulum ante ipsum primis in faucibus orci luctus et ultricies posuere cubilia curae. Proin quis ultrices eros.",
    "product.description.para2":
      "Aliquam tincidunt egestas sit nec pretium. Nunc eu alilamcorper leo. Ut congue quam lorem, aliquae sagittis nunc tristique sed. Suspendisse potenti. Integer non urna nec orci venenatis sagittis.",

    "product.qese-pjekurina.description.title": "Perfect for Bakeries",
    "product.qese-pjekurina.description.para1":
      "During the production of baking bags, we take care to incorporate every detail that you and your customers will appreciate. Our bags are carefully crafted to ensure that your products are protected, fresh, and presented attractively. Made from high-quality materials that are safe for food contact, our bags ensure the health of your consumers while also representing an environmentally sustainable choice.",
    "product.qese-pjekurina.description.para2":
      "Designed to keep baked goods fresh for longer, our bags feature a special structure that allows air circulation, preventing moisture buildup and preserving the delicious taste of bread and other baked products. Additionally, our bags are designed for multiple uses, supporting recyclability and contributing to your efforts to improve the environment.",

    "product.thase-letre.description.title": "Heavy-Duty Paper Sacks",
    "product.thase-letre.description.para1":
      "Our paper sacks are consistently crafted with care and passion, making them an excellent choice for a wide range of applications while offering a sustainable and environmentally effective alternative. Designed for multi-purpose use and recyclability, they are made from high-quality, eco-friendly materials that ensure durability even under intensive use.",
    "product.thase-letre.description.para2":
      "One of the key advantages of our paper sacks is their ability to be reused multiple times, contributing to environmental protection while remaining an economical and practical solution for both businesses and consumers. Available in a wide range of sizes, our paper sacks meet every need—from smaller options for personal packaging to larger sacks for heavy-duty transport. With adjustable capacity, they are ideal for carrying weights from 1 to 50 kg, making them suitable for a broad variety of products and applications.",
    "product.thase-letre.size.group1": "Bags with filling system (vent)",
    "product.thase-letre.size.group2": "Open bags",
 
    "product.qese-letre.description.title": "Eco-Friendly Reusable Paper Bags",
    "product.qese-letre.description.para1":
      "Our paper bags are designed to offer not only a safe and efficient way to transport goods, but also an environmentally sustainable alternative. They are suitable for a wide range of needs—from daily shopping and fashion items to fast food—making them ideal for various products and industries. The use of high-quality materials ensures that our bags are strong and durable, protecting contents from damage and moisture.",
    "product.qese-letre.description.para2":
      "To ensure easy and comfortable transportation, our bags for clothing stores and supermarkets feature durable, adjustable handles capable of carrying heavy loads, providing a comfortable shopping experience. We also offer the option to personalize your bags according to your preferences and add your business logo, giving your brand a unique identity while serving as effective advertising. Designed for repeated use, our bags help reduce environmental impact and support sustainable consumption.",   
"product.qese-letre.size.group1": "Bags with handles",
"product.qese-letre.size.group2": "Bags without handles",
    // About Page
    "about.title": "Rooted in Sustainability, Wrapped in Purpose",
    "about.description": "Ortopaper is a paper production company that has been operating since 2014.",
    "about.where": "Where sustainability meets style",
    "about.history.title": "HISTORY",
    "about.history.desc":
      "Ortopaper is a company dedicated to crafting paper packaging, established in 2014. As an integral part of the Lirimi Group, Orto excels in producing a diverse array of packaging solutions marked by excellence in quality, innovative approaches, and a steadfast commitment to sustainability. With an unyielding dedication to delivering superior quality, innovation, and environmental consciousness, the company specializes in creating a broad spectrum of paper-based packaging tailored to meet the distinctive requirements of the industrial and food sectors.",
    "about.mission.title": "MISSION",
    "about.mission.desc":
      "Our mission is to fashion high-caliber products that cater to the unique needs of our clients, consistently demonstrating reverence for the environment in which we reside. We cherish innovation, uphold integrity, and shoulder responsibility towards both the environment and our local community. ",
    "about.stats.bags": "Paper Bags Produced",
    "about.stats.clients": "Clients that we served",
    "about.stats.year": "Years of Operation",
    "about.team": "Our Team",

    // Contact Page
    "contact.reach": "Reach us",
    "contact.phone": "+383 49 111 029",
    "contact.email": "info@ortopaper.com",
    "contact.form.title": "Fill the form below to get in touch with us",
    "contact.form.name": "Full Name",
    "contact.form.company": "Company",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.send": "SEND",
    "contact.address": "ADDRESS",
    "contact.address.line1": "Str. Imer Krasniqi, 317",
    "contact.address.line2": "24000 Malishevë",
    "contact.address.line3": "Kosovë",
    "contact.hours": "Opening hours",
    "contact.hours.weekday": "Monday - Saturday: 8:00 – 17:00",
    "contact.hours.sunday": "Sunday - Closed",
    "contact.form.sending": "Sending...",
"contact.form.success": "Message sent successfully! We'll get back to you soon.",
"contact.form.error": "Failed to send message. Please try again.",

    // Footer
    "footer.tagline1": "Keep",
    "footer.tagline2": "Earth Breathing",
    "footer.newsletter": "Subscribe to",
    "footer.newsletter2": "our newsletter",
    "footer.email": "Email",
    "footer.terms": "Terms & Conditions",
    "footer.quality": "Quality Policy",
  },
  sq: {
    // Header
    "nav.home": "ballina",
    "nav.about": "rreth nesh",
    "nav.products": "produktet",
    "nav.contact": "kontakti",

    // Hero
    "hero.title1": "Breathe Life into Every Carry",
    "hero.subtitle1": "Our Paper, Your Choice.",
    "hero.title2": "Sustainably Crafted, Naturally",
    "hero.subtitle2": "Carried Our Paper, Your Planet.",
    "hero.cta": "Produktet Tona",

    // Content Section
       "content.title": "Rooted in Sustainability, Wrapped in Purpose",
    "content.description": "Ortopaper është kompani për prodhimin e ambalazheve të letrës e themeluar në vitin 2014 si pjesë e Lirimi Group. Ortopaper bënë prodhimin e zgjidhjeve të shumta të ambalazhit, të shënuara nga cilësia, inovacioni dhe qëndrueshmëria. Me një përkushtim të palëkundur ndaj cilësisë, inovacionit dhe mjedisit, kompania specializohet në prodhimin e një game të gjerë të ambalazheve nga letra, të përshtatura për të plotësuar kërkesat unike të sektorit industrial dhe të ushqimit.",
    "content.cta": "Rreth Nesh",

    // Products Section
    "products.title": "Bagging Goodness, Baking Dreams",
    "products.cta": "Produktet Tona",
    "products.qese-pjekurina": "QESE PJEKURINA",
    "products.thase-letre": "THASË LETRE",
    "products.qese-letre": "QESE LETRE",
    "products.view": "Shiko",

    // Client Stories
    "clients.title": "Paper Perfection: Client Stories in Customized Bagging Solutions.",

    // Product Pages
    "product.sustainability": "QËNDRUESHMËRIA",
    "product.sustainability.desc":
      "Ortopaper është e përkushtuar ndaj prodhimit të qëndrueshëm dhe mbrojtjes së mjedisit. Produktet tona janë të prodhuara nga burime të ripërtëritshme dhe janë plotësisht të riciklueshme.",
    "product.fda": "NË PËRPUTHJE ME STANDARDET ISO & FSSC",
    "product.fda.desc":
      "Ortopaper është e çertifikuar me standarde ISO dhe FSSC. Të gjitha produktet tona përmbushin standardet e kërkuara dhe janë të sigurta për kontakt me ushqimin. Ne sigurojmë cilësinë dhe sigurinë më të lartë për klientët tanë.",
    "product.quote.title": "Kërko ofertë",
    "product.quote.size": "DIMENSIONET",
    "product.quote.color": "NGJYRA E LETRËS",
    "product.quote.brown": "E KAFTË",
    "product.quote.white": "E BARDHË",
    "product.quote.email": "E-mail adresa",
    "product.quote.message": "Mesazhi",
    "product.quote.submit": "DËRGO KËRKESËN",

    // Product Details
    "product.description.title": "Where sustainability meets style",
    "product.description.para1":
      "Produktet tona janë të dizajnuara për të kombinuar cilësinë me qëndrueshmërinë mjedisore. Çdo produkt prodhohet me kujdes për të siguruar standarde të larta cilësie.",
    "product.description.para2":
      "Ne përdorim materiale të riciklueshme dhe procese miqësore me mjedisin për të krijuar produkte që janë të sigurta për përdoruesit dhe planetin. Angazhimi ynë ndaj qëndrueshmërisë është i patundur.",

    "product.qese-pjekurina.description.title": "Perfekte për Furrat",
    "product.qese-pjekurina.description.para1":
      "Gjatë prodhimit të qeseve për pjekurina, kujdesemi të përfshijmë çdo detaj që ju dhe klientët tuaj do të vlerësojnë. Qesët tona prodhohen me kujdes për të siguruar që produktet tuaja të jenë të mbrojtura, të freskëta dhe të paraqitura në mënyrë tërheqëse. Qeset tona janë të prodhuara me materiale cilësore, të sigurta për kontaktin me ushqim. Kjo jo vetëm që garanton shëndetin e konsumatorëve tuaj, por gjithashtu bën që qeset të jenë një zgjedhje e qëndrueshme për mjedisin.",
    "product.qese-pjekurina.description.para2":
      "Dizajnuar për të mbajtur pjekurinat e freskëta për më gjatë, qesët tona kanë një strukturë të veçantë që lejon që ajri të qarkullojë, duke parandaluar lagështinë dhe duke ruajtur shijen e mirë të bukës dhe produkteve të tjera. Qeset tona janë dizajnuar për përdorim më shumë se një herë, duke sjellë një aspekt të riciklimit dhe duke kontribuar në përpjekjet tuaja për të përmirësuar mjedisin.",

    "product.thase-letre.description.title": "Thasë letre për pesha të rënda",
    "product.thase-letre.description.para1":
      "Thasët sigurohemi që gjithmonë të prodhohen me kujdes dhe pasion janë një zgjedhje e shkëlqyeshme për shumë përdorime, duke ofruar një alternativë të qëndrueshme dhe të efektshme ekologjike. Thasët janë të dizajnuara me qëllim për të qenë shumëpërdorimësh dhe të riciklueshëm. Materialet e përdorura janë të cilësisë së lartë dhe gjithmonë të përshtatshëm për mjedisin, duke siguruar që thasët të mbeten të qëndrueshëm pavarësisht nga përdorimi intensiv.",
    "product.thase-letre.description.para2":
      "Një nga avantazhet kryesore të qesëve tona është aftësia e tyre për të përdorur më shumë se një herë. Kjo jo vetëm që kontribuon në mbrojtjen e mjedisit, por gjithashtu i bën ato një zgjedhje ekonomike dhe praktike për bizneset dhe konsumatorët. Thasët vijnë në një gamë të gjerë të madhësive, duke i bërë të përshtatshëm për çdo nevojë. Nga qesat më të vogla për paketime personale deri te ato më të mëdha për transportin e mallrave të rënda, ne ofrojmë një zgjedhje të përshtatshme për çdo dimension dhe peshë. Me kapacitetin e tyre të ndryshueshëm, thasët që ne prodhojmë janë ideal për të mbajtur peshë nga 1 deri në 50 kg, duke i bërë ato të përshtatshme për shumë lloje të produkteve dhe përdorimeve.",
    "product.thase-letre.size.group1": "Thasët me sistem për mbushje (ventil)",
    "product.thase-letre.size.group2": "Thasët e hapur",

    "product.qese-letre.description.title": "Qese letre shumëpërdorimshe",
    "product.qese-letre.description.para1":
      "Qeset tona letrare janë dizajnuar për të ofruar jo vetëm një mënyrë të sigurtë dhe efikase për të transportuar mallrat, por edhe një alternativë të qëndrueshme për ambientin. Qeset tona janë të përshtatshme për një gamë të gjerë të nevojave. Nga blerjet e përditshme tek veshjet e modës dhe ushqimi i shpejtë, ne ofrojmë qesa të përshtatshme për çdo lloj produkti dhe industrie. Përdorimi i materialeve të cilësisë së lartë siguron që qeset tona janë të forta dhe të qëndrueshme, duke mbrojtur produkte të ndryshme nga dëmtimet dhe lagështia.",
    "product.qese-letre.description.para2":
      "Për të bërë transportimin më të lehtë dhe të rehatshëm, qeset tona për veshje dhe supermarketet ofrojnë doreza të qëndrueshme dhe të përshtatshme për të mbajtur peshë të rëndë dhe për të siguruar një përvojë blerje të rehatshme. Ne ofrojmë mundësinë për të personalizuar qesët tuaja sipas preferencave tuaja dhe për të shtuar logon e biznesit tuaj. Kjo jo vetëm që i jep një identitet unik biznesit tuaj, por gjithashtu bën reklamë të mirë për markën tuaj. Qeset tona janë të dizajnuara me kujdes për të mundësuar një përdorim të vazhdueshëm. Kjo bën që ato të jenë një zgjedhje e shkëlqyeshme për të zvogëluar ndikimin e pakujdesshëm në mjedis.",
    "product.qese-letre.size.group1": "Qese me dorëza",
    "product.qese-letre.size.group2": "Qese pa dorëza",
      // About Page
    "about.title": "Rooted in Sustainability, Wrapped in Purpose",
    "about.description": "Ortopaper është kompani për prodhimin e ambalazheve nga letra, ku operon që nga viti 2014.",
    "about.where": "Where sustainability meets style",
    "about.history.title": "HISTORIKU",
    "about.history.desc":
      "Ortopaper është kompani për prodhimin e ambalazheve nga letra e themeluar në vitin 2014 si pjesë e Lirimi Group. Ortopaper bënë prodhimin e zgjidhjeve të shumta të ambalazhit, të shënuara nga cilësia, inovacioni dhe qëndrueshmëria. Me një përkushtim të palëkundur ndaj cilësisë, inovacionit dhe mjedisit, kompania specializohet në prodhimin e një game të gjerë të ambalazheve nga letra, të përshtatura për të plotësuar kërkesat unike të sektorit industrial dhe të ushqimit.",
  "about.mission.title": "MISIONI",
    "about.mission.desc":
      "Misioni ynë është të krijojmë produkte me cilësi të lartë, të përshtatura për nevojat e klientëve tanë, duke respektuar gjithmonë mjedisin në të cilin jetojmë. Ne vlerësojmë inovacionin, integritetin dhe përgjegjësinë ndaj mjedisit dhe komunitetit tonë.",
    "about.stats.bags": "Qese letre të prodhuara",
    "about.stats.clients": "Klientë që kemi shërbyer",
    "about.stats.year": "Vite të operimit",
    "about.team": "Ekipi ynë",

    // Contact Page
    "contact.reach": "Na kontaktoni",
    "contact.phone": "+383 49 111 029",
    "contact.email": "info@ortopaper.com",
    "contact.form.title": "Plotësoni formularin më poshtë për të kontaktuar me ne",
    "contact.form.name": "Emri i Plotë",
    "contact.form.company": "Kompania",
    "contact.form.email": "Adresa e Email-it",
    "contact.form.message": "Mesazhi",
    "contact.form.send": "DËRGO",
    "contact.address": "ADRESA",
    "contact.address.line1": "Rr. Imer Krasniqi, 317",
    "contact.address.line2": "24000 Malishevë",
    "contact.address.line3": "Kosovë",
    "contact.hours": "Orari i punës",
    "contact.hours.weekday": "E Hënë - Shtunë: 08:00 - 17:00",
    "contact.hours.sunday": "E Diele - Mbyllur",
"contact.form.sending": "Duke dërguar...",
"contact.form.success": "Mesazhi u dërgua me sukses! Do t'ju kontaktojmë së shpejti.",
"contact.form.error": "Dërgimi i mesazhit dështoi. Ju lutem provoni përsëri.",
    // Footer
"footer.tagline1": "Keep",
    "footer.tagline2": "Earth Breathing",
    "footer.newsletter": "Abonohu në",
    "footer.newsletter2": "buletinin tonë",
    "footer.email": "Email",
    "footer.terms": "Termat & Kushtet",
    "footer.quality": "Politika e Cilësisë",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem("language") as Language
      if (saved && (saved === "en" || saved === "sq")) {
        setLanguageState(saved)
      }
    } catch (e) {
      // localStorage not available
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem("language", lang)
    } catch (e) {
      // localStorage not available
    }
  }

  const t = (key: string): string => {
    const langTranslations = translations[language]
    if (langTranslations && key in langTranslations) {
      return langTranslations[key]
    }
    return key
  }

  // Prevent hydration mismatch by returning default language on server
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
