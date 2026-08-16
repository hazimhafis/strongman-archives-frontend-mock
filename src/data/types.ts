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
  athleteArchiveId: number
  athleteName: string
  points: number | null
}

export type CompetitionEvent = {
  name: string
  winnerArchiveId: number
  winnerName: string
  winningMark: string
}

export type Competition = {
  slug: string
  archiveId: number
  name: string
  location: string
  date: string
  year: number
  series: string
  division: string
  image: string
  imageThumb: string
  live?: boolean
  standings: CompetitionStanding[]
  events: CompetitionEvent[]
}

export type UpcomingContest = Competition

export type EventRecordCategory =
  | "deadlift"
  | "squat"
  | "overhead-press"
  | "distance-carry"
  | "throwing"
  | "flipping"
  | "stones"
  | "farmers-walk"
  | "yoke"

export type RecordHolder = {
  athleteArchiveId: number | null
  athleteName: string
  country: string
  countryCode: string
  contestArchiveId: number | null
  contestName: string
}

export type ArchiveRecord = {
  id: number
  name: string
  category?: EventRecordCategory
  value: string
  valueNote?: string
  holders: RecordHolder[]
}

export function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}
