import { Container } from "@/components/Container"
import { NewsTable } from "@/components/NewsTable"
import { SectionHeading } from "@/components/SectionHeading"
import { getNews } from "@/data/news"

export function NewsPage() {
  const articles = getNews()

  return (
    <section className="py-16">
      <Container>
        <SectionHeading overline="Dispatch" title="What's happening?" />
        <NewsTable articles={articles} />
      </Container>
    </section>
  )
}
