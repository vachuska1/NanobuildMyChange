"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Send email using Resend with verified domain
    const { data, error } = await resend.emails.send({
      from: "NANOBUILD Contact Form <contact@nanobuild.info>",
      to: ["nanobuildinfo@gmail.com"],
      reply_to: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the NANOBUILD website contact form.</p>
            <p>Sent at: ${new Date().toLocaleString("en-US", {
              timeZone: "Europe/Prague",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })} (Prague time)</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

Sent at: ${new Date().toLocaleString("en-US", {
        timeZone: "Europe/Prague",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })} (Prague time)
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      message: "An error occurred while sending your message. Please try again later.",
    }
  }
}
