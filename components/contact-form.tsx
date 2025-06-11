"use client"

import type React from "react"

import { useState, useTransition } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/components/language-provider"
import { sendContactEmail } from "@/app/actions/send-email"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const { t } = useLanguage()
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.consent) {
      setResult({
        success: false,
        message: t("agreeConsent"),
      })
      return
    }

    startTransition(async () => {
      const formDataObj = new FormData()
      formDataObj.append("firstName", formData.firstName)
      formDataObj.append("lastName", formData.lastName)
      formDataObj.append("phone", formData.phone)
      formDataObj.append("email", formData.email)
      formDataObj.append("message", formData.message)

      const response = await sendContactEmail(formDataObj)
      setResult(response)

      if (response.success) {
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          consent: false,
        })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              name="firstName"
              placeholder={t("firstName")}
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
              disabled={isPending}
            />
          </div>
          <div>
            <Input
              type="text"
              name="lastName"
              placeholder={t("lastName")}
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder={t("phone")}
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              disabled={isPending}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div>
          <Textarea
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
            disabled={isPending}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            className="border-gray-600"
            disabled={isPending}
          />
          <label htmlFor="consent" className="text-sm text-gray-300">
            {t("iAgreeTo")}{" "}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
              {t("processingPersonalData")}
            </Link>
          </label>
        </div>

        {/* Result Message */}
        {result && (
          <div
            className={`flex items-center space-x-2 p-4 rounded-md ${
              result.success
                ? "bg-green-900/50 border border-green-700 text-green-300"
                : "bg-red-900/50 border border-red-700 text-red-300"
            }`}
          >
            {result.success ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p className="text-sm">{result.message}</p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron disabled:opacity-50"
          disabled={!formData.consent || isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("sending")}
            </>
          ) : (
            t("sendMessage")
          )}
        </Button>
      </form>
    </div>
  )
}
