
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Cursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    })

  const [hovered, setHovered] =
    useState(false)

  const [cursorText, setCursorText] =
    useState('')

  const [mobile, setMobile] =
    useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setMobile(
        window.innerWidth < 768
      )
    }

    checkMobile()

    window.addEventListener(
      'resize',
      checkMobile
    )

    return () =>
      window.removeEventListener(
        'resize',
        checkMobile
      )
  }, [])

  useEffect(() => {
    if (mobile) return

    const moveCursor = (
      e: MouseEvent
    ) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleEnter =
      (
        text = ''
      ) => {
        setHovered(true)
        setCursorText(text)
      }

    const handleLeave =
      () => {
        setHovered(false)
        setCursorText('')
      }

    const hoverables =
      document.querySelectorAll(
        '[data-cursor]'
      )

    hoverables.forEach(
      (element) => {
        const text =
          element.getAttribute(
            'data-cursor'
          ) || ''

        element.addEventListener(
          'mouseenter',
          () =>
            handleEnter(
              text
            )
        )

        element.addEventListener(
          'mouseleave',
          handleLeave
        )
      }
    )

    window.addEventListener(
      'mousemove',
      moveCursor
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      )
    }
  }, [mobile])

  if (mobile) return null

  return (
    <>
      {/* OUTER RING */}

      <motion.div
        animate={{
          x:
            position.x -
            (hovered
              ? 36
              : 18),

          y:
            position.y -
            (hovered
              ? 36
              : 18),

          width:
            hovered
              ? 72
              : 36,

          height:
            hovered
              ? 72
              : 36,
        }}
        transition={{
          type:
            'spring',
          stiffness: 350,
          damping: 26,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] rounded-full border backdrop-blur-md"
        style={{
          border:
            '1px solid var(--border)',

          background:
            'var(--panel)',
        }}
      />

      {/* INNER DOT */}

      <motion.div
        animate={{
          x:
            position.x -
            4,

          y:
            position.y -
            4,

          scale:
            hovered
              ? 0
              : 1,
        }}
        transition={{
          type:
            'spring',
          stiffness: 600,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2 w-2 rounded-full"
        style={{
          background:
            'var(--text)',
        }}
      />

      {/* CURSOR LABEL */}

      {hovered && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x:
              position.x -
              20,
            y:
              position.y -
              10,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.15,
          }}
          className="pointer-events-none fixed left-0 top-0 z-[99999] text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{
            color:
              'var(--text)',
          }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}

export default Cursor

