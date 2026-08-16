export type AthleteDivision = "men" | "women"

export type Athlete = {
  slug: string
  archiveId?: number
  firstName: string
  lastName: string
  name: string
  country: string
  countryCode: string
  flagUrl: string
  titles: string[]
  height: string
  weight: string
  born: string
  image: string
  bio: string
  personalBests: { event: string; mark: string }[]
  gender: AthleteDivision
  activeYears: string
  intlContests: number | null
  intlWins: number | null
  worldApps: number | null
  worldWins: number
}

export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  body: string[]
  category: string
  date: string
  image: string
  author: string
  relatedAthleteSlugs: string[]
}

export type CompetitionStanding = {
  place: number
  athleteSlug: string
  points: number
}

export type CompetitionEvent = {
  name: string
  winnerSlug: string
  winningMark: string
}

export type Competition = {
  slug: string
  name: string
  location: string
  date: string
  year: number
  series: string
  image: string
  standings: CompetitionStanding[]
  events: CompetitionEvent[]
}

export type UpcomingContest = Omit<Competition, "standings" | "events">

export function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}
