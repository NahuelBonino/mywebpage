import { motion } from 'motion/react'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

// ── Tipos ──────────────────────────────────────────────────────────────────

export interface CarouselItem {
  src: string
  title: string
}

interface CardCarouselProps {
  images: CarouselItem[]
  activeIndex?: number
  onActiveChange?: (index: number) => void
  className?: string
}

export default function CardCarousel({
  images,
  activeIndex = 0,
  onActiveChange,
  className = '',
}: CardCarouselProps) {
  const count = images.length
  const index = Math.max(0, Math.min(activeIndex, count - 1))
  const slideWidth = 430

  const toPrev = () => onActiveChange?.(Math.max(0, index - 1))
  const toNext = () => onActiveChange?.(Math.min(count - 1, index + 1))
  const toSlide = (i: number) => onActiveChange?.(i)

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}
    >
      {/* Carousel 3D */}
      <div
        className="relative flex items-center justify-start overflow-visible"
        style={{ width: `${slideWidth}px`, perspective: '1200px' }}
      >
        <motion.div
          className="flex w-fit items-center [transform-style:preserve-3d]"
          animate={{ x: -index * slideWidth }}
          transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
        >
          {images.map((item, i) => {
            const isActive = index === i
            const diff = i - index

            const targetRotate = diff * 22
            const targetScale = isActive ? 1.2 : 1 - Math.abs(diff) * 0.12
            const targetZ = isActive ? 40 : -Math.abs(diff) * 60
            const targetY = isActive ? 0 : diff * 20

            return (
              <motion.div
                key={i}
                className="shrink-0 flex flex-col items-center gap-2 will-change-[transform,scale]"
                style={{ width: `${slideWidth}px` }}
                animate={{ rotate: targetRotate, scale: targetScale, z: targetZ, y: targetY }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
              >
                <div
                  className={`text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100 text-white' : 'opacity-0 scale-75 text-neutral-400'
                  }`}
                >
                  {item.title}
                </div>
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-[430px] aspect-video object-cover rounded-xl shadow-lg border border-white/10 cursor-pointer"
                  onClick={() => toSlide(i)}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Controles */}
      <div className="mt-6 px-2 py-1 flex items-center gap-2.5 justify-center text-neutral-400 rounded-full bg-[#0F172A]/80 backdrop-blur-md border border-white/10 shadow-md z-20">
        <button
          onClick={toPrev}
          className="p-1.5 cursor-pointer hover:bg-white/10 rounded-full transition-colors border-0 bg-transparent text-neutral-300 hover:text-white"
          aria-label="Proyecto anterior"
        >
          <ChevronLeftIcon size={16} />
        </button>

        <div className="flex justify-center items-center gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                toSlide(i)
              }}
              className={`rounded-full cursor-pointer h-1.5 transition-all duration-300 ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={toNext}
          className="p-1.5 cursor-pointer hover:bg-white/10 rounded-full transition-colors border-0 bg-transparent text-neutral-300 hover:text-white"
          aria-label="Siguiente proyecto"
        >
          <ChevronRightIcon size={16} />
        </button>
      </div>
    </div>
  )
}
