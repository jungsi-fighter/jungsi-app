// src/components/SuccessSection.client.tsx
'use client'
import dynamic from 'next/dynamic'

// 실제 SuccessSection 컴포넌트는 components/SuccessSection.tsx 에 있다고 가정
const ActualSuccessSection = dynamic(
  () => import('./SuccessSection'),
  { ssr: false }
)

export default function SuccessSection() {
  return <ActualSuccessSection />
}
