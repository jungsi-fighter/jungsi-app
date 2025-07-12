// pages/_app.jsx
import '../styles/globals.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'      
import '../styles/book.css' 
function FlameOverlay() {
  return <div className="flame-overlay" />
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out-back',
      once: true
    })
  }, [])

  return (
    <>
      <FlameOverlay />
      <Component {...pageProps} />
    </>
  )
}