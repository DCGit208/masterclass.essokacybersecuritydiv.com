import CEHHero from '@/components/ceh/CEHHero'
import CEHPackage from '@/components/ceh/CEHPackage'
import CEHTarget from '@/components/ceh/CEHTarget'
import CEHCountdown from '@/components/ceh/CEHCountdown'
import RegistrationForm from '@/components/RegistrationForm'

export const metadata = {
  title: 'CEH Elite v13 Masterclass | ECSD',
  description: 'Enterprise Security Masterclass: Achieve Elite CEH Master Status. World-class offensive security training for 2026.',
}

export default function CEHMasterclass() {
  return (
    <div className="bg-cyber-darker">
      <CEHHero />
      <CEHCountdown targetDate="2026-02-15T00:00:00" />
      <CEHTarget />
      <CEHPackage />
      <RegistrationForm program="CEH Elite v13" />
    </div>
  )
}
