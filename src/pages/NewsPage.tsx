import { Container } from "@/components/Container"
import { NewsCard } from "@/components/NewsCard"
import { SectionHeading } from "@/components/SectionHeading"
import { getLatestNews } from "@/data/news"

export function NewsPage() {
  const articles = getLatestNews(8)
  const [featured, ...rest] = articles

  return (
    <section className="py-16">
      <Container>
        <SectionHeading overline="Dispatch" title="What's happening?" />
        {featured ? (
          <div className="grid gap-8 lg:grid-cols-3">
            <NewsCard article={featured} featured className="lg:col-span-2" />
            <div className="flex flex-col gap-6">
              {rest.slice(0, 2).map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ) : null}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  )
}
