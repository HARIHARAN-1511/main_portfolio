'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0f172a] text-slate-100">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <Header />
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Resume />
            <Achievements />
            <Contact />
          </motion.div>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </main>
  )
}
