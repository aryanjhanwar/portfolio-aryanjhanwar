import { useEffect, useState } from 'react'
import Cursor from './Cursor'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'

import '../styles/App.css'

/* SECTIONS */

import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Certifications from './Certifications'
import Contact from './Contact'

/* HERO IMAGE */

const heroImageUrl = new URL(
  '../assets/images/aryan-cutout.png',
  import.meta.url
).href

/* NAV ITEMS */

const navItems = [
  {
    label: 'Home',
    href: '#home',
  },

  {
    label: 'About',
    href: '#about',
  },

  {
    label: 'Skills',
    href: '#skills',
  },

  {
    label: 'Projects',
    href: '#projects',
  },

  {
    label:
      'Certifications',
    href:
      '#certifications',
  },

  {
    label: 'Contact',
    href: '#contact',
  },
]

/* HERO SOCIALS */

const heroSocials = [
  {
    label: 'GitHub',
    href:
      'https://github.com/aryanjhanwar',
  },

  {
    label: 'LinkedIn',
    href:
      'https://www.linkedin.com/in/aryanjhanwar',
  },

  {
    label: 'Email',
    href:
      'mailto:aryan2006jhanwar@gmail.com',
  },
]

function App() {
  const reduceMotion =
    useReducedMotion()

  /* THEME */

  const [theme, setTheme] =
    useState<
      'light' | 'dark'
    >(() => {
      const saved =
        localStorage.getItem(
          'theme'
        )

      if (
        saved ===
          'dark' ||
        saved ===
          'light'
      ) {
        return saved
      }

      return window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light'
    })

  /* MOBILE MENU */

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false)

  /* THEME EFFECT */

  useEffect(() => {
    const root =
      document.documentElement

    root.classList.remove(
      'dark'
    )

    root.classList.remove(
      'light'
    )

    root.classList.add(
      theme
    )

    localStorage.setItem(
      'theme',
      theme
    )
  }, [theme])

  const baseTransition =
    reduceMotion
      ? {
          duration: 0,
        }
      : {
          duration: 0.8,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ] as const,
        }

  return (
    <div
      className="min-h-screen transition-all duration-500"
      style={{
        background:
          'var(--bg)',
        color:
          'var(--text)',
      }}
    >
      <Cursor />
      {/* NAVBAR */}

      <header className="sticky top-0 z-[999] select-none">
        <nav
          className="border-b backdrop-blur-xl transition-all duration-500"
          style={{
            background:
              'var(--panel)',
            borderColor:
              'var(--border)',
          }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

            {/* LOGO */}

            <a
              href="#home"
              className="text-lg font-black tracking-[0.3em]"
            >
              AJ
            </a>

            {/* DESKTOP NAV */}

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(
                (
                  item
                ) => (
                  <a
                    key={
                      item.label
                    }
                    href={
                      item.href
                    }
                    className="text-[12px] uppercase tracking-[0.25em] transition-all duration-300 hover:opacity-100"
                    style={{
                      color:
                        'var(--muted)',
                    }}
                  >
                    {
                      item.label
                    }
                  </a>
                )
              )}
            </div>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-3">

              {/* THEME TOGGLE */}

              <button
                onClick={() =>
                  setTheme(
                    (
                      prev
                    ) =>
                      prev ===
                      'dark'
                        ? 'light'
                        : 'dark'
                  )
                }
                className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  borderColor:
                    'var(--border)',
                  background:
                    'var(--card)',
                  color:
                    'var(--text)',
                }}
              >
                {theme ===
                'dark'
                  ? '☀ Light'
                  : '🌙 Dark'}
              </button>

              {/* CONTACT BUTTON */}

              <a
                href="#contact"
                className="hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 md:block"
                style={{
                  background:
                    'var(--text)',
                  color:
                    'var(--bg)',
                }}
              >
                Let&apos;s
                Talk
              </a>

              {/* MOBILE BUTTON */}

              <button
                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }
                className="rounded-full border p-2 md:hidden"
                style={{
                  borderColor:
                    'var(--border)',
                }}
              >
                ☰
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="border-t px-5 py-5 md:hidden"
                style={{
                  background:
                    'var(--card)',
                  borderColor:
                    'var(--border)',
                }}
              >
                <div className="flex flex-col gap-5">

                  {navItems.map(
                    (
                      item
                    ) => (
                      <a
                        key={
                          item.label
                        }
                        href={
                          item.href
                        }
                        onClick={() =>
                          setMobileMenuOpen(
                            false
                          )
                        }
                        className="text-sm uppercase tracking-[0.2em]"
                        style={{
                          color:
                            'var(--muted)',
                        }}
                      >
                        {
                          item.label
                        }
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* MAIN */}

      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero-section select-none"
          draggable={false}
        >
          <div
            className="hero-glow"
            aria-hidden="true"
          />

          {/* BIG NAME */}

          <div className="hero-big-name pointer-events-none select-none">
            <span className="outline-name">
              ARYAN
            </span>

            <span className="solid-name">
              JHANWAR
            </span>
          </div>

          <div className="hero-layout">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x:
                  reduceMotion
                    ? 0
                    : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={
                baseTransition
              }
              className="hero-left select-none"
            >
              <p className="hero-left-role">
                Full Stack
                Developer
              </p>

              <p className="hero-left-text">
                Building
                modern web
                experiences
                while
                exploring AI,
                machine
                learning,
                system design
                and backend
                technologies.
              </p>

              <a
                href="#contact"
                className="hero-cta"
              >
                Let&apos;s
                Collaborate →
              </a>
            </motion.div>

            {/* HERO IMAGE */}

            <motion.div
              className="hero-image-container select-none"
              draggable={false}
              initial={{
                opacity: 0,
                y:
                  reduceMotion
                    ? 0
                    : 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={
                baseTransition
              }
              onMouseMove={(
                e
              ) => {
                const rect =
                  e.currentTarget.getBoundingClientRect()

                const x =
                  e.clientX -
                  rect.left

                const y =
                  e.clientY -
                  rect.top

                e.currentTarget.style.setProperty(
                  '--x',
                  `${x}px`
                )

                e.currentTarget.style.setProperty(
                  '--y',
                  `${y}px`
                )
              }}
            >
              {/* BASE IMAGE */}

              <img
                src={
                  heroImageUrl
                }
                alt="Aryan Jhanwar"
                draggable={false}
                className="hero-image-base pointer-events-none select-none"
              />

              {/* COLOR IMAGE */}

              <img
                src={
                  heroImageUrl
                }
                alt=""
                aria-hidden="true"
                draggable={false}
                className="hero-image-color pointer-events-none select-none"
              />

              {/* HOVER LIGHT */}

              <div className="hero-hover-light" />
            </motion.div>

            {/* HERO SOCIALS */}

            <motion.div
              initial={{
                opacity: 0,
                x:
                  reduceMotion
                    ? 0
                    : 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={
                baseTransition
              }
              className="hero-socials select-none"
            >
              {heroSocials.map(
                (item) => (
                  <a
                    key={
                      item.label
                    }
                    href={
                      item.href
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-pill"
                  >
                    {
                      item.label
                    }
                  </a>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* SECTIONS */}

        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* FOOTER */}

      <footer
        className="border-t py-8 transition-all duration-500"
        style={{
          borderColor:
            'var(--border)',
          background:
            'var(--panel)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-xs uppercase tracking-[0.25em] sm:px-6 md:flex-row md:text-left lg:px-8">

          <span
            style={{
              color:
                'var(--muted)',
            }}
          >
            Crafted for
            Aryan Jhanwar
          </span>

          <span
            style={{
              color:
                'var(--muted)',
            }}
          >
            Built with
            React,
            Tailwind &
            Framer Motion
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App


