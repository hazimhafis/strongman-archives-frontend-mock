import { useMemo } from "react"
import { Link } from "react-router-dom"

import { LiveBadge } from "@/components/LiveBadge"
import {
  createDataTableHelper,
  DataTable,
  useDataTable,
} from "@/components/ui/table"
import { getContestCompetitor, isLiveContest } from "@/data/contests"
import type { Competition } from "@/data/types"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

const helper = createDataTableHelper<Competition>()

const imageColumn = helper.display({
  id: "image",
  header: "",
  cell: ({ row }) => (
    <img
      src={row.original.imageThumb}
      alt=""
      className={cn(
        "h-10 w-[60px] rounded-sm object-cover ring-1 ring-foreground/8",
      )}
    />
  ),
  meta: { headerClassName: "w-16" },
})

const dateColumn = helper.accessor("date", {
  header: "Date",
  cell: ({ getValue }) => (
    <span className="text-sm whitespace-nowrap text-muted-foreground">
      {formatDate(getValue())}
    </span>
  ),
})

const contestColumn = helper.accessor("name", {
  header: "Contest",
  cell: ({ row }) => (
    <span className="inline-flex items-center gap-2">
      <Link
        to={`/results/${row.original.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {row.original.name}
      </Link>
      {isLiveContest(row.original) ? <LiveBadge /> : null}
    </span>
  ),
})

const divisionColumn = helper.accessor("division", {
  header: "Division",
  cell: ({ getValue }) => (
    <span className="text-sm text-muted-foreground">{getValue()}</span>
  ),
})

const locationColumn = helper.accessor("location", {
  header: "Location",
  cell: ({ getValue }) => (
    <span className="text-sm text-muted-foreground">{getValue()}</span>
  ),
})

const championColumn = helper.display({
  id: "champion",
  header: "Champion",
  cell: ({ row }) => {
    const championStanding = row.original.standings[0]
    const champion = championStanding
      ? getContestCompetitor(
          championStanding.athleteArchiveId,
          championStanding.athleteName,
        )
      : null

    if (champion?.slug) {
      return (
        <Link
          to={`/athletes/${champion.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          {champion.name}
        </Link>
      )
    }

    return (
      <span className="text-sm text-muted-foreground">
        {champion?.name ?? "—"}
      </span>
    )
  },
})

const baseColumns = helper.columns([
  imageColumn,
  dateColumn,
  contestColumn,
  divisionColumn,
  locationColumn,
])

const championColumns = helper.columns([...baseColumns, championColumn])

export function ContestTable({
  contests,
  showChampion = false,
}: {
  contests: Competition[]
  showChampion?: boolean
}) {
  const columns = useMemo(
    () => (showChampion ? championColumns : baseColumns),
    [showChampion],
  )
  const table = useDataTable({
    columns,
    data: contests,
    getRowId: (contest) => contest.slug,
  })

  return <DataTable table={table} variant="archive" minWidth={720} />
}
