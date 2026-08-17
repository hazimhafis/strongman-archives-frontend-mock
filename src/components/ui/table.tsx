"use client"

import * as React from "react"
import { ArrowUp, ChevronDown } from "lucide-react"
import {
  columnFilteringFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFns,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSortingFeature,
  sortFns,
  tableFeatures,
  useTable,
  type ColumnDef,
  type Header,
  type PaginationState,
  type ReactTable,
  type RowData,
  type TableOptions,
  type TableState,
} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const EMPTY_DATA: never[] = []
const DEFAULT_PAGE_SIZES = [10, 25, 50, 100]

export const dataTableFeatures = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  filterFns,
  sortFns,
  columnMeta: {} as {
    headerClassName?: string
    cellClassName?: string
  },
})

export type DataTableFeatures = typeof dataTableFeatures
export type DataTableColumnDef<TData extends RowData, TValue = unknown> =
  ColumnDef<DataTableFeatures, TData, TValue>
export type DataTableInstance<TData extends RowData> = ReactTable<
  DataTableFeatures,
  TData
>

export function createDataTableHelper<TData extends RowData>() {
  return createColumnHelper<DataTableFeatures, TData>()
}

type UseDataTableOptions<TData extends RowData> = Omit<
  TableOptions<DataTableFeatures, TData>,
  "features" | "initialState"
> & {
  initialState?: Omit<Partial<TableState<DataTableFeatures>>, "pagination"> & {
    pagination?: Partial<PaginationState>
  }
}

export function useDataTable<TData extends RowData>(
  options: UseDataTableOptions<TData>,
) {
  const data = options.data.length === 0 ? (EMPTY_DATA as TData[]) : options.data

  return useTable({
    enableMultiSort: false,
    enableSorting: false,
    enableSortingRemoval: false,
    ...options,
    data,
    features: dataTableFeatures,
    initialState: {
      ...options.initialState,
      pagination: {
        pageIndex: 0,
        pageSize: Number.POSITIVE_INFINITY,
        ...options.initialState?.pagination,
      },
    },
  })
}

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

type DataTableVariant = "default" | "archive" | "plain"

function DataTable<TData extends RowData>({
  table,
  variant = "default",
  emptyMessage = "No results.",
  className,
  tableClassName,
  minWidth,
}: {
  table: DataTableInstance<TData>
  variant?: DataTableVariant
  emptyMessage?: string
  className?: string
  tableClassName?: string
  minWidth?: string | number
}) {
  const rows = table.getRowModel().rows
  const columnCount = table.getAllLeafColumns().length
  const isDefault = variant === "default"

  const tableElement = (
    <table
      data-slot="table"
      className={cn(
        "w-full caption-bottom text-left text-sm",
        !isDefault && "border-separate border-spacing-0",
        tableClassName,
      )}
      style={minWidth != null ? { minWidth } : undefined}
    >
      <TableHeader className={cn(!isDefault && "[&_tr]:border-0")}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className={cn(
              !isDefault && "border-0 bg-muted hover:bg-muted",
            )}
          >
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn(
                  variant === "archive" &&
                    "h-auto px-3 py-3 text-label font-medium text-muted-foreground first:rounded-tl-xl last:rounded-tr-xl",
                  variant === "plain" && "h-auto px-3 py-3",
                  header.column.columnDef.meta?.headerClassName,
                )}
              >
                {header.isPlaceholder ? null : (
                  <DataTableHeaderContent table={table} header={header} />
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows.length === 0 ? (
          <TableRow className={cn(!isDefault && "hover:bg-transparent")}>
            <TableCell
              colSpan={columnCount}
              className={cn(
                "text-center text-sm text-muted-foreground",
                variant === "archive" && "px-3 py-8",
                variant === "plain" && "px-3 py-8",
              )}
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          rows.map((row) => (
            <TableRow
              key={row.id}
              className={cn(
                !isDefault && "border-0",
                variant === "archive" && "hover:bg-muted/60",
              )}
            >
              {row.getAllCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={cn(
                    variant === "archive" && "border-b px-3 py-2.5",
                    variant === "plain" && "border-b px-3 py-3.5",
                    cell.column.columnDef.meta?.cellClassName,
                  )}
                >
                  <table.FlexRender cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </table>
  )

  if (isDefault) {
    return (
      <div
        data-slot="table-container"
        className={cn("relative w-full overflow-x-auto", className)}
      >
        {tableElement}
      </div>
    )
  }

  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative w-full overflow-x-auto",
        variant === "archive" &&
          "rounded-xl bg-background ring-1 ring-foreground/8",
        className,
      )}
    >
      {tableElement}
    </div>
  )
}

function DataTableHeaderContent<TData extends RowData>({
  table,
  header,
}: {
  table: DataTableInstance<TData>
  header: Header<DataTableFeatures, TData, unknown>
}) {
  const canSort = header.column.getCanSort()
  const sorted = header.column.getIsSorted()
  const label = <table.FlexRender header={header} />

  if (!canSort) {
    return label
  }

  return (
    <button
      type="button"
      onClick={header.column.getToggleSortingHandler()}
      className="inline-flex items-center gap-1 text-label text-muted-foreground"
    >
      {label}
      <ArrowUp
        className={cn(
          "size-3 transition-transform",
          sorted ? "text-primary" : "opacity-0",
          sorted === "desc" && "rotate-180",
        )}
      />
    </button>
  )
}

function DataTablePagination<TData extends RowData>({
  table,
  className,
}: {
  table: DataTableInstance<TData>
  className?: string
}) {
  const pageIndex = table.state.pagination.pageIndex
  const pageSize = table.state.pagination.pageSize
  const pageRows = table.getRowModel().rows.length
  const total = table.getRowCount()
  const from = total === 0 ? 0 : pageIndex * pageSize + 1
  const to = pageIndex * pageSize + pageRows

  return (
    <div
      className={cn(
        "mt-4 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <p>
        Showing {from} to {to} of {total} entries
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="rounded-md px-3 py-1.5 hover:bg-muted disabled:opacity-40"
        >
          Previous
        </button>
        <span className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">
          {pageIndex + 1}
        </span>
        <button
          type="button"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="rounded-md px-3 py-1.5 hover:bg-muted disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}

function DataTablePageSize<TData extends RowData>({
  table,
  options = DEFAULT_PAGE_SIZES,
  triggerClassName,
}: {
  table: DataTableInstance<TData>
  options?: readonly number[]
  triggerClassName?: string
}) {
  const pageSize = table.state.pagination.pageSize

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>Show</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "relative inline-flex h-11 items-center rounded-lg border-0 bg-muted pr-10 pl-4 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              triggerClassName,
            )}
          >
            {pageSize}
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuRadioGroup
            value={String(pageSize)}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            {options.map((size) => (
              <DropdownMenuRadioItem key={size} value={String(size)}>
                {size}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span>entries</span>
    </div>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  DataTable,
  DataTablePagination,
  DataTablePageSize,
}
