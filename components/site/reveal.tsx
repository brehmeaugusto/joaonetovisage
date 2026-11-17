"use client"

import { useEffect, useRef, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Anima a entrada do bloco quando ele aparece na tela.
 * Se o JS não carregar, o conteúdo continua visível.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9) return // já está visível

    el.classList.add("reveal")
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
