import { Container } from "@/components/Container"
import { ContestTable } from "@/components/ContestTable"
import { SectionHeading } from "@/components/SectionHeading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  competitionYears,
  getCompletedContests,
  getUpcomingContests,
} from "@/data/contests"

export function ResultsPage() {
  const completed = getCompletedContests()
  const upcoming = getUpcomingContests()
  const defaultTab = String(competitionYears[0] ?? "upcoming")

  return (
    <section className="py-16">
      <Container>
        <SectionHeading overline="Leaderboards" title="Results" />
        <Tabs defaultValue={defaultTab}>
          <TabsList variant="pill" className="mb-8 flex-wrap justify-start">
            {upcoming.length > 0 ? (
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            ) : null}
            {competitionYears.map((year) => (
              <TabsTrigger key={year} value={String(year)}>
                {year}
              </TabsTrigger>
            ))}
          </TabsList>
          {upcoming.length > 0 ? (
            <TabsContent value="upcoming">
              <ContestTable contests={upcoming} />
            </TabsContent>
          ) : null}
          {competitionYears.map((year) => (
            <TabsContent key={year} value={String(year)}>
              <ContestTable
                contests={completed.filter((meet) => meet.year === year)}
                showChampion
              />
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  )
}
