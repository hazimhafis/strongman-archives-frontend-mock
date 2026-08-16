import { Link } from "react-router-dom"

import { getContestCompetitor } from "@/data/contests"
import type { Competition } from "@/data/types"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

export function ContestTable({
  contests,
  showChampion = false,
}: {
  contests: Competition[]
  showChampion?: boolean
}) {
  return (
    <div className="overflow-x-auto rounded-xl bg-background ring-1 ring-foreground/8">
      <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
        <thead>
          <tr className="bg-muted">
            <th className="w-16 px-3 py-3 first:rounded-tl-xl" />
            <th className="px-3 py-3 text-label text-muted-foreground">Date</th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Contest
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Division
            </th>
            <th
              className={
                showChampion
                  ? "px-3 py-3 text-label text-muted-foreground"
                  : "px-3 py-3 text-label text-muted-foreground last:rounded-tr-xl"
              }
            >
              Location
            </th>
            {showChampion ? (
              <th className="px-3 py-3 text-label text-muted-foreground last:rounded-tr-xl">
                Champion
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {contests.map((contest) => {
            const championStanding = contest.standings[0]
            const champion = championStanding
              ? getContestCompetitor(
                  championStanding.athleteArchiveId,
                  championStanding.athleteName,
                )
              : null

            return (
              <tr key={contest.slug} className="hover:bg-muted/60">
                <td className="border-b px-3 py-2.5">
                  <img
                    src={contest.imageThumb}
                    alt=""
                    className={cn(
                      "h-10 w-[60px] rounded-sm object-cover ring-1 ring-foreground/8",
                    )}
                  />
                </td>
                <td className="border-b px-3 py-2.5 text-sm whitespace-nowrap text-muted-foreground">
                  {formatDate(contest.date)}
                </td>
                <td className="border-b px-3 py-2.5">
                  <Link
                    to={`/results/${contest.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {contest.name}
                  </Link>
                </td>
                <td className="border-b px-3 py-2.5 text-sm text-muted-foreground">
                  {contest.division}
                </td>
                <td className="border-b px-3 py-2.5 text-sm text-muted-foreground">
                  {contest.location}
                </td>
                {showChampion ? (
                  <td className="border-b px-3 py-2.5 text-sm">
                    {champion?.slug ? (
                      <Link
                        to={`/athletes/${champion.slug}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {champion.name}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">
                        {champion?.name ?? "—"}
                      </span>
                    )}
                  </td>
                ) : null}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
