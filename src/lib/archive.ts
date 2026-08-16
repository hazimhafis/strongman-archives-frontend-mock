export const ARCHIVE_ORIGIN = "https://strongmanarchives.com"

export function flagUrl(countryName: string) {
  return `${ARCHIVE_ORIGIN}/Images/Flags/${encodeURIComponent(countryName)}.png`
}

export function athletePhoto(archiveId: number, thumbnail = false) {
  return `${ARCHIVE_ORIGIN}/Images/Athletes/${archiveId}${thumbnail ? "_tn" : ""}.jpg`
}

export function contestPhoto(imageKey: string, thumbnail = false) {
  if (imageKey.startsWith("flag:")) {
    return flagUrl(imageKey.slice(5))
  }
  return `${ARCHIVE_ORIGIN}/Images/Contests/${imageKey}${thumbnail ? "_tn" : ""}.jpg`
}

export function dash(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") {
    return "—"
  }
  return String(value)
}
