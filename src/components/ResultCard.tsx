import { Link } from "react-router-dom"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getAthlete } from "@/data/athletes"
import type { Competition } from "@/data/types"
import { formatDate, formatPlace } from "@/lib/format"
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

export function FeaturedResultCard({
  competition,
  className,
}: {
  competition: Competition
  className?: string
}) {
  const podium = competition.standings.slice(0, 3)

  return (
    <Link
      to={`/results/${competition.slug}`}
      className={cn(
        "group relative block h-full min-h-[420px] overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/8",
        className,
      )}
    >
      <img
        src={competition.image}
        alt=""
        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 md:p-8">
        <p className="text-overline text-white/80">{competition.series}</p>
        <h3 className="mt-2 max-w-2xl text-display text-white md:text-5xl md:leading-[1.05]">
          {competition.name}
        </h3>
        <p className="mt-3 text-caption text-white/70">
          {competition.location} · {formatDate(competition.date)}
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-3">
          {podium.map((standing) => {
            const athlete = getAthlete(standing.athleteSlug)
            if (!athlete) return null

            return (
              <li
                key={standing.athleteSlug}
                className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 backdrop-blur-sm"
              >
                <span className="w-8 shrink-0 text-label text-white/70">
                  {formatPlace(standing.place)}
                </span>
                <Avatar>
                  <AvatarImage
                    src={athlete.image}
                    alt=""
                    className="object-top"
                  />
                  <AvatarFallback>{athlete.countryCode}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {athlete.name}
                  </p>
                  <p className="text-caption text-white/70">
                    {standing.points} pts
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Link>
  )
}
