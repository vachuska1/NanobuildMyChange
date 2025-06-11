"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en", flag: "/images/flags/gb.png" },
    { code: "cs", flag: "/images/flags/cz.png" },
    { code: "de", flag: "/images/flags/ger.png" },
    { code: "ru", flag: "/images/flags/rus.png" },
  ]

  const getCurrentFlag = () => {
    const currentLang = languages.find((lang) => lang.code === language)
    return currentLang?.flag || "/images/flags/gb.png"
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="NANOBUILD" width={150} height={40} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("home")}
            </Link>
            <Link href="/products" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("products")}
            </Link>
            <Link href="/downloads" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("downloads")}
            </Link>
            <Link href="/news" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("news")}
            </Link>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Image
                    src={getCurrentFlag() || "/placeholder.svg"}
                    alt={`${language} flag`}
                    width={24}
                    height={16}
                    className="rounded-sm"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto min-w-0">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`flex items-center justify-center p-2 w-10 h-8 ${language === lang.code ? "bg-cyan-50" : ""}`}
                  >
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={`${lang.code} flag`}
                      width={20}
                      height={14}
                      className="rounded-sm"
                    />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("home")}
              </Link>
              <Link href="/products" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("products")}
              </Link>
              <Link href="/downloads" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("downloads")}
              </Link>
              <Link href="/news" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("news")}
              </Link>
              <div className="px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Image
                        src={getCurrentFlag() || "/placeholder.svg"}
                        alt={`${language} flag`}
                        width={24}
                        height={16}
                        className="rounded-sm"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto min-w-0">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={`flex items-center justify-center p-2 w-10 h-8 ${language === lang.code ? "bg-cyan-50" : ""}`}
                      >
                        <Image
                          src={lang.flag || "/placeholder.svg"}
                          alt={`${lang.code} flag`}
                          width={20}
                          height={14}
                          className="rounded-sm"
                        />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
