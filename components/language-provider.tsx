"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "cs" | "de" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    downloads: "Downloads",
    news: "News",
    contact: "Contact",

    // Hero Section
    heroTitle: "Innovative Graphene Dispersions",
    heroSubtitle: "Leading the future of nanotechnology with cutting-edge graphene solutions",
    learnMore: "Learn More",

    // About Section
    aboutTitle: "About NANOBUILD",
    aboutText:
      "NANOBUILD is a pioneering startup focused on the innovative production of graphene dispersions. We are at the forefront of nanotechnology, developing revolutionary solutions that transform industries.",
    innovation: "Innovation",
    innovationText: "Cutting-edge research and development in graphene technology",
    performance: "Performance",
    performanceText: "High-quality dispersions with exceptional properties",
    reliability: "Reliability",
    reliabilityText: "Consistent quality and trusted solutions for industry",

    // Technology Section
    technologyTitle: "Technology of Low-Layer Graphene Production",
    technologySubtitle:
      "Our low-layer graphene dispersions are obtained through a patented method that involves the dispersion of graphite at resonant frequencies.",
    technologyIntro1:
      "Resonance is a physical phenomenon in which a system begins to oscillate with maximum amplitude in response to an external force with a certain frequency that matches its own (natural) frequency.",
    technologyIntro2:
      "Acoustic resonance generates strong vibrational waves in the dispersion medium. These vibrations are efficiently transferred to the graphite particles, causing intense mechanical stress.",
    technologyIntro3:
      "We chose this method of graphene production based on theoretical assumptions regarding the differences in properties between elemental and low-layer graphene.",

    // Advantages Section
    advantagesTitle: "1. Advantages of Low-Layer Graphene Compared to Elemental Graphene",
    structuralStability: "Structural Stability",
    structuralStabilityText:
      "Our low-layer graphene has much greater mechanical strength and resistance to damage due to interlayer van der Waals interactions.",
    improvedConductivity: "Improved Conductivity",
    improvedConductivityText:
      "Our low-layer graphene maintains high conductivity but is less prone to degradation when in contact with polymers.",
    betterDispersibility: "Better Dispersibility",
    betterDispersibilityText:
      "Our low-layer graphene has an optimal balance between specific surface area and interlayer forces, improving its dispersibility.",

    // Dispersion Media Effects
    dispersionTitle: "2. Effect of Dispersion Media Containing Low-Layer Graphene",
    synergisticEffect: "Synergistic Effect with the Matrix",
    synergisticEffectText:
      "Using dispersion media that contain components of the future composite creates direct chemical compatibility.",
    reducingPostProcessing: "Reducing Post-Processing",
    reducingPostProcessingText:
      "If low-layer graphene is already in a compatible environment, there is no need to remove solvents and then re-disperse it.",

    // Acoustic Resonance Method
    acousticTitle: "3. Role of Acoustic Resonance Method in Dispersion",
    minimizationDefects: "Minimization of Defects",
    minimizationDefectsText:
      "Acoustic resonance allows for the gentle separation of graphite into low-layer fragments without damaging the carbon lattice structure.",
    highHomogeneity: "High Homogeneity",
    highHomogeneityText:
      "The acoustic resonance method helps achieve a narrow distribution of the number of graphene sheet layers.",
    controlMorphology: "Control Over Morphology",
    controlMorphologyText:
      "Our acoustic resonance method can be controlled to achieve different sizes and shapes of graphene sheets.",

    // Future Vision
    futureTitle: "Nanomaterials - Technology that is changing the future",
    futureText1:
      "Our products have practical significance not only in the form of graphene dispersions and binders but also in solving modern problems aiming for technological progress.",
    futureText2:
      "Step into a world where the crystalline structures of graphene and other nanomaterials form the foundation of modern structures.",
    contactResearch: "Contact Our Research Team",

    // Products Section
    productsTitle: "Our Products",
    productsText:
      "Discover our range of high-quality graphene dispersions designed for various industrial applications.",
    downloadTechnical: "Download Technical Data Sheet",
    viewAllProducts: "View All Products",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Dispersion of Few-Layer Graphene in Industrial Oil",
    product2DDOLDesc:
      "Designed for modification of organic and organosilicon compounds, enhancing thermal and electrical conductivity.",
    product2DDOLSpec1: "3 wt.% graphene concentration",
    product2DDOLSpec2: "10-30 μm particle size",
    product2DDOLSpec3: "≥98% carbon content",

    product2D2R: "2D-2R",
    product2D2RTitle: "Surface Treatment Material",
    product2D2RDesc:
      "Electromagnetic radiation protection material absorbing up to 98% of radiation at 2-3mm thickness.",
    product2D2RSpec1: "Operating temp up to 8000°C",
    product2D2RSpec2: "3-110 GHz frequency range",
    product2D2RSpec3: "Up to 24 months shelf life",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Water-Polymer Dispersion",
    product2DDWPEDesc: "Enhances electrical conductivity of mineral fibers and improves anti-corrosion properties.",
    product2DDWPESpec1: "2 wt.% graphene concentration",
    product2DDWPESpec2: "Water-soluble polymer medium",
    product2DDWPESpec3: "High adhesion to fibers",

    product2DDW: "2DD-W",
    product2DDWTitle: "Aqueous Dispersion",
    product2DDWDesc:
      "Acts as matrix strength activator for electromagnetic wave absorption and structural applications.",
    product2DDWSpec1: "4 wt.% graphene concentration",
    product2DDWSpec2: "Water-based medium",
    product2DDWSpec3: "Up to 7.2% concentration available",

    // Applications Section
    applicationsTitle: "Applications",
    applicationsText: "Our graphene dispersions enable breakthrough solutions across multiple industries.",
    discussApplication: "Discuss Your Application",

    // Application Names
    appConcrete: "Concrete, Mortars, Building Mixes",
    appPlastics: "Plastics, Polymers, Paints, Protective Coatings",
    appMetallurgy: "Powder Metallurgy and Metallurgy of Light and Non-Ferrous Alloys",
    appEnergy: "Energy Saving Technologies and New Ways of Electricity Production",
    appEnvironment: "Environmental Protection",
    appComposite: "Composite Materials",
    appRubber: "Wear-Resistant Rubber and Other Elastomers",
    appLubricants: "Lubricants, Technical Fluids",

    // Application Content
    appConcreteSubtitle: "Graphene in Construction",
    appConcreteContent1:
      "Increases concrete strength – reduces microcrack formation, improves flexibility and durability.",
    appConcreteContent2:
      "Reduces carbon footprint – allows for a reduction in cement content, decreasing CO₂ emissions.",
    appConcreteContent3: "Speeds up curing – enhances the hydration process and accelerates strength development.",
    appConcreteContent4: "Improves resistance to water and chemicals – increases the longevity of building materials.",
    appConcreteContent5: "Enhances thermal conductivity – enables better temperature regulation in buildings.",
    appConcreteContent6:
      "Supports sustainability – aids in concrete recycling and reduces the need for new raw materials.",

    appPlasticsSubtitle: "Coatings with graphene",
    appPlasticsContent1:
      "Based on our thin-film graphene dispersion obtained under special resonance conditions, we have developed the most effective shielding coating to date.",
    appPlasticsContent2: "In the range of 1.5 to 120 GHz, the coating absorbs up to 99% of electromagnetic waves.",
    appPlasticsContent3:
      "The coating is resistant to water, oils, hydrocarbons, and organosilicon liquids and finds commercial applications primarily in the defense and security industry.",

    appMetallurgySubtitle: "Metallurgy",
    appMetallurgyContent1: "High conductivity – enables faster signal transmission in microelectronics.",
    appMetallurgyContent2:
      "Extreme sensitivity – enhances the performance of photodetectors across a wide wavelength spectrum.",
    appMetallurgyContent3: "Transparency and flexibility – ideal for optoelectronic displays and sensors.",
    appMetallurgyContent4: "Fast response – allows for more efficient optical switches and photodetectors.",
    appMetallurgyContent5: "Low power consumption – reduces energy demands in microelectronic devices.",
    appMetallurgyContent6:
      "Miniaturization of components – enables the development of smaller and more powerful chips and transistors.",

    appEnergySubtitle: "Technology",
    appEnergyContent1: "Extreme sensitivity – Detection of substances at the molecular level.",
    appEnergyContent2: "Fast response – Immediate detection of environmental changes.",
    appEnergyContent3: "Low energy consumption – Efficient operation with minimal power usage.",
    appEnergyContent4: "Flexibility – Can be integrated into wearable and flexible devices.",
    appEnergyContent5: "Interference resistance – High selectivity and measurement stability.",
    appEnergyContent6: "Wide range of applications – Used in medicine, ecology, and industry.",

    appEnvironmentSubtitle: "Environment",
    appEnvironmentContent1: "Bacteria elimination – Graphene disrupts the cell walls of microorganisms.",
    appEnvironmentContent2:
      "Long-term effectiveness – Permanent protection without the need for frequent disinfection.",
    appEnvironmentContent3: "No chemicals – Antibacterial effect without the use of toxic substances.",
    appEnvironmentContent4: "Wide applications – Used in medicine, food industry, and public spaces.",
    appEnvironmentContent5: "Durability – Graphene-coated surfaces have a long lifespan.",
    appEnvironmentContent6: "Human safety – Non-toxic and biocompatible materials.",

    appCompositeSubtitle: "Composites",
    appCompositeContent1: "Advanced Technologies – Innovative materials for high efficiency.",
    appCompositeContent2: "Wide Applications – Used in the chemical, food, and pharmaceutical industries.",
    appCompositeContent3: "Environmental Benefits – Improving water and air quality.",
    appCompositeContent4: "High Purity – Ensuring the quality of final products.",
    appCompositeContent5: "Flexible Solutions – Tailoring pore sizes and materials.",
    appCompositeContent6: "Cost Savings – Reducing operational and energy costs.",

    appRubberSubtitle: "Wear-Resistant Elastomers",
    appRubberContent1: "High durability – Resistance to wear and abrasion for long-lasting performance.",
    appRubberContent2: "Elastic properties – Excellent flexibility and ability to return to original shape.",
    appRubberContent3: "Wide application – Used in automotive, heavy industry, and construction.",
    appRubberContent4: "Temperature stability – Resistance to extreme temperatures and environmental influences.",
    appRubberContent5: "Chemical resistance – Protection against aggressive chemicals and oils.",
    appRubberContent6: "Economic benefits – Reduction in maintenance costs and extended equipment lifespan.",

    appLubricantsSubtitle: "Lubricants and Fluids",
    appLubricantsContent1: "Performance Optimization – Ensuring smooth operation of machines and equipment.",
    appLubricantsContent2: "Reducing Friction – Minimizing wear and improving efficiency.",
    appLubricantsContent3: "Wide Application – Used in the automotive, aerospace, and industrial sectors.",
    appLubricantsContent4:
      "Temperature Resistance – Stability under extreme temperatures and various working conditions.",
    appLubricantsContent5: "Corrosion Protection – Preventing rust formation and extending the lifespan of components.",
    appLubricantsContent6: "Cost Savings – Reducing maintenance costs and extending replacement intervals.",

    // Products Page
    productsPageTitle: "Products",
    productsPageText:
      "Discover our comprehensive range of graphene-based products designed for cutting-edge applications across various industries.",

    // Downloads Page
    downloadsTitle: "Downloads",
    downloadsText:
      "Access our comprehensive library of technical documents, product catalogs, and educational materials.",
    download: "Download",
    needAdditional: "Need Additional Information?",
    cantFind:
      "Can't find what you're looking for? Contact our technical team for custom documentation or specific product information.",
    contactTechnical: "Contact Technical Support",

    // Download Items
    download2DDOL: "2DD-OL - Dispersion of Few-Layer Graphene in Industrial Oil",
    download2DDOLDesc:
      "Technical data sheet for graphene dispersion in industrial oil for composite materials and powder metallurgy",
    download2D2R: "2D-2R - Surface Treatment Material",
    download2D2RDesc: "Electromagnetic radiation protection material operating at temperatures up to 8000°C",
    download2DDWPE: "2DD-WPE - Water-Polymer Dispersion of Few-Layer Graphene",
    download2DDWPEDesc:
      "Aqueous dispersion for enhancing electrical conductivity and anti-corrosion properties of mineral fibers",
    download2DDW: "2DD-W - Aqueous Dispersion of Few-Layer Graphene",
    download2DDWDesc: "Water-based graphene suspension for electromagnetic wave absorption and structural applications",

    // News Page
    newsTitle: "News",
    newsText: "Stay updated with the latest developments, research breakthroughs, and company news from NANOBUILD.",
    featuredArticle: "Featured Article",
    readMore: "Read More",
    stayUpdated: "Stay Updated",
    subscribeText: "Subscribe to our newsletter to receive the latest news and updates directly in your inbox.",
    subscribeNewsletter: "Subscribe to Newsletter",
    all: "All",
    research: "Research",
    business: "Business",
    company: "Company",
    sustainability: "Sustainability",

    // News Articles
    newsArticle1Title: "NANOBUILD Announces Breakthrough in Graphene Dispersion Technology",
    newsArticle1Excerpt:
      "Our latest research has led to a significant improvement in graphene dispersion stability and performance.",
    newsArticle1Author: "Dr. Evgeniy Demin",
    newsArticle2Title: "Partnership with Leading Electronics Manufacturer",
    newsArticle2Excerpt:
      "NANOBUILD partners with major electronics company to develop next-generation conductive materials.",
    newsArticle2Author: "Dr. Evgeniy Demin",
    newsArticle3Title: "New Production Facility Opens in Prague",
    newsArticle3Excerpt:
      "Expansion of our manufacturing capabilities with state-of-the-art equipment and increased capacity.",
    newsArticle3Author: "Dr. Evgeniy Demin",
    newsArticle4Title: "Sustainable Graphene Production Methods",
    newsArticle4Excerpt:
      "Our commitment to environmental responsibility through innovative green production techniques.",
    newsArticle4Author: "Dr. Evgeniy Demin",

    // Application Page
    backToApplications: "Back to Applications",
    interestedApplication: "Interested in This Application?",
    interestedText:
      "Contact our technical team to discuss how our graphene dispersions can enhance your specific application.",
    contactTeam: "Contact Our Team",
    downloadTechnicalData: "Download Technical Data",
    applicationNotFound: "Application Not Found",
    backToHome: "Back to Home",

    // Contact Form
    contactTitle: "Get in Touch",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    consent: "I agree to the processing of personal data",
    iAgreeTo: "I agree to the",
    processingPersonalData: "processing of personal data",
    sendMessage: "Send Message",
    sending: "Sending...",
    thankYou: "Thank you for your message! We will get back to you soon.",
    errorMessage: "An error occurred while sending your message. Please try again later.",
    fillRequired: "Please fill in all required fields.",
    agreeConsent: "Please agree to the processing of personal data.",
    failedSend: "Failed to send email. Please try again later.",

    // Footer
    addressLabel: "Address",
    addressFull: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "All rights reserved",
    czechRepublic: "Czech Republic",
    companyId: "Company ID (IČO)",

    // Privacy Policy
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyIntro:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
    informationWeCollect: "Information We Collect",
    informationWeCollectText: "We collect information you provide directly to us, such as when you:",
    fillContactForm: "Fill out our contact form",
    subscribeNewsletter: "Subscribe to our newsletter",
    downloadDocuments: "Download technical documents",
    communicateEmail: "Communicate with us via email or phone",
    visitWebsite: "Visit our website (through cookies and analytics)",
    typesOfInformation:
      "The types of information we may collect include your name, email address, phone number, company information, and any other information you choose to provide.",
    howWeUseInformation: "How We Use Your Information",
    howWeUseInformationText: "We use the information we collect to:",
    respondInquiries: "Respond to your inquiries and provide customer support",
    sendTechnicalInfo: "Send you technical information and updates about our products",
    processRequests: "Process your requests for technical documentation",
    improveWebsite: "Improve our website and services",
    complyLegal: "Comply with legal obligations",
    communicateProducts: "Communicate with you about our products and services",
    dataRetention: "Data Retention",
    dataRetentionText:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy.",
    contactFormSubmissions: "Contact form submissions",
    contactFormRetention: "3 years from the date of submission",
    emailCommunications: "Email communications",
    emailRetention: "3 years from the last communication",
    newsletterSubscriptions: "Newsletter subscriptions",
    newsletterRetention: "Until you unsubscribe",
    websiteAnalytics: "Website analytics data",
    analyticsRetention: "26 months (Google Analytics default)",
    whoHasAccess: "Who Has Access to Your Data",
    whoHasAccessText: "Your personal information may be accessed by:",
    nanobuildEmployees: "NANOBUILD employees",
    employeesAccess: "Only those who need access to respond to your inquiries",
    serviceProviders: "Service providers",
    serviceProvidersAccess: "Third-party services we use (email hosting, website analytics, cloud storage)",
    legalAuthorities: "Legal authorities",
    legalAccess: "When required by law or to protect our rights",
    noSellData:
      "We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.",
    dataProtectionSecurity: "Data Protection & Security",
    dataProtectionText:
      "We implement appropriate technical and organizational security measures to protect your personal information.",
    encryptedTransmission: "Encrypted data transmission (SSL/TLS)",
    secureStorage: "Secure data storage with access controls",
    securityAssessments: "Regular security assessments",
    employeeTraining: "Employee training on data protection",
    yourRights: "Your Rights",
    yourRightsText: "Under GDPR and other applicable laws, you have the right to:",
    accessRight: "Access",
    accessRightDesc: "Request a copy of your personal data",
    rectificationRight: "Rectification",
    rectificationRightDesc: "Correct inaccurate or incomplete data",
    erasureRight: "Erasure",
    erasureRightDesc: "Request deletion of your personal data",
    portabilityRight: "Portability",
    portabilityRightDesc: "Receive your data in a structured format",
    restrictionRight: "Restriction",
    restrictionRightDesc: "Limit how we process your data",
    objectionRight: "Objection",
    objectionRightDesc: "Object to processing based on legitimate interests",
    withdrawConsent: "Withdraw consent",
    withdrawConsentDesc: "Where processing is based on consent",
    exerciseRights: "To exercise these rights, please contact us using the information below.",
    cookiesAnalytics: "Cookies and Analytics",
    cookiesAnalyticsText:
      "Our website uses cookies and similar technologies to improve your browsing experience and analyze website traffic.",
    updatesToPolicy: "Updates to This Policy",
    updatesPolicyText: "We may update this privacy policy from time to time.",
    lastUpdated: "Last updated",
    lastUpdatedDate: "January 2025",
    contactInformation: "Contact Information",
    contactInformationText:
      "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:",

    // Common
    type: "Type",
    size: "Size",
    category: "Category",
    author: "Author",
    date: "Date",
    notProvided: "Not provided",
  },

  cs: {
    // Navigation
    home: "Domů",
    products: "Produkty",
    downloads: "Ke stažení",
    news: "Novinky",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Inovativní grafenové disperze",
    heroSubtitle: "Vedeme budoucnost nanotechnologií s nejmodernějšími grafenovými řešeními",
    learnMore: "Zjistit více",

    // About Section
    aboutTitle: "O společnosti NANOBUILD",
    aboutText:
      "NANOBUILD je průkopnický startup zaměřený na inovativní výrobu grafenových disperzí. Jsme v čele nanotechnologií a vyvíjíme revoluční řešení, která transformují průmysl.",
    innovation: "Inovace",
    innovationText: "Špičkový výzkum a vývoj v oblasti grafenových technologií",
    performance: "Výkon",
    performanceText: "Vysoce kvalitní disperze s výjimečnými vlastnostmi",
    reliability: "Spolehlivost",
    reliabilityText: "Konzistentní kvalita a osvědčená řešení pro průmysl",

    // Technology Section
    technologyTitle: "Technologie výroby nízkopočetného grafenu",
    technologySubtitle:
      "Naše disperze nízkopočetného grafenu jsou získávány patentovanou metodou, která zahrnuje disperzi grafitu při rezonančních frekvencích.",
    technologyIntro1:
      "Rezonance je fyzikální jev, při kterém systém začíná oscilovat s maximální amplitudou v reakci na vnější sílu s určitou frekvencí.",
    technologyIntro2:
      "Akustická rezonance generuje silné vibrační vlny v disperzním médiu. Tyto vibrace jsou účinně přenášeny na částice grafitu.",
    technologyIntro3:
      "Tuto metodu výroby grafenu jsme zvolili na základě teoretických předpokladů týkajících se rozdílů ve vlastnostech mezi elementárním a nízkopočetným grafenem.",

    // Advantages Section
    advantagesTitle: "1. Výhody nízkopočetného grafenu ve srovnání s elementárním grafenem",
    structuralStability: "Strukturální stabilita",
    structuralStabilityText:
      "Náš nízkopočetný grafen má mnohem větší mechanickou pevnost a odolnost vůči poškození díky mezivrstevným van der Waalsovým interakcím.",
    improvedConductivity: "Zlepšená vodivost",
    improvedConductivityText:
      "Náš nízkopočetný grafen si zachovává vysokou vodivost, ale je méně náchylný k degradaci při kontaktu s polymery.",
    betterDispersibility: "Lepší disperzibilita",
    betterDispersibilityText:
      "Náš nízkopočetný grafen má optimální rovnováhu mezi specifickou povrchovou plochou a mezivrstevnými silami.",

    // Dispersion Media Effects
    dispersionTitle: "2. Účinek disperzních médií obsahujících nízkopočetný grafen",
    synergisticEffect: "Synergický efekt s matricí",
    synergisticEffectText:
      "Použití disperzních médií, která obsahují složky budoucího kompozitu, vytváří přímou chemickou kompatibilitu.",
    reducingPostProcessing: "Snížení následného zpracování",
    reducingPostProcessingText:
      "Pokud je nízkopočetný grafen již v kompatibilním prostředí, není třeba odstraňovat rozpouštědla a poté jej znovu dispergovat.",

    // Acoustic Resonance Method
    acousticTitle: "3. Role metody akustické rezonance při disperzi",
    minimizationDefects: "Minimalizace defektů",
    minimizationDefectsText:
      "Akustická rezonance umožňuje jemné oddělení grafitu na nízkopočetné fragmenty bez poškození struktury uhlíkové mřížky.",
    highHomogeneity: "Vysoká homogenita",
    highHomogeneityText: "Metoda akustické rezonance pomáhá dosáhnout úzké distribuce počtu vrstev grafenových listů.",
    controlMorphology: "Kontrola nad morfologií",
    controlMorphologyText:
      "Naše metoda akustické rezonance může být řízena tak, aby bylo dosaženo různých velikostí a tvarů grafenových listů.",

    // Future Vision
    futureTitle: "Nanomateriály - Technologie, která mění budoucnost",
    futureText1:
      "Naše produkty mají praktický význam nejen ve formě grafenových disperzí a pojiv, ale také při řešení moderních problémů zaměřených na technologický pokrok.",
    futureText2:
      "Vstupte do světa, kde krystalické struktury grafenu a dalších nanomateriálů tvoří základ moderních struktur.",
    contactResearch: "Kontaktujte náš výzkumný tým",

    // Products Section
    productsTitle: "Naše produkty",
    productsText: "Objevte naši řadu vysoce kvalitních grafenových disperzí navržených pro různé průmyslové aplikace.",
    downloadTechnical: "Stáhnout technický list",
    viewAllProducts: "Zobrazit všechny produkty",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Disperze nízkopočetného grafenu v průmyslovém oleji",
    product2DDOLDesc:
      "Navrženo pro modifikaci organických a organosilikátových sloučenin, zlepšuje tepelnou a elektrickou vodivost.",
    product2DDOLSpec1: "3 hm.% koncentrace grafenu",
    product2DDOLSpec2: "Velikost částic 10-30 μm",
    product2DDOLSpec3: "≥98% obsah uhlíku",

    product2D2R: "2D-2R",
    product2D2RTitle: "Materiál pro povrchovou úpravu",
    product2D2RDesc:
      "Materiál pro ochranu před elektromagnetickým zářením absorbující až 98% záření při tloušťce 2-3mm.",
    product2D2RSpec1: "Provozní teplota až 8000°C",
    product2D2RSpec2: "Frekvenční rozsah 3-110 GHz",
    product2D2RSpec3: "Trvanlivost až 24 měsíců",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Vodno-polymerní disperze",
    product2DDWPEDesc: "Zlepšuje elektrickou vodivost minerálních vláken a zlepšuje antikorozní vlastnosti.",
    product2DDWPESpec1: "2 hm.% koncentrace grafenu",
    product2DDWPESpec2: "Vodorozpustné polymerní médium",
    product2DDWPESpec3: "Vysoká adheze k vláknům",

    product2DDW: "2DD-W",
    product2DDWTitle: "Vodná disperze",
    product2DDWDesc:
      "Působí jako aktivátor pevnosti matrice pro absorpci elektromagnetických vln a strukturální aplikace.",
    product2DDWSpec1: "4 hm.% koncentrace grafenu",
    product2DDWSpec2: "Vodné médium",
    product2DDWSpec3: "K dispozici až 7,2% koncentrace",

    // Applications Section
    applicationsTitle: "Aplikace",
    applicationsText: "Naše grafenové disperze umožňují průlomová řešení napříč mnoha průmyslovými odvětvími.",
    discussApplication: "Diskutujte o vaší aplikaci",

    // Application Names
    appConcrete: "Beton, malty, stavební směsi",
    appPlastics: "Plasty, polymery, barvy, ochranné povlaky",
    appMetallurgy: "Práškové metalurgie a metalurgie lehkých a neželezných slitin",
    appEnergy: "Energeticky úsporné technologie a nové způsoby výroby elektřiny",
    appEnvironment: "Ochrana životního prostředí",
    appComposite: "Kompozitní materiály",
    appRubber: "Opotřebení odolná guma a další elastomery",
    appLubricants: "Maziva, technické kapaliny",

    // Application Content
    appConcreteSubtitle: "Grafen ve stavebnictví",
    appConcreteContent1: "Zvyšuje pevnost betonu – snižuje tvorbu mikrotrhlin, zlepšuje flexibilitu a trvanlivost.",
    appConcreteContent2: "Snižuje uhlíkovou stopu – umožňuje snížení obsahu cementu, čímž snižuje emise CO₂.",
    appConcreteContent3: "Urychluje tvrdnutí – zlepšuje proces hydratace a urychluje vývoj pevnosti.",
    appConcreteContent4: "Zlepšuje odolnost vůči vodě a chemikáliím – zvyšuje životnost stavebních materiálů.",
    appConcreteContent5: "Zlepšuje tepelnou vodivost – umožňuje lepší regulaci teploty v budovách.",
    appConcreteContent6: "Podporuje udržitelnost – pomáhá při recyklaci betonu a snižuje potřebu nových surovin.",

    appPlasticsSubtitle: "Povlaky s grafenem",
    appPlasticsContent1:
      "Na základě naší tenkovrstvé grafenové disperze jsme vyvinuli dosud nejúčinnější stínicí povlak schopný absorbovat elektromagnetické vlny v širokém rozsahu.",
    appPlasticsContent2: "V rozsahu 1,5 až 120 GHz povlak absorbuje až 99% elektromagnetických vln.",
    appPlasticsContent3:
      "Povlak je odolný vůči vodě, olejům, uhlovodíkům a organosilikátovým kapalinám a nachází komerční uplatnění především v obranném a bezpečnostním průmyslu.",

    appMetallurgySubtitle: "Metalurgie",
    appMetallurgyContent1: "Vysoká vodivost – umožňuje rychlejší přenos signálu v mikroelektronice.",
    appMetallurgyContent2: "Extrémní citlivost – zlepšuje výkon fotodetektorů v širokém spektru vlnových délek.",
    appMetallurgyContent3: "Průhlednost a flexibilita – ideální pro optoelektronické displeje a senzory.",
    appMetallurgyContent4: "Rychlá odezva – umožňuje efektivnější optické spínače a fotodetektory.",
    appMetallurgyContent5: "Nízká spotřeba energie – snižuje energetické nároky mikroelektronických zařízení.",
    appMetallurgyContent6: "Miniaturizace komponentů – umožňuje vývoj menších a výkonnějších čipů a tranzistorů.",

    appEnergySubtitle: "Technologie",
    appEnergyContent1: "Extrémní citlivost – Detekce látek na molekulární úrovni.",
    appEnergyContent2: "Rychlá odezva – Okamžitá detekce změn prostředí.",
    appEnergyContent3: "Nízká spotřeba energie – Efektivní provoz s minimální spotřebou energie.",
    appEnergyContent4: "Flexibilita – Může být integrována do nositelných a flexibilních zařízení.",
    appEnergyContent5: "Odolnost vůči rušení – Vysoká selektivita a stabilita měření.",
    appEnergyContent6: "Široký rozsah aplikací – Používá se v medicíně, ekologii a průmyslu.",

    appEnvironmentSubtitle: "Prostředí",
    appEnvironmentContent1: "Eliminace bakterií – Grafen narušuje buněčné stěny mikroorganismů.",
    appEnvironmentContent2: "Dlouhodobá účinnost – Trvalá ochrana bez nutnosti častého dezinfikování.",
    appEnvironmentContent3: "Bez chemikálií – Antibakteriální účinek bez použití toxických látek.",
    appEnvironmentContent4: "Široké aplikace – Používá se v medicíně, potravinářském průmyslu a veřejných prostorech.",
    appEnvironmentContent5: "Trvanlivost – Povrchy pokryté grafenem mají dlouhou životnost.",
    appEnvironmentContent6: "Bezpečnost pro člověka – Netoxické a biokompatibilní materiály.",

    appCompositeSubtitle: "Kompozity",
    appCompositeContent1: "Pokročilé technologie – Inovativní materiály pro vysokou účinnost.",
    appCompositeContent2: "Široké aplikace – Používá se v chemickém, potravinářském a farmaceutickém průmyslu.",
    appCompositeContent3: "Environmentální přínosy – Zlepšování kvality vody a vzduchu.",
    appCompositeContent4: "Vysoká čistota – Zajištění kvality konečných produktů.",
    appCompositeContent5: "Flexibilní řešení – Přizpůsobení velikosti pórů a materiálů.",
    appCompositeContent6: "Úspory nákladů – Snížení provozních a energetických nákladů.",

    appRubberSubtitle: "Opotřebení odolné elastomery",
    appRubberContent1: "Vysoká trvanlivost – Odolnost vůči opotřebení a oděru pro dlouhodobý výkon.",
    appRubberContent2: "Elastické vlastnosti – Vynikající flexibilita a schopnost návratu do původního tvaru.",
    appRubberContent3: "Široké uplatnění – Používá se v automobilovém, těžkém průmyslu a stavebnictví.",
    appRubberContent4: "Teplotní stabilita – Odolnost vůči extrémním teplotám a vlivům prostředí.",
    appRubberContent5: "Chemická odolnost – Ochrana proti agresivním chemikáliím a olejům.",
    appRubberContent6: "Ekonomické přínosy – Snížení nákladů na údržbu a prodloužení životnosti zařízení.",

    appLubricantsSubtitle: "Maziva a kapaliny",
    appLubricantsContent1: "Optimalizace výkonu – Zajištění hladkého chodu strojů a zařízení.",
    appLubricantsContent2: "Snížení tření – Minimalizace opotřebení a zlepšení účinnosti.",
    appLubricantsContent3: "Široké uplatnění – Používá se v automobilovém, leteckém a průmyslovém sektoru.",
    appLubricantsContent4: "Teplotní odolnost – Stabilita při extrémních teplotách a různých pracovních podmínkách.",
    appLubricantsContent5: "Ochrana proti korozi – Prevence tvorby rzi a prodloužení životnosti komponentů.",
    appLubricantsContent6: "Úspory nákladů – Snížení nákladů na údržbu a prodloužení intervalů výměny.",

    // Products Page
    productsPageTitle: "Produkty",
    productsPageText:
      "Objevte naši komplexní řadu produktů na bázi grafenu navržených pro špičkové aplikace napříč různými průmyslovými odvětvími.",

    // Downloads Page
    downloadsTitle: "Stažení",
    downloadsText:
      "Přístup k naší komplexní knihovně technických dokumentů, produktových katalogů a vzdělávacích materiálů.",
    download: "Stáhnout",
    needAdditional: "Potřebujete další informace?",
    cantFind:
      "Nemůžete najít, co hledáte? Kontaktujte náš technický tým pro vlastní dokumentaci nebo specifické informace o produktu.",
    contactTechnical: "Kontaktujte technickou podporu",

    // Download Items
    download2DDOL: "2DD-OL - Disperze nízkopočetného grafenu v průmyslovém oleji",
    download2DDOLDesc:
      "Technický list pro grafenovou disperzi v průmyslovém oleji pro kompozitní materiály a práškovou metalurgii",
    download2D2R: "2D-2R - Materiál pro povrchovou úpravu",
    download2D2RDesc: "Materiál pro ochranu před elektromagnetickým zářením pracující při teplotách až 8000°C",
    download2DDWPE: "2DD-WPE - Vodno-polymerní disperze nízkopočetného grafenu",
    download2DDWPEDesc:
      "Vodná disperze pro zlepšení elektrické vodivosti a antikorozních vlastností minerálních vláken",
    download2DDW: "2DD-W - Vodná disperze nízkopočetného grafenu",
    download2DDWDesc: "Vodná grafenová suspenze pro absorpci elektromagnetických vln a strukturální aplikace",

    // News Page
    newsTitle: "Novinky",
    newsText: "Zůstaňte informováni o nejnovějším vývoji, výzkumných průlomech a novinkách společnosti NANOBUILD.",
    featuredArticle: "Hlavní článek",
    readMore: "Číst více",
    stayUpdated: "Zůstaňte informováni",
    subscribeText:
      "Přihlaste se k odběru našeho newsletteru a dostávejte nejnovější zprávy a aktualizace přímo do vaší schránky.",
    subscribeNewsletter: "Přihlásit se k odběru newsletteru",
    all: "Vše",
    research: "Výzkum",
    business: "Obchod",
    company: "Společnost",
    sustainability: "Udržitelnost",

    // News Articles
    newsArticle1Title: "NANOBUILD oznamuje průlom v technologii grafenových disperzí",
    newsArticle1Excerpt: "Náš nejnovější výzkum vedl k významnému zlepšení stability a výkonu grafenových disperzí.",
    newsArticle1Author: "Dr. Evgeniy Demin",
    newsArticle2Title: "Partnerství s předním výrobcem elektroniky",
    newsArticle2Excerpt:
      "NANOBUILD se spojuje s významnou elektronickou společností pro vývoj vodivých materiálů nové generace.",
    newsArticle2Author: "Dr. Evgeniy Demin",
    newsArticle3Title: "Nový výrobní závod otevřen v Praze",
    newsArticle3Excerpt: "Rozšíření našich výrobních kapacit s nejmodernějším vybavením a zvýšenou kapacitou.",
    newsArticle3Author: "Dr. Evgeniy Demin",
    newsArticle4Title: "Udržitelné metody výroby grafenu",
    newsArticle4Excerpt:
      "Náš závazek k environmentální odpovědnosti prostřednictvím inovativních zelených výrobních technik.",
    newsArticle4Author: "Dr. Evgeniy Demin",

    // Application Page
    backToApplications: "Zpět na aplikace",
    interestedApplication: "Máte zájem o tuto aplikaci?",
    interestedText:
      "Kontaktujte náš technický tým a diskutujte o tom, jak naše grafenové disperze mohou vylepšit vaši specifickou aplikaci.",
    contactTeam: "Kontaktujte náš tým",
    downloadTechnicalData: "Stáhnout technická data",
    applicationNotFound: "Aplikace nenalezena",
    backToHome: "Zpět na domovskou stránku",

    // Contact Form
    contactTitle: "Kontaktujte nás",
    firstName: "Jméno",
    lastName: "Příjmení",
    phone: "Telefon",
    email: "Email",
    message: "Zpráva",
    consent: "Souhlasím se zpracováním osobních údajů",
    iAgreeTo: "Souhlasím s",
    processingPersonalData: "zpracováním osobních údajů",
    sendMessage: "Odeslat zprávu",
    sending: "Odesílání...",
    thankYou: "Děkujeme za vaši zprávu! Brzy se vám ozveme.",
    errorMessage: "Při odesílání vaší zprávy došlo k chybě. Zkuste to prosím znovu později.",
    fillRequired: "Vyplňte prosím všechna povinná pole.",
    agreeConsent: "Prosím, souhlaste se zpracováním osobních údajů.",
    failedSend: "Odeslání emailu se nezdařilo. Zkuste to prosím znovu později.",

    // Footer
    addressLabel: "Adresa",
    addressFull: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Všechna práva vyhrazena",
    czechRepublic: "Česká republika",
    companyId: "IČO",

    // Privacy Policy
    privacyPolicyTitle: "Zásady ochrany osobních údajů",
    privacyPolicyIntro:
      "Vaše soukromí je pro nás důležité. Tyto zásady vysvětlují, jak shromažďujeme, používáme a chráníme vaše informace.",
    informationWeCollect: "Informace, které shromažďujeme",
    informationWeCollectText: "Shromažďujeme informace, které nám přímo poskytujete, například když:",
    fillContactForm: "Vyplníte náš kontaktní formulář",
    subscribeNewsletter: "Přihlásíte se k odběru našeho newsletteru",
    downloadDocuments: "Stáhnete technické dokumenty",
    communicateEmail: "Komunikujete s námi prostřednictvím e-mailu nebo telefonu",
    visitWebsite: "Navštívíte naše webové stránky (prostřednictvím cookies a analytiky)",
    typesOfInformation:
      "Typy informací, které můžeme shromažďovat, zahrnují vaše jméno, e-mailovou adresu, telefonní číslo, informace o společnosti a jakékoli další informace, které se rozhodnete poskytnout.",
    howWeUseInformation: "Jak používáme vaše informace",
    howWeUseInformationText: "Informace, které shromažďujeme, používáme k:",
    respondInquiries: "Odpovídání na vaše dotazy a poskytování zákaznické podpory",
    sendTechnicalInfo: "Zasílání technických informací a aktualizací o našich produktech",
    processRequests: "Zpracování vašich požadavků na technickou dokumentaci",
    improveWebsite: "Zlepšování našich webových stránek a služeb",
    complyLegal: "Dodržování právních povinností",
    communicateProducts: "Komunikaci s vámi o našich produktech a službách",
    dataRetention: "Uchovávání údajů",
    dataRetentionText:
      "Vaše osobní údaje uchováváme po dobu nezbytnou k naplnění účelů uvedených v těchto zásadách ochrany osobních údajů.",
    contactFormSubmissions: "Odeslání kontaktního formuláře",
    contactFormRetention: "3 roky od data odeslání",
    emailCommunications: "E-mailová komunikace",
    emailRetention: "3 roky od poslední komunikace",
    newsletterSubscriptions: "Přihlášení k odběru newsletteru",
    newsletterRetention: "Dokud se neodhlásíte",
    websiteAnalytics: "Data webové analytiky",
    analyticsRetention: "26 měsíců (výchozí nastavení Google Analytics)",
    whoHasAccess: "Kdo má přístup k vašim údajům",
    whoHasAccessText: "K vašim osobním údajům mohou mít přístup:",
    nanobuildEmployees: "Zaměstnanci NANOBUILD",
    employeesAccess: "Pouze ti, kteří potřebují přístup k odpovědi na vaše dotazy",
    serviceProviders: "Poskytovatelé služeb",
    serviceProvidersAccess:
      "Služby třetích stran, které používáme (e-mailový hosting, webová analytika, cloudové úložiště)",
    legalAuthorities: "Právní orgány",
    legalAccess: "Když to vyžaduje zákon nebo k ochraně našich práv",
    noSellData:
      "Neprodáváme, nevyměňujeme ani jinak nepředáváme vaše osobní údaje třetím stranám pro marketingové účely.",
    dataProtectionSecurity: "Ochrana a zabezpečení údajů",
    dataProtectionText:
      "Implementujeme vhodná technická a organizační bezpečnostní opatření k ochraně vašich osobních údajů.",
    encryptedTransmission: "Šifrovaný přenos dat (SSL/TLS)",
    secureStorage: "Bezpečné ukládání dat s kontrolou přístupu",
    securityAssessments: "Pravidelná bezpečnostní hodnocení",
    employeeTraining: "Školení zaměstnanců o ochraně údajů",
    yourRights: "Vaše práva",
    yourRightsText: "Podle GDPR a dalších platných zákonů máte právo na:",
    accessRight: "Přístup",
    accessRightDesc: "Požádat o kopii vašich osobních údajů",
    rectificationRight: "Opravu",
    rectificationRightDesc: "Opravit nepřesné nebo neúplné údaje",
    erasureRight: "Výmaz",
    erasureRightDesc: "Požádat o smazání vašich osobních údajů",
    portabilityRight: "Přenositelnost",
    portabilityRightDesc: "Obdržet vaše údaje ve strukturovaném formátu",
    restrictionRight: "Omezení",
    restrictionRightDesc: "Omezit způsob, jakým zpracováváme vaše údaje",
    objectionRight: "Námitku",
    objectionRightDesc: "Vznést námitku proti zpracování na základě oprávněných zájmů",
    withdrawConsent: "Odvolání souhlasu",
    withdrawConsentDesc: "Kde je zpracování založeno na souhlasu",
    exerciseRights: "K uplatnění těchto práv nás prosím kontaktujte pomocí níže uvedených informací.",
    cookiesAnalytics: "Cookies a analytika",
    cookiesAnalyticsText:
      "Naše webové stránky používají cookies a podobné technologie ke zlepšení vašeho prohlížení a analýze návštěvnosti webu.",
    updatesToPolicy: "Aktualizace těchto zásad",
    updatesPolicyText: "Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat.",
    lastUpdated: "Poslední aktualizace",
    lastUpdatedDate: "Leden 2025",
    contactInformation: "Kontaktní informace",
    contactInformationText:
      "Pokud máte jakékoli otázky ohledně těchto zásad ochrany osobních údajů nebo si přejete uplatnit svá práva, kontaktujte nás:",

    // Common
    type: "Typ",
    size: "Velikost",
    category: "Kategorie",
    author: "Autor",
    date: "Datum",
    notProvided: "Neuvedeno",
  },

  de: {
    // Navigation
    home: "Startseite",
    products: "Produkte",
    downloads: "Downloads",
    news: "Nachrichten",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Innovative Graphen-Dispersionen",
    heroSubtitle: "Die Zukunft der Nanotechnologie mit modernsten Graphen-Lösungen anführen",
    learnMore: "Mehr erfahren",

    // About Section
    aboutTitle: "Über NANOBUILD",
    aboutText:
      "NANOBUILD ist ein wegweisendes Startup, das sich auf die innovative Herstellung von Graphen-Dispersionen konzentriert.",
    innovation: "Innovation",
    innovationText: "Bahnbrechende Forschung und Entwicklung in der Graphen-Technologie",
    performance: "Leistung",
    performanceText: "Hochwertige Dispersionen mit außergewöhnlichen Eigenschaften",
    reliability: "Zuverlässigkeit",
    reliabilityText: "Gleichbleibende Qualität und bewährte Lösungen für die Industrie",

    // Technology Section
    technologyTitle: "Technologie der Produktion von Mehrschicht-Graphen",
    technologySubtitle: "Unsere Mehrschicht-Graphen-Dispersionen werden durch ein patentiertes Verfahren gewonnen.",
    technologyIntro1:
      "Resonanz ist ein physikalisches Phänomen, bei dem ein System mit maximaler Amplitude zu schwingen beginnt.",
    technologyIntro2: "Akustische Resonanz erzeugt starke Schwingungswellen im Dispersionsmedium.",
    technologyIntro3:
      "Wir haben diese Methode der Graphenherstellung auf der Grundlage theoretischer Annahmen gewählt.",

    // Advantages Section
    advantagesTitle: "1. Vorteile von Mehrschicht-Graphen im Vergleich zu elementarem Graphen",
    structuralStability: "Strukturelle Stabilität",
    structuralStabilityText:
      "Unser Mehrschicht-Graphen hat eine viel größere mechanische Festigkeit und Widerstandsfähigkeit gegen Beschädigungen.",
    improvedConductivity: "Verbesserte Leitfähigkeit",
    improvedConductivityText:
      "Unser Mehrschicht-Graphen behält eine hohe Leitfähigkeit bei, ist aber weniger anfällig für Degradation.",
    betterDispersibility: "Bessere Dispergierbarkeit",
    betterDispersibilityText:
      "Unser Mehrschicht-Graphen hat ein optimales Gleichgewicht zwischen spezifischer Oberfläche und Zwischenschichtkräften.",

    // Dispersion Media Effects
    dispersionTitle: "2. Wirkung von Dispersionsmedien mit Mehrschicht-Graphen",
    synergisticEffect: "Synergistischer Effekt mit der Matrix",
    synergisticEffectText:
      "Die Verwendung von Dispersionsmedien, die Komponenten des zukünftigen Verbundwerkstoffs enthalten, schafft direkte chemische Kompatibilität.",
    reducingPostProcessing: "Reduzierung der Nachbearbeitung",
    reducingPostProcessingText:
      "Wenn sich Mehrschicht-Graphen bereits in einer kompatiblen Umgebung befindet, ist es nicht notwendig, Lösungsmittel zu entfernen.",

    // Acoustic Resonance Method
    acousticTitle: "3. Rolle der akustischen Resonanzmethode bei der Dispersion",
    minimizationDefects: "Minimierung von Defekten",
    minimizationDefectsText:
      "Akustische Resonanz ermöglicht die sanfte Trennung von Graphit in Mehrschicht-Fragmente ohne Beschädigung der Kohlenstoffgitterstruktur.",
    highHomogeneity: "Hohe Homogenität",
    highHomogeneityText:
      "Die akustische Resonanzmethode hilft, eine enge Verteilung der Anzahl der Graphenblattsschichten zu erreichen.",
    controlMorphology: "Kontrolle über die Morphologie",
    controlMorphologyText:
      "Unsere akustische Resonanzmethode kann gesteuert werden, um verschiedene Größen und Formen von Graphenblättern zu erreichen.",

    // Future Vision
    futureTitle: "Nanomaterialien - Technologie, die die Zukunft verändert",
    futureText1:
      "Unsere Produkte haben praktische Bedeutung nicht nur in Form von Graphen-Dispersionen und Bindemitteln.",
    futureText2:
      "Treten Sie ein in eine Welt, in der die kristallinen Strukturen von Graphen und anderen Nanomaterialien die Grundlage moderner Strukturen bilden.",
    contactResearch: "Kontaktieren Sie unser Forschungsteam",

    // Products Section
    productsTitle: "Unsere Produkte",
    productsText:
      "Entdecken Sie unsere Palette hochwertiger Graphen-Dispersionen für verschiedene industrielle Anwendungen.",
    downloadTechnical: "Technisches Datenblatt herunterladen",
    viewAllProducts: "Alle Produkte anzeigen",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Dispersion von Mehrschicht-Graphen in Industrieöl",
    product2DDOLDesc: "Entwickelt für die Modifikation organischer und organosiliziumhaltiger Verbindungen.",
    product2DDOLSpec1: "3 Gew.-% Graphenkonzentration",
    product2DDOLSpec2: "Partikelgröße 10-30 μm",
    product2DDOLSpec3: "≥98% Kohlenstoffgehalt",

    product2D2R: "2D-2R",
    product2D2RTitle: "Oberflächenbehandlungsmaterial",
    product2D2RDesc:
      "Elektromagnetisches Strahlenschutzmaterial, das bis zu 98% der Strahlung bei 2-3mm Dicke absorbiert.",
    product2D2RSpec1: "Betriebstemperatur bis 8000°C",
    product2D2RSpec2: "Frequenzbereich 3-110 GHz",
    product2D2RSpec3: "Haltbarkeit bis zu 24 Monate",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Wasser-Polymer-Dispersion",
    product2DDWPEDesc:
      "Verbessert die elektrische Leitfähigkeit von Mineralfasern und verbessert Antikorrosionseigenschaften.",
    product2DDWPESpec1: "2 Gew.-% Graphenkonzentration",
    product2DDWPESpec2: "Wasserlösliches Polymermedium",
    product2DDWPESpec3: "Hohe Adhäsion an Fasern",

    product2DDW: "2DD-W",
    product2DDWTitle: "Wässrige Dispersion",
    product2DDWDesc:
      "Wirkt als Matrixfestigkeitsaktivator für elektromagnetische Wellenabsorption und strukturelle Anwendungen.",
    product2DDWSpec1: "4 Gew.-% Graphenkonzentration",
    product2DDWSpec2: "Wasserbasiertes Medium",
    product2DDWSpec3: "Bis zu 7,2% Konzentration verfügbar",

    // Applications Section
    applicationsTitle: "Anwendungen",
    applicationsText: "Unsere Graphen-Dispersionen ermöglichen bahnbrechende Lösungen in zahlreichen Industriezweigen.",
    discussApplication: "Diskutieren Sie Ihre Anwendung",

    // Application Names
    appConcrete: "Beton, Mörtel, Baumischungen",
    appPlastics: "Kunststoffe, Polymere, Farben, Schutzbeschichtungen",
    appMetallurgy: "Pulvermetallurgie und Metallurgie von Leicht- und Nichteisenlegierungen",
    appEnergy: "Energiesparende Technologien und neue Wege der Stromerzeugung",
    appEnvironment: "Umweltschutz",
    appComposite: "Verbundwerkstoffe",
    appRubber: "Verschleißfester Gummi und andere Elastomere",
    appLubricants: "Schmierstoffe, technische Flüssigkeiten",

    // Application Content
    appConcreteSubtitle: "Graphen im Bauwesen",
    appConcreteContent1:
      "Erhöht die Betonfestigkeit – reduziert Mikrorissbildung, verbessert Flexibilität und Haltbarkeit.",
    appConcreteContent2: "Reduziert den CO₂-Fußabdruck – ermöglicht eine Reduzierung des Zementgehalts.",
    appConcreteContent3: "Beschleunigt die Aushärtung – verbessert den Hydratationsprozess.",
    appConcreteContent4:
      "Verbessert die Wasser- und Chemikalienbeständigkeit – erhöht die Langlebigkeit von Baumaterialien.",
    appConcreteContent5: "Verbessert die Wärmeleitfähigkeit – ermöglicht bessere Temperaturregulierung in Gebäuden.",
    appConcreteContent6:
      "Unterstützt Nachhaltigkeit – hilft beim Betonrecycling und reduziert den Bedarf an neuen Rohstoffen.",

    appPlasticsSubtitle: "Beschichtungen mit Graphen",
    appPlasticsContent1:
      "Basierend auf unserer Dünnschicht-Graphen-Dispersion haben wir die bisher effektivste Abschirmbeschichtung entwickelt.",
    appPlasticsContent2:
      "Im Bereich von 1,5 bis 120 GHz absorbiert die Beschichtung bis zu 99% der elektromagnetischen Wellen.",
    appPlasticsContent3:
      "Die Beschichtung ist beständig gegen Wasser, Öle, Kohlenwasserstoffe und organosiliziumhaltige Flüssigkeiten.",

    appMetallurgySubtitle: "Metallurgie",
    appMetallurgyContent1: "Hohe Leitfähigkeit – ermöglicht schnellere Signalübertragung in der Mikroelektronik.",
    appMetallurgyContent2:
      "Extreme Empfindlichkeit – verbessert die Leistung von Photodetektoren über ein breites Wellenlängenspektrum.",
    appMetallurgyContent3: "Transparenz und Flexibilität – ideal für optoelektronische Displays und Sensoren.",
    appMetallurgyContent4: "Schnelle Reaktion – ermöglicht effizientere optische Schalter und Photodetektoren.",
    appMetallurgyContent5: "Niedriger Stromverbrauch – reduziert den Energiebedarf in mikroelektronischen Geräten.",
    appMetallurgyContent6:
      "Miniaturisierung von Komponenten – ermöglicht die Entwicklung kleinerer und leistungsfähigerer Chips.",

    appEnergySubtitle: "Technologie",
    appEnergyContent1: "Extreme Empfindlichkeit – Erkennung von Substanzen auf molekularer Ebene.",
    appEnergyContent2: "Schnelle Reaktion – Sofortige Erkennung von Umweltveränderungen.",
    appEnergyContent3: "Niedriger Energieverbrauch – Effizienter Betrieb mit minimalem Stromverbrauch.",
    appEnergyContent4: "Flexibilität – Kann in tragbare und flexible Geräte integriert werden.",
    appEnergyContent5: "Störungsresistenz – Hohe Selektivität und Messstabilität.",
    appEnergyContent6: "Breites Anwendungsspektrum – Verwendet in Medizin, Ökologie und Industrie.",

    appEnvironmentSubtitle: "Umwelt",
    appEnvironmentContent1: "Bakterienelimination – Graphen stört die Zellwände von Mikroorganismen.",
    appEnvironmentContent2: "Langzeitwirksamkeit – Dauerhafter Schutz ohne häufige Desinfektion.",
    appEnvironmentContent3: "Keine Chemikalien – Antibakterielle Wirkung ohne Verwendung toxischer Substanzen.",
    appEnvironmentContent4: "Breite Anwendungen – Verwendet in Medizin, Lebensmittelindustrie und öffentlichen Räumen.",
    appEnvironmentContent5: "Haltbarkeit – Graphenbeschichtete Oberflächen haben eine lange Lebensdauer.",
    appEnvironmentContent6: "Menschliche Sicherheit – Ungiftige und biokompatible Materialien.",

    appCompositeSubtitle: "Verbundwerkstoffe",
    appCompositeContent1: "Fortschrittliche Technologien – Innovative Materialien für hohe Effizienz.",
    appCompositeContent2: "Breite Anwendungen – Verwendet in der chemischen, Lebensmittel- und Pharmaindustrie.",
    appCompositeContent3: "Umweltvorteile – Verbesserung der Wasser- und Luftqualität.",
    appCompositeContent4: "Hohe Reinheit – Gewährleistung der Qualität von Endprodukten.",
    appCompositeContent5: "Flexible Lösungen – Anpassung von Porengrößen und Materialien.",
    appCompositeContent6: "Kosteneinsparungen – Reduzierung von Betriebs- und Energiekosten.",

    appRubberSubtitle: "Verschleißfeste Elastomere",
    appRubberContent1: "Hohe Haltbarkeit – Widerstand gegen Verschleiß und Abrieb für langanhaltende Leistung.",
    appRubberContent2:
      "Elastische Eigenschaften – Ausgezeichnete Flexibilität und Fähigkeit zur Rückkehr in die ursprüngliche Form.",
    appRubberContent3: "Breite Anwendung – Verwendet in Automobil-, Schwerindustrie und Bauwesen.",
    appRubberContent4: "Temperaturstabilität – Widerstand gegen extreme Temperaturen und Umwelteinflüsse.",
    appRubberContent5: "Chemische Beständigkeit – Schutz gegen aggressive Chemikalien und Öle.",
    appRubberContent6: "Wirtschaftliche Vorteile – Reduzierung der Wartungskosten und verlängerte Gerätelebensdauer.",

    appLubricantsSubtitle: "Schmierstoffe und Flüssigkeiten",
    appLubricantsContent1:
      "Leistungsoptimierung – Gewährleistung des reibungslosen Betriebs von Maschinen und Geräten.",
    appLubricantsContent2: "Reibungsreduzierung – Minimierung von Verschleiß und Verbesserung der Effizienz.",
    appLubricantsContent3:
      "Breite Anwendung – Verwendet in der Automobil-, Luft- und Raumfahrt- sowie Industriebranche.",
    appLubricantsContent4:
      "Temperaturbeständigkeit – Stabilität unter extremen Temperaturen und verschiedenen Arbeitsbedingungen.",
    appLubricantsContent5:
      "Korrosionsschutz – Verhinderung von Rostbildung und Verlängerung der Komponentenlebensdauer.",
    appLubricantsContent6:
      "Kosteneinsparungen – Reduzierung der Wartungskosten und Verlängerung der Austauschintervalle.",

    // Products Page
    productsPageTitle: "Produkte",
    productsPageText:
      "Entdecken Sie unser umfassendes Sortiment an graphenbasierten Produkten für modernste Anwendungen.",

    // Downloads Page
    downloadsTitle: "Downloads",
    downloadsText:
      "Zugang zu unserer umfassenden Bibliothek von technischen Dokumenten, Produktkatalogen und Bildungsmaterialien.",
    download: "Herunterladen",
    needAdditional: "Benötigen Sie zusätzliche Informationen?",
    cantFind: "Können Sie nicht finden, wonach Sie suchen? Kontaktieren Sie unser technisches Team.",
    contactTechnical: "Technischen Support kontaktieren",

    // Download Items
    download2DDOL: "2DD-OL - Dispersion von Mehrschicht-Graphen in Industrieöl",
    download2DDOLDesc: "Technisches Datenblatt für Graphen-Dispersion in Industrieöl",
    download2D2R: "2D-2R - Oberflächenbehandlungsmaterial",
    download2D2RDesc: "Elektromagnetisches Strahlenschutzmaterial für Temperaturen bis 8000°C",
    download2DDWPE: "2DD-WPE - Wasser-Polymer-Dispersion von Mehrschicht-Graphen",
    download2DDWPEDesc: "Wässrige Dispersion zur Verbesserung der elektrischen Leitfähigkeit",
    download2DDW: "2DD-W - Wässrige Dispersion von Mehrschicht-Graphen",
    download2DDWDesc: "Wasserbasierte Graphen-Suspension für elektromagnetische Wellenabsorption",

    // News Page
    newsTitle: "Nachrichten",
    newsText: "Bleiben Sie über die neuesten Entwicklungen und Forschungsdurchbrüche von NANOBUILD informiert.",
    featuredArticle: "Hervorgehobener Artikel",
    readMore: "Weiterlesen",
    stayUpdated: "Bleiben Sie auf dem Laufenden",
    subscribeText: "Abonnieren Sie unseren Newsletter, um die neuesten Nachrichten direkt zu erhalten.",
    subscribeNewsletter: "Newsletter abonnieren",
    all: "Alle",
    research: "Forschung",
    business: "Geschäft",
    company: "Unternehmen",
    sustainability: "Nachhaltigkeit",

    // News Articles
    newsArticle1Title: "NANOBUILD kündigt Durchbruch in der Graphen-Dispersionstechnologie an",
    newsArticle1Excerpt:
      "Unsere neueste Forschung hat zu einer signifikanten Verbesserung der Stabilität und Leistung von Graphen-Dispersionen geführt.",
    newsArticle1Author: "Dr. Evgeniy Demin",
    newsArticle2Title: "Partnerschaft mit führendem Elektronikhersteller",
    newsArticle2Excerpt:
      "NANOBUILD arbeitet mit einem großen Elektronikunternehmen zusammen, um leitfähige Materialien der nächsten Generation zu entwickeln.",
    newsArticle2Author: "Dr. Evgeniy Demin",
    newsArticle3Title: "Neue Produktionsstätte in Prag eröffnet",
    newsArticle3Excerpt: "Erweiterung unserer Fertigungskapazitäten mit modernster Ausrüstung und erhöhter Kapazität.",
    newsArticle3Author: "Dr. Evgeniy Demin",
    newsArticle4Title: "Nachhaltige Graphen-Produktionsmethoden",
    newsArticle4Excerpt: "Unser Engagement für Umweltverantwortung durch innovative grüne Produktionstechniken.",
    newsArticle4Author: "Dr. Evgeniy Demin",

    // Application Page
    backToApplications: "Zurück zu Anwendungen",
    interestedApplication: "Interessiert an dieser Anwendung?",
    interestedText:
      "Kontaktieren Sie unser technisches Team, um zu besprechen, wie unsere Graphen-Dispersionen helfen können.",
    contactTeam: "Unser Team kontaktieren",
    downloadTechnicalData: "Technische Daten herunterladen",
    applicationNotFound: "Anwendung nicht gefunden",
    backToHome: "Zurück zur Startseite",

    // Contact Form
    contactTitle: "Kontakt aufnehmen",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Telefon",
    email: "E-Mail",
    message: "Nachricht",
    consent: "Ich stimme der Verarbeitung personenbezogener Daten zu",
    iAgreeTo: "Ich stimme der",
    processingPersonalData: "Verarbeitung personenbezogener Daten zu",
    sendMessage: "Nachricht senden",
    sending: "Senden...",
    thankYou: "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.",
    errorMessage: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.",
    fillRequired: "Bitte füllen Sie alle erforderlichen Felder aus.",
    agreeConsent: "Bitte stimmen Sie der Verarbeitung personenbezogener Daten zu.",
    failedSend: "E-Mail konnte nicht gesendet werden.",

    // Footer
    addressLabel: "Adresse",
    addressFull: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Alle Rechte vorbehalten",
    czechRepublic: "Tschechische Republik",
    companyId: "Unternehmens-ID",

    // Privacy Policy
    privacyPolicyTitle: "Datenschutzrichtlinie",
    privacyPolicyIntro: "Ihre Privatsphäre ist uns wichtig.",
    informationWeCollect: "Informationen, die wir sammeln",
    informationWeCollectText: "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen:",
    fillContactForm: "Unser Kontaktformular ausfüllen",
    subscribeNewsletter: "Unseren Newsletter abonnieren",
    downloadDocuments: "Technische Dokumente herunterladen",
    communicateEmail: "Mit uns per E-Mail oder Telefon kommunizieren",
    visitWebsite: "Unsere Website besuchen",
    typesOfInformation:
      "Die Arten von Informationen umfassen Ihren Namen, E-Mail-Adresse, Telefonnummer und Unternehmensinformationen.",
    howWeUseInformation: "Wie wir Ihre Informationen verwenden",
    howWeUseInformationText: "Wir verwenden die gesammelten Informationen, um:",
    respondInquiries: "Auf Ihre Anfragen zu antworten",
    sendTechnicalInfo: "Ihnen technische Informationen zu senden",
    processRequests: "Ihre Anfragen zu bearbeiten",
    improveWebsite: "Unsere Website zu verbessern",
    complyLegal: "Rechtliche Verpflichtungen zu erfüllen",
    communicateProducts: "Mit Ihnen über unsere Produkte zu kommunizieren",
    dataRetention: "Datenspeicherung",
    dataRetentionText: "Wir bewahren Ihre persönlichen Informationen so lange auf, wie es erforderlich ist.",
    contactFormSubmissions: "Kontaktformular-Einreichungen",
    contactFormRetention: "3 Jahre ab dem Datum der Einreichung",
    emailCommunications: "E-Mail-Kommunikation",
    emailRetention: "3 Jahre ab der letzten Kommunikation",
    newsletterSubscriptions: "Newsletter-Abonnements",
    newsletterRetention: "Bis Sie sich abmelden",
    websiteAnalytics: "Website-Analysedaten",
    analyticsRetention: "26 Monate",
    whoHasAccess: "Wer hat Zugang zu Ihren Daten",
    whoHasAccessText: "Auf Ihre persönlichen Informationen können zugreifen:",
    nanobuildEmployees: "NANOBUILD-Mitarbeiter",
    employeesAccess: "Nur diejenigen, die Zugang benötigen",
    serviceProviders: "Dienstleister",
    serviceProvidersAccess: "Drittanbieter-Services, die wir nutzen",
    legalAuthorities: "Rechtsbehörden",
    legalAccess: "Wenn gesetzlich vorgeschrieben",
    noSellData: "Wir verkaufen Ihre persönlichen Informationen nicht an Dritte.",
    dataProtectionSecurity: "Datenschutz und Sicherheit",
    dataProtectionText: "Wir implementieren angemessene Sicherheitsmaßnahmen.",
    encryptedTransmission: "Verschlüsselte Datenübertragung",
    secureStorage: "Sichere Datenspeicherung",
    securityAssessments: "Regelmäßige Sicherheitsbewertungen",
    employeeTraining: "Mitarbeiterschulungen",
    yourRights: "Ihre Rechte",
    yourRightsText: "Unter der DSGVO haben Sie das Recht auf:",
    accessRight: "Zugang",
    accessRightDesc: "Eine Kopie Ihrer persönlichen Daten anzufordern",
    rectificationRight: "Berichtigung",
    rectificationRightDesc: "Unrichtige Daten zu korrigieren",
    erasureRight: "Löschung",
    erasureRightDesc: "Die Löschung Ihrer Daten zu verlangen",
    portabilityRight: "Übertragbarkeit",
    portabilityRightDesc: "Ihre Daten in einem strukturierten Format zu erhalten",
    restrictionRight: "Einschränkung",
    restrictionRightDesc: "Die Verarbeitung zu begrenzen",
    objectionRight: "Widerspruch",
    objectionRightDesc: "Widerspruch gegen die Verarbeitung",
    withdrawConsent: "Einwilligung widerrufen",
    withdrawConsentDesc: "Wo die Verarbeitung auf Einwilligung basiert",
    exerciseRights: "Um diese Rechte auszuüben, kontaktieren Sie uns bitte.",
    cookiesAnalytics: "Cookies und Analytik",
    cookiesAnalyticsText: "Unsere Website verwendet Cookies zur Verbesserung Ihres Browsing-Erlebnisses.",
    updatesToPolicy: "Aktualisierungen dieser Richtlinie",
    updatesPolicyText: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren.",
    lastUpdated: "Zuletzt aktualisiert",
    lastUpdatedDate: "Januar 2025",
    contactInformation: "Kontaktinformationen",
    contactInformationText: "Wenn Sie Fragen haben, kontaktieren Sie uns bitte:",

    // Common
    type: "Typ",
    size: "Größe",
    category: "Kategorie",
    author: "Autor",
    date: "Datum",
    notProvided: "Nicht angegeben",
  },

  ru: {
    // Navigation
    home: "Главная",
    products: "Продукты",
    downloads: "Загрузки",
    news: "Новости",
    contact: "Контакты",

    // Hero Section
    heroTitle: "Инновационные графеновые дисперсии",
    heroSubtitle: "Ведем будущее нанотехнологий с передовыми графеновыми решениями",
    learnMore: "Узнать больше",

    // About Section
    aboutTitle: "О компании NANOBUILD",
    aboutText:
      "NANOBUILD - это новаторский стартап, специализирующийся на инновационном производстве графеновых дисперсий.",
    innovation: "Инновации",
    innovationText: "Передовые исследования и разработки в области графеновых технологий",
    performance: "Производительность",
    performanceText: "Высококачественные дисперсии с исключительными свойствами",
    reliability: "Надежность",
    reliabilityText: "Стабильное качество и проверенные решения для промышленности",

    // Technology Section
    technologyTitle: "Технология производства малослойного графена",
    technologySubtitle: "Наши дисперсии малослойного графена получают запатентованным методом.",
    technologyIntro1:
      "Резонанс - это физическое явление, при котором система начинает колебаться с максимальной амплитудой.",
    technologyIntro2: "Акустический резонанс генерирует сильные колебательные волны в дисперсионной среде.",
    technologyIntro3: "Мы выбрали этот метод производства графена на основе теоретических предположений.",

    // Advantages Section
    advantagesTitle: "1. Преимущества малослойного графена по сравнению с элементарным графеном",
    structuralStability: "Структурная стабильность",
    structuralStabilityText:
      "Наш малослойный графен обладает гораздо большей механической прочностью и устойчивостью к повреждениям.",
    improvedConductivity: "Улучшенная проводимость",
    improvedConductivityText: "Наш малослойный графен сохраняет высокую проводимость, но менее подвержен деградации.",
    betterDispersibility: "Лучшая диспергируемость",
    betterDispersibilityText:
      "Наш малослойный графен имеет оптимальный баланс между удельной поверхностью и межслойными силами.",

    // Dispersion Media Effects
    dispersionTitle: "2. Эффект дисперсионных сред, содержащих малослойный графен",
    synergisticEffect: "Синергетический эффект с матрицей",
    synergisticEffectText:
      "Использование дисперсионных сред, содержащих компоненты будущего композита, создает прямую химическую совместимость.",
    reducingPostProcessing: "Сокращение последующей обработки",
    reducingPostProcessingText:
      "Если малослойный графен уже находится в совместимой среде, нет необходимости удалять растворители.",

    // Acoustic Resonance Method
    acousticTitle: "3. Роль метода акустического резонанса в диспергировании",
    minimizationDefects: "Минимизация дефектов",
    minimizationDefectsText:
      "Акустический резонанс позволяет мягко разделять графит на малослойные фрагменты без повреждения структуры.",
    highHomogeneity: "Высокая однородность",
    highHomogeneityText:
      "Метод акустического резонанса помогает достичь узкого распределения количества слоев графеновых листов.",
    controlMorphology: "Контроль над морфологией",
    controlMorphologyText:
      "Наш метод акустического резонанса может контролироваться для достижения различных размеров и форм графеновых листов.",

    // Future Vision
    futureTitle: "Наноматериалы - Технология, меняющая будущее",
    futureText1: "Наши продукты имеют практическое значение не только в виде графеновых дисперсий и связующих.",
    futureText2:
      "Войдите в мир, где кристаллические структуры графена и других наноматериалов формируют основу современных структур.",
    contactResearch: "Свяжитесь с нашей исследовательской командой",

    // Products Section
    productsTitle: "Наши продукты",
    productsText:
      "Откройте для себя наш ассортимент высококачественных графеновых дисперсий для различных промышленных применений.",
    downloadTechnical: "Скачать техническую спецификацию",
    viewAllProducts: "Посмотреть все продукты",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Дисперсия малослойного графена в промышленном масле",
    product2DDOLDesc: "Разработано для модификации органических и органосиликоновых соединений.",
    product2DDOLSpec1: "3 вес.% концентрация графена",
    product2DDOLSpec2: "Размер частиц 10-30 мкм",
    product2DDOLSpec3: "≥98% содержание углерода",

    product2D2R: "2D-2R",
    product2D2RTitle: "Материал для поверхностной обработки",
    product2D2RDesc: "Материал защиты от электромагнитного излучения, поглощающий до 98% излучения при толщине 2-3мм.",
    product2D2RSpec1: "Рабочая температура до 8000°C",
    product2D2RSpec2: "Частотный диапазон 3-110 ГГц",
    product2D2RSpec3: "Срок хранения до 24 месяцев",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Водно-полимерная дисперсия",
    product2DDWPEDesc: "Улучшает электрическую проводимость минеральных волокон и улучшает антикоррозионные свойства.",
    product2DDWPESpec1: "2 вес.% концентрация графена",
    product2DDWPESpec2: "Водорастворимая полимерная среда",
    product2DDWPESpec3: "Высокая адгезия к волокнам",

    product2DDW: "2DD-W",
    product2DDWTitle: "Водная дисперсия",
    product2DDWDesc:
      "Действует как активатор прочности матрицы для поглощения электромагнитных волн и структурных применений.",
    product2DDWSpec1: "4 вес.% концентрация графена",
    product2DDWSpec2: "Водная среда",
    product2DDWSpec3: "Доступна концентрация до 7,2%",

    // Applications Section
    applicationsTitle: "Применения",
    applicationsText: "Наши графеновые дисперсии обеспечивают прорывные решения в различных отраслях промышленности.",
    discussApplication: "Обсудите ваше применение",

    // Application Names
    appConcrete: "Бетон, растворы, строительные смеси",
    appPlastics: "Пластики, полимеры, краски, защитные покрытия",
    appMetallurgy: "Порошковая металлургия и металлургия легких и цветных сплавов",
    appEnergy: "Энергосберегающие технологии и новые способы производства электричества",
    appEnvironment: "Защита окружающей среды",
    appComposite: "Композитные материалы",
    appRubber: "Износостойкая резина и другие эластомеры",
    appLubricants: "Смазочные материалы, технические жидкости",

    // Application Content
    appConcreteSubtitle: "Графен в строительстве",
    appConcreteContent1:
      "Увеличивает прочность бетона – уменьшает образование микротрещин, улучшает гибкость и долговечность.",
    appConcreteContent2: "Снижает углеродный след – позволяет уменьшить содержание цемента, снижая выбросы CO₂.",
    appConcreteContent3: "Ускоряет отверждение – улучшает процесс гидратации и ускоряет развитие прочности.",
    appConcreteContent4:
      "Улучшает устойчивость к воде и химикатам – увеличивает долговечность строительных материалов.",
    appConcreteContent5: "Улучшает теплопроводность – обеспечивает лучшее регулирование температуры в зданиях.",
    appConcreteContent6:
      "Поддерживает устойчивость – помогает в переработке бетона и снижает потребность в новых сырьевых материалах.",

    appPlasticsSubtitle: "Покрытия с графеном",
    appPlasticsContent1:
      "На основе нашей тонкопленочной графеновой дисперсии мы разработали наиболее эффективное экранирующее покрытие.",
    appPlasticsContent2: "В диапазоне от 1,5 до 120 ГГц покрытие поглощает до 99% электромагнитных волн.",
    appPlasticsContent3: "Покрытие устойчиво к воде, маслам, углеводородам и органосиликоновым жидкостям.",

    appMetallurgySubtitle: "Металлургия",
    appMetallurgyContent1: "Высокая проводимость – обеспечивает более быструю передачу сигналов в микроэлектронике.",
    appMetallurgyContent2:
      "Экстремальная чувствительность – улучшает производительность фотодетекторов в широком спектре длин волн.",
    appMetallurgyContent3: "Прозрачность и гибкость – идеально подходит для оптоэлектронные дисплеи и датчики.",
    appMetallurgyContent4:
      "Быстрый отклик – позволяет создавать более эффективные оптические переключатели и фотодетекторы.",
    appMetallurgyContent5: "Низкое энергопотребление – снижает энергетические требования микроэлектронных устройств.",
    appMetallurgyContent6:
      "Миниатюризация компонентов – позволяет разрабатывать меньшие и более мощные чипы и транзисторы.",

    appEnergySubtitle: "Технологии",
    appEnergyContent1: "Экстремальная чувствительность – Обнаружение веществ на молекулярном уровне.",
    appEnergyContent2: "Быстрый отклик – Немедленное обнаружение изменений окружающей среды.",
    appEnergyContent3: "Низкое энергопотребление – Эффективная работа с минимальным потреблением энергии.",
    appEnergyContent4: "Гибкость – Может быть интегрирован в носимые и гибкие устройства.",
    appEnergyContent5: "Устойчивость к помехам – Высокая селективность и стабильность измерений.",
    appEnergyContent6: "Широкий спектр применений – Используется в медицине, экологии и промышленности.",

    appEnvironmentSubtitle: "Окружающая среда",
    appEnvironmentContent1: "Устранение бактерий – Графен нарушает клеточные стенки микроорганизмов.",
    appEnvironmentContent2: "Долгосрочная эффективность – Постоянная защита без необходимости частой дезинфекции.",
    appEnvironmentContent3: "Без химикатов – Антибактериальный эффект без использования токсичных веществ.",
    appEnvironmentContent4:
      "Широкие применения – Используется в медицине, пищевой промышленности и общественных местах.",
    appEnvironmentContent5: "Долговечность – Поверхности, покрытые графеном, имеют длительный срок службы.",
    appEnvironmentContent6: "Безопасность для человека – Нетоксичные и биосовместимые материалы.",

    appCompositeSubtitle: "Композиты",
    appCompositeContent1: "Передовые технологии – Инновационные материалы для высокой эффективности.",
    appCompositeContent2: "Широкие применения – Используется в химической, пищевой и фармацевтической промышленности.",
    appCompositeContent3: "Экологические преимущества – Улучшение качества воды и воздуха.",
    appCompositeContent4: "Высокая чистота – Обеспечение качества конечных продуктов.",
    appCompositeContent5: "Гибкие решения – Настройка размеров пор и материалов.",
    appCompositeContent6: "Экономия затрат – Снижение эксплуатационных и энергетических расходов.",

    appRubberSubtitle: "Износостойкие эластомеры",
    appRubberContent1: "Высокая долговечность – Устойчивость к износу и истиранию для длительной работы.",
    appRubberContent2: "Эластичные свойства – Отличная гибкость и способность возвращаться к первоначальной форме.",
    appRubberContent3: "Широкое применение – Используется в автомобильной, тяжелой промышленности и строительстве.",
    appRubberContent4:
      "Температурная стабильность – Устойчивость к экстремальным температурам и воздействию окружающей среды.",
    appRubberContent5: "Химическая стойкость – Защита от агрессивных химикатов и масел.",
    appRubberContent6:
      "Экономические преимущества – Снижение затрат на обслуживание и увеличение срока службы оборудования.",

    appLubricantsSubtitle: "Смазочные материалы и жидкости",
    appLubricantsContent1: "Оптимизация производительности – Обеспечение плавной работы машин и оборудования.",
    appLubricantsContent2: "Снижение трения – Минимизация износа и повышение эффективности.",
    appLubricantsContent3:
      "Широкое применение – Используется в автомобильном, аэрокосмическом и промышленном секторах.",
    appLubricantsContent4:
      "Температурная стойкость – Стабильность при экстремальных температурах и различных рабочих условиях.",
    appLubricantsContent5:
      "Защита от коррозии – Предотвращение образования ржавчины и увеличение срока службы компонентов.",
    appLubricantsContent6: "Экономия затрат – Снижение затрат на обслуживание и увеличение интервалов замены.",

    // Products Page
    productsPageTitle: "Продукты",
    productsPageText: "Откройте для себя наш комплексный ассортимент продуктов на основе графена.",

    // Downloads Page
    downloadsTitle: "Загрузки",
    downloadsText: "Доступ к нашей обширной библиотеке технических документов и образовательных материалов.",
    download: "Скачать",
    needAdditional: "Нужна дополнительная информация?",
    cantFind: "Не можете найти то, что ищете? Свяжитесь с нашей технической командой.",
    contactTechnical: "Связаться с технической поддержкой",

    // Download Items
    download2DDOL: "2DD-OL - Дисперсия малослойного графена в промышленном масле",
    download2DDOLDesc: "Техническая спецификация для графеновой дисперсии в промышленном масле",
    download2D2R: "2D-2R - Материал для поверхностной обработки",
    download2D2RDesc: "Материал защиты от электромагнитного излучения для температур до 8000°C",
    download2DDWPE: "2DD-WPE - Водно-полимерная дисперсия малослойного графена",
    download2DDWPEDesc: "Водная дисперсия для улучшения электрической проводимости",
    download2DDW: "2DD-W - Водная дисперсия малослойного графена",
    download2DDWDesc: "Водная графеновая суспензия для поглощения электромагнитных волн",

    // News Page
    newsTitle: "Новости",
    newsText: "Будьте в курсе последних разработок, исследовательских прорывов и новостей компании NANOBUILD.",
    featuredArticle: "Рекомендуемая статья",
    readMore: "Читать далее",
    stayUpdated: "Оставайтесь в курсе",
    subscribeText: "Подпишитесь на нашу рассылку, чтобы получать последние новости прямо на вашу почту.",
    subscribeNewsletter: "Подписаться на рассылку",
    all: "Все",
    research: "Исследования",
    business: "Бизнес",
    company: "Компания",
    sustainability: "Устойчивость",

    // News Articles
    newsArticle1Title: "NANOBUILD объявляет о прорыве в технологии графеновых дисперсий",
    newsArticle1Excerpt:
      "Наши последние исследования привели к значительному улучшению стабильности и производительности графеновых дисперсий.",
    newsArticle1Author: "Д-р Евгений Демин",
    newsArticle2Title: "Партнерство с ведущим производителем электроники",
    newsArticle2Excerpt:
      "NANOBUILD сотрудничает с крупной электронной компанией для разработки проводящих материалов нового поколения.",
    newsArticle2Author: "Д-р Евгений Демин",
    newsArticle3Title: "Новое производственное предприятие открыто в Праге",
    newsArticle3Excerpt:
      "Расширение наших производственных мощностей с современным оборудованием и увеличенной мощностью.",
    newsArticle3Author: "Д-р Евгений Демин",
    newsArticle4Title: "Устойчивые методы производства графена",
    newsArticle4Excerpt:
      "Наша приверженность экологической ответственности через инновационные зеленые производственные технологии.",
    newsArticle4Author: "Д-р Евгений Демин",

    // Application Page
    backToApplications: "Назад к применениям",
    interestedApplication: "Заинтересованы в этом применении?",
    interestedText:
      "Свяжитесь с нашей технической командой, чтобы обсудить, как наши графеновые дисперсии могут улучшить ваше конкретное применение.",
    contactTeam: "Связаться с нашей командой",
    downloadTechnicalData: "Скачать технические данные",
    applicationNotFound: "Применение не найдено",
    backToHome: "Назад на главную",

    // Contact Form
    contactTitle: "Связаться с нами",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон",
    email: "Электронная почта",
    message: "Сообщение",
    consent: "Я согласен на обработку персональных данных",
    iAgreeTo: "Я согласен с",
    processingPersonalData: "обработкой персональных данных",
    sendMessage: "Отправить сообщение",
    sending: "Отправка...",
    thankYou: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
    errorMessage: "Произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте еще раз позже.",
    fillRequired: "Пожалуйста, заполните все обязательные поля.",
    agreeConsent: "Пожалуйста, согласитесь на обработку персональных данных.",
    failedSend: "Не удалось отправить электронное письмо. Пожалуйста, попробуйте еще раз позже.",

    // Footer
    addressLabel: "Адрес",
    addressFull: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Все права защищены",
    czechRepublic: "Чешская Республика",
    companyId: "ID компании",

    // Privacy Policy
    privacyPolicyTitle: "Политика конфиденциальности",
    privacyPolicyIntro: "Ваша конфиденциальность важна для нас.",
    informationWeCollect: "Информация, которую мы собираем",
    informationWeCollectText: "Мы собираем информацию, которую вы предоставляете нам напрямую:",
    fillContactForm: "Заполняете нашу контактную форму",
    subscribeNewsletter: "Подписываетесь на нашу рассылку",
    downloadDocuments: "Скачиваете технические документы",
    communicateEmail: "Общаетесь с нами по электронной почте или телефону",
    visitWebsite: "Посещаете наш веб-сайт",
    typesOfInformation:
      "Типы информации включают ваше имя, адрес электронной почты, номер телефона и информацию о компании.",
    howWeUseInformation: "Как мы используем вашу информацию",
    howWeUseInformationText: "Мы используем собранную информацию для:",
    respondInquiries: "Ответа на ваши запросы",
    sendTechnicalInfo: "Отправки вам технической информации",
    processRequests: "Обработки ваших запросов",
    improveWebsite: "Улучшения нашего веб-сайта",
    complyLegal: "Соблюдения правовых обязательств",
    communicateProducts: "Общения с вами о наших продуктах",
    dataRetention: "Хранение данных",
    dataRetentionText: "Мы храним вашу личную информацию столько, сколько необходимо.",
    contactFormSubmissions: "Отправки контактной формы",
    contactFormRetention: "3 года с даты отправки",
    emailCommunications: "Электронная переписка",
    emailRetention: "3 года с последнего общения",
    newsletterSubscriptions: "Подписки на рассылку",
    newsletterRetention: "До тех пор, пока вы не отпишетесь",
    websiteAnalytics: "Данные веб-аналитики",
    analyticsRetention: "26 месяцев",
    whoHasAccess: "Кто имеет доступ к вашим данным",
    whoHasAccessText: "Доступ к вашей личной информации могут иметь:",
    nanobuildEmployees: "Сотрудники NANOBUILD",
    employeesAccess: "Только те, кому нужен доступ",
    serviceProviders: "Поставщики услуг",
    serviceProvidersAccess: "Сторонние сервисы, которые мы используем",
    legalAuthorities: "Правовые органы",
    legalAccess: "Когда требуется по закону",
    noSellData: "Мы не продаем вашу личную информацию третьим лицам.",
    dataProtectionSecurity: "Защита и безопасность данных",
    dataProtectionText: "Мы внедряем соответствующие меры безопасности.",
    encryptedTransmission: "Зашифрованная передача данных",
    secureStorage: "Безопасное хранение данных",
    securityAssessments: "Регулярные оценки безопасности",
    employeeTraining: "Обучение сотрудников",
    yourRights: "Ваши права",
    yourRightsText: "Согласно GDPR у вас есть право на:",
    accessRight: "Доступ",
    accessRightDesc: "Запросить копию ваших личных данных",
    rectificationRight: "Исправление",
    rectificationRightDesc: "Исправить неточные данные",
    erasureRight: "Удаление",
    erasureRightDesc: "Запросить удаление ваших данных",
    portabilityRight: "Переносимость",
    portabilityRightDesc: "Получить ваши данные в структурированном формате",
    restrictionRight: "Ограничение",
    restrictionRightDesc: "Ограничить обработку",
    objectionRight: "Возражение",
    objectionRightDesc: "Возразить против обработки",
    withdrawConsent: "Отозвать согласие",
    withdrawConsentDesc: "Где обработка основана на согласии",
    exerciseRights: "Чтобы воспользоваться этими правами, пожалуйста, свяжитесь с нами.",
    cookiesAnalytics: "Файлы cookie и аналитика",
    cookiesAnalyticsText: "Наш веб-сайт использует файлы cookie для улучшения вашего опыта просмотра.",
    updatesToPolicy: "Обновления этой политики",
    updatesPolicyText: "Мы можем время от времени обновлять эту политику конфиденциальности.",
    lastUpdated: "Последнее обновление",
    lastUpdatedDate: "Январь 2025",
    contactInformation: "Контактная информация",
    contactInformationText: "Если у вас есть вопросы, пожалуйста, свяжитесь с нами:",

    // Common
    type: "Тип",
    size: "Размер",
    category: "Категория",
    author: "Автор",
    date: "Дата",
    notProvided: "Не указано",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "cs", "de", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
