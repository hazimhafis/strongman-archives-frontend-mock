import { Link } from "react-router-dom"

import { AthleteHoverAccordion } from "@/components/AthleteHoverAccordion"
import { Container } from "@/components/Container"
import { FeaturedResultCard, ResultCard } from "@/components/ResultCard"
import { SectionHeading } from "@/components/SectionHeading"
import { UpcomingContestCard } from "@/components/UpcomingContestCard"
import { Button } from "@/components/ui/button"
import { getAthlete } from "@/data/athletes"
import { getLatestCompetitions, upcomingContests } from "@/data/results"
import type { Athlete } from "@/data/types"

const popularAthleteSlugs = [
  "tom-stoltman",
  "mitchell-hooper",
  "hafthor-bjornsson",
  "rayno-nel",
  "eddie-hall",
]

const popularAthletes = popularAthleteSlugs
  .map((slug) => getAthlete(slug))
  .filter((athlete): athlete is Athlete => athlete != null)

export function HomePage() {
  const [latestMeet, ...recentMeets] = getLatestCompetitions(3)

  return (
    <div>
      <section className="py-16">
        <Container>
          <SectionHeading
            overline="Leaderboards"
            title="Latest contest results"
            action={
              <Button variant="outline" asChild>
                <Link to="/results">All Results</Link>
              </Button>
            }
          />
          {latestMeet ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              <FeaturedResultCard
                competition={latestMeet}
                className="md:col-span-2 lg:row-span-2"
              />
              {recentMeets.map((competition) => (
                <ResultCard
                  key={competition.slug}
                  competition={competition}
                  className="h-full min-h-[200px]"
                />
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-muted/50 py-16">
        <Container>
          <SectionHeading overline="Calendar" title="Upcoming contests" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {upcomingContests.map((contest) => (
              <UpcomingContestCard key={contest.slug} contest={contest} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            overline="Roster"
            title="Popular athletes"
            action={
              <Button variant="outline" asChild>
                <Link to="/athletes">Full Roster</Link>
              </Button>
            }
          />
          <AthleteHoverAccordion athletes={popularAthletes} />
        </Container>
      </section>
    </div>
  )
}
