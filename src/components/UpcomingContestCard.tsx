import { MapPin } from "lucide-react"

import type { UpcomingContest } from "@/data/types"
import { formatCountdown, formatMonthDay } from "@/lib/format"
import { cn } from "@/lib/utils"

export function UpcomingContestCard({
  contest,
  className,
}: {
  contest: UpcomingContest
  className?: string
}) {
  const { month, day } = formatMonthDay(contest.date)

  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-foreground/8",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={contest.image}
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <p className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-label text-foreground">
          {formatCountdown(contest.date)}
        </p>
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex h-fit min-w-14 flex-col items-center rounded-lg bg-muted px-2 py-2">
          <span className="text-overline">{month}</span>
          <span className="mt-0.5 text-heading-sm leading-none">{day}</span>
        </div>
        <div className="min-w-0">
          <p className="text-overline">{contest.series}</p>
          <h3 className="mt-1 text-heading-sm">{contest.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-caption">
            <MapPin className="size-3.5 shrink-0" />
            {contest.location}
          </p>
        </div>
      </div>
    </article>
  )
}
