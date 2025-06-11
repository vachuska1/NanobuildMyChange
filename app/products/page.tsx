"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Layers, Shield } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()

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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("products")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("productsPageText")}</p>
        </div>

        {/* Products Grid */}
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

        {/* Applications Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("applicationsTitle")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("applicationsText")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((application, index) => (
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
                onClick={() => {
                  const footer = document.querySelector("footer")
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t("discussApplication")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
