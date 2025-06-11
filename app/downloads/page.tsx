"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DownloadsPage() {
  const { t } = useLanguage()

  const downloads = [
    {
      id: 1,
      title: t("download2DDOL"),
      description: t("download2DDOLDesc"),
      type: t("type"),
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1PTCkgVGoKRVQKUQplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDcyCiUlRU9G",
      filename: "2DD-OL-Technical-Data-Sheet.pdf",
    },
    {
      id: 2,
      title: t("download2D2R"),
      description: t("download2D2RDesc"),
      type: t("type"),
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJELTJSKSBUagpFVApRCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzIKJSVFT0Y=",
      filename: "2D-2R-Surface-Treatment-Material.pdf",
    },
    {
      id: 3,
      title: t("download2DDWPE"),
      description: t("download2DDWPEDesc"),
      type: t("type"),
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1XUEUpIFRqCkVUClEKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNDUgMDAwMDAgbiAKMDAwMDAwMDMyMiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ3MgolJUVPRg==",
      filename: "2DD-WPE-Water-Polymer-Dispersion.pdf",
    },
    {
      id: 4,
      title: t("download2DDW"),
      description: t("download2DDWDesc"),
      type: t("type"),
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1XKSBUagpFVApRCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzIKJSVFT0Y=",
      filename: "2DD-W-Aqueous-Dispersion.pdf",
    },
  ]

  const handleDownload = (downloadUrl: string, filename: string) => {
    try {
      // Create an anchor element and trigger the download
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = filename
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open(downloadUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("downloadsTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("downloadsText")}</p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => {
            const IconComponent = item.icon
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-cyan-600">PDF</div>
                      <div className="text-xs text-gray-500">{item.size}</div>
                    </div>
                  </div>
                  <CardTitle className="font-orbitron text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-700 font-orbitron"
                    onClick={() => handleDownload(item.downloadUrl, item.filename)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t("download")}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Applications Section */}
        <section className="py-20 mt-16">
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

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold font-orbitron mb-4 gradient-text">{t("needAdditional")}</h2>
            <p className="text-gray-600 mb-6">{t("cantFind")}</p>
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 font-orbitron"
              onClick={() => {
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {t("contactTechnical")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
