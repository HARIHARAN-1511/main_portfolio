'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiMysql, SiTensorflow, SiPytorch, SiGit, SiDocker,
  SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiTypescript
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', level: 75, icon: SiTypescript, color: '#3178C6' },
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React', level: 88, icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', level: 82, icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', level: 85, icon: SiNodedotjs, color: '#339933' },
      { name: 'HTML5', level: 95, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'AI/ML & Data',
    skills: [
      { name: 'TensorFlow', level: 85, icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', level: 80, icon: SiPytorch, color: '#EE4C2C' },
      { name: 'MongoDB', level: 78, icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', level: 82, icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 88, icon: SiGit, color: '#F05032' },
    ]
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }



  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="section-title text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              My <span className="text-gradient">Skills</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p
              className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card-dark p-6 group relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="p-2 rounded-lg bg-slate-800/50 border border-slate-700"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-200">
                        {skill.name}
                      </h3>
                    </div>
                  </div>


                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-8 bg-slate-800/50 rounded-2xl p-8 shadow-lg border border-slate-700 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  10+
                </motion.div>
                <p className="text-slate-400 font-medium">Technologies</p>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-indigo-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  3+
                </motion.div>
                <p className="text-slate-400 font-medium">Years Learning</p>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-emerald-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  7+
                </motion.div>
                <p className="text-slate-400 font-medium">Projects Built</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
