"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, Atom, Zap, Shield, Microscope, Layers, Beaker } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const { t } = useLanguage()

  const handleContactClick = () => {
    // Malé zpoždění pro zajištění, že je DOM připraven
    setTimeout(() => {
      const contactSection = document.getElementById("contact-form")
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        console.log("Contact section not found")
        // Fallback
        window.location.hash = "#contact-form"
      }
    }, 100)
  }

  const handleLearnMoreClick = () => {
    setTimeout(() => {
      const techSection = document.getElementById("technology-section")
      if (techSection) {
        techSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        console.log("Technology section not found")
        // Fallback
        window.location.hash = "#technology-section"
      }
    }, 100)
  }

  const products = [
    {
      name: t("product2DDOL"),
      title: t("product2DDOLTitle"),
      description: t("product2DDOLDesc"),
      specs: [t("product2DDOLSpec1"), t("product2DDOLSpec2"), t("product2DDOLSpec3")],
      icon: Atom,
    },
    {
      name: t("product2D2R"),
      title: t("product2D2RTitle"),
      description: t("product2D2RDesc"),
      specs: [t("product2D2RSpec1"), t("product2D2RSpec2"), t("product2D2RSpec3")],
      icon: Shield,
    },
    {
      name: t("product2DDWPE"),
      title: t("product2DDWPETitle"),
      description: t("product2DDWPEDesc"),
      specs: [t("product2DDWPESpec1"), t("product2DDWPESpec2"), t("product2DDWPESpec3")],
      icon: Layers,
    },
    {
      name: t("product2DDW"),
      title: t("product2DDWTitle"),
      description: t("product2DDWDesc"),
      specs: [t("product2DDWSpec1"), t("product2DDWSpec2"), t("product2DDWSpec3")],
      icon: Atom,
    },
  ]

  const applications = [
    {
      title: t("appConcrete"),
      slug: "concrete-mortars-building-mixes",
    },
    {
      title: t("appPlastics"),
      slug: "plastics-polymers-paints-protective-coatings",
    },
    {
      title: t("appMetallurgy"),
      slug: "powder-metallurgy-light-non-ferrous-alloys",
    },
    {
      title: t("appEnergy"),
      slug: "energy-saving-technologies-electricity-production",
    },
    {
      title: t("appEnvironment"),
      slug: "environmental-protection",
    },
    {
      title: t("appComposite"),
      slug: "composite-materials",
    },
    {
      title: t("appRubber"),
      slug: "wear-resistant-rubber-elastomers",
    },
    {
      title: t("appLubricants"),
      slug: "lubricants-technical-fluids",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6">
                <span className="gradient-text">{t("heroTitle")}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron"
                  onClick={handleLearnMoreClick}
                >
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-orbitron border-gray-300 hover:border-cyan-600"
                  onClick={handleContactClick}
                >
                  {t("contact")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="/images/Invitation.jpg"
                      alt="Graphene Structure"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="/images/Invitation_2.jpg"
                      alt="Graphene Lattice"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("aboutTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("aboutText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Atom className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">{t("innovation")}</h3>
              <p className="text-gray-600">{t("innovationText")}</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">{t("performance")}</h3>
              <p className="text-gray-600">{t("performanceText")}</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">{t("reliability")}</h3>
              <p className="text-gray-600">{t("reliabilityText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("technologyTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("technologySubtitle")}</p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-6">{t("technologyIntro1")}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{t("technologyIntro2")}</p>
            <p className="text-gray-700 leading-relaxed">{t("technologyIntro3")}</p>
          </div>

          {/* Advantages Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">{t("advantagesTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("structuralStability")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("structuralStabilityText")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("improvedConductivity")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("improvedConductivityText")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("betterDispersibility")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("betterDispersibilityText")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dispersion Media Effects */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">{t("dispersionTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Beaker className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("synergisticEffect")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t("synergisticEffectText")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Atom className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("reducingPostProcessing")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t("reducingPostProcessingText")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Acoustic Resonance Method */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">{t("acousticTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("minimizationDefects")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t("minimizationDefectsText")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("highHomogeneity")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t("highHomogeneityText")}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Atom className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">{t("controlMorphology")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{t("controlMorphologyText")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold font-orbitron mb-6 text-center gradient-text">{t("futureTitle")}</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>{t("futureText1")}</p>
              <p>{t("futureText2")}</p>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 font-orbitron" onClick={handleContactClick}>
                {t("contactResearch")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("productsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("productsText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-cyan-600" />
                      </div>
                      <span className="text-sm font-bold font-orbitron text-cyan-600">{product.name}</span>
                    </div>
                    <CardTitle className="font-orbitron text-lg">{product.title}</CardTitle>
                    <CardDescription className="text-gray-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {product.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                          {spec}
                        </div>
                      ))}
                    </div>
                    <Link href="/downloads">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 font-orbitron">
                        {t("downloadTechnical")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron">
                {t("viewAllProducts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("applicationsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("applicationsText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <Link key={index} href={`/applications/${application.slug}`}>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group h-32 flex items-center justify-center">
                  <h3 className="font-semibold font-orbitron text-gray-900 group-hover:text-cyan-600 transition-colors text-sm leading-tight">
                    {application.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron"
              onClick={handleContactClick}
            >
              {t("discussApplication")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
