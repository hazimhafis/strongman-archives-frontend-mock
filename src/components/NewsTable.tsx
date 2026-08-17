import { Link } from "react-router-dom"

import {
  createDataTableHelper,
  DataTable,
  useDataTable,
} from "@/components/ui/table"
import type { NewsArticle } from "@/data/types"
import { formatDate } from "@/lib/format"

const helper = createDataTableHelper<NewsArticle>()

const columns = helper.columns([
  helper.accessor("date", {
    header: "Date",
    cell: ({ getValue }) => (
      <span className="text-sm whitespace-nowrap text-muted-foreground">
        {formatDate(getValue())}
      </span>
    ),
  }),
  helper.accessor("category", {
    header: "Category",
    cell: ({ getValue }) => (
      <span className="text-sm text-muted-foreground">{getValue()}</span>
    ),
  }),
  helper.accessor("title", {
    header: "Title",
    cell: ({ row }) => (
      <Link
        to={`/news/${row.original.slug}`}
        className="text-sm font-medium text-primary hover:underline"
      >
        {row.original.title}
      </Link>
    ),
  }),
  helper.accessor("author", {
    header: "Author",
    cell: ({ getValue }) => (
      <span className="text-sm text-muted-foreground">{getValue()}</span>
    ),
  }),
])

export function NewsTable({ articles }: { articles: NewsArticle[] }) {
  const table = useDataTable({
    columns,
    data: articles,
    getRowId: (article) => article.slug,
  })

  return <DataTable table={table} variant="archive" minWidth={640} />
}
