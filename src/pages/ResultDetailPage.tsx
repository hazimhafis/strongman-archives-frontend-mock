import { Link, useParams } from "react-router-dom"

import { Container } from "@/components/Container"
import { LiveBadge } from "@/components/LiveBadge"
import { SectionHeading } from "@/components/SectionHeading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  createDataTableHelper,
  DataTable,
  useDataTable,
} from "@/components/ui/table"
import {
  getCompetition,
  getContestCompetitor,
  isLiveContest,
  isUpcomingContest,
} from "@/data/contests"
import type { CompetitionEvent, CompetitionStanding } from "@/data/types"
import { dash } from "@/lib/archive"
import { formatDate, formatPlace } from "@/lib/format"

import { NotFoundPage } from "@/pages/NotFoundPage"

const standingHelper = createDataTableHelper<CompetitionStanding>()
const standingColumns = standingHelper.columns([
  standingHelper.accessor("place", {
    header: "Place",
    cell: ({ getValue }) => (
      <span className="text-primary">{formatPlace(getValue())}</span>
    ),
  }),
  standingHelper.accessor("athleteName", {
    header: "Athlete",
    cell: ({ row }) => {
      const competitor = getContestCompetitor(
        row.original.athleteArchiveId,
        row.original.athleteName,
      )

      if (competitor.slug) {
        return (
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
        )
      }

      return (
        <span className="flex items-center gap-3 text-body-md">
          <CompetitorAvatar
            image={competitor.image}
            label={competitor.countryCode || competitor.name}
          />
          {competitor.name}
        </span>
      )
    },
  }),
  standingHelper.display({
    id: "nation",
    header: "Nation",
    cell: ({ row }) => {
      const competitor = getContestCompetitor(
        row.original.athleteArchiveId,
        row.original.athleteName,
      )
      return (
        <span className="text-muted-foreground">
          {competitor.country || "—"}
        </span>
      )
    },
  }),
  standingHelper.accessor("points", {
    header: "Points",
    cell: ({ getValue }) => dash(getValue()),
  }),
])

const eventHelper = createDataTableHelper<CompetitionEvent>()
const eventColumns = eventHelper.columns([
  eventHelper.accessor("name", {
    header: "Event",
    cell: ({ getValue }) => (
      <span className="text-body-md">{getValue()}</span>
    ),
  }),
  eventHelper.accessor("winnerName", {
    header: "Winner",
    cell: ({ row }) => {
      const winner = getContestCompetitor(
        row.original.winnerArchiveId,
        row.original.winnerName,
      )

      if (winner.slug) {
        return (
          <Link to={`/athletes/${winner.slug}`} className="hover:text-primary">
            {winner.name}
          </Link>
        )
      }

      return winner.name
    },
  }),
  eventHelper.accessor("winningMark", {
    header: "Mark",
    cell: ({ getValue }) => (
      <span className="text-muted-foreground">{getValue()}</span>
    ),
  }),
])

export function ResultDetailPage() {
  const { slug } = useParams()
  const competition = slug ? getCompetition(slug) : undefined

  if (!competition) {
    return <NotFoundPage />
  }

  const upcoming = isUpcomingContest(competition)
  const live = isLiveContest(competition)

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
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-overline text-white/80">{competition.series}</p>
            {live ? <LiveBadge /> : null}
          </div>
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
            <SectionHeading
              overline={live ? "Live" : "Final"}
              title={live ? "Live standings" : "Standings"}
            />
            <StandingsTable standings={competition.standings} />
          </Container>
        </section>
      )}

      {!upcoming && competition.events.length > 0 ? (
        <section className="bg-muted/50 py-16">
          <Container>
            <SectionHeading overline="Implements" title="Event winners" />
            <EventWinnersTable events={competition.events} />
          </Container>
        </section>
      ) : null}
    </div>
  )
}

function StandingsTable({
  standings,
}: {
  standings: CompetitionStanding[]
}) {
  const table = useDataTable({
    columns: standingColumns,
    data: standings,
    getRowId: (standing) =>
      `${standing.athleteArchiveId}-${standing.place}`,
  })

  return <DataTable table={table} />
}

function EventWinnersTable({ events }: { events: CompetitionEvent[] }) {
  const table = useDataTable({
    columns: eventColumns,
    data: events,
    getRowId: (event) => event.name,
  })

  return <DataTable table={table} />
}

function CompetitorAvatar({ image, label }: { image: string; label: string }) {
  return (
    <Avatar size="sm">
      <AvatarImage src={image} alt="" className="object-top" />
      <AvatarFallback>{label.slice(0, 2)}</AvatarFallback>
    </Avatar>
  )
}
