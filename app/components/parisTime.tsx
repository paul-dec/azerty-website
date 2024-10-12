'use client'

import { useState, useEffect } from 'react'

export default function ParisTime() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    function updateParisTime() {
      const parisTime = new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' })
      setTime(parisTime)
    }

    updateParisTime()
    const interval = setInterval(updateParisTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span>{time}</span>
}