// src/components/AOSInitializer.client.tsx
'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ offset: 120, duration: 800, easing: 'ease-in-out-back', once: true })
  }, [])
  return null
}
