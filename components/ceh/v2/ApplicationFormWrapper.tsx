"use client"

import { useState, useEffect } from 'react'
import CEHApplicationForm from './CEHApplicationForm'

export default function ApplicationFormWrapper() {
  const [showForm, setShowForm] = useState(false)

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

  return <CEHApplicationForm onClose={() => setShowForm(false)} />
}
