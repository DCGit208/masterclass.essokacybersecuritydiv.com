"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import CEHApplicationForm from './CEHApplicationForm'

function ApplicationFormContent() {
  const [showForm, setShowForm] = useState(false)
  const searchParams = useSearchParams()
  const referralCode = searchParams.get('ref') || undefined

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href="#apply-modal"]')
      if (link) {
        e.preventDefault()
        setShowForm(true)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (!showForm) return null

  return <CEHApplicationForm onClose={() => setShowForm(false)} referralCode={referralCode} />
}

export default ApplicationFormContent
