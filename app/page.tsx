import ExpertiseSection from '@/components/expertise'
import Header from '@/components/headers/header'
import Navbar from '@/components/navbars/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Header />
      <ExpertiseSection />
      <Header />
    </main>
  )
}
