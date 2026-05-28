
import { motion } from 'framer-motion'


import bitboardImg from '../assets/projects/bitboardTS.png'
import syllabusImg from '../assets/projects/syllabusAi.png'
import shorturlImg from '../assets/projects/shorturl.png'
import ledgerImg from '../assets/projects/backend-ledger.png'


const projects = [
  {
    title:
      'BitBoardTS — AI Powered Chess Engine',

    category:
      'Flagship Project',

    stack: [
      'TypeScript',
      'Node.js',
      'Web Workers',
      'UCI Protocol',
    ],

    description:
      'AI-powered chess engine engineered in TypeScript and converted from a high-performance C++ architecture, featuring advanced search, evaluation and optimization systems for strong positional decision-making.',

    highlights: [
      'Engineered split-32 bitboard representation and magic bitboard move generation.',
      'Implemented alpha-beta pruning, LMR, PVS and transposition tables.',
      'Designed tapered evaluation across opening, middlegame and endgame.',
      'Achieved ~2000–2200 ELO with Node.js + UCI integration.',
    ],

    github:
      'https://github.com/aryanjhanwar/BitBoardTS',

    live: '#',
    image: bitboardImg,
  },

  {
    title:
      'Syllabus AI — Visual Learning Roadmap Generator',

    category:
      'AI Product',

    stack: [
      'JavaScript',
      'PDF Processing',
      'Graph Visualization',
    ],

    description:
      'A visual learning platform that converts syllabus PDFs into interactive graphical roadmaps for structured topic learning.',

    highlights: [
      'Built PDF parsing and topic extraction.',
      'Designed node-based concept mapping.',
      'Visualized topic dependencies.',
      'Created guided learning flow.',
    ],

    github:
      'https://github.com/aryanjhanwar/syllabusAi',

    live: '#',
    image: syllabusImg,
  },

  {
    title:
      'Short URL Generator',

    category:
      'Backend System',

    stack: [
      'Node.js',
      'Express.js',
      'EJS',
      'JavaScript',
    ],

    description:
      'A full-stack URL shortening platform designed for compact, shareable links with efficient routing.',

    highlights: [
      'Built URL routing system.',
      'Implemented scalable backend logic.',
      'Designed reusable workflows.',
      'Used EJS rendering.',
    ],

    github:
      'https://github.com/aryanjhanwar/short-url-nodejs',

    live: '#',
    image: shorturlImg,
  },

  {
    title:
      'Ledger Banking Transaction System',

    category:
      'Backend Engineering',

    stack: [
      'Backend',
      'Ledger',
      'Transactions',
      'System Design',
    ],

    description:
      'A backend-focused banking ledger system for handling transaction records and financial workflow simulation.',

    highlights: [
      'Designed banking architecture.',
      'Managed debit-credit flow.',
      'Structured scalable logic.',
      'Focused on reliability.',
    ],

    github: '#',
    live: '#',
    image: ledgerImg,
  },
]

function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </span>

          <h2
            className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl"
            style={{
              color:
                'var(--text)',
            }}
          >
            Engineering
            <span
              style={{
                color:
                  'var(--muted)',
              }}
            >
              {' '}through
            </span>
            projects
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] sm:text-lg"
            style={{
              color:
                'var(--muted)',
            }}
          >
            A collection of
            projects focused on
            engineering, AI,
            backend logic,
            systems thinking
            and problem
            solving.
          </p>
        </motion.div>

        {/* PROJECT GRID */}

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">

          {projects.map(
            (
              project,
              index
            ) => (
              <motion.div
                key={
                  project.title
                }
                initial={{
                  opacity: 0,
                  y: 40,
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
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border p-5 transition duration-500 hover:-translate-y-2 sm:p-7 lg:p-8"
                style={{
                  background:
                    'var(--card)',
                  borderColor:
                    'var(--border)',
                  boxShadow:
                    'var(--shadow)',
                }}
              >
                {/* IMAGE PREVIEW */}

                <div className="group relative h-[220px] overflow-hidden rounded-[24px] border sm:h-[250px]" style={{ borderColor: 'var(--border)', background: 'var(--panel)', }} > <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /> {/* DARK OVERLAY */} <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)', }} /> {/* PROJECT TYPE */} <div className="absolute bottom-4 left-4 rounded-full px-4 py-2 text-xs font-medium backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.14)', }} > {project.category} </div> </div>

                {/* CONTENT */}

                <div className="mt-7 flex flex-1 flex-col">

                  <div className="flex items-center justify-between">

                    <span
                      className="rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em]"
                      style={{
                        background:
                          'var(--text)',
                        color:
                          'var(--bg)',
                      }}
                    >
                      {
                        project.category
                      }
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-2xl font-bold leading-tight sm:text-3xl"
                    style={{
                      color:
                        'var(--text)',
                    }}
                  >
                    {
                      project.title
                    }
                  </h3>

                  <p
                    className="mt-4 text-[15px] leading-[1.9] sm:text-base"
                    style={{
                      color:
                        'var(--muted)',
                    }}
                  >
                    {
                      project.description
                    }
                  </p>

                  {/* STACK */}

                  <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                    {project.stack.map(
                      (
                        tech
                      ) => (
                        <span
                          key={
                            tech
                          }
                          className="rounded-full border px-4 py-2 text-xs sm:text-sm"
                          style={{
                            background:
                              'var(--panel)',
                            borderColor:
                              'var(--border)',
                            color:
                              'var(--text)',
                          }}
                        >
                          {
                            tech
                          }
                        </span>
                      )
                    )}
                  </div>

                  {/* HIGHLIGHTS */}

                  <div className="mt-7 space-y-4">

                    {project.highlights.map(
                      (
                        item
                      ) => (
                        <div
                          key={
                            item
                          }
                          className="flex items-start gap-3"
                        >
                          <div
                            className="mt-2 h-2 w-2 rounded-full"
                            style={{
                              background:
                                'var(--text)',
                            }}
                          />

                          <p
                            className="text-sm leading-[1.8]"
                            style={{
                              color:
                                'var(--muted)',
                            }}
                          >
                            {
                              item
                            }
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* BUTTONS */}

                  <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">

                    {/* GITHUB */}

                    <a
                      href={
                        project.github
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-6"
                      style={{
                        background:
                          'var(--text)',
                        color:
                          'var(--bg)',
                        borderColor:
                          'var(--text)',
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="h-4 w-4 invert"
                      />

                      Code
                    </a>

                    {/* LIVE */}

                    <a
                      href={
                        project.live
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-6"
                      style={{
                        background:
                          'var(--panel)',
                        color:
                          'var(--text)',
                        borderColor:
                          'var(--border)',
                      }}
                    >
                      View Live

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects


