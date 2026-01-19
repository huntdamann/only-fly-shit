"use client"

import { useEffect, useState } from "react"
import { Preloader } from "@/slices/Preloader"
import { Header } from "@/slices/Header"

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 8000) // adjust timing or remove if needed

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  )
}
