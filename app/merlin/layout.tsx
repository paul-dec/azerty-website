import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Merlin by Azerty',
  description: 'Découvrez Merlin, notre service d\'excellence dédié à la gestion automatisée des avis sur Google My Business.',
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
