import { Link, useParams } from "react-router-dom"

import { AthleteCarousel } from "@/components/AthleteCard"
import { Container } from "@/components/Container"
import { SectionHeading } from "@/components/SectionHeading"
import { getAthlete } from "@/data/athletes"
import { getArticle } from "@/data/news"
import type { Athlete } from "@/data/types"
import { formatDate } from "@/lib/format"

import { NotFoundPage } from "@/pages/NotFoundPage"

export function NewsDetailPage() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return <NotFoundPage />
  }

  const relatedAthletes = article.relatedAthleteSlugs
    .map((athleteSlug) => getAthlete(athleteSlug))
    .filter((athlete): athlete is Athlete => athlete !== undefined)

  return (
    <article>
      <section className="border-b py-16">
        <Container className="max-w-3xl">
          <p className="text-overline">{article.category}</p>
          <h1 className="mt-3 text-display">{article.title}</h1>
          <p className="mt-4 text-caption text-muted-foreground">
            {formatDate(article.date)} · {article.author}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          {article.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-body-lg text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <Link to="/news" className="text-sm font-medium text-primary hover:underline">
            Back to news
          </Link>
        </Container>
      </section>

      {relatedAthletes.length > 0 ? (
        <section className="bg-muted/50 py-16">
          <Container>
            <SectionHeading overline="Roster" title="Athletes in this file" />
            <AthleteCarousel athletes={relatedAthletes} />
          </Container>
        </section>
      ) : null}
    </article>
  )
}
