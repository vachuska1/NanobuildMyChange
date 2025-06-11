"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ApplicationPage() {
  const params = useParams()
  const { t } = useLanguage()
  const slug = params.slug as string

  const applicationData = {
    "concrete-mortars-building-mixes": {
      title: t("appConcrete"),
      subtitle: t("appConcreteSubtitle"),
      content: [
        t("appConcreteContent1"),
        t("appConcreteContent2"),
        t("appConcreteContent3"),
        t("appConcreteContent4"),
        t("appConcreteContent5"),
        t("appConcreteContent6"),
      ],
    },
    "plastics-polymers-paints-protective-coatings": {
      title: t("appPlastics"),
      subtitle: t("appPlasticsSubtitle"),
      content: [t("appPlasticsContent1"), t("appPlasticsContent2"), t("appPlasticsContent3")],
    },
    "powder-metallurgy-light-non-ferrous-alloys": {
      title: t("appMetallurgy"),
      subtitle: t("appMetallurgySubtitle"),
      content: [
        t("appMetallurgyContent1"),
        t("appMetallurgyContent2"),
        t("appMetallurgyContent3"),
        t("appMetallurgyContent4"),
        t("appMetallurgyContent5"),
        t("appMetallurgyContent6"),
      ],
    },
    "energy-saving-technologies-electricity-production": {
      title: t("appEnergy"),
      subtitle: t("appEnergySubtitle"),
      content: [
        t("appEnergyContent1"),
        t("appEnergyContent2"),
        t("appEnergyContent3"),
        t("appEnergyContent4"),
        t("appEnergyContent5"),
        t("appEnergyContent6"),
      ],
    },
    "environmental-protection": {
      title: t("appEnvironment"),
      subtitle: t("appEnvironmentSubtitle"),
      content: [
        t("appEnvironmentContent1"),
        t("appEnvironmentContent2"),
        t("appEnvironmentContent3"),
        t("appEnvironmentContent4"),
        t("appEnvironmentContent5"),
        t("appEnvironmentContent6"),
      ],
    },
    "composite-materials": {
      title: t("appComposite"),
      subtitle: t("appCompositeSubtitle"),
      content: [
        t("appCompositeContent1"),
        t("appCompositeContent2"),
        t("appCompositeContent3"),
        t("appCompositeContent4"),
        t("appCompositeContent5"),
        t("appCompositeContent6"),
      ],
    },
    "wear-resistant-rubber-elastomers": {
      title: t("appRubber"),
      subtitle: t("appRubberSubtitle"),
      content: [
        t("appRubberContent1"),
        t("appRubberContent2"),
        t("appRubberContent3"),
        t("appRubberContent4"),
        t("appRubberContent5"),
        t("appRubberContent6"),
      ],
    },
    "lubricants-technical-fluids": {
      title: t("appLubricants"),
      subtitle: t("appLubricantsSubtitle"),
      content: [
        t("appLubricantsContent1"),
        t("appLubricantsContent2"),
        t("appLubricantsContent3"),
        t("appLubricantsContent4"),
        t("appLubricantsContent5"),
        t("appLubricantsContent6"),
      ],
    },
  }

  const application = applicationData[slug as keyof typeof applicationData]

  const scrollToContact = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!application) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-orbitron mb-6">{t("applicationNotFound")}</h1>
            <Link href="/">
              <Button className="bg-cyan-600 hover:bg-cyan-700 font-orbitron">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="font-orbitron">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("backToApplications")}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 gradient-text">{application.title}</h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{application.subtitle}</h3>
            <div className="space-y-4">
              {application.content.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold font-orbitron mb-4 gradient-text">{t("interestedApplication")}</h2>
          <p className="text-gray-600 mb-6">{t("interestedText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 font-orbitron" onClick={scrollToContact}>
              {t("contactTeam")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/downloads">
              <Button size="lg" variant="outline" className="font-orbitron">
                {t("downloadTechnicalData")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
