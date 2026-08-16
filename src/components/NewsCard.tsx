import { Link } from "react-router-dom"

import type { NewsArticle } from "@/data/types"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

export function NewsCard({
  article,
  featured = false,
  className,
}: {
  article: NewsArticle
  featured?: boolean
  className?: string
}) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-card shadow-xs ring-1 ring-foreground/8",
        featured ? "gap-4" : "gap-3",
        className,
      )}
    >
      <div
        className={cn(
          "overflow-hidden bg-muted",
          featured ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <img
          src={article.image}
          alt=""
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className={cn(featured ? "px-5 pb-5" : "px-4 pb-4")}>
        <p className="text-overline">{article.category}</p>
        <h3
          className={cn(
            "mt-2 group-hover:text-primary",
            featured ? "text-heading-sm" : "text-base font-heading font-semibold",
          )}
        >
          {article.title}
        </h3>
        <p
          className={cn(
            "mt-2 text-muted-foreground",
            featured ? "text-body-lg" : "text-sm",
          )}
        >
          {article.excerpt}
        </p>
        <p className="mt-3 text-caption">
          {formatDate(article.date)} · {article.author}
        </p>
      </div>
    </Link>
  )
}
