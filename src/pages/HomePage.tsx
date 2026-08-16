import { Link } from "react-router-dom"

import { AthleteHoverAccordion } from "@/components/AthleteHoverAccordion"
import { Container } from "@/components/Container"
import { ContestTable } from "@/components/ContestTable"
import { SectionHeading } from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getLatestCompetitions,
  getPopularAthletes,
  getUpcomingContests,
} from "@/data/contests"

export function HomePage() {
  const latestContests = getLatestCompetitions(10)
  const upcomingContests = getUpcomingContests(10)
  const popularAthletes = getPopularAthletes(5)

  return (
    <div>
      <section className="py-16">
        <Container>
          <SectionHeading
            overline="Contests"
            title="Results & calendar"
            action={
              <Button variant="outline" asChild>
                <Link to="/results">All Results</Link>
              </Button>
            }
          />
          <Tabs defaultValue="latest">
            <TabsList variant="pill" className="mb-8">
              <TabsTrigger value="latest">Latest results</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming contests</TabsTrigger>
            </TabsList>
            <TabsContent value="latest">
              <ContestTable contests={latestContests} showChampion />
            </TabsContent>
            <TabsContent value="upcoming">
              <ContestTable contests={upcomingContests} />
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      <section className="bg-muted/50 py-16">
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
