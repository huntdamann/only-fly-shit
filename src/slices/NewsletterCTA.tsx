"use client"

import React, { useState } from "react"
import "../css/CTA.css"
import { FaArrowLeft } from "react-icons/fa6"

/* ----------------------------------
   Contact Form UI Component
----------------------------------- */

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const form = e.currentTarget

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      number: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("comments") as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement)?.value || null,
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Submission failed")

      setStatus("success")
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-3 self-center text-white w-74 gap-7 "
      // className="max-w-md flex sm:border-3 flex-col gap-7 mt-12 space-y-5"
    >
      {/* Name */}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="border rounded-xs p-2 h-12  font-(--font-orbitron) px-3 py-2 focus:outline-none focus:ring-2"
      />

      {/* Email */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email Adress"
        required
        className="border h-12 focus:outline-none focus:ring-2"
      />

      {/* Phone */}
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Your Phone Number"
        required
        className="border h-12 px-3 py-2 focus:outline-none focus:ring-2"
      />


      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full border flex items-center justify-center gap-2 rounded-md bg-black text-white py-2 hover:opacity-90 transition disabled:opacity-50"
      >
        <span>{loading ? "Sending..." : "Tap In"}</span>
        <FaArrowLeft style={{ transform: "rotate(135deg)" }} />
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}

/* ----------------------------------
   CTA Component
----------------------------------- */

export default function CTA() {
  return (
    <section className="section-content">


      <div className="signup-container">

        <div className="flex flex-col gap-5">

          <div className="signup-heading">
            <span className="uppercase text-sm text-[#d4af37]">Upcoming Drop</span>
            <h3 className="cta-heading">Be First. Never Late.</h3>
          </div>

          <p className="signup-descript">
                New Products and Restocks drop in limited quantities. Join the list and we&apos;ll hit you before anyone else!
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center">
          <ContactForm />

        </div>


      </div>

     

      
    </section>
  )
}
