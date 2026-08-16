import { unsplash, type NewsArticle } from "@/data/types"

export const news: NewsArticle[] = [
  {
    slug: "wsm-2026-final-recap",
    title: "World's Strongest Man 2026: stones decide it again",
    excerpt:
      "A four-man leaderboard collapsed on the final five stones in Sacramento. The archive has every split, every miss, every roar.",
    body: [
      "Sacramento's Golden 1 Center held a full house for the WSM 2026 final, and the points were a mess going into the atlas stones. Four athletes sat inside a single point. That is the kind of evening this archive was built to keep.",
      "Tom Stoltman loaded the 200 kg stone first, as the building had expected. Mitchell Hooper stayed in striking distance until the fourth implement. Rayno Nel, defending, never left the top three. The crimson line on the scoreboard — the one that separates first from everyone else — moved three times in ninety seconds.",
      "What the cameras catch is the theatre. What the archive keeps is the sequence: splits, attempts, and the quiet fact that the stones still write the last paragraph of World's Strongest Man.",
    ],
    category: "World's Strongest Man",
    date: "2026-05-18",
    image: unsplash("photo-1571902943202-507ec2618e8f"),
    author: "Archive Desk",
    relatedAthleteSlugs: ["tom-stoltman", "mitchell-hooper", "rayno-nel"],
  },
  {
    slug: "hooper-training-camp",
    title: "Inside Hooper's high-altitude camp before Arnold",
    excerpt:
      "Three weeks in Canmore, a log cycle that looks illegal on video, and a deadlift block built around recovery rather than bravado.",
    body: [
      "Mitchell Hooper's camp footage leaked the way strongman footage always leaks: a grainy story from a training partner, then a clean clip of a 200 kg log locked out like a rehearsal.",
      "The Canmore block is not secret. Hooper has talked about altitude, sleep, and the decision to treat the Arnold as a max-strength meet rather than a medley circus. The archive is more interested in the programming notes — the drop in volume, the extra rest days, the way the yoke walks got slower on purpose.",
      "If the Arnold log is going to move in Columbus, it will be because of this block, not the highlight reel.",
    ],
    category: "Training",
    date: "2026-02-21",
    image: unsplash("photo-1517963879433-6ad2b556f593"),
    author: "Lena Voss",
    relatedAthleteSlugs: ["mitchell-hooper"],
  },
  {
    slug: "atlas-stones-record-watch",
    title: "The stones record is in play — and the field knows it",
    excerpt:
      "Five stones under 16 seconds used to be a rumour. In 2026 it is a weekly conversation on the Giants Live warm-up floor.",
    body: [
      "Atlas stones are the sport's last honest event. No one hides a miss. The clock does not care about reputation. That is why a sub-16 run is still treated like folklore.",
      "Tom Stoltman's 16.22 remains the mark the rest of the field trains toward. Kieliszkowski has gone faster in unsanctioned practice. Nel loaded clean in Sacramento with a cadence that made veterans look up from their chalk.",
      "The archive does not crown gym records. When it happens under lights, with a calibrated set and a full crowd, it goes in ink.",
    ],
    category: "Records",
    date: "2026-04-02",
    image: unsplash("photo-1540497077202-7c8a3999166f"),
    author: "Archive Desk",
    relatedAthleteSlugs: ["tom-stoltman", "mateusz-kieliszkowski", "rayno-nel"],
  },
  {
    slug: "giants-live-london-announcement",
    title: "Giants Live returns to the O2 with a stacked qualifier",
    excerpt:
      "London gets a WSM qualifier again. The card mixes champions, debutants, and a log ladder that should empty the building.",
    body: [
      "Giants Live confirmed the O2 date in a terse release: one night, ten athletes, a qualifier slot for World's Strongest Man, and a log ladder designed to be loud.",
      "Luke Stoltman is on the card. So is Evan Singleton. The interesting names are lower — the ones the archive has been tracking through regional shows, waiting for a night this big.",
      "Tickets went in minutes. The sport still fills arenas when the implements look like they could break the floor.",
    ],
    category: "Giants Live",
    date: "2026-01-14",
    image: unsplash("photo-1517649763962-0c623066013b"),
    author: "Priya Nair",
    relatedAthleteSlugs: ["luke-stoltman", "evan-singleton"],
  },
  {
    slug: "arnold-classic-2026-preview",
    title: "Arnold Strongman Classic 2026: the heavy show still matters",
    excerpt:
      "Columbus remains the season's strength test. No running. No gimmicks. Just iron, a circus dumbbell, and a room that knows the difference.",
    body: [
      "The Arnold is the meet athletes still point to when they want to talk about strength rather than spectacle. The implements are historic. The scoring is unforgiving. A bad deadlift cannot be hidden by a fast medley.",
      "Hooper arrives as the man to beat. Björnsson's name on the start list changed the temperature in the press room. Shaw is promoting, not lifting, and the building will still chant when he walks out.",
      "Preview notes are not predictions. They are a map of who has the static strength to survive Columbus in March.",
    ],
    category: "Arnold",
    date: "2026-02-28",
    image: unsplash("photo-1593079831268-3381b0db4a77"),
    author: "Archive Desk",
    relatedAthleteSlugs: ["mitchell-hooper", "hafthor-bjornsson", "brian-shaw"],
  },
  {
    slug: "newcomer-watch-2026",
    title: "Newcomer watch: the names the finals keep inviting back",
    excerpt:
      "A South African champion, a Polish log cycle, and an American press lockout — the next wave is already on the leaderboard.",
    body: [
      "Strongman used to hide its future in amateur heats. The livestream era ended that. If you can load a 180 kg stone on a Saturday in Pretoria, someone in the archive has already filed the clip.",
      "Nel's WSM win compressed the usual five-year apprenticeship into one brutal season. Singleton's press is a problem for anyone sharing a max-log lane. Kieliszkowski, when healthy, still looks like the fastest man in the sport.",
      "This is not a prospect list. It is a reminder that the podium is already mixing generations.",
    ],
    category: "Features",
    date: "2026-03-11",
    image: unsplash("photo-1434608519348-5195a0c1895d"),
    author: "Lena Voss",
    relatedAthleteSlugs: ["rayno-nel", "evan-singleton", "mateusz-kieliszkowski"],
  },
  {
    slug: "shaw-classic-format-note",
    title: "Shaw Classic keeps the two-day grind — and the prize money",
    excerpt:
      "Brian Shaw's invitational remains the American season's other final. The format is simple: survive Saturday, win Sunday.",
    body: [
      "The Shaw Classic is not trying to be World's Strongest Man. It is trying to be the meet where the field is invited because they can actually do the events, and the purse is large enough to rearrange a calendar.",
      "Trey Mitchell has owned this floor. Singleton wants it. The deadlift bar is still the story of day one, and the stones still close the show.",
      "For the archive, the value is consistency: same building, same two-day shape, a clean data set in a sport that loves to reinvent itself.",
    ],
    category: "Shaw Classic",
    date: "2025-08-20",
    image: unsplash("photo-1558611848-73f7eb4001a1"),
    author: "Priya Nair",
    relatedAthleteSlugs: ["brian-shaw", "trey-mitchell", "evan-singleton"],
  },
  {
    slug: "deadlift-bar-history",
    title: "A brief history of the deadlift bar, told in kilograms",
    excerpt:
      "From Hall's 500 to Björnsson's 501, the archive's deadlift file is the sport's most argued page — and its most visited.",
    body: [
      "Every era thinks it has the real deadlift record. The archive's job is to keep the conditions next to the number: bar type, straps, suit, the referee's name, the slow-motion of the lockout.",
      "Eddie Hall's 500 kg in 2016 is a cultural fact. Hafþór's 501 kg is a calibrated fact with a different set of arguments underneath it. Both belong here, with the footnotes attached.",
      "The next number will arrive with a press release and a comment war. We will file both.",
    ],
    category: "Records",
    date: "2025-11-02",
    image: unsplash("photo-1574680096145-d05b474e2155", 1600),
    author: "Archive Desk",
    relatedAthleteSlugs: ["eddie-hall", "hafthor-bjornsson"],
  },
]

export function getArticle(slug: string) {
  return news.find((article) => article.slug === slug)
}

export function getNews() {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getLatestNews(limit = 6) {
  return getNews().slice(0, limit)
}
