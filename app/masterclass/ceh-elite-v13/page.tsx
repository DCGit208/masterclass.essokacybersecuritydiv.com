// New V2 High-Conversion Components
import CEHNavigation from '@/components/ceh/v2/CEHNavigation'
import CEHHeroV2 from '@/components/ceh/v2/CEHHeroV2'
import CEHFit from '@/components/ceh/v2/CEHFit'
import CEHOutcomes from '@/components/ceh/v2/CEHOutcomes'
import CEHElite from '@/components/ceh/v2/CEHElite'
import CEHStructure from '@/components/ceh/v2/CEHStructure'
import CEHInstructor from '@/components/ceh/v2/CEHInstructor'
import CEHTrust from '@/components/ceh/v2/CEHTrust'
import CEHCohort from '@/components/ceh/v2/CEHCohort'
import CEHApply from '@/components/ceh/v2/CEHApply'
import CEHFAQ from '@/components/ceh/v2/CEHFAQ'
import ApplicationFormWrapper from '@/components/ceh/v2/ApplicationFormWrapper'

export const metadata = {
  title: 'Elite Cybersecurity Investor – Offensive Security Market Mentorship | CEH Elite V13 | ECSD',
  description: 'Elite mentorship for executives, business owners, and strategic decision-makers investing in offensive security markets. Market intelligence, deal structures, and business positioning. CEH Elite V13 certified. Interview-only enrollment.',
  keywords: 'cybersecurity investor, offensive security business, security consulting practice, CEH Elite V13, enterprise security advisory, security market intelligence, penetration testing business, security services revenue, CISO advisory, offensive security economics, Dr. Coach Achu Gustave, EC-Council ATC',
  alternates: {
    canonical: '/masterclass/ceh-elite-v13',
  },
  openGraph: {
    title: 'Elite Cybersecurity Investor – Offensive Security Market Mentorship',
    description: 'Transform from technical specialist to strategic investor. Elite mentorship on offensive security economics, deal structures, and business positioning. Limited to 20 business leaders per cohort.',
    type: 'website',
    images: [
      {
        url: 'https://masterclass.essokacybersecuritydiv.com/og-ceh-elite.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Cybersecurity Investor - Offensive Security Market Mentorship'
      }
    ]
  },
}

export default function CEHMasterclass() {
  const courseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'CEH Elite V13 Enterprise Masterclass',
    description: 'Interview-only CEH Elite v13 Master training program for senior security professionals covering advanced offensive security, red team operations, penetration testing, and enterprise security.',
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
      courseMode: 'blended',
      courseWorkload: 'PT15H',
      instructor: {
        '@type': 'Person',
        name: 'Dr. Coach Achu Gustave'
      },
      startDate: '2026-03-15'
    },
    educationalLevel: 'Advanced',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Professional'
    },
    inLanguage: 'en',
    availableLanguage: ['en', 'fr'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150'
    }
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is CEH Elite V13 different from standard CEH training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CEH Elite V13 focuses on making you client-ready and enterprise-competent with enterprise-grade red team simulations, 1-on-1 mentorship, real penetration test portfolio projects, consulting readiness training, and lifetime alumni community access.'
        }
      },
      {
        '@type': 'Question',
        name: 'What payment options are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept full payment ($5,000 USD), payment plans upon approval, and corporate invoicing for team enrollments via wire transfer, credit card, or bank transfer.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Navigation */}
      <CEHNavigation />

      {/* Main Content - Exact order as specified */}
      <div className="bg-cyber-darker">
        <CEHHeroV2 />        {/* #hero */}
        <CEHFit />           {/* #fit */}
        <CEHOutcomes />      {/* #outcomes */}
        <CEHElite />         {/* #elite */}
        <CEHStructure />     {/* #structure */}
        <CEHInstructor />    {/* #instructor */}
        <CEHTrust />         {/* #trust */}
        <CEHCohort />        {/* #cohort */}
        <CEHApply />         {/* #apply */}
        <CEHFAQ />           {/* #faq */}
      </div>

      {/* Application Form Modal */}
      <ApplicationFormWrapper />
    </div>
  )
}
