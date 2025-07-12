// src/app/layout.tsx
'use client'

import '@/styles/globals.css'
import '@/styles/book.css'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import AOS from 'aos'

function FlameOverlay() {
  return <div className="flame-overlay" />
}

export const metadata = {
  title: '정시파이터 전일학원',
  description: '정시러를 고3.고2 정시파이터 전문학원',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out-back',
      once: true,
    })
  }, [])

  return (
    <html lang="ko">
      <body>
        <FlameOverlay />
        {children}
      </body>
    </html>
  )
}
