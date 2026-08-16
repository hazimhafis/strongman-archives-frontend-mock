import {
  unsplash,
  type Competition,
  type CompetitionStanding,
} from "@/data/types"

export const competitions: Competition[] = [
  {
    slug: "wsm-2026",
    name: "World's Strongest Man 2026",
    location: "Sacramento, USA",
    date: "2026-05-16",
    year: 2026,
    series: "World's Strongest Man",
    image: unsplash("photo-1461896836934-ffe607ba6851"),
    standings: [
      { place: 1, athleteSlug: "tom-stoltman", points: 51.5 },
      { place: 2, athleteSlug: "mitchell-hooper", points: 50 },
      { place: 3, athleteSlug: "rayno-nel", points: 47.5 },
      { place: 4, athleteSlug: "evan-singleton", points: 41 },
      { place: 5, athleteSlug: "mateusz-kieliszkowski", points: 38.5 },
      { place: 6, athleteSlug: "oleksii-novikov", points: 34 },
    ],
    events: [
      { name: "Loading Race", winnerSlug: "rayno-nel", winningMark: "32.18s" },
      { name: "Deadlift", winnerSlug: "mitchell-hooper", winningMark: "8 reps @ 360 kg" },
      { name: "Log Ladder", winnerSlug: "oleksii-novikov", winningMark: "5 logs" },
      { name: "Kettlebell Press", winnerSlug: "mateusz-kieliszkowski", winningMark: "16 reps" },
      { name: "Atlas Stones", winnerSlug: "tom-stoltman", winningMark: "5 in 18.07s" },
    ],
  },
  {
    slug: "arnold-2026",
    name: "Arnold Strongman Classic 2026",
    location: "Columbus, USA",
    date: "2026-03-07",
    year: 2026,
    series: "Arnold",
    image: unsplash("photo-1517649763962-0c623066013b"),
    standings: [
      { place: 1, athleteSlug: "mitchell-hooper", points: 44 },
      { place: 2, athleteSlug: "hafthor-bjornsson", points: 41.5 },
      { place: 3, athleteSlug: "trey-mitchell", points: 36 },
      { place: 4, athleteSlug: "evan-singleton", points: 33.5 },
      { place: 5, athleteSlug: "tom-stoltman", points: 31 },
      { place: 6, athleteSlug: "martins-licis", points: 28 },
    ],
    events: [
      { name: "Elephant Bar Deadlift", winnerSlug: "hafthor-bjornsson", winningMark: "474 kg" },
      { name: "Austrian Oak Log", winnerSlug: "mitchell-hooper", winningMark: "213 kg" },
      { name: "Circus Dumbbell", winnerSlug: "martins-licis", winningMark: "8 reps" },
      { name: "Stone to Shoulder", winnerSlug: "trey-mitchell", winningMark: "5 reps" },
      { name: "Timber Carry", winnerSlug: "tom-stoltman", winningMark: "11.42s" },
    ],
  },
  {
    slug: "giants-live-london-2026",
    name: "Giants Live Strongman Classic 2026",
    location: "London, England",
    date: "2026-04-12",
    year: 2026,
    series: "Giants Live",
    image: unsplash("photo-1540497077202-7c8a3999166f"),
    standings: [
      { place: 1, athleteSlug: "luke-stoltman", points: 39 },
      { place: 2, athleteSlug: "evan-singleton", points: 37 },
      { place: 3, athleteSlug: "oleksii-novikov", points: 35.5 },
      { place: 4, athleteSlug: "mateusz-kieliszkowski", points: 34 },
      { place: 5, athleteSlug: "rayno-nel", points: 32 },
      { place: 6, athleteSlug: "eddie-hall", points: 18 },
    ],
    events: [
      { name: "Max Log", winnerSlug: "luke-stoltman", winningMark: "213 kg" },
      { name: "Deadlift Hold", winnerSlug: "evan-singleton", winningMark: "48.2s" },
      { name: "Frame Carry", winnerSlug: "rayno-nel", winningMark: "18.66s" },
      { name: "Atlas Stones", winnerSlug: "mateusz-kieliszkowski", winningMark: "5 in 20.11s" },
    ],
  },
  {
    slug: "wsm-2025",
    name: "World's Strongest Man 2025",
    location: "Sacramento, USA",
    date: "2025-05-18",
    year: 2025,
    series: "World's Strongest Man",
    image: unsplash("photo-1571902943202-507ec2618e8f"),
    standings: [
      { place: 1, athleteSlug: "rayno-nel", points: 53 },
      { place: 2, athleteSlug: "tom-stoltman", points: 50.5 },
      { place: 3, athleteSlug: "mitchell-hooper", points: 48 },
      { place: 4, athleteSlug: "evan-singleton", points: 40 },
      { place: 5, athleteSlug: "oleksii-novikov", points: 36.5 },
      { place: 6, athleteSlug: "luke-stoltman", points: 31 },
    ],
    events: [
      { name: "Kettlebell Toss", winnerSlug: "rayno-nel", winningMark: "8 implements" },
      { name: "Deadlift", winnerSlug: "mitchell-hooper", winningMark: "9 reps @ 350 kg" },
      { name: "Viking Press", winnerSlug: "evan-singleton", winningMark: "14 reps" },
      { name: "Atlas Stones", winnerSlug: "tom-stoltman", winningMark: "5 in 17.88s" },
    ],
  },
  {
    slug: "shaw-classic-2025",
    name: "Shaw Classic 2025",
    location: "Loveland, USA",
    date: "2025-08-17",
    year: 2025,
    series: "Shaw Classic",
    image: unsplash("photo-1558611848-73f7eb4001a1"),
    standings: [
      { place: 1, athleteSlug: "trey-mitchell", points: 62 },
      { place: 2, athleteSlug: "evan-singleton", points: 58 },
      { place: 3, athleteSlug: "martins-licis", points: 54 },
      { place: 4, athleteSlug: "mitchell-hooper", points: 51 },
      { place: 5, athleteSlug: "brian-shaw", points: 22 },
    ],
    events: [
      { name: "Deadlift", winnerSlug: "trey-mitchell", winningMark: "454 kg" },
      { name: "Log Press", winnerSlug: "evan-singleton", winningMark: "204 kg" },
      { name: "Power Stairs", winnerSlug: "martins-licis", winningMark: "34.90s" },
      { name: "Atlas Stones", winnerSlug: "mitchell-hooper", winningMark: "5 in 22.40s" },
    ],
  },
  {
    slug: "esm-2025",
    name: "Europe's Strongest Man 2025",
    location: "Leeds, England",
    date: "2025-04-05",
    year: 2025,
    series: "Giants Live",
    image: unsplash("photo-1517963879433-6ad2b556f593"),
    standings: [
      { place: 1, athleteSlug: "tom-stoltman", points: 42 },
      { place: 2, athleteSlug: "luke-stoltman", points: 39.5 },
      { place: 3, athleteSlug: "oleksii-novikov", points: 37 },
      { place: 4, athleteSlug: "mateusz-kieliszkowski", points: 35 },
      { place: 5, athleteSlug: "eddie-hall", points: 21 },
    ],
    events: [
      { name: "Max Deadlift", winnerSlug: "tom-stoltman", winningMark: "400 kg" },
      { name: "Max Log", winnerSlug: "luke-stoltman", winningMark: "202 kg" },
      { name: "Car Walk", winnerSlug: "oleksii-novikov", winningMark: "16.04s" },
      { name: "Atlas Stones", winnerSlug: "tom-stoltman", winningMark: "5 in 19.55s" },
    ],
  },
]

export function getCompetition(slug: string) {
  return competitions.find((competition) => competition.slug === slug)
}

export function getAthleteResults(athleteSlug: string) {
  return competitions
    .map((competition) => {
      const standing = competition.standings.find(
        (entry) => entry.athleteSlug === athleteSlug,
      )
      if (!standing) return null
      return { competition, standing }
    })
    .filter(
      (entry): entry is { competition: Competition; standing: CompetitionStanding } =>
        entry !== null,
    )
    .sort((a, b) => (a.competition.date < b.competition.date ? 1 : -1))
}

export const competitionYears = [...new Set(competitions.map((meet) => meet.year))].sort(
  (a, b) => b - a,
)
