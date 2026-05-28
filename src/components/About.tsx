
import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
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
          className="mx-auto max-w-4xl text-center lg:text-left"
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
            About Me
          </span>

          <h2
            className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            style={{
              color:
                'var(--text)',
            }}
          >
            Engineering with
            <span
              style={{
                color:
                  'var(--muted)',
              }}
            >
              {' '}clarity,
            </span>
            curiosity
            <span
              style={{
                color:
                  'var(--muted)',
              }}
            >
              {' '}and craft.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-3xl text-[15px] leading-[1.9] sm:text-lg lg:mx-0"
            style={{
              color:
                'var(--muted)',
            }}
          >
            I am a Computer
            Science Engineering
            student at
            <span
              className="font-semibold"
              style={{
                color:
                  'var(--text)',
              }}
            >
              {' '}
              Arya College of
              Engineering,
              Jaipur
            </span>
            , focused on
            building modern
            digital experiences
            through full stack
            development while
            exploring AI,
            machine learning,
            data science and
            system design.
          </p>

          <p
            className="mx-auto mt-5 max-w-3xl text-[15px] leading-[1.9] sm:text-lg lg:mx-0"
            style={{
              color:
                'var(--muted)',
            }}
          >
            I believe in
            understanding
            concepts deeply,
            solving real-world
            problems and
            creating products
            that feel
            thoughtful,
            technically strong
            and visually
            refined.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* EDUCATION */}

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
            className="rounded-[28px] border p-6 backdrop-blur-xl sm:p-8 lg:p-10"
            style={{
              background:
                'var(--card)',
              borderColor:
                'var(--border)',
              boxShadow:
                'var(--shadow)',
            }}
          >
            <div className="mb-8 flex items-center justify-between">
              <h3
                className="text-xl font-bold sm:text-2xl"
                style={{
                  color:
                    'var(--text)',
                }}
              >
                Education
              </h3>

              <span
                className="text-[11px] uppercase tracking-[0.25em]"
                style={{
                  color:
                    'var(--muted)',
                }}
              >
                Timeline
              </span>
            </div>

            <div
              className="space-y-8 border-l pl-5 sm:pl-6"
              style={{
                borderColor:
                  'var(--border)',
              }}
            >
              {[
                {
                  title:
                    'B.Tech Computer Science',
                  school:
                    'Arya College of Engineering, Jaipur (RTU)',
                  year:
                    '2024 — Present',
                },

                {
                  title:
                    '12th Grade — Science Stream',
                  school:
                    "A's Steward Morris School",
                  year:
                    '81.2% • 2024',
                },

                {
                  title:
                    '10th Grade',
                  school:
                    "A's Steward Morris School",
                  year:
                    '87.4% • 2022',
                },
              ].map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="relative"
                  >
                    <div
                      className="absolute -left-[27px] top-2 h-4 w-4 rounded-full"
                      style={{
                        background:
                          'var(--text)',
                      }}
                    />

                    <h4
                      className="text-lg font-semibold sm:text-xl"
                      style={{
                        color:
                          'var(--text)',
                      }}
                    >
                      {
                        item.title
                      }
                    </h4>

                    <p
                      className="mt-2 text-sm sm:text-base"
                      style={{
                        color:
                          'var(--muted)',
                      }}
                    >
                      {
                        item.school
                      }
                    </p>

                    <span
                      className="mt-3 inline-block text-sm"
                      style={{
                        color:
                          'var(--muted)',
                      }}
                    >
                      {
                        item.year
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* MINDSET */}

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
              Engineering
              Mindset
            </span>

            <h3
              className="mt-5 text-2xl font-bold leading-tight sm:text-4xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Building with
              precision,
              not shortcuts.
            </h3>

            <p
              className="mt-7 text-[15px] leading-[1.9] sm:text-base"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              I prefer depth
              over speed and
              focus on
              understanding
              systems deeply
              instead of merely
              completing
              tutorials.
            </p>

            <p
              className="mt-5 text-[15px] leading-[1.9] sm:text-base"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              My interests lie
              in full stack
              engineering,
              artificial
              intelligence,
              backend systems,
              data science and
              scalable
              architectures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

