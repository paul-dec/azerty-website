import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Azerty',
  description: 'Le futur de la programmation',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
