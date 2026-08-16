import { Link } from "react-router-dom"

import { AthleteCarousel } from "@/components/AthleteCard"
import { Container } from "@/components/Container"
import { NewsCard } from "@/components/NewsCard"
import { ResultCard } from "@/components/ResultCard"
import { SectionHeading } from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import { athletes } from "@/data/athletes"
import { getLatestNews } from "@/data/news"
import { competitions } from "@/data/results"

const heroImage = "https://generationiron.com/wp-content/uploads/2026/04/2026-Worlds-Strongest-Man-Top-10.jpg"
const latestNews = getLatestNews(4)
const [featuredNews, ...moreNews] = latestNews
const featuredAthletes = athletes.slice(0, 8)
const recentMeets = competitions.slice(0, 3)

export function HomePage() {
  return (
    <div>
      <section className="relative min-h-[68vh] overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <Container className="relative flex min-h-[68vh] flex-col justify-end py-16">
          <p className="text-overline text-white/80">Strongman Archives</p>
          <h1 className="mt-4 max-w-3xl text-display text-white md:text-6xl md:leading-[1.05]">
            The strongest men. The complete record.
          </h1>
          <p className="mt-5 max-w-xl text-body-lg text-white/75">
		  	The most comprehensive strongman athlete database online. Search records, contest history, and world-title files across every era of the sport.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/athletes">Explore Athletes</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link to="/results">View Results</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 border-t pt-10 md:grid-cols-3">
            {[
              { value: "47", label: "Years of WSM" },
              { value: "12", label: "Featured athletes" },
              { value: "6", label: "Championship files" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-heading-lg text-foreground">{stat.value}</p>
                <p className="mt-2 text-label text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            overline="Roster"
            title="Athletes"
            action={
              <Button variant="outline" asChild>
                <Link to="/athletes">Full Roster</Link>
              </Button>
            }
          />
          <AthleteCarousel athletes={featuredAthletes} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            overline="Leaderboards"
            title="Recent results"
            action={
              <Button variant="outline" asChild>
                <Link to="/results">All Results</Link>
              </Button>
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {recentMeets.map((competition) => (
              <ResultCard key={competition.slug} competition={competition} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
