import { useMemo, useState } from "react"
import { ArrowUp, ChevronDown, Search } from "lucide-react"
import { Link } from "react-router-dom"

import { DirectoryHeroMark } from "@/components/DirectoryHeroMark"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { athletes, directoryStats } from "@/data/athletes"
import { dash } from "@/lib/archive"
import { cn } from "@/lib/utils"

type Tab = "all" | "men" | "women" | "champions"
type SortKey =
  | "lastName"
  | "firstName"
  | "country"
  | "activeYears"
  | "height"
  | "weight"
  | "intlContests"
  | "intlWins"
  | "worldApps"

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Athletes" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "champions", label: "World Champions" },
]

const pageSizes = [10, 25, 50, 100]

export function AthletesPage() {
  const [tab, setTab] = useState<Tab>("men")
  const [query, setQuery] = useState("")
  const [country, setCountry] = useState("all")
  const [pageSize, setPageSize] = useState(25)
  const [page, setPage] = useState(1)
  const [sortKey, setSortKey] = useState<SortKey>("lastName")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const countries = useMemo(
    () =>
      [...new Set(athletes.map((athlete) => athlete.country))].sort((a, b) =>
        a.localeCompare(b),
      ),
    [],
  )

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const rows = athletes.filter((athlete) => {
      const matchesTab =
        tab === "all" ||
        (tab === "men" && athlete.gender === "men") ||
        (tab === "women" && athlete.gender === "women") ||
        (tab === "champions" && athlete.worldWins > 0)
      const matchesCountry = country === "all" || athlete.country === country
      const matchesQuery =
        needle.length === 0 ||
        athlete.firstName.toLowerCase().includes(needle) ||
        athlete.lastName.toLowerCase().includes(needle) ||
        athlete.name.toLowerCase().includes(needle)
      return matchesTab && matchesCountry && matchesQuery
    })

    rows.sort((a, b) => {
      const direction = sortDir === "asc" ? 1 : -1
      if (sortKey === "height") {
        return (parseHeight(a.height) - parseHeight(b.height)) * direction
      }
      if (sortKey === "weight") {
        return (parseWeight(a.weight) - parseWeight(b.weight)) * direction
      }
      if (sortKey === "intlContests" || sortKey === "intlWins" || sortKey === "worldApps") {
        return ((a[sortKey] ?? -1) - (b[sortKey] ?? -1)) * direction
      }
      return a[sortKey].localeCompare(b[sortKey]) * direction
    })

    return rows
  }, [country, query, sortDir, sortKey, tab])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((dir) => (dir === "asc" ? "desc" : "asc"))
      return
    }
    setSortKey(key)
    setSortDir(key === "lastName" || key === "firstName" ? "asc" : "desc")
  }

  function updateTab(next: Tab) {
    setTab(next)
    setPage(1)
  }

  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-foreground px-6 py-8 text-background shadow-lg md:px-10 md:py-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_40%,oklch(1_0_0/0.08),transparent_42%)]" />
          <div className="relative flex items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-[28px] tracking-tight text-background md:text-[34px]">
                Strongman Athletes Directory
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-background/70">
                The most comprehensive strongman athlete database online. Search
                records, contest history, and world-title files across every
                era of the sport.
              </p>
            </div>
            <div className="hidden sm:block">
              <DirectoryHeroMark />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 border-b pb-6 md:gap-8">
          {[
            { value: directoryStats.athletes, label: "Athletes" },
            { value: directoryStats.countries, label: "Countries" },
            { value: directoryStats.active, label: "Active" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-[28px] font-bold tracking-tight md:text-[36px]">
                {stat.value}
              </p>
              <p className="mt-1 text-label text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-6 border-b">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => updateTab(item.id)}
              className={cn(
                "relative shrink-0 py-3 text-sm font-medium transition-colors",
                tab === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {tab === item.id ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
              ) : null}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPage(1)
              }}
              placeholder="Search by name..."
              className="h-11 w-full rounded-lg border-0 bg-muted pr-4 pl-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <FilterSelect
              value={country}
              onChange={(value) => {
                setCountry(value)
                setPage(1)
              }}
              options={[
                { value: "all", label: "All Countries" },
                ...countries.map((item) => ({ value: item, label: item })),
              ]}
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Show</span>
              <FilterSelect
                value={String(pageSize)}
                onChange={(value) => {
                  setPageSize(Number(value))
                  setPage(1)
                }}
                options={pageSizes.map((size) => ({
                  value: String(size),
                  label: String(size),
                }))}
              />
              <span>entries</span>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[920px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="bg-muted">
                <SortHead
                  label="First Name"
                  active={sortKey === "firstName"}
                  direction={sortDir}
                  onClick={() => toggleSort("firstName")}
                />
                <SortHead
                  label="Last Name"
                  active={sortKey === "lastName"}
                  direction={sortDir}
                  onClick={() => toggleSort("lastName")}
                />
                <SortHead
                  label="Country"
                  active={sortKey === "country"}
                  direction={sortDir}
                  onClick={() => toggleSort("country")}
                />
                <SortHead
                  label="Active Years"
                  active={sortKey === "activeYears"}
                  direction={sortDir}
                  onClick={() => toggleSort("activeYears")}
                />
                <SortHead
                  label="Height"
                  active={sortKey === "height"}
                  direction={sortDir}
                  onClick={() => toggleSort("height")}
                />
                <SortHead
                  label="Weight"
                  active={sortKey === "weight"}
                  direction={sortDir}
                  onClick={() => toggleSort("weight")}
                />
                <SortHead
                  label="Int'l Contests"
                  active={sortKey === "intlContests"}
                  direction={sortDir}
                  onClick={() => toggleSort("intlContests")}
                />
                <SortHead
                  label="Int'l Wins"
                  active={sortKey === "intlWins"}
                  direction={sortDir}
                  onClick={() => toggleSort("intlWins")}
                />
                <SortHead
                  label="World Appearances"
                  active={sortKey === "worldApps"}
                  direction={sortDir}
                  onClick={() => toggleSort("worldApps")}
                />
              </tr>
            </thead>
            <tbody>
              {paged.map((athlete) => (
                <tr key={athlete.slug}>
                  <td className="border-b px-3 py-3.5">
                    <Link
                      to={`/athletes/${athlete.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {athlete.firstName}
                    </Link>
                  </td>
                  <td className="border-b px-3 py-3.5">
                    <Link
                      to={`/athletes/${athlete.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {athlete.lastName}
                    </Link>
                  </td>
                  <td className="border-b px-3 py-3.5">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <img
                        src={athlete.flagUrl}
                        alt=""
                        className="h-[13px] w-5 rounded-[1px] object-cover"
                      />
                      {athlete.countryCode}
                    </span>
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {athlete.activeYears}
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {dash(athlete.height)}
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {dash(athlete.weight)}
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {dash(athlete.intlContests)}
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {dash(athlete.intlWins)}
                  </td>
                  <td className="border-b px-3 py-3.5 text-sm text-muted-foreground">
                    {dash(athlete.worldApps)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing {(currentPage - 1) * pageSize + (paged.length ? 1 : 0)} to{" "}
            {(currentPage - 1) * pageSize + paged.length} of {filtered.length}{" "}
            entries
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              className="rounded-md px-3 py-1.5 hover:bg-muted disabled:opacity-40"
            >
              Previous
            </button>
            <span className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">
              {currentPage}
            </span>
            <button
              type="button"
              disabled={currentPage === pageCount}
              onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
              className="rounded-md px-3 py-1.5 hover:bg-muted disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function parseHeight(value: string) {
  const match = value.match(/^(\d+)'(\d+)/)
  if (!match) return -1
  return Number(match[1]) * 12 + Number(match[2])
}

function parseWeight(value: string) {
  const match = value.match(/^(\d+)/)
  if (!match) return -1
  return Number(match[1])
}

function SortHead({
  label,
  active,
  direction,
  onClick,
}: {
  label: string
  active: boolean
  direction: "asc" | "desc"
  onClick: () => void
}) {
  return (
    <th className="px-3 py-3">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-1 text-label text-muted-foreground"
      >
        {label}
        <ArrowUp
          className={cn(
            "size-3 transition-transform",
            active ? "text-primary" : "opacity-0",
            direction === "desc" && "rotate-180",
          )}
        />
      </button>
    </th>
  )
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}) {
  const selected = options.find((option) => option.value === value)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="relative inline-flex h-11 items-center rounded-lg border-0 bg-muted pr-10 pl-4 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {selected?.label}
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
