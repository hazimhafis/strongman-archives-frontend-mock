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
      <section className="relative min-h-[460px] overflow-hidden">
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />
        <Container className="relative flex min-h-[460px] flex-col justify-end py-12">
          <p className="text-overline text-white/80">{article.category}</p>
          <h1 className="mt-3 max-w-4xl text-display text-white">
            {article.title}
          </h1>
          <p className="mt-4 text-caption text-white/70">
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
