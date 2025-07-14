// components/Header.jsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-md z-50 relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          토마토스쿨x전일학원
        </Link>

        {/* 데스크탑용 메인 네비 */}
        <nav className="hidden md:flex space-x-6">
        <Link href="/you-tube" className="hover:text-accent">
            정시파이터 전일TV
          </Link>
          <Link href="/programs" className="hover:text-accent">
            프로그램
          </Link>
          <Link href="/apply" className="hover:text-accent">
            신청하기
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
     <button
    className="md:hidden absolute right-4 top-1/3 transform -translate-y-1/2 p-2 md:static"
    onClick={() => setOpen(o => !o)}
    aria-label="Toggle menu"
  >
        {open
      ? <span className="text-2xl leading-none">✕</span>
     : <span className="text-2xl leading-none">☰</span>
   }
  </button>
      </div>

      {/* 모바일 전용 드롭다운 */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
            <Link href="/you-tube" className="block px-4 py-2">
            정시파이터 전일TV
          </Link>
              <Link href="/programs" className="block px-4 py-2">
                프로그램
              </Link>
              <Link href="/test" className="block px-4 py-2">
              정시파이터 학업능력 검사
              </Link>
              <Link href="/apply" className="block px-4 py-2">
                신청하기
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
