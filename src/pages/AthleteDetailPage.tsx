import { Link, useParams } from "react-router-dom"

import { Container } from "@/components/Container"
import { SectionHeading } from "@/components/SectionHeading"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Athlete } from "@/data/types"
import { getAthlete } from "@/data/athletes"
import { getAthleteResults } from "@/data/contests"
import { dash } from "@/lib/archive"
import { formatDate, formatPlace } from "@/lib/format"

import { NotFoundPage } from "@/pages/NotFoundPage"

export function AthleteDetailPage() {
  const { slug } = useParams()
  const athlete = slug ? getAthlete(slug) : undefined

  if (!athlete) {
    return <NotFoundPage />
  }

  const results = getAthleteResults(athlete.slug)

  return (
    <div>
      <AthleteProfileHeader athlete={athlete} />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-body-lg text-muted-foreground">{athlete.bio}</p>
            <div className="mt-10">
              <SectionHeading overline="Marks" title="Personal bests" />
              {athlete.personalBests.length === 0 ? (
                <p className="text-body-lg text-muted-foreground">
                  No personal bests filed yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Mark</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {athlete.personalBests.map((best) => (
                      <TableRow key={best.event}>
                        <TableCell className="text-body-md">
                          {best.event}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {best.mark}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
          <aside className="h-fit rounded-xl bg-muted p-6">
            <p className="text-overline">Bio & Stats</p>
            <dl className="mt-4 space-y-4">
              {[
                ["Born", athlete.born || "—"],
                ["Height", athlete.height || "—"],
                ["Weight", athlete.weight || "—"],
                ["Nationality", athlete.country],
                ["Active", athlete.activeYears],
                ["Int'l contests", athlete.intlContests ?? "—"],
                ["Int'l wins", athlete.intlWins ?? "—"],
                ["World appearances", athlete.worldApps ?? "—"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-label text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-heading-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading overline="Leaderboards" title="Archive results" />
          {results.length === 0 ? (
            <p className="text-body-lg text-muted-foreground">
              No filed results yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Meet</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Place</TableHead>
                  <TableHead>Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map(({ competition, standing }) => (
                  <TableRow key={competition.slug}>
                    <TableCell>
                      <Link
                        to={`/results/${competition.slug}`}
                        className="text-body-md hover:text-primary"
                      >
                        {competition.name}
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(competition.date)}
                    </TableCell>
                    <TableCell className="text-primary">
                      {formatPlace(standing.place)}
                    </TableCell>
                    <TableCell>{standing.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Container>
      </section>
    </div>
  )
}

function AthleteProfileHeader({ athlete }: { athlete: Athlete }) {
  const division = athlete.gender === "women" ? "Women's" : "Men's"
  const facts = [
    ["HT/WT", formatHtWt(athlete.height, athlete.weight)],
    ["Birthdate", formatBorn(athlete.born)],
    ["Active", dash(athlete.activeYears)],
    ["Nationality", athlete.country],
  ] as const

  return (
    <section className="border-b bg-background">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-6 px-4 py-6 md:grid-cols-[220px_minmax(0,1fr)_minmax(210px,auto)] md:gap-x-6 md:gap-y-0 md:px-8 md:py-0 lg:grid-cols-[260px_minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:min-h-[268px] lg:gap-x-8">
        <div className="relative mx-auto flex aspect-square w-[220px] items-center justify-center overflow-hidden md:mx-0 md:aspect-auto md:h-[248px] md:w-full lg:h-[268px]">
          <div
            aria-hidden
            className="absolute inset-0 bg-muted/70"
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              backgroundImage:
                "repeating-linear-gradient(-36deg, transparent, transparent 12px, oklch(0 0 0 / 0.05) 12px, oklch(0 0 0 / 0.05) 13px)",
            }}
          />
          <img
            src={athlete.flagUrl}
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 size-[165%] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-[0.16]"
          />
          <img
            src={athlete.image}
            alt=""
            className="relative z-10 size-[78%] rounded-full object-cover object-top shadow-md ring-4 ring-background"
            onError={(event) => {
              event.currentTarget.style.opacity = "0"
            }}
          />
        </div>

        <div className="min-w-0 md:py-8">
          <h1 className="font-heading uppercase leading-none">
            <span className="block text-[1.2rem] font-normal tracking-[0.16em] text-muted-foreground md:text-[1.45rem]">
              {athlete.firstName}
            </span>
            <span className="mt-1 block text-[2.25rem] font-bold tracking-tight break-words md:text-[2.75rem] lg:text-[3.6rem]">
              {athlete.lastName}
            </span>
          </h1>
          <p className="mt-4 flex items-center gap-2.5 text-sm text-foreground/80">
            <img
              src={athlete.flagUrl}
              alt=""
              className="size-7 shrink-0 rounded-full object-cover ring-1 ring-border"
            />
            <span className="text-label text-muted-foreground">
              {athlete.country} • {division} • {athlete.activeYears}
            </span>
          </p>
        </div>

        <dl className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-4 border-t border-dashed pt-5 text-center md:grid-cols-[auto_1fr] md:justify-items-start items-center md:border-t-0 md:border-l md:border-dashed md:py-8 md:pl-6 md:pt-8 md:text-left lg:gap-x-8 lg:pl-10">
          {facts.map(([label, value]) => (
            <div key={label} className="flex flex-col items-center md:contents">
              <dt className="text-label text-muted-foreground">{label}</dt>
              <dd className="text-label font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function formatHtWt(height: string, weight: string) {
  const parts = [height, weight].filter(Boolean)
  return parts.length > 0 ? parts.join(", ") : "—"
}

function formatBorn(born: string) {
  if (!born) return "—"
  const year = Number(born)
  if (!Number.isInteger(year) || born.length !== 4) return born
  return `${born} (${new Date().getFullYear() - year})`
}
