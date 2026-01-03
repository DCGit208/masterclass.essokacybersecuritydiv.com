import CEHHero from '@/components/ceh/CEHHero'
import CEHPackage from '@/components/ceh/CEHPackage'
import CEHTarget from '@/components/ceh/CEHTarget'
import CEHCountdown from '@/components/ceh/CEHCountdown'
import RegistrationForm from '@/components/RegistrationForm'

export const metadata = {
  title: 'CEH Elite v13 Masterclass | ECSD',
  description: 'Enterprise Security Masterclass: Achieve Elite CEH Master Status. World-class offensive security training for 2026. Only 20 slots - $5,000 investment.',
  alternates: {
    canonical: '/masterclass/ceh-elite-v13',
  },
  openGraph: {
    title: 'CEH Elite v13 Master Certification - Premium Cybersecurity Training',
    description: 'Transform your career with CEH Elite v13 Master certification. Enterprise-grade offensive security training. Limited to 20 professionals.',
    type: 'website',
  },
}

export default function CEHMasterclass() {
  const courseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CEH Elite v13 Master Certification',
    description: 'Comprehensive Certified Ethical Hacker Elite v13 Master training program covering advanced offensive security, penetration testing, VAPT, and enterprise security.',
    provider: {
      '@type': 'Organization',
      name: 'Essoka Cybersecurity Division',
      sameAs: 'https://masterclass.essokacybersecuritydiv.com'
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      price: '5000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      validFrom: '2026-01-01',
      url: 'https://masterclass.essokacybersecuritydiv.com/masterclass/ceh-elite-v13'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      courseWorkload: 'PT40H',
      startDate: '2026-02-15'
    },
    educationalLevel: 'Advanced',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Professional'
    },
    inLanguage: 'en',
    availableLanguage: ['en', 'fr']
  };

  return (
    <div className="bg-cyber-darker">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }}
      />
      <CEHHero />
      <CEHCountdown targetDate="2026-02-15T00:00:00" />
      <CEHTarget />
      <CEHPackage />
      <RegistrationForm program="CEH Elite v13" />
    </div>
  )
}
