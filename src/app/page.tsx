// src/app/page.tsx
import SuccessSection from '../components/SuccessSection.client'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AcademicWorries from '../components/AcademicWorries'
import TabsSection from '../components/TabsSection'
import FlipBooks from '../components/FlipBooks'
import OurTeam from '../components/OurTeam'
import FacilitySection from '../components/FacilitySection'
import RollingGallery from '../components/RollingGallery'
import ScheduleSection from '../components/ScheduleSection'
import Programs from '../components/Programs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Hero />
        <Features />
        <AcademicWorries />
        <TabsSection />
        <FlipBooks />
        <OurTeam />
        <FacilitySection />
        <RollingGallery />
        <ScheduleSection />
        <SuccessSection />
        <Programs />
        <Footer />
      </Layout>
    </div>
  )
}
