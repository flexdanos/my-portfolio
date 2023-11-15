import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#121212]"
    >
      <HeroSection/>
    </main>
  )
}
