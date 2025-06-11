"use client"

import { useLanguage } from "@/components/language-provider"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("privacyPolicyTitle")}</h1>
          <p className="text-xl text-gray-600">{t("privacyPolicyIntro")}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("informationWeCollect")}</h2>
              <p className="mb-4">{t("informationWeCollectText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("fillContactForm")}</li>
                <li>{t("subscribeNewsletter")}</li>
                <li>{t("downloadDocuments")}</li>
                <li>{t("communicateEmail")}</li>
                <li>{t("visitWebsite")}</li>
              </ul>
              <p className="mb-6">{t("typesOfInformation")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("howWeUseInformation")}</h2>
              <p className="mb-4">{t("howWeUseInformationText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("respondInquiries")}</li>
                <li>{t("sendTechnicalInfo")}</li>
                <li>{t("processRequests")}</li>
                <li>{t("improveWebsite")}</li>
                <li>{t("complyLegal")}</li>
                <li>{t("communicateProducts")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("dataRetention")}</h2>
              <p className="mb-6">{t("dataRetentionText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>{t("contactFormSubmissions")}:</strong> {t("contactFormRetention")}
                </li>
                <li>
                  <strong>{t("emailCommunications")}:</strong> {t("emailRetention")}
                </li>
                <li>
                  <strong>{t("newsletterSubscriptions")}:</strong> {t("newsletterRetention")}
                </li>
                <li>
                  <strong>{t("websiteAnalytics")}:</strong> {t("analyticsRetention")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("whoHasAccess")}</h2>
              <p className="mb-4">{t("whoHasAccessText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>{t("nanobuildEmployees")}:</strong> {t("employeesAccess")}
                </li>
                <li>
                  <strong>{t("serviceProviders")}:</strong> {t("serviceProvidersAccess")}
                </li>
                <li>
                  <strong>{t("legalAuthorities")}:</strong> {t("legalAccess")}
                </li>
              </ul>
              <p className="mb-6">{t("noSellData")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("dataProtectionSecurity")}</h2>
              <p className="mb-6">{t("dataProtectionText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("encryptedTransmission")}</li>
                <li>{t("secureStorage")}</li>
                <li>{t("securityAssessments")}</li>
                <li>{t("employeeTraining")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("yourRights")}</h2>
              <p className="mb-4">{t("yourRightsText")}</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>{t("accessRight")}:</strong> {t("accessRightDesc")}
                </li>
                <li>
                  <strong>{t("rectificationRight")}:</strong> {t("rectificationRightDesc")}
                </li>
                <li>
                  <strong>{t("erasureRight")}:</strong> {t("erasureRightDesc")}
                </li>
                <li>
                  <strong>{t("portabilityRight")}:</strong> {t("portabilityRightDesc")}
                </li>
                <li>
                  <strong>{t("restrictionRight")}:</strong> {t("restrictionRightDesc")}
                </li>
                <li>
                  <strong>{t("objectionRight")}:</strong> {t("objectionRightDesc")}
                </li>
                <li>
                  <strong>{t("withdrawConsent")}:</strong> {t("withdrawConsentDesc")}
                </li>
              </ul>
              <p className="mb-6">{t("exerciseRights")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("cookiesAnalytics")}</h2>
              <p className="mb-6">{t("cookiesAnalyticsText")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("updatesToPolicy")}</h2>
              <p className="mb-6">{t("updatesPolicyText")}</p>
              <p className="mb-6 text-sm text-gray-600">
                <strong>{t("lastUpdated")}:</strong> {t("lastUpdatedDate")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{t("contactInformation")}</h2>
              <p className="mb-6">{t("contactInformationText")}</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>{t("email")}:</strong>{" "}
                  <a href="mailto:nanobuildinfo@gmail.com" className="text-cyan-600 hover:text-cyan-700">
                    nanobuildinfo@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>{t("phone")}:</strong>{" "}
                  <a href="tel:+420602305209" className="text-cyan-600 hover:text-cyan-700">
                    +420602305209
                  </a>
                </p>
                <p className="mb-2">
                  <strong>{t("addressLabel")}:</strong> {t("addressFull")}
                </p>
                <p>
                  <strong>{t("companyId")}:</strong> 17731691
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
