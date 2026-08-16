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
import { getAthlete } from "@/data/athletes"
import { getCompetition } from "@/data/results"
import { formatDate, formatPlace } from "@/lib/format"

import { NotFoundPage } from "@/pages/NotFoundPage"

export function ResultDetailPage() {
  const { slug } = useParams()
  const competition = slug ? getCompetition(slug) : undefined

  if (!competition) {
    return <NotFoundPage />
  }

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
          </p>
        </Container>
      </section>

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
                const athlete = getAthlete(standing.athleteSlug)
                if (!athlete) return null
                return (
                  <TableRow key={standing.athleteSlug}>
                    <TableCell className="text-primary">
                      {formatPlace(standing.place)}
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`/athletes/${athlete.slug}`}
                        className="flex items-center gap-3 text-body-md hover:text-primary"
                      >
                        <Avatar size="sm">
                          <AvatarImage src={athlete.image} alt="" />
                          <AvatarFallback>{athlete.countryCode}</AvatarFallback>
                        </Avatar>
                        {athlete.name}
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {athlete.country}
                    </TableCell>
                    <TableCell>{standing.points}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Container>
      </section>

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
                const winner = getAthlete(event.winnerSlug)
                return (
                  <TableRow key={event.name}>
                    <TableCell className="text-body-md">{event.name}</TableCell>
                    <TableCell>
                      {winner ? (
                        <Link
                          to={`/athletes/${winner.slug}`}
                          className="hover:text-primary"
                        >
                          {winner.name}
                        </Link>
                      ) : (
                        event.winnerSlug
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
    </div>
  )
}
