import { Link } from "react-router-dom"

import type { NewsArticle } from "@/data/types"
import { formatDate } from "@/lib/format"

export function NewsTable({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-background ring-1 ring-foreground/8">
      <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
        <thead>
          <tr className="bg-muted">
            <th className="px-3 py-3 text-label text-muted-foreground first:rounded-tl-xl">
              Date
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Category
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground">
              Title
            </th>
            <th className="px-3 py-3 text-label text-muted-foreground last:rounded-tr-xl">
              Author
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.slug} className="hover:bg-muted/60">
              <td className="border-b px-3 py-2.5 text-sm whitespace-nowrap text-muted-foreground">
                {formatDate(article.date)}
              </td>
              <td className="border-b px-3 py-2.5 text-sm text-muted-foreground">
                {article.category}
              </td>
              <td className="border-b px-3 py-2.5">
                <Link
                  to={`/news/${article.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {article.title}
                </Link>
              </td>
              <td className="border-b px-3 py-2.5 text-sm text-muted-foreground">
                {article.author}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
