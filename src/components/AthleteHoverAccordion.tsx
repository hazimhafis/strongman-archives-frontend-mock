import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Link } from "react-router-dom"

import type { Athlete } from "@/data/types"
import { cn } from "@/lib/utils"

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

export function AthleteHoverAccordion({
  athletes,
  className,
}: {
  athletes: Athlete[]
  className?: string
}) {
  const [index, setIndex] = useState(2)

  return (
    <div className={cn("flex w-full gap-1", className)}>
      {athletes.slice(0, 5).map((athlete, i) => {
        const expanded = index === i
        const title = athlete.titles[0]

        return (
          <motion.div
            key={athlete.slug}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative h-[340px] overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/8 transition-[flex] duration-500 ease-in-out md:h-[420px]",
              expanded ? "flex-[6]" : "flex-[1] cursor-pointer",
            )}
            onMouseEnter={() => setIndex(i)}
            onClick={() => setIndex(i)}
          >
            <Link
              to={`/athletes/${athlete.slug}`}
              className="block size-full"
              onClick={(event) => {
                if (!expanded) {
                  event.preventDefault()
                }
              }}
              aria-expanded={expanded}
              aria-label={athlete.name}
            >
              <img
                src={athlete.image}
                alt=""
                className="size-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 from-20% via-black/20 to-transparent to-80%" />
              {!expanded ? (
                <p className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
                  <span className="origin-center rotate-180 text-[11px] font-semibold tracking-[0.18em] text-white uppercase [writing-mode:vertical-rl]">
                    {athlete.lastName}
                  </span>
                </p>
              ) : null}
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.article
                    variants={article}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="absolute inset-0 flex flex-col justify-end overflow-hidden p-4 md:p-6"
                  >
                    <motion.p
                      variants={article}
                      className="text-overline text-white/80"
                    >
                      {athlete.country}
                    </motion.p>
                    <motion.h3
                      variants={article}
                      className="mt-2 text-2xl font-semibold text-white md:text-3xl"
                    >
                      {athlete.name}
                    </motion.h3>
                    <motion.p
                      variants={article}
                      className="mt-2 line-clamp-3 text-sm leading-snug text-white/85 md:text-base"
                    >
                      {athlete.bio}
                    </motion.p>
                    {title ? (
                      <motion.p
                        variants={article}
                        className="mt-3 w-fit rounded-full bg-white/15 px-2.5 py-1 text-label text-white"
                      >
                        {title}
                      </motion.p>
                    ) : null}
                  </motion.article>
                ) : null}
              </AnimatePresence>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
