import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { getAthleteByArchiveId } from "@/data/athletes"
import { getCompetitionByArchiveId } from "@/data/contests"
import type { ArchiveRecord, RecordHolder } from "@/data/types"
import { flagUrl } from "@/lib/archive"

export function RecordTable({ records }: { records: ArchiveRecord[] }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-background ring-1 ring-foreground/8">
      <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left">
        <thead>
          <tr className="bg-muted">
            <th className="px-3 py-3 text-label text-muted-foreground first:rounded-tl-xl">
              Record
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Athlete
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Country
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Value
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground last:rounded-tr-xl">
              Contest
            </th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="px-3 py-8 text-center text-sm text-muted-foreground"
              >
                No records filed for this event group.
              </td>
            </tr>
          ) : (
            records.map((record) => (
              <tr key={record.id} className="hover:bg-muted/60">
                <td className="border-b px-3 py-2.5 text-sm font-medium">
                  {record.name}
                </td>
                <td className="border-b px-3 py-2.5">
                  <HolderStack>
                    {record.holders.map((holder, index) => (
                      <AthleteCell
                        key={`${record.id}-athlete-${holder.athleteArchiveId ?? holder.athleteName}-${index}`}
                        holder={holder}
                      />
                    ))}
                  </HolderStack>
                </td>
                <td className="border-b px-3 py-2.5">
                  <HolderStack>
                    {record.holders.map((holder, index) => (
                      <CountryCell
                        key={`${record.id}-country-${holder.countryCode}-${index}`}
                        holder={holder}
                      />
                    ))}
                  </HolderStack>
                </td>
                <td className="border-b px-3 py-2.5">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {record.value}
                  </p>
                  {record.valueNote ? (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {record.valueNote}
                    </p>
                  ) : null}
                </td>
                <td className="border-b px-3 py-2.5">
                  <HolderStack>
                    {record.holders.map((holder, index) => (
                      <ContestCell
                        key={`${record.id}-contest-${holder.contestArchiveId ?? holder.contestName}-${index}`}
                        holder={holder}
                      />
                    ))}
                  </HolderStack>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
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
