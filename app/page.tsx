import Hero from '@/components/Hero'
import MasterclassCategories from '@/components/MasterclassCategories'
import FeaturedProgram from '@/components/FeaturedProgram'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTASection from '@/components/CTASection'
import RegistrationForm from '@/components/RegistrationForm'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProgram />
      <MasterclassCategories />
      <WhyChooseUs />
      <CTASection />
      <RegistrationForm />
    </>
  )
}
