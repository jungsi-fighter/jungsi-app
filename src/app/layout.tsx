// src/app/layout.tsx
import '../styles/globals.css'
import '../styles/book.css'

import AOSInitializer from '../components/AOSInitializer.client'

function FlameOverlay() {
  return <div className="flame-overlay" />
}

export const metadata = {
  title: '정시파이터 전일학원',
  description: '정시러를 고3·고2 정시파이터 전문학원',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <FlameOverlay />
        <AOSInitializer />
        {children}
      </body>
    </html>
  )
}
