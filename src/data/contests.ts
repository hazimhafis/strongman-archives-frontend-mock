import { athletePhoto, contestPhoto } from "@/lib/archive"
import {
  athletes,
  getAthlete,
  getAthleteByArchiveId,
} from "@/data/athletes"
import type { Athlete, Competition } from "@/data/types"

type ContestRow = {
  archiveId: number
  name: string
  location: string
  date: string
  series: string
  division: string
  imageKey: string
  live?: boolean
  standings?: Competition["standings"]
  events?: Competition["events"]
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll("æ", "ae")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "")
}

function row(entry: ContestRow): Omit<Competition, "slug"> {
  return {
    archiveId: entry.archiveId,
    name: entry.name,
    location: entry.location,
    date: entry.date,
    year: Number(entry.date.slice(0, 4)),
    series: entry.series,
    division: entry.division,
    image: contestPhoto(entry.imageKey),
    imageThumb: contestPhoto(entry.imageKey, true),
    live: entry.live,
    standings: entry.standings ?? [],
    events: entry.events ?? [],
  }
}

const catalog: ContestRow[] = [
  {
    archiveId: 2350,
    name: "2026 SCL Poland",
    location: "Niechorze, Poland",
    date: "2026-08-15",
    series: "Strongman Champions League",
    division: "Men's Open",
    imageKey: "SCL",
    live: true,
    standings: [
      { place: 1, athleteArchiveId: 1087, athleteName: "Pavlo Kordiyaka", points: 53 },
      { place: 2, athleteArchiveId: 1245, athleteName: "Oskar Ziółkowski", points: 48 },
      { place: 3, athleteArchiveId: 1614, athleteName: "Péter Juhász", points: 45 },
      { place: 4, athleteArchiveId: 1600, athleteName: "Adam Roszkowski", points: 43.5 },
      { place: 5, athleteArchiveId: 3643, athleteName: "Austin Hamm", points: 32 },
      { place: 6, athleteArchiveId: 1607, athleteName: "Kevin Hazeleger", points: 32 },
      { place: 7, athleteArchiveId: 2835, athleteName: "Jan Lacina", points: 30.5 },
      { place: 8, athleteArchiveId: 227, athleteName: "Grzegorz Szymański", points: 26 },
      { place: 9, athleteArchiveId: 2347, athleteName: "Kane Francis", points: 25 },
      { place: 10, athleteArchiveId: 2735, athleteName: "Philipp Zorn", points: 20 },
      { place: 11, athleteArchiveId: 1248, athleteName: "Jakub Szczechowski", points: 16.5 },
      { place: 12, athleteArchiveId: 831, athleteName: "Albin Hasanović", points: 12.5 },
  ],
    events: [
      { name: "Log Lift", winnerArchiveId: 1087, winnerName: "Pavlo Kordiyaka", winningMark: "7 reps" },
      { name: "Power Stairs", winnerArchiveId: 227, winnerName: "Grzegorz Szymański", winningMark: "15 in 31.03 s" },
      { name: "Boat Pull", winnerArchiveId: 1614, winnerName: "Péter Juhász", winningMark: "34.62 s" },
      { name: "Frame Carry", winnerArchiveId: 1087, winnerName: "Pavlo Kordiyaka", winningMark: "18.10 s" },
      { name: "Atlas Stones", winnerArchiveId: 1245, winnerName: "Oskar Ziółkowski", winningMark: "6 in 25.97 s" },
  ],
  },
  {
    archiveId: 2833,
    name: "2026 STP European Championship",
    location: "Suwałki, Poland",
    date: "2026-08-09",
    series: "Strongman Team Poland",
    division: "Men's Open",
    imageKey: "strongman_team_poland",
    standings: [
      { place: 1, athleteArchiveId: 4824, athleteName: "Szymon Wójtowicz", points: 0 },
      { place: 2, athleteArchiveId: 2324, athleteName: "Bartłomiej Tarapata", points: 0 },
      { place: 3, athleteArchiveId: 1664, athleteName: "Robert Marian Topîrceanu", points: 0 },
      { place: 4, athleteArchiveId: 680, athleteName: "Oleh Pylypiak", points: 0 },
      { place: 5, athleteArchiveId: 4825, athleteName: "Emil Kostrzewski", points: 0 },
      { place: 6, athleteArchiveId: 1638, athleteName: "Pierre Motal", points: 0 },
  ],
    events: [],
  },
  {
    archiveId: 2832,
    name: "2026 Harlem European Strongman Cup",
    location: "Zakopane, Poland",
    date: "2026-08-09",
    series: "Harlem",
    division: "Men's Open",
    imageKey: "harlem",
    standings: [
      { place: 1, athleteArchiveId: 683, athleteName: "Audrius Jokūbaitis", points: 21 },
      { place: 2, athleteArchiveId: 488, athleteName: "Didzis Zariņš", points: 15 },
      { place: 3, athleteArchiveId: 2835, athleteName: "Jan Lacina", points: 10 },
      { place: 4, athleteArchiveId: 4921, athleteName: "Giorgi Rogava", points: 5 },
  ],
    events: [
      { name: "Arm Over Arm Pull", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "12.45 s" },
      { name: "Log Lift", winnerArchiveId: 488, winnerName: "Didzis Zariņš", winningMark: "8 reps" },
      { name: "Car Deadlift", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "2 reps" },
      { name: "Squat Lift", winnerArchiveId: 488, winnerName: "Didzis Zariņš", winningMark: "15 reps" },
      { name: "Hercules Hold", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "48.13 s" },
      { name: "Medley", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "23.60 s" },
  ],
  },
  {
    archiveId: 2830,
    name: "2026 German Pro League Final",
    location: "Frontenhausen, Germany",
    date: "2026-08-08",
    series: "German Pro League",
    division: "Men's Open",
    imageKey: "german_pro_league",
    standings: [
      { place: 1, athleteArchiveId: 1615, athleteName: "Patrick Eibel", points: 10 },
      { place: 2, athleteArchiveId: 2735, athleteName: "Philipp Zorn", points: 25 },
      { place: 3, athleteArchiveId: 2356, athleteName: "Volker Bauer", points: 29 },
      { place: 4, athleteArchiveId: 831, athleteName: "Albin Hasanović", points: 30 },
      { place: 5, athleteArchiveId: 2354, athleteName: "Benjamin Blass", points: 30 },
      { place: 6, athleteArchiveId: 3353, athleteName: "Amon Grunert", points: 30 },
      { place: 7, athleteArchiveId: 4307, athleteName: "Timo Bautz", points: 35 },
      { place: 8, athleteArchiveId: 2744, athleteName: "Constantin Hochfeld", points: 35 },
      { place: 9, athleteArchiveId: 4305, athleteName: "Marko Bittel", points: 40 },
  ],
    events: [
      { name: "Viking Press", winnerArchiveId: 2744, winnerName: "Constantin Hochfeld", winningMark: "0 reps" },
      { name: "Max Car Deadlift", winnerArchiveId: 4307, winnerName: "Timo Bautz", winningMark: "360 kg" },
      { name: "Truck Pull", winnerArchiveId: 2354, winnerName: "Benjamin Blass", winningMark: "5.35 m" },
      { name: "Dumbbell Press", winnerArchiveId: 2735, winnerName: "Philipp Zorn", winningMark: "0 reps" },
      { name: "Super Yoke", winnerArchiveId: 2356, winnerName: "Volker Bauer", winningMark: "28.90 s" },
      { name: "Arm Over Arm Pull", winnerArchiveId: 831, winnerName: "Albin Hasanović", winningMark: "11.4 m" },
  ],
  },
  {
    archiveId: 2829,
    name: "2026 Germany's Strongest Man",
    location: "Germany",
    date: "2026-08-08",
    series: "Germany's Strongest Man",
    division: "Men's Open",
    imageKey: "flag:Germany",
    standings: [
      { place: 1, athleteArchiveId: 1615, athleteName: "Patrick Eibel", points: 80 },
      { place: 2, athleteArchiveId: 2735, athleteName: "Philipp Zorn", points: 76 },
      { place: 3, athleteArchiveId: 2356, athleteName: "Volker Bauer", points: 73 },
      { place: 4, athleteArchiveId: 3353, athleteName: "Amon Grunert", points: 63 },
      { place: 5, athleteArchiveId: 4307, athleteName: "Timo Bautz", points: 62 },
      { place: 6, athleteArchiveId: 2744, athleteName: "Constantin Hochfeld", points: 61 },
      { place: 7, athleteArchiveId: 2354, athleteName: "Benjamin Blass", points: 61 },
      { place: 8, athleteArchiveId: 4305, athleteName: "Marko Bittel", points: 51 },
      { place: 9, athleteArchiveId: 831, athleteName: "Albin Hasanović", points: 48 },
      { place: 10, athleteArchiveId: 2740, athleteName: "Dennis Schäfer", points: 33 },
      { place: 11, athleteArchiveId: 3354, athleteName: "Yannik Wilde", points: 29 },
      { place: 12, athleteArchiveId: 2737, athleteName: "Julian Mattersteig", points: 28 },
      { place: 13, athleteArchiveId: 2355, athleteName: "Matthias Winnerl", points: 23 },
      { place: 14, athleteArchiveId: 2541, athleteName: "Nico Freudenberg", points: 13 },
      { place: 15, athleteArchiveId: 1618, athleteName: "Michael Reichelt", points: 13 },
      { place: 16, athleteArchiveId: 3540, athleteName: "Peter Olbrich", points: 12 },
      { place: 17, athleteArchiveId: 3206, athleteName: "Jonas Nedvídek", points: 12 },
      { place: 18, athleteArchiveId: 2736, athleteName: "Leonard Zimmermann", points: 8 },
  ],
    events: [],
  },
  {
    archiveId: 2828,
    name: "2026 PSL Water Giants",
    location: "Balatonlelle, Hungary",
    date: "2026-08-08",
    series: "Premium Strongman League",
    division: "Men's Open",
    imageKey: "premium_sl",
    standings: [
      { place: 1, athleteArchiveId: 2835, athleteName: "Jan Lacina", points: 40 },
      { place: 2, athleteArchiveId: 4313, athleteName: "Kevin Horváth", points: 28 },
      { place: 3, athleteArchiveId: 430, athleteName: "Jack Osborn", points: 23.5 },
      { place: 4, athleteArchiveId: 4314, athleteName: "Gergő Tatár", points: 23 },
      { place: 5, athleteArchiveId: 2964, athleteName: "Jaroslav Mockovčiak", points: 21 },
      { place: 6, athleteArchiveId: 876, athleteName: "Lukáš Svoboda", points: 17 },
      { place: 7, athleteArchiveId: 3659, athleteName: "Vlăduț Angheloiu", points: 16 },
      { place: 8, athleteArchiveId: 2802, athleteName: "Mário Karička", points: 7.5 },
  ],
    events: [
      { name: "Dumbbell Press", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "8 in 57.40 s" },
      { name: "Weight Throw", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "5 in 12.75 s" },
      { name: "Atlas Stone to Shoulder", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "6 in 47.11 s" },
      { name: "Keg Carry", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "27.55 m" },
      { name: "Car Deadlift", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "19 reps" },
  ],
  },
  {
    archiveId: 2819,
    name: "2026 Western Canada's Strongest Woman",
    location: "Lemberg, Canada",
    date: "2026-08-08",
    series: "Western Canada's Strongest Woman",
    division: "Women's Open",
    imageKey: "flag:Canada",
    standings: [
      { place: 1, athleteArchiveId: 1552, athleteName: "Jackie Osczevski", points: 63 },
      { place: 2, athleteArchiveId: 1522, athleteName: "Bailey Deschene", points: 60.5 },
      { place: 3, athleteArchiveId: 4896, athleteName: "Anatasia Pfund", points: 55 },
      { place: 4, athleteArchiveId: 4391, athleteName: "Amanda Wozny", points: 39.5 },
      { place: 5, athleteArchiveId: 4894, athleteName: "Amanda Tafelmeyer", points: 37 },
      { place: 6, athleteArchiveId: 1742, athleteName: "Stephanie Bisignano", points: 36 },
      { place: 7, athleteArchiveId: 4392, athleteName: "Courtney Johnston", points: 26.5 },
      { place: 8, athleteArchiveId: 4895, athleteName: "Eryn Penner", points: 26 },
      { place: 9, athleteArchiveId: 4396, athleteName: "Tracey Ball", points: 24 },
      { place: 9, athleteArchiveId: 4893, athleteName: "Michelle Morette", points: 24 },
      { place: 11, athleteArchiveId: 2938, athleteName: "Jocelyn Grimolfson", points: 23.5 },
      { place: 12, athleteArchiveId: 4892, athleteName: "Astra Richards", points: 16 },
      { place: 13, athleteArchiveId: 4400, athleteName: "Mariah Kehler", points: 9 },
  ],
    events: [
      { name: "Truck Pull", winnerArchiveId: 1552, winnerName: "Jackie Osczevski", winningMark: "19.93 s" },
      { name: "Axle Press", winnerArchiveId: 1552, winnerName: "Jackie Osczevski", winningMark: "93 kg (5 reps)" },
      { name: "Loading Race", winnerArchiveId: 1552, winnerName: "Jackie Osczevski", winningMark: "6 in 52.49 s" },
      { name: "Keg Toss", winnerArchiveId: 1522, winnerName: "Bailey Deschene", winningMark: "6 in 21.46 s" },
      { name: "Flip & Drag", winnerArchiveId: 1552, winnerName: "Jackie Osczevski", winningMark: "37.81 s" },
  ],
  },
  {
    archiveId: 2816,
    name: "2026 Iceland's Strongest Man",
    location: "Iceland",
    date: "2026-08-08",
    series: "Iceland's Strongest Man",
    division: "Men's Open",
    imageKey: "flag:Iceland",
    standings: [
      { place: 1, athleteArchiveId: 1163, athleteName: "Kristján Jón Haraldsson", points: 88 },
      { place: 2, athleteArchiveId: 176, athleteName: "Hafthór Júlíus Björnsson", points: 86 },
      { place: 3, athleteArchiveId: 1596, athleteName: "Vilius Jokužys", points: 85.5 },
      { place: 4, athleteArchiveId: 2327, athleteName: "Hilmar Örn Jónsson", points: 74.5 },
      { place: 5, athleteArchiveId: 2754, athleteName: "Kári Kristófer Elíasson", points: 65 },
      { place: 6, athleteArchiveId: 2328, athleteName: "Pálmi Gudfinnsson", points: 64 },
      { place: 7, athleteArchiveId: 2965, athleteName: "Jan Krasinský", points: 55 },
      { place: 8, athleteArchiveId: 3039, athleteName: "Thorlákur Gunnarsson", points: 50 },
      { place: 9, athleteArchiveId: 4916, athleteName: "Rolf Olav Pettersen", points: 38.5 },
      { place: 10, athleteArchiveId: 2614, athleteName: "Ísleifur Orri Arngrímsson", points: 26.5 },
      { place: 11, athleteArchiveId: 2756, athleteName: "Gudmundur Helgason", points: 25 },
      { place: 12, athleteArchiveId: 4826, athleteName: "Dagur Fannar Magnússon", points: 22.5 },
      { place: 13, athleteArchiveId: 4827, athleteName: "Karl Óskar  Hólmgeirsson", points: 8.5 },
      { place: 14, athleteArchiveId: 4886, athleteName: "Willian Brito Piovezan", points: 0 },
  ],
    events: [
      { name: "Húsafell Stone", winnerArchiveId: 2965, winnerName: "Jan Krasinský", winningMark: "68.25 m" },
      { name: "Max Deadlift", winnerArchiveId: 176, winnerName: "Hafthór Júlíus Björnsson", winningMark: "420 kg" },
      { name: "Dumbbell Medley", winnerArchiveId: 1596, winnerName: "Vilius Jokužys", winningMark: "4 in 26.28 s" },
      { name: "Loading Race", winnerArchiveId: 1596, winnerName: "Vilius Jokužys", winningMark: "3 in 18.79 s" },
      { name: "Weight Throw", winnerArchiveId: 176, winnerName: "Hafthór Júlíus Björnsson", winningMark: "Weight 6.00 m" },
      { name: "Arm Over Arm Pull", winnerArchiveId: 1163, winnerName: "Kristján Jón Haraldsson", winningMark: "28.68 s" },
      { name: "Frame Carry", winnerArchiveId: 1596, winnerName: "Vilius Jokužys", winningMark: "9.40 s" },
      { name: "Manhood Stones", winnerArchiveId: 176, winnerName: "Hafthór Júlíus Björnsson", winningMark: "8 reps, 200 kg" },
  ],
  },
  {
    archiveId: 2812,
    name: "2026 European Strongman Cup",
    location: "Choroszcz, Poland",
    date: "2026-08-02",
    series: "Polska Federacja Sportów Siłowych",
    division: "Men's Open",
    imageKey: "polska",
    standings: [
      { place: 1, athleteArchiveId: 2835, athleteName: "Jan Lacina", points: 28 },
      { place: 2, athleteArchiveId: 417, athleteName: "Robert Cyrwus", points: 26 },
      { place: 3, athleteArchiveId: 2401, athleteName: "Tomas Šliupas", points: 24 },
      { place: 4, athleteArchiveId: 4581, athleteName: "Łukasz Kracik", points: 19.5 },
      { place: 5, athleteArchiveId: 1664, athleteName: "Robert Marian Topîrceanu", points: 19 },
      { place: 6, athleteArchiveId: 3078, athleteName: "Adam Wadolowski", points: 8.5 },
  ],
    events: [
      { name: "Medley", winnerArchiveId: 417, winnerName: "Robert Cyrwus", winningMark: "25.29 s" },
      { name: "Log Ladder", winnerArchiveId: 1664, winnerName: "Robert Marian Topîrceanu", winningMark: "4 in 28.27 s" },
      { name: "Car Deadlift", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "18 reps" },
      { name: "Conan's Wheel", winnerArchiveId: 2835, winnerName: "Jan Lacina", winningMark: "670 °" },
      { name: "Hercules Hold", winnerArchiveId: 4581, winnerName: "Łukasz Kracik", winningMark: "54.11 s" },
      { name: "Atlas Stones", winnerArchiveId: 417, winnerName: "Robert Cyrwus", winningMark: "5 in 22.56 s" },
  ],
  },
  {
    archiveId: 2811,
    name: "2026 Harlem European Strongman Cup",
    location: "Nowe Miasto Lubawskie, Poland",
    date: "2026-08-02",
    series: "Harlem",
    division: "Men's Open",
    imageKey: "harlem",
    standings: [
      { place: 1, athleteArchiveId: 683, athleteName: "Audrius Jokūbaitis", points: 36 },
      { place: 2, athleteArchiveId: 2880, athleteName: "Donatas Maskolaitis", points: 25 },
      { place: 3, athleteArchiveId: 2771, athleteName: "Raivis Gintauts", points: 23.5 },
      { place: 4, athleteArchiveId: 3582, athleteName: "Bartosz Postój", points: 17 },
      { place: 5, athleteArchiveId: 876, athleteName: "Lukáš Svoboda", points: 16.5 },
      { place: 6, athleteArchiveId: 1255, athleteName: "Tomasz Bator", points: 3 },
  ],
    events: [
      { name: "Sandbag Toss", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "7 in 14.58 s" },
      { name: "Wheelbarrow Carry", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "9.38 s" },
      { name: "Axle Press", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "7 reps" },
      { name: "Loading Race", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "19.50 s" },
      { name: "Power Stairs", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "10 in 18.26 s" },
      { name: "Stone Over Bar", winnerArchiveId: 683, winnerName: "Audrius Jokūbaitis", winningMark: "9 reps" },
  ],
  },
  {
    archiveId: 2077,
    name: "2026 Giants Live Strongman Classic",
    location: "London, England",
    date: "2026-07-04",
    series: "Giants Live",
    division: "Men's Open",
    imageKey: "GiantsLive",
    standings: [
      { place: 1, athleteArchiveId: 2561, athleteName: "Ondřej Fojtů", points: 50.5 },
      { place: 2, athleteArchiveId: 2562, athleteName: "Paddy Haynes", points: 44.5 },
      { place: 3, athleteArchiveId: 2643, athleteName: "Rayno Nel", points: 44.5 },
      { place: 4, athleteArchiveId: 1087, athleteName: "Pavlo Kordiyaka", points: 40 },
      { place: 5, athleteArchiveId: 174, athleteName: "Martins Licis", points: 37.5 },
      { place: 6, athleteArchiveId: 1430, athleteName: "Andrew Flynn", points: 30.5 },
      { place: 7, athleteArchiveId: 2453, athleteName: "Josh Patacca", points: 27 },
      { place: 8, athleteArchiveId: 410, athleteName: "Mathew Ragg", points: 25.5 },
      { place: 9, athleteArchiveId: 2250, athleteName: "Nick Guardione", points: 25 },
      { place: 10, athleteArchiveId: 180, athleteName: "Adam Bishop", points: 20.5 },
      { place: 11, athleteArchiveId: 189, athleteName: "Evan Singleton", points: 18 },
      { place: 12, athleteArchiveId: 2269, athleteName: "Mitchell Hooper", points: 17.5 },
  ],
    events: [
      { name: "Overhead Medley", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "5 in 41.87 s" },
      { name: "Webster Stones", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "43.4 m" },
      { name: "Deadlift", winnerArchiveId: 2562, winnerName: "Paddy Haynes", winningMark: "9 reps" },
      { name: "Conan's Wheel", winnerArchiveId: 2562, winnerName: "Paddy Haynes", winningMark: "1106 °" },
      { name: "Atlas Stones", winnerArchiveId: 2562, winnerName: "Paddy Haynes", winningMark: "5 in 22.21 s" },
  ],
  },
  {
    archiveId: 2361,
    name: "2026 World's Strongest Man",
    location: "Myrtle Beach, South Carolina",
    date: "2026-04-26",
    series: "World's Strongest Man",
    division: "Men's Open",
    imageKey: "WSM",
    standings: [
      { place: 1, athleteArchiveId: 2269, athleteName: "Mitchell Hooper", points: 54 },
      { place: 2, athleteArchiveId: 2643, athleteName: "Rayno Nel", points: 52 },
      { place: 3, athleteArchiveId: 179, athleteName: "Trey Mitchell", points: 36 },
      { place: 4, athleteArchiveId: 1087, athleteName: "Pavlo Kordiyaka", points: 31.5 },
      { place: 5, athleteArchiveId: 2561, athleteName: "Ondřej Fojtů", points: 31.5 },
      { place: 6, athleteArchiveId: 174, athleteName: "Martins Licis", points: 30.5 },
      { place: 7, athleteArchiveId: 410, athleteName: "Mathew Ragg", points: 29 },
      { place: 8, athleteArchiveId: 50, athleteName: "Eddie Williams", points: 26 },
      { place: 9, athleteArchiveId: 2250, athleteName: "Nick Guardione", points: 21 },
      { place: 10, athleteArchiveId: 2249, athleteName: "Austin Andrade", points: 12.5 },
  ],
    events: [
      { name: "Flip & Carry", winnerArchiveId: 2643, winnerName: "Rayno Nel", winningMark: "27.30 s" },
      { name: "Deadlift", winnerArchiveId: 2643, winnerName: "Rayno Nel", winningMark: "400 kg (5 reps)" },
      { name: "Titan's Toss", winnerArchiveId: 2643, winnerName: "Rayno Nel", winningMark: "9 in 39.23 s" },
      { name: "Max Log Lift", winnerArchiveId: 179, winnerName: "Trey Mitchell", winningMark: "213 kg" },
      { name: "Atlas Stones", winnerArchiveId: 179, winnerName: "Trey Mitchell", winningMark: "5 in 42.10 s" },
  ],
  },
  {
    archiveId: 2076,
    name: "2026 Europe's Strongest Man",
    location: "Leeds, England",
    date: "2026-04-11",
    series: "Europe's Strongest Man",
    division: "Men's Open",
    imageKey: "Europes",
    standings: [
      { place: 1, athleteArchiveId: 2561, athleteName: "Ondřej Fojtů", points: 54.5 },
      { place: 2, athleteArchiveId: 1087, athleteName: "Pavlo Kordiyaka", points: 47.5 },
      { place: 3, athleteArchiveId: 180, athleteName: "Adam Bishop", points: 42.5 },
      { place: 4, athleteArchiveId: 2562, athleteName: "Paddy Haynes", points: 41.5 },
      { place: 5, athleteArchiveId: 2593, athleteName: "Matyáš Funiok", points: 38 },
      { place: 6, athleteArchiveId: 2638, athleteName: "Ben Glasscock", points: 34 },
      { place: 7, athleteArchiveId: 183, athleteName: "Luke Richardson", points: 32 },
      { place: 8, athleteArchiveId: 1615, athleteName: "Patrick Eibel", points: 27.5 },
      { place: 9, athleteArchiveId: 1607, athleteName: "Kevin Hazeleger", points: 27 },
      { place: 10, athleteArchiveId: 192, athleteName: "Gavin Bilton", points: 21.5 },
      { place: 11, athleteArchiveId: 1597, athleteName: "Dawid Pakulski", points: 16.5 },
      { place: 12, athleteArchiveId: 2640, athleteName: "Conor Curran", points: 7.5 },
  ],
    events: [
      { name: "Webster Stones", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "51.75 m" },
      { name: "Log Lift", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "9 reps" },
      { name: "Deadlift", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "8 reps" },
      { name: "Medley", winnerArchiveId: 2561, winnerName: "Ondřej Fojtů", winningMark: "25.84 s" },
      { name: "Atlas Stones", winnerArchiveId: 2562, winnerName: "Paddy Haynes", winningMark: "5 in 18.30 s" },
  ],
  },
  {
    archiveId: 2073,
    name: "2026 Arnold Strongman Classic",
    location: "Columbus, Ohio",
    date: "2026-03-07",
    series: "Arnold",
    division: "Men's Open",
    imageKey: "Arnold",
    standings: [
      { place: 1, athleteArchiveId: 2269, athleteName: "Mitchell Hooper", points: 36 },
      { place: 2, athleteArchiveId: 2249, athleteName: "Austin Andrade", points: 35 },
      { place: 3, athleteArchiveId: 174, athleteName: "Martins Licis", points: 34 },
      { place: 4, athleteArchiveId: 179, athleteName: "Trey Mitchell", points: 31.5 },
      { place: 5, athleteArchiveId: 2251, athleteName: "Lucas Hatton", points: 31 },
      { place: 6, athleteArchiveId: 2375, athleteName: "Bryce Johnson", points: 27.5 },
      { place: 7, athleteArchiveId: 1641, athleteName: "Thomas Evans", points: 27 },
      { place: 7, athleteArchiveId: 2250, athleteName: "Nick Guardione", points: 27 },
      { place: 9, athleteArchiveId: 2715, athleteName: "Andrew Burton", points: 14 },
  ],
    events: [
      { name: "Max Deadlift", winnerArchiveId: 2269, winnerName: "Mitchell Hooper", winningMark: "445 kg" },
      { name: "Dumbbell Press", winnerArchiveId: 2269, winnerName: "Mitchell Hooper", winningMark: "136 kg (1 rep)" },
      { name: "Stone to Shoulder", winnerArchiveId: 2249, winnerName: "Austin Andrade", winningMark: "3 reps" },
      { name: "Carry & Drag", winnerArchiveId: 174, winnerName: "Martins Licis", winningMark: "91.23 s" },
      { name: "Austrian Oak", winnerArchiveId: 179, winnerName: "Trey Mitchell", winningMark: "195 kg (5 reps)" },
      { name: "Loading Race", winnerArchiveId: 2250, winnerName: "Nick Guardione", winningMark: "3 in 38.79 s" },
  ],
  },
  {
    archiveId: 1618,
    name: "2025 Strongest Man on Earth",
    location: "Loveland, Colorado",
    date: "2025-08-17",
    series: "Shaw Classic",
    division: "Men's Open",
    imageKey: "Shaw",
    standings: [
      { place: 1, athleteArchiveId: 189, athleteName: "Evan Singleton", points: 93.5 },
      { place: 2, athleteArchiveId: 2251, athleteName: "Lucas Hatton", points: 92.5 },
      { place: 3, athleteArchiveId: 1641, athleteName: "Thomas Evans", points: 88 },
      { place: 4, athleteArchiveId: 2249, athleteName: "Austin Andrade", points: 83.5 },
      { place: 5, athleteArchiveId: 2375, athleteName: "Bryce Johnson", points: 82.5 },
      { place: 6, athleteArchiveId: 179, athleteName: "Trey Mitchell", points: 82.5 },
      { place: 7, athleteArchiveId: 1450, athleteName: "Tristain Hoath", points: 72.5 },
      { place: 8, athleteArchiveId: 177, athleteName: "Tom Stoltman", points: 72.5 },
      { place: 9, athleteArchiveId: 1051, athleteName: "Wesley Derwinsky", points: 64.5 },
      { place: 10, athleteArchiveId: 2561, athleteName: "Ondřej Fojtů", points: 63.5 },
      { place: 11, athleteArchiveId: 50, athleteName: "Eddie Williams", points: 62 },
      { place: 12, athleteArchiveId: 2250, athleteName: "Nick Guardione", points: 60.5 },
      { place: 13, athleteArchiveId: 2619, athleteName: "Josh Spurgeon", points: 58.5 },
      { place: 14, athleteArchiveId: 191, athleteName: "Maxime Boudreault", points: 58 },
      { place: 15, athleteArchiveId: 1676, athleteName: "Shane Flowers", points: 21 },
      { place: 16, athleteArchiveId: 194, athleteName: "Bobby Thompson", points: 14.5 },
  ],
    events: [
      { name: "Max Log Lift", winnerArchiveId: 2251, winnerName: "Lucas Hatton", winningMark: "223 kg" },
      { name: "Carry & Hoist", winnerArchiveId: 50, winnerName: "Eddie Williams", winningMark: "23.47 s" },
      { name: "Keg Toss", winnerArchiveId: 191, winnerName: "Maxime Boudreault", winningMark: "36 kg" },
      { name: "Manhood Stones", winnerArchiveId: 2375, winnerName: "Bryce Johnson", winningMark: "2 reps, 249 kg" },
      { name: "Trap Bar Deadlift", winnerArchiveId: 189, winnerName: "Evan Singleton", winningMark: "514 kg" },
      { name: "Super Yoke", winnerArchiveId: 1450, winnerName: "Tristain Hoath", winningMark: "11.85 s (643 kg)" },
      { name: "Chest Press", winnerArchiveId: 2251, winnerName: "Lucas Hatton", winningMark: "10 reps" },
      { name: "Medley", winnerArchiveId: 191, winnerName: "Maxime Boudreault", winningMark: "10 in 37.76 s" },
  ],
  },
  {
    archiveId: 1610,
    name: "2025 World's Strongest Man",
    location: "Sacramento, California",
    date: "2025-05-18",
    series: "World's Strongest Man",
    division: "Men's Open",
    imageKey: "WSM",
    standings: [
      { place: 1, athleteArchiveId: 2643, athleteName: "Rayno Nel", points: 47 },
      { place: 2, athleteArchiveId: 177, athleteName: "Tom Stoltman", points: 46.5 },
      { place: 3, athleteArchiveId: 2269, athleteName: "Mitchell Hooper", points: 43.5 },
      { place: 4, athleteArchiveId: 179, athleteName: "Trey Mitchell", points: 38.5 },
      { place: 5, athleteArchiveId: 2562, athleteName: "Paddy Haynes", points: 32 },
      { place: 6, athleteArchiveId: 2561, athleteName: "Ondřej Fojtů", points: 27 },
      { place: 7, athleteArchiveId: 1676, athleteName: "Shane Flowers", points: 25.5 },
      { place: 8, athleteArchiveId: 1087, athleteName: "Pavlo Kordiyaka", points: 25 },
      { place: 9, athleteArchiveId: 178, athleteName: "Luke Stoltman", points: 21.5 },
      { place: 10, athleteArchiveId: 50, athleteName: "Eddie Williams", points: 20.5 },
  ],
    events: [
      { name: "Carry & Hoist", winnerArchiveId: 2643, winnerName: "Rayno Nel", winningMark: "30.58 s" },
      { name: "18-inch Deadlift", winnerArchiveId: 179, winnerName: "Trey Mitchell", winningMark: "500 kg" },
      { name: "Hercules Hold", winnerArchiveId: 50, winnerName: "Eddie Williams", winningMark: "82.14 s" },
      { name: "Flintstone Barbell", winnerArchiveId: 177, winnerName: "Tom Stoltman", winningMark: "241 kg" },
      { name: "Atlas Stones", winnerArchiveId: 177, winnerName: "Tom Stoltman", winningMark: "5 in 31.76 s" },
  ],
  },
  {
    archiveId: 2351,
    name: "2026 SCL World's Strongest Viking",
    location: "Turenki, Finland",
    date: "2026-08-22",
    series: "Strongman Champions League",
    division: "Men's Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2352,
    name: "2026 SCL Hungary",
    location: "Hungary",
    date: "2026-08-29",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2835,
    name: "2026 Canada's Strongest Man",
    location: "Saint-Pamphile, Canada",
    date: "2026-08-30",
    series: "Canada's Strongest Man",
    division: "Men's Open",
    imageKey: "flag:Canada",
  },
  {
    archiveId: 2078,
    name: "2026 Giants Live Strongman Open",
    location: "Birmingham, England",
    date: "2026-09-05",
    series: "Giants Live",
    division: "Men's Open",
    imageKey: "GiantsLive",
  },
  {
    archiveId: 2512,
    name: "2026 World Deadlift Championships",
    location: "Birmingham, England",
    date: "2026-09-05",
    series: "World Deadlift Championships",
    division: "Men's Open",
    imageKey: "WDeadC",
  },
  {
    archiveId: 2353,
    name: "2026 SCL USA",
    location: "Sandusky, Ohio",
    date: "2026-09-06",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2836,
    name: "2026 The Unit Classic",
    location: "Essex, England",
    date: "2026-09-19",
    series: "The Unit Classic",
    division: "Men's Open",
    imageKey: "default",
  },
  {
    archiveId: 2755,
    name: "2026 Belgium's Strongest Man",
    location: "Herentals, Belgium",
    date: "2026-09-20",
    series: "Belgium's Strongest Man",
    division: "Men's Open",
    imageKey: "flag:Belgium",
  },
  {
    archiveId: 2348,
    name: "2026 SCL Kazakhstan",
    location: "Kazakhstan",
    date: "2026-09-26",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2459,
    name: "2026 Summit of Strength (Men)",
    location: "Rotherham, England",
    date: "2026-09-26",
    series: "Summit of Strength",
    division: "Men's Open",
    imageKey: "global_strongman",
  },
  {
    archiveId: 2460,
    name: "2026 Summit of Strength (Women)",
    location: "Rotherham, England",
    date: "2026-09-26",
    series: "Summit of Strength",
    division: "Women's Open",
    imageKey: "global_strongman",
  },
  {
    archiveId: 2354,
    name: "2026 SCL Portugal",
    location: "Maia, Portugal",
    date: "2026-10-04",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2355,
    name: "2026 SCL Florida",
    location: "Lake City, Florida",
    date: "2026-10-10",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2079,
    name: "2026 Giants Live World Tour Finals",
    location: "Glasgow, Scotland",
    date: "2026-10-17",
    series: "Giants Live",
    division: "Men's Open",
    imageKey: "GiantsLive",
  },
  {
    archiveId: 2513,
    name: "2026 World Log Lift Championships",
    location: "Glasgow, Scotland",
    date: "2026-10-17",
    series: "World Log Lift Championships",
    division: "Men's Open",
    imageKey: "WLogC",
  },
  {
    archiveId: 2336,
    name: "2026 Rogue Invitational (Men)",
    location: "Aberdeen, Scotland",
    date: "2026-10-24",
    series: "Rogue Invitational",
    division: "Men's Open",
    imageKey: "rogue",
  },
  {
    archiveId: 2337,
    name: "2026 Rogue Invitational (Women)",
    location: "Aberdeen, Scotland",
    date: "2026-10-24",
    series: "Rogue Invitational",
    division: "Women's Open",
    imageKey: "rogue",
  },
  {
    archiveId: 2356,
    name: "2026 SCL Turkey",
    location: "Turkey",
    date: "2026-10-31",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2450,
    name: "2026 Magnús Ver Magnússon Strongman Classic",
    location: "Iceland",
    date: "2026-11-08",
    series: "Magnús Ver Magnússon Strongman Classic",
    division: "Men's Open",
    imageKey: "mvm",
  },
  {
    archiveId: 2561,
    name: "2026 Strongman Mania",
    location: "Norrköping, Sweden",
    date: "2026-11-08",
    series: "Strongman Mania",
    division: "Men's Open",
    imageKey: "strongman_mania",
  },
  {
    archiveId: 2357,
    name: "2026 SCL World Finals",
    location: "South Africa",
    date: "2026-11-15",
    series: "Strongman Champions League",
    division: "Open",
    imageKey: "SCL",
  },
  {
    archiveId: 2477,
    name: "2026 Official Strongman Games",
    location: "Ocala, Florida",
    date: "2026-11-22",
    series: "Official Strongman Games",
    division: "Men's Open",
    imageKey: "officialsg",
  },
]

const usedSlugs = new Set<string>()

function uniqueSlug(name: string, archiveId: number) {
  const base = slugify(name)
  if (!usedSlugs.has(base)) {
    usedSlugs.add(base)
    return base
  }
  const fallback = `${base}-${archiveId}`
  usedSlugs.add(fallback)
  return fallback
}

export const contests: Competition[] = catalog.map((entry) => ({
  ...row(entry),
  slug: uniqueSlug(entry.name, entry.archiveId),
}))

function todayIso(now = new Date()) {
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function isCompletedContest(contest: Competition) {
  return contest.standings.length > 0
}

export function isLiveContest(contest: Competition) {
  return contest.live === true
}

export function isUpcomingContest(contest: Competition, now = new Date()) {
  return !isCompletedContest(contest) && contest.date >= todayIso(now)
}

export function getCompetition(slug: string) {
  return contests.find((contest) => contest.slug === slug)
}

export function getCompetitionByArchiveId(archiveId: number) {
  return contests.find((contest) => contest.archiveId === archiveId)
}

export function getCompletedContests() {
  return contests
    .filter(isCompletedContest)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getUpcomingContests(limit?: number) {
  const upcoming = contests
    .filter((contest) => isUpcomingContest(contest))
    .sort((a, b) => (a.date > b.date ? 1 : -1))
  return limit == null ? upcoming : upcoming.slice(0, limit)
}

export function getLatestCompetitions(limit = 3) {
  return getCompletedContests().slice(0, limit)
}

export function getAthleteResults(athleteSlug: string) {
  const athlete = getAthlete(athleteSlug)
  return getCompletedContests()
    .map((competition) => {
      const standing = competition.standings.find((entry) => {
        if (athlete?.archiveId != null && entry.athleteArchiveId === athlete.archiveId) {
          return true
        }
        return athlete != null && entry.athleteName === athlete.name
      })
      if (!standing) return null
      return { competition, standing }
    })
    .filter(
      (
        entry,
      ): entry is {
        competition: Competition
        standing: Competition["standings"][number]
      } => entry !== null,
    )
}

export const competitionYears = [
  ...new Set(getCompletedContests().map((meet) => meet.year)),
].sort((a, b) => b - a)

export function getContestCompetitor(archiveId: number, fallbackName: string) {
  const athlete = getAthleteByArchiveId(archiveId)
  return {
    athlete,
    name: athlete?.name ?? fallbackName,
    image: athlete?.image ?? athletePhoto(archiveId),
    slug: athlete?.slug,
    country: athlete?.country ?? "",
    countryCode: athlete?.countryCode ?? "",
  }
}

export function getPopularAthletes(limit = 5): Athlete[] {
  const counts = new Map<number, number>()
  for (const contest of contests) {
    for (const standing of contest.standings) {
      counts.set(
        standing.athleteArchiveId,
        (counts.get(standing.athleteArchiveId) ?? 0) + 1,
      )
    }
  }

  const fromResults = [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .map(([archiveId]) => getAthleteByArchiveId(archiveId))
    .filter((athlete): athlete is Athlete => athlete != null)

  if (fromResults.length >= limit) {
    return fromResults.slice(0, limit)
  }

  const seen = new Set(fromResults.map((athlete) => athlete.slug))
  const fill = athletes
    .filter((athlete) => !seen.has(athlete.slug) && athlete.worldWins > 0)
    .sort(
      (left, right) =>
        right.worldWins - left.worldWins ||
        (right.intlWins ?? 0) - (left.intlWins ?? 0),
    )

  return [...fromResults, ...fill].slice(0, limit)
}
