"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

export type GalleryImage = {
  src: string
  alt: string
  width: number
  height: number
}

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [active, close, step])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ampliar foto: ${img.alt}`}
            className="group relative block aspect-[3/4] w-full overflow-hidden bg-brand-graphite"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-brand-black/0 transition-colors duration-500 group-hover:bg-brand-black/35" />
            <Expand className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 translate-y-2 text-brand-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos do estúdio"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 p-3 text-brand-ivory transition-opacity hover:opacity-70"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-brand-ivory transition-opacity hover:opacity-70 md:left-6"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-brand-ivory transition-opacity hover:opacity-70 md:right-6"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          <Image
            key={images[active].src}
            src={images[active].src}
            alt={images[active].alt}
            width={images[active].width}
            height={images[active].height}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[86vh] w-auto max-w-[92vw] object-contain"
          />
          <p className="absolute bottom-5 left-0 right-0 text-center text-[0.68rem] uppercase tracking-[0.3em] text-brand-taupe">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
