export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`))
}

export function formatPlace(place: number) {
  const suffixes = ["th", "st", "nd", "rd"]
  const value = place % 100
  const suffix =
    value >= 11 && value <= 13 ? "th" : (suffixes[place % 10] ?? "th")
  return `${place}${suffix}`
}
