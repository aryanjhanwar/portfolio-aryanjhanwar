
import { motion } from 'framer-motion'
import resumePdf from '../assets/resume/Aryan_Jhanwar_Resume.pdf'

const socials = [ { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryanjhanwar', logo: 'https://img.icons8.com/color/96/linkedin.png', desktopPosition: 'top-[20%] left-[42%]', }, { name: 'GitHub', href: 'https://github.com/aryanjhanwar', logo: 'https://img.icons8.com/ios-filled/100/github.png', desktopPosition: 'top-[33%] left-[10%]', }, { name: 'Gmail', href: 'mailto:aryan2006jhanwar@gmail.com', logo: 'https://img.icons8.com/color/96/gmail-new.png', desktopPosition: 'top-[33%] left-[72%]', }, { name: 'YouTube', href: 'https://www.youtube.com/@AryanJhanwar', logo: 'https://img.icons8.com/color/96/youtube-play.png', desktopPosition: 'top-[60%] left-[20%]', }, { name: 'Reddit', href: 'https://www.reddit.com/user/aryanjhanwar/', logo: 'https://img.icons8.com/color/96/reddit.png', desktopPosition: 'top-[60%] left-[60%]', }, ]
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background:
          'var(--bg)',
      }}
    >
      {/* GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <span
            className="inline-flex rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.25em]"
            style={{
              background:
                'var(--panel)',
              color:
                'var(--muted)',
              boxShadow:
                'var(--shadow)',
            }}
          >
            Contact
          </span>

          <h2
            className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            style={{
              color:
                'var(--text)',
            }}
          >
            Let&apos;s Build
            <span
              style={{
                color:
                  'var(--muted)',
              }}
            >
              {' '}Something
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] sm:text-lg"
            style={{
              color:
                'var(--muted)',
            }}
          >
            Open to
            internships,
            collaborations
            and ambitious
            engineering
            opportunities.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT PANEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[28px] border p-6 sm:p-8 lg:p-10"
            style={{
              background:
                'var(--card)',
              borderColor:
                'var(--border)',
              boxShadow:
                'var(--shadow)',
            }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.25em]"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Get In Touch
            </span>

            <h3
              className="mt-4 text-3xl font-bold sm:text-4xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Let&apos;s connect
            </h3>

            <p
              className="mt-5 text-[15px] leading-[1.9] sm:text-base"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Whether it&apos;s an
              internship,
              collaboration,
              technical
              discussion or
              project idea —
              I&apos;m always open
              to meaningful
              conversations
              around software
              engineering,
              backend systems,
              AI and modern web
              development.
            </p>

            {/* CONTACT CARDS */}

            <div className="mt-8 space-y-4 sm:space-y-5">

              {/* EMAIL */}

              <div
                className="rounded-[22px] border p-5"
                style={{
                  background:
                    'var(--panel)',
                  borderColor:
                    'var(--border)',
                }}
              >
                <p
                  className="text-[11px] uppercase tracking-[0.25em]"
                  style={{
                    color:
                      'var(--muted)',
                  }}
                >
                  Email
                </p>

                <a
                  href="mailto:aryan2006jhanwar@gmail.com"
                  className="mt-2 block text-sm font-medium break-all transition hover:opacity-70 sm:text-lg"
                  style={{
                    color:
                      'var(--text)',
                  }}
                >
                  aryan2006jhanwar@gmail.com
                </a>
              </div>

              {/* LOCATION */}

              <div
                className="rounded-[22px] border p-5"
                style={{
                  background:
                    'var(--panel)',
                  borderColor:
                    'var(--border)',
                }}
              >
                <p
                  className="text-[11px] uppercase tracking-[0.25em]"
                  style={{
                    color:
                      'var(--muted)',
                  }}
                >
                  Location
                </p>

                <div
                  className="mt-2 text-base font-medium sm:text-lg"
                  style={{
                    color:
                      'var(--text)',
                  }}
                >
                  Jaipur,
                  Rajasthan,
                  India
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href={resumePdf}
                download
                className="flex items-center justify-center rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-7"
                style={{
                  background:
                    'var(--text)',
                  color:
                    'var(--bg)',
                }}
              >
                Download
                Resume
              </a>

              <a
                href="mailto:aryan2006jhanwar@gmail.com"
                className="flex items-center justify-center rounded-full border px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-7"
                style={{
                  background:
                    'var(--panel)',
                  borderColor:
                    'var(--border)',
                  color:
                    'var(--text)',
                }}
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[28px] border p-6 sm:p-8 lg:p-10"
            style={{
              background:
                'var(--card)',
              borderColor:
                'var(--border)',
              boxShadow:
                'var(--shadow)',
            }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.25em]"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Social Presence
            </span>

            <h3
              className="mt-4 text-3xl font-bold sm:text-4xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Connect Beyond
              The Portfolio
            </h3>

            <p
              className="mt-5 text-[15px] leading-[1.9] sm:text-base"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Explore my
              projects,
              learning
              journey and
              technical
              interests
              across
              platforms.
            </p>

            {/* MOBILE + TABLET GRID */}

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">

              {socials.map(
                (
                  social
                ) => (
                  <a
                    key={
                      social.name
                    }
                    href={
                      social.href
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background:
                        'var(--panel)',
                      borderColor:
                        'var(--border)',
                    }}
                  >
                    <img
                      src={
                        social.logo
                      }
                      alt={
                        social.name
                      }
                      className="h-12 w-12 grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />

                    <span
                      className="mt-3 text-sm font-medium"
                      style={{
                        color:
                          'var(--text)',
                      }}
                    >
                      {
                        social.name
                      }
                    </span>
                  </a>
                )
              )}
            </div>

            {/* DESKTOP FLOATING BUBBLES */}

            <div className="relative mt-8 hidden min-h-[520px] lg:block">

              {socials.map(
                (
                  social,
                  index
                ) => (
                  <motion.a
                    key={
                      social.name
                    }
                    href={
                      social.href
                    }
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    animate={{
                      y: [
                        0,
                        -8,
                        0,
                      ],
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat:
                          Infinity,
                        ease:
                          'easeInOut',
                        delay:
                          index *
                          0.3,
                      },
                    }}
                    className={`absolute ${social.desktopPosition} group flex h-28 w-28 items-center justify-center rounded-full border transition-all duration-500 hover:-translate-y-2 hover:scale-110`}
                    style={{
                      background:
                        'var(--panel)',
                      borderColor:
                        'var(--border)',
                      boxShadow:
                        'var(--shadow)',
                    }}
                  >
                    <img
                      src={
                        social.logo
                      }
                      alt={
                        social.name
                      }
                      className="h-12 w-12 grayscale transition-all duration-500 group-hover:scale-125 group-hover:grayscale-0"
                    />

                    <span
                      className="absolute -bottom-8 text-sm font-medium opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{
                        color:
                          'var(--muted)',
                      }}
                    >
                      {
                        social.name
                      }
                    </span>
                  </motion.a>
                )
              )}

              {/* GLOW */}

              <div
                className="absolute bottom-[-80px] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full blur-[120px]"
                style={{
                  background:
                    'var(--border)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

