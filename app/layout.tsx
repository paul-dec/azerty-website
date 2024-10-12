import type { Metadata } from 'next'
import { Satoshi } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'AZERTY',
  description: 'La meilleure agence web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>{children}</body>
    </html>
  )
}
