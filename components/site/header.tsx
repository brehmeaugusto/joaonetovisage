"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV, SITE } from "@/lib/site"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-brand-ivory/10 bg-brand-black/85 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="#topo"
          aria-label="Conciso Studio de Imagem Masculina — início"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/conciso/conciso-horizontal-claro.svg"
            alt="Conciso — Studio de Imagem Masculina"
            width={214}
            height={96}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-11" : "h-16"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-ivory transition-colors hover:text-brand-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-taupe transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-ivory/50 px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand-ivory transition-colors hover:border-brand-ivory hover:bg-brand-ivory hover:text-brand-black"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="p-2 text-brand-ivory lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

    </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-brand-black px-6 pb-10 pt-32 lg:hidden">
          <nav className="flex flex-col gap-7" aria-label="Menu móvel">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-light text-brand-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-ivory px-8 py-5 text-center text-[0.72rem] font-medium uppercase tracking-[0.24em] text-brand-black"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
