"use client"

import Link from "next/link"
import { Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ContactForm } from "@/components/contact-form"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Section */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-orbitron gradient-text mb-4">{t("contactTitle")}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">{t("contact")}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <a href="tel:+420602305209" className="hover:text-cyan-400 transition-colors">
                    +420602305209
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <a href="mailto:nanobuildinfo@gmail.com" className="hover:text-cyan-400 transition-colors">
                    nanobuildinfo@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span>{t("czechRepublic")}</span>
                </div>
                <div className="text-sm text-gray-400">IČO: 17731691</div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h4 className="text-lg font-semibold font-orbitron mb-4">{t("addressLabel")}</h4>
              <p className="text-gray-300 mb-4">{t("addressFull")}</p>
              <div className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1234567890123!2d14.4378!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA0JzMxLjgiTiAxNMKwMjYnMTYuMSJF!5e0!3m2!1sen!2scz!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link href="/" className="font-orbitron text-gray-400 hover:text-white transition-colors">
                {t("home")}
              </Link>
              <Link href="/products" className="font-orbitron text-gray-400 hover:text-white transition-colors">
                {t("products")}
              </Link>
              <Link href="/downloads" className="font-orbitron text-gray-400 hover:text-white transition-colors">
                {t("downloads")}
              </Link>
              <Link href="/news" className="font-orbitron text-gray-400 hover:text-white transition-colors">
                {t("news")}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/nanobuild-innovative-production-of-graphene-dispersions-9a4b6034b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="w-full bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <img 
                src="/images/obnova.jpg" 
                alt="Obnova" 
                className="w-full max-w-5xl mx-auto h-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-0 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 NANOBUILD - {t("allRightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
