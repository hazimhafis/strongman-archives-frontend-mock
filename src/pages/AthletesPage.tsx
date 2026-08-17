import { useMemo, useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Link } from "react-router-dom"

import { DirectoryHeroMark } from "@/components/DirectoryHeroMark"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  createDataTableHelper,
  DataTable,
  DataTablePageSize,
  DataTablePagination,
  useDataTable,
} from "@/components/ui/table"
import { athletes, directoryStats } from "@/data/athletes"
import type { Athlete } from "@/data/types"
import { dash } from "@/lib/archive"
import { cn } from "@/lib/utils"

type Tab = "all" | "men" | "women" | "champions"

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Athletes" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "champions", label: "World Champions" },
]

const helper = createDataTableHelper<Athlete>()

const columns = helper.columns([
  helper.accessor("firstName", {
    header: "First Name",
    enableGlobalFilter: true,
    cell: ({ row }) => (
      <Link
        to={`/athletes/${row.original.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {row.original.firstName}
      </Link>
    ),
  }),
  helper.accessor("lastName", {
    header: "Last Name",
    enableGlobalFilter: true,
    cell: ({ row }) => (
      <Link
        to={`/athletes/${row.original.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {row.original.lastName}
      </Link>
    ),
  }),
  helper.accessor("country", {
    header: "Country",
    enableGlobalFilter: false,
    filterFn: "equalsString",
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <img
          src={row.original.flagUrl}
          alt=""
          className="h-[13px] w-5 rounded-[1px] object-cover"
        />
        {row.original.countryCode}
      </span>
    ),
  }),
  helper.accessor("activeYears", {
    header: "Active Years",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ getValue }) => (
      <span className="text-sm text-muted-foreground">{getValue()}</span>
    ),
  }),
  helper.accessor((row) => parseHeight(row.height), {
    id: "height",
    header: "Height",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {dash(row.original.height)}
      </span>
    ),
  }),
  helper.accessor((row) => parseWeight(row.weight), {
    id: "weight",
    header: "Weight",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {dash(row.original.weight)}
      </span>
    ),
  }),
  helper.accessor((row) => row.intlContests ?? -1, {
    id: "intlContests",
    header: "Int'l Contests",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {dash(row.original.intlContests)}
      </span>
    ),
  }),
  helper.accessor((row) => row.intlWins ?? -1, {
    id: "intlWins",
    header: "Int'l Wins",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {dash(row.original.intlWins)}
      </span>
    ),
  }),
  helper.accessor((row) => row.worldApps ?? -1, {
    id: "worldApps",
    header: "World Appearances",
    enableGlobalFilter: false,
    sortDescFirst: true,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {dash(row.original.worldApps)}
      </span>
    ),
  }),
])

export function AthletesPage() {
  const [tab, setTab] = useState<Tab>("men")

  const countries = useMemo(
    () =>
      [...new Set(athletes.map((athlete) => athlete.country))].sort((a, b) =>
        a.localeCompare(b),
      ),
    [],
  )

  const tabbedAthletes = useMemo(
    () =>
      athletes.filter((athlete) => {
        if (tab === "all") return true
        if (tab === "men") return athlete.gender === "men"
        if (tab === "women") return athlete.gender === "women"
        return athlete.worldWins > 0
      }),
    [tab],
  )

  const table = useDataTable({
    columns,
    data: tabbedAthletes,
    getRowId: (athlete) => athlete.slug,
    enableSorting: true,
    getColumnCanGlobalFilter: (column) =>
      column.id === "firstName" || column.id === "lastName",
    globalFilterFn: (row, _columnId, filterValue) => {
      const needle = String(filterValue).trim().toLowerCase()
      if (!needle) return true
      const athlete = row.original
      return (
        athlete.firstName.toLowerCase().includes(needle) ||
        athlete.lastName.toLowerCase().includes(needle) ||
        athlete.name.toLowerCase().includes(needle)
      )
    },
    initialState: {
      sorting: [{ id: "lastName", desc: false }],
      pagination: { pageSize: 25 },
    },
  })

  const countryFilter =
    (table.getColumn("country")?.getFilterValue() as string | undefined) ??
    "all"

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
              onClick={() => setTab(item.id)}
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
              value={table.state.globalFilter ?? ""}
              onChange={(event) => table.setGlobalFilter(event.target.value)}
              placeholder="Search by name..."
              className="h-11 w-full rounded-lg border-0 bg-muted pr-4 pl-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <FilterSelect
              value={countryFilter}
              onChange={(value) =>
                table
                  .getColumn("country")
                  ?.setFilterValue(value === "all" ? undefined : value)
              }
              options={[
                { value: "all", label: "All Countries" },
                ...countries.map((item) => ({ value: item, label: item })),
              ]}
            />
            <DataTablePageSize table={table} />
          </div>
        </div>

        <div className="mt-4">
          <DataTable table={table} variant="plain" minWidth={920} />
        </div>

        <DataTablePagination table={table} />
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
