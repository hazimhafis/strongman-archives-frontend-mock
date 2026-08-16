import { Link, useParams } from "react-router-dom"

import { Container } from "@/components/Container"
import { SectionHeading } from "@/components/SectionHeading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  getCompetition,
  getContestCompetitor,
  isUpcomingContest,
} from "@/data/contests"
import { dash } from "@/lib/archive"
import { formatDate, formatPlace } from "@/lib/format"

import { NotFoundPage } from "@/pages/NotFoundPage"

export function ResultDetailPage() {
  const { slug } = useParams()
  const competition = slug ? getCompetition(slug) : undefined

  if (!competition) {
    return <NotFoundPage />
  }

  const upcoming = isUpcomingContest(competition)

  return (
    <div>
      <section className="relative min-h-[420px] overflow-hidden">
        <img
          src={competition.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />
        <Container className="relative flex min-h-[420px] flex-col justify-end py-12">
          <p className="text-overline text-white/80">{competition.series}</p>
          <h1 className="mt-3 text-display text-white">{competition.name}</h1>
          <p className="mt-4 text-body-lg text-white/75">
            {competition.location} · {formatDate(competition.date)}
            {competition.division ? ` · ${competition.division}` : ""}
          </p>
        </Container>
      </section>

      {upcoming ? (
        <section className="py-16">
          <Container>
            <SectionHeading overline="Calendar" title="Scheduled" />
            <p className="max-w-2xl text-body-lg text-muted-foreground">
              This contest is on the calendar. Standings and event winners will
              be filed from the archive spreadsheet after the meet.
            </p>
          </Container>
        </section>
      ) : (
        <section className="py-16">
          <Container>
            <SectionHeading overline="Final" title="Standings" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Place</TableHead>
                  <TableHead>Athlete</TableHead>
                  <TableHead>Nation</TableHead>
                  <TableHead>Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competition.standings.map((standing) => {
                  const competitor = getContestCompetitor(
                    standing.athleteArchiveId,
                    standing.athleteName,
                  )
                  const profile = competitor.slug ? (
                    <Link
                      to={`/athletes/${competitor.slug}`}
                      className="flex items-center gap-3 text-body-md hover:text-primary"
                    >
                      <CompetitorAvatar
                        image={competitor.image}
                        label={competitor.countryCode || competitor.name}
                      />
                      {competitor.name}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-3 text-body-md">
                      <CompetitorAvatar
                        image={competitor.image}
                        label={competitor.countryCode || competitor.name}
                      />
                      {competitor.name}
                    </span>
                  )

                  return (
                    <TableRow
                      key={`${standing.athleteArchiveId}-${standing.place}`}
                    >
                      <TableCell className="text-primary">
                        {formatPlace(standing.place)}
                      </TableCell>
                      <TableCell>{profile}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {competitor.country || "—"}
                      </TableCell>
                      <TableCell>{dash(standing.points)}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Container>
        </section>
      )}

      {!upcoming && competition.events.length > 0 ? (
        <section className="bg-muted/50 py-16">
          <Container>
            <SectionHeading overline="Implements" title="Event winners" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Winner</TableHead>
                  <TableHead>Mark</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competition.events.map((event) => {
                  const winner = getContestCompetitor(
                    event.winnerArchiveId,
                    event.winnerName,
                  )
                  return (
                    <TableRow key={event.name}>
                      <TableCell className="text-body-md">{event.name}</TableCell>
                      <TableCell>
                        {winner.slug ? (
                          <Link
                            to={`/athletes/${winner.slug}`}
                            className="hover:text-primary"
                          >
                            {winner.name}
                          </Link>
                        ) : (
                          winner.name
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {event.winningMark}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Container>
        </section>
      ) : null}
    </div>
  )
}

function CompetitorAvatar({ image, label }: { image: string; label: string }) {
  return (
    <Avatar size="sm">
      <AvatarImage src={image} alt="" className="object-top" />
      <AvatarFallback>{label.slice(0, 2)}</AvatarFallback>
    </Avatar>
  )
}
