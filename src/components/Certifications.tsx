
import { useState } from 'react'
import {
  motion,
  AnimatePresence,
} from 'framer-motion'

/* PDF IMPORTS */

import databasePdf from '../assets/certificates/database-systems.pdf'
import cProgrammingPdf from '../assets/certificates/nptel-c-programming.pdf'
import cppPdf from '../assets/certificates/nptel-cpp.pdf'
import dsaPdf from '../assets/certificates/nptel-dsa.pdf'
import javaPdf from '../assets/certificates/java.pdf'
import isroPdf from '../assets/certificates/isro.pdf'

const certificates = [
  {
    title:
      'Programming in Java',

    institute:
      'IIT Kharagpur • NPTEL',

    score: '95%',

    badge: 'Elite',

    description:
      'Advanced Java programming certification focused on OOP, software engineering and scalable application development.',

    highlights: [
      '95% Score',
      'Elite',
      '12 Weeks',
    ],

    pdf: javaPdf,
  },

  {
    title:
      'Problem Solving Through Programming in C',

    institute:
      'IIT Kharagpur • NPTEL',

    score: '80%',

    badge: 'Top 2%',

    description:
      'Programming and computational problem-solving certification emphasizing algorithms and structured thinking.',

    highlights: [
      '80% Score',
      'Top 2%',
      'Elite',
    ],

    pdf: cProgrammingPdf,
  },

  {
    title:
      'Programming in Modern C++',

    institute:
      'IIT Kharagpur • NPTEL',

    score: '72%',

    badge: 'Top 5%',

    description:
      'Modern C++ certification covering OOP, STL, memory handling and efficient coding practices.',

    highlights: [
      '72% Score',
      'Top 5%',
      'Elite',
    ],

    pdf: cppPdf,
  },

  {
    title:
      'Data Structures & Algorithms Design',

    institute:
      'IIT Kanpur • NPTEL',

    score: '78%',

    badge: 'Top 5%',

    description:
      'Data structures and algorithms certification focused on optimization and problem solving.',

    highlights: [
      '78% Score',
      'Top 5%',
      'Elite',
    ],

    pdf: dsaPdf,
  },

  {
    title:
      'Introduction to Database Systems',

    institute:
      'IIT Madras • NPTEL',

    score: '56%',

    badge:
      'Certified',

    description:
      'Database systems certification covering SQL, normalization and relational database concepts.',

    highlights: [
      '56% Score',
      'Database',
      '12 Weeks',
    ],

    pdf: databasePdf,
  },

  {
    title:
      'Geo-data Sharing & Cyber Security',

    institute:
      'ISRO • IIRS',

    score:
      '10 Hours',

    badge:
      'Professional',

    description:
      'Professional ISRO training focused on geo-data sharing and cyber security fundamentals.',

    highlights: [
      'ISRO Certified',
      'Cyber Security',
      '10 Hours',
    ],

    pdf: isroPdf,
  },
]

function Certifications() {
  const [
    selectedPdf,
    setSelectedPdf,
  ] = useState<
    string | null
  >(null)

  return (
    <>
      <section
        id="certifications"
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
              Certifications
            </span>

            <h2
              className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-7xl"
              style={{
                color:
                  'var(--text)',
              }}
            >
              Continuous
              <span
                style={{
                  color:
                    'var(--muted)',
                }}
              >
                {' '}learning
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] sm:text-lg"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Industry-recognized
              certifications
              from IITs, NPTEL
              and ISRO
              reflecting strong
              technical
              foundations and
              continuous
              learning.
            </p>
          </motion.div>

          {/* GRID */}

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">

            {certificates.map(
              (
                cert,
                index
              ) => (
                <motion.div
                  key={
                    cert.title
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
                      0.08,
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
                  {/* PREVIEW */}

                  <div
                    className="relative overflow-hidden rounded-[22px] border"
                    style={{
                      background:
                        'var(--panel)',
                      borderColor:
                        'var(--border)',
                    }}
                  >
                    {/* MOBILE RESPONSIVE HEIGHT */}

                    <div className="h-[180px] sm:h-[220px] lg:h-[250px]">
                      <iframe
                        src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&zoom=FitH`}
                        className="pointer-events-none h-full w-full scale-[1.02] sm:scale-[1.06]"
                      />
                    </div>

                    {/* OVERLAY */}

                    <div
                      className="absolute inset-x-0 bottom-0 h-20"
                      style={{
                        background:
                          'linear-gradient(to top, var(--card), transparent)',
                      }}
                    />

                    {/* PREVIEW TAG */}

                    <div
                      className="absolute left-4 top-4 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em]"
                      style={{
                        background:
                          'var(--text)',
                        color:
                          'var(--bg)',
                      }}
                    >
                      Preview
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-6 flex min-h-[380px] flex-1 flex-col sm:min-h-[420px]">

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
                          cert.badge
                        }
                      </span>

                      <span
                        className="text-sm font-semibold"
                        style={{
                          color:
                            'var(--muted)',
                        }}
                      >
                        {
                          cert.score
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
                        cert.title
                      }
                    </h3>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color:
                          'var(--muted)',
                      }}
                    >
                      {
                        cert.institute
                      }
                    </p>

                    <p
                      className="mt-4 text-[15px] leading-[1.9]"
                      style={{
                        color:
                          'var(--muted)',
                      }}
                    >
                      {
                        cert.description
                      }
                    </p>

                    {/* TAGS */}

                    <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                      {cert.highlights.map(
                        (
                          item
                        ) => (
                          <span
                            key={
                              item
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
                              item
                            }
                          </span>
                        )
                      )}
                    </div>

                    {/* BUTTON */}

                    <button
                      onClick={() =>
                        setSelectedPdf(
                          cert.pdf
                        )
                      }
                      className="mt-auto flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-4"
                      style={{
                        background:
                          'var(--text)',
                        color:
                          'var(--bg)',
                        borderColor:
                          'var(--text)',
                      }}
                    >
                      <span>
                        ↗
                      </span>

                      View
                      Certificate
                    </button>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{
                scale: 0.96,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.96,
              }}
              className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-[24px] border sm:rounded-[40px]"
              style={{
                background:
                  'var(--card)',
                borderColor:
                  'var(--border)',
                boxShadow:
                  'var(--shadow)',
              }}
            >
              {/* CLOSE BUTTON */}

              <button
                onClick={() =>
                  setSelectedPdf(
                    null
                  )
                }
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full text-xl font-bold transition hover:scale-105 sm:right-6 sm:top-6"
                style={{
                  background:
                    'var(--text)',
                  color:
                    'var(--bg)',
                }}
              >
                ✕
              </button>

              {/* PDF VIEWER */}

              <iframe
                src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certifications

