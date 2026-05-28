
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML5',
        logo:
          'https://cdn.simpleicons.org/html5',
      },
      {
        name: 'CSS3',
        logo:
          'https://cdn.simpleicons.org/css',
      },
      {
        name: 'JavaScript',
        logo:
          'https://cdn.simpleicons.org/javascript',
      },
      {
        name: 'TypeScript',
        logo:
          'https://cdn.simpleicons.org/typescript',
      },
      {
        name: 'React',
        logo:
          'https://cdn.simpleicons.org/react',
      },
    ],
  },

  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        logo:
          'https://cdn.simpleicons.org/nodedotjs',
      },
      {
        name: 'Express',
        logo:
          'https://cdn.simpleicons.org/express',
      },
      {
        name: 'Python',
        logo:
          'https://cdn.simpleicons.org/python',
      },
    ],
  },

  {
    title:
      'DSA & Programming',
    skills: [
      {
        name: 'C',
        logo:
          'https://cdn.simpleicons.org/c',
      },
      {
        name: 'C++',
        logo:
          'https://cdn.simpleicons.org/cplusplus',
      },
      {
        name: 'Java',
        logo:
          'https://cdn.simpleicons.org/openjdk',
      },
    ],
  },

  {
    title:
      'Tools & Workflow',
    skills: [
      {
        name: 'Git',
        logo:
          'https://cdn.simpleicons.org/git',
      },
      {
        name: 'GitHub',
        logo:
          'https://cdn.simpleicons.org/github',
      },
      {
        name: 'Netlify',
        logo:
          'https://cdn.simpleicons.org/netlify',
      },
      {
        name: 'npm',
        logo:
          'https://cdn.simpleicons.org/npm',
      },
      {
        name: 'Postman',
        logo:
          'https://cdn.simpleicons.org/postman',
      },
      {
        name: 'Canva',
        logo:
          'https://avatars.githubusercontent.com/u/2562356?s=280&v=4',
      },
    ],
  },
]

const proficiency = [
  {
    title:
      'Frontend Development',
    level: 4,
  },
  {
    title:
      'Backend Development',
    level: 3,
  },
  {
    title: 'DSA',
    level: 3,
  },
  {
    title: 'UI / UX',
    level: 3,
  },
  {
    title: 'Python',
    level: 2,
  },
]

const exploring = [
  'Agentic AI',
  'Data Science',
  'Machine Learning',
  'Backend',
  'Databases',
  'System Design',
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background:
          'var(--bg)',
      }}
    >
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
            Skills & Tech Stack
          </span>

          <h2
            className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            style={{
              color:
                'var(--text)',
            }}
          >
            Technologies I
            <span
              style={{
                color:
                  'var(--muted)',
              }}
            >
              {' '}build with
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] sm:text-lg"
            style={{
              color:
                'var(--muted)',
            }}
          >
            A growing technical
            foundation across
            software engineering,
            development, DSA,
            tooling and
            intelligent systems.
          </p>
        </motion.div>

        {/* SKILL CARDS */}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:mt-20">

          {skillCategories.map(
            (
              category,
              index
            ) => (
              <motion.div
                key={
                  category.title
                }
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
                  delay:
                    index *
                    0.1,
                }}
                className="flex h-full flex-col rounded-[28px] border p-5 sm:p-7"
                style={{
                  background:
                    'var(--card)',
                  borderColor:
                    'var(--border)',
                  boxShadow:
                    'var(--shadow)',
                }}
              >
                <h3
                  className="mb-7 text-xl font-bold sm:text-2xl"
                  style={{
                    color:
                      'var(--text)',
                  }}
                >
                  {
                    category.title
                  }
                </h3>

                <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-5">

                  {category.skills.map(
                    (
                      skill
                    ) => (
                      <div
                        key={
                          skill.name
                        }
                        className="group flex flex-col items-center"
                      >
                        <div
                          className="flex h-20 w-20 items-center justify-center rounded-full transition duration-500 group-hover:-translate-y-2 sm:h-24 sm:w-24"
                          style={{
                            background:
                              'var(--panel)',
                            boxShadow:
                              'var(--shadow)',
                          }}
                        >
                          <img
                            src={
                              skill.logo
                            }
                            alt={
                              skill.name
                            }
                            className="h-8 w-8 grayscale transition duration-500 group-hover:grayscale-0 sm:h-10 sm:w-10"
                          />
                        </div>

                        <span
                          className="mt-3 text-center text-xs font-medium sm:text-sm"
                          style={{
                            color:
                              'var(--muted)',
                          }}
                        >
                          {
                            skill.name
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* LOWER GRID */}

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">

          {/* PROFICIENCY */}

          <motion.div
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
              Proficiency
            </span>

            <h3
              className="mt-4 text-2xl font-bold sm:text-4xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Areas of Focus
            </h3>

            <div className="mt-8 space-y-7">
              {proficiency.map(
                (
                  item
                ) => (
                  <div
                    key={
                      item.title
                    }
                  >
                    <div className="mb-3 flex justify-between">
                      <span
                        style={{
                          color:
                            'var(--text)',
                        }}
                      >
                        {
                          item.title
                        }
                      </span>

                      <span
                        style={{
                          color:
                            'var(--muted)',
                        }}
                      >
                        {
                          item.level
                        }
                        /5
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {[...Array(5)].map(
                        (
                          _,
                          i
                        ) => (
                          <div
                            key={
                              i
                            }
                            className="h-2 flex-1 rounded-full"
                            style={{
                              background:
                                i <
                                item.level
                                  ? 'var(--text)'
                                  : 'var(--border)',
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* EXPLORING */}

          <motion.div
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
              Currently Exploring
            </span>

            <h3
              className="mt-4 text-2xl font-bold sm:text-4xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Learning Beyond
              The Basics
            </h3>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              {exploring.map(
                (
                  item
                ) => (
                  <span
                    key={item}
                    className="rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-1 sm:px-5 sm:py-3"
                    style={{
                      background:
                        'var(--panel)',
                      borderColor:
                        'var(--border)',
                      color:
                        'var(--text)',
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

