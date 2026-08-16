import { Link } from "react-router-dom"

import { getAthlete } from "@/data/athletes"
import type { Competition } from "@/data/types"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

export function ResultCard({
  competition,
  className,
}: {
  competition: Competition
  className?: string
}) {
  const champion = getAthlete(competition.standings[0]?.athleteSlug ?? "")

  return (
    <Link
      to={`/results/${competition.slug}`}
      className={cn(
        "group relative block min-h-[220px] overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/8",
        className,
      )}
    >
      <img
        src={competition.image}
        alt=""
        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-end p-5">
        <p className="text-overline text-white/80">{competition.series}</p>
        <h3 className="mt-2 text-heading-sm text-white">{competition.name}</h3>
        <p className="mt-2 text-caption text-white/70">
          {competition.location} · {formatDate(competition.date)}
        </p>
        {champion ? (
          <p className="mt-3 text-label text-white">
            Champion · {champion.name}
          </p>
        ) : null}
      </div>
    </Link>
  )
}
