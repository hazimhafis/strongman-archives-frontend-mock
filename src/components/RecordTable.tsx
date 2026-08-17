import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import {
  createDataTableHelper,
  DataTable,
  DataTablePageSize,
  DataTablePagination,
  useDataTable,
} from "@/components/ui/table"
import { getAthleteByArchiveId } from "@/data/athletes"
import { getCompetitionByArchiveId } from "@/data/contests"
import type { ArchiveRecord, RecordHolder } from "@/data/types"
import { flagUrl } from "@/lib/archive"

const helper = createDataTableHelper<ArchiveRecord>()

const columns = helper.columns([
  helper.accessor("name", {
    header: "Record",
    cell: ({ getValue }) => (
      <span className="text-sm font-medium">{getValue()}</span>
    ),
  }),
  helper.display({
    id: "athlete",
    header: "Athlete",
    cell: ({ row }) => (
      <HolderStack>
        {row.original.holders.map((holder, index) => (
          <AthleteCell
            key={`${row.original.id}-athlete-${holder.athleteArchiveId ?? holder.athleteName}-${index}`}
            holder={holder}
          />
        ))}
      </HolderStack>
    ),
  }),
  helper.display({
    id: "country",
    header: "Country",
    cell: ({ row }) => (
      <HolderStack>
        {row.original.holders.map((holder, index) => (
          <CountryCell
            key={`${row.original.id}-country-${holder.countryCode}-${index}`}
            holder={holder}
          />
        ))}
      </HolderStack>
    ),
  }),
  helper.accessor("value", {
    header: "Value",
    cell: ({ row }) => (
      <>
        <p className="text-sm font-medium whitespace-nowrap">
          {row.original.value}
        </p>
        {row.original.valueNote ? (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {row.original.valueNote}
          </p>
        ) : null}
      </>
    ),
  }),
  helper.display({
    id: "contest",
    header: "Contest",
    cell: ({ row }) => (
      <HolderStack>
        {row.original.holders.map((holder, index) => (
          <ContestCell
            key={`${row.original.id}-contest-${holder.contestArchiveId ?? holder.contestName}-${index}`}
            holder={holder}
          />
        ))}
      </HolderStack>
    ),
  }),
])

export function RecordTable({
  records,
  paginate = false,
  toolbar,
}: {
  records: ArchiveRecord[]
  paginate?: boolean
  toolbar?: ReactNode
}) {
  const table = useDataTable({
    columns,
    data: records,
    getRowId: (record) => String(record.id),
    initialState: paginate ? { pagination: { pageSize: 25 } } : undefined,
  })

  return (
    <>
      {toolbar || paginate ? (
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {toolbar}
          {paginate ? (
            <DataTablePageSize table={table} triggerClassName="bg-background" />
          ) : null}
        </div>
      ) : null}
      <DataTable
        table={table}
        variant="archive"
        minWidth={760}
        emptyMessage="No records filed for this event group."
      />
      {paginate ? <DataTablePagination table={table} /> : null}
    </>
  )
}

function HolderStack({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>
}

function AthleteCell({ holder }: { holder: RecordHolder }) {
  const athlete =
    holder.athleteArchiveId != null
      ? getAthleteByArchiveId(holder.athleteArchiveId)
      : undefined

  if (athlete?.slug) {
    return (
      <Link
        to={`/athletes/${athlete.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {holder.athleteName}
      </Link>
    )
  }

  return <span className="text-sm text-muted-foreground">{holder.athleteName}</span>
}

function CountryCell({ holder }: { holder: RecordHolder }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      {holder.country ? (
        <img
          src={flagUrl(holder.country)}
          alt=""
          className="h-[13px] w-5 rounded-[1px] object-cover"
        />
      ) : null}
      {holder.countryCode || "—"}
    </span>
  )
}

function ContestCell({ holder }: { holder: RecordHolder }) {
  const contest =
    holder.contestArchiveId != null
      ? getCompetitionByArchiveId(holder.contestArchiveId)
      : undefined

  if (contest) {
    return (
      <Link
        to={`/results/${contest.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {holder.contestName}
      </Link>
    )
  }

  return (
    <span className="text-sm text-muted-foreground">{holder.contestName}</span>
  )
}
