import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" >
      <Navbar/>
      <div className="container px-12 py-4 mx-auto mt-24">
      <HeroSection/>
      <AboutSection />
      <ProjectsSection/>
      </div>
    </main>
  )
}
