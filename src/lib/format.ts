export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`))
}

export function formatMonthDay(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`)
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" })
      .format(date)
      .toUpperCase(),
    day: String(date.getDate()),
    year: String(date.getFullYear()),
  }
}

export function formatCountdown(isoDate: string) {
  const target = new Date(`${isoDate}T00:00:00`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const days = Math.round((target.getTime() - today.getTime()) / 86_400_000)

  if (days === 0) return "Today"
  if (days === 1) return "Tomorrow"
  if (days > 1) return `In ${days} days`
  return formatDate(isoDate)
}

export function formatPlace(place: number) {
  const suffixes = ["th", "st", "nd", "rd"]
  const value = place % 100
  const suffix =
    value >= 11 && value <= 13 ? "th" : (suffixes[place % 10] ?? "th")
  return `${place}${suffix}`
}
