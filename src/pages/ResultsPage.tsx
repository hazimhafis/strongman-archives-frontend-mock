import { Container } from "@/components/Container"
import { ResultCard } from "@/components/ResultCard"
import { SectionHeading } from "@/components/SectionHeading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { competitions, competitionYears } from "@/data/results"

export function ResultsPage() {
  const defaultYear = String(competitionYears[0] ?? 2026)

  return (
    <section className="py-16">
      <Container>
        <SectionHeading overline="Leaderboards" title="Results" />
        <Tabs defaultValue={defaultYear}>
          <TabsList
            variant="line"
            className="mb-8 h-auto w-full justify-start rounded-none bg-transparent p-0"
          >
            {competitionYears.map((year) => (
              <TabsTrigger
                key={year}
                value={String(year)}
                className="rounded-none px-3 py-2"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>
          {competitionYears.map((year) => (
            <TabsContent key={year} value={String(year)}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {competitions
                  .filter((meet) => meet.year === year)
                  .map((competition) => (
                    <ResultCard
                      key={competition.slug}
                      competition={competition}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  )
}
