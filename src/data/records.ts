import type { ArchiveRecord } from "@/data/types"

export const wsmRecords: ArchiveRecord[] = [
  {
    id: 10,
    name: "Most WSM Titles",
    value: "5 wins",
    holders: [
      {
        athleteArchiveId: 4,
        athleteName: "Mariusz Pudzianowski",
        country: "Poland",
        countryCode: "POL",
        contestArchiveId: null,
        contestName: "2002-2008",
      }
    ],
  },
  {
    id: 14,
    name: "Most WSM Podium Finishes",
    value: "10 podiums",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: null,
        contestName: "2009-2021",
      },
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: null,
        contestName: "2002-2015",
      },
    ],
  },
  {
    id: 11,
    name: "Most WSM Appearances",
    value: "18 times",
    holders: [
      {
        athleteArchiveId: 58,
        athleteName: "Mark Felix",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: null,
        contestName: "2004-2023",
      }
    ],
  },
  {
    id: 7,
    name: "Most WSM Finals Appearances",
    value: "15 times",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: null,
        contestName: "2009-2023",
      }
    ],
  },
  {
    id: 29,
    name: "Most Consecutive WSM Finals",
    value: "15 years",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: null,
        contestName: "2009-2023",
      }
    ],
  },
  {
    id: 12,
    name: "Most WSM Event Wins (Heats + Finals)",
    value: "62 events",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: null,
        contestName: "2008-2023",
      }
    ],
  },
  {
    id: 13,
    name: "Most WSM Event Wins (Finals Only)",
    value: "23 events",
    holders: [
      {
        athleteArchiveId: 4,
        athleteName: "Mariusz Pudzianowski",
        country: "Poland",
        countryCode: "POL",
        contestArchiveId: null,
        contestName: "2000-2009",
      }
    ],
  },
  {
    id: 1,
    name: "Youngest WSM Competitor",
    value: "20 years, 46 days",
    holders: [
      {
        athleteArchiveId: 67,
        athleteName: "Kevin Nee",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 165,
        contestName: "2005 WSM Group 4",
      }
    ],
  },
  {
    id: 23,
    name: "Youngest WSM Finalist",
    value: "21 years, 140 days",
    holders: [
      {
        athleteArchiveId: 28,
        athleteName: "Anton Boucher",
        country: "Namibia",
        countryCode: "NAM",
        contestArchiveId: 13,
        contestName: "1994 WSM Final",
      }
    ],
  },
  {
    id: 5,
    name: "Youngest WSM Winner",
    value: "24 years, 271 days",
    holders: [
      {
        athleteArchiveId: 1,
        athleteName: "Jón Páll Sigmarsson",
        country: "Iceland",
        countryCode: "ISL",
        contestArchiveId: 8,
        contestName: "1984 World's Strongest Man",
      }
    ],
  },
  {
    id: 3,
    name: "Oldest WSM Competitor",
    value: "57 years, 3 days",
    holders: [
      {
        athleteArchiveId: 58,
        athleteName: "Mark Felix",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 1420,
        contestName: "2023 WSM Group 5",
      }
    ],
  },
  {
    id: 4,
    name: "Oldest WSM Finalist",
    value: "49 years, 9 days",
    holders: [
      {
        athleteArchiveId: 58,
        athleteName: "Mark Felix",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 106,
        contestName: "2015 WSM Final",
      }
    ],
  },
  {
    id: 6,
    name: "Oldest WSM Winner",
    value: "38 years, 258 days",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 112,
        contestName: "2014 WSM Final",
      }
    ],
  },
  {
    id: 8,
    name: "Tallest WSM Winner",
    value: "213 cm",
    holders: [
      {
        athleteArchiveId: 18,
        athleteName: "Ted van der Parre",
        country: "Netherlands",
        countryCode: "NED",
        contestArchiveId: 18,
        contestName: "1992 World's Strongest Man",
      }
    ],
  },
  {
    id: 9,
    name: "Shortest WSM Winner",
    value: "183 cm",
    holders: [
      {
        athleteArchiveId: 42,
        athleteName: "Gary Taylor",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 19,
        contestName: "1993 World's Strongest Man",
      }
    ],
  }
]

export const eventRecords: ArchiveRecord[] = [
  {
    id: 15,
    name: "Max. Deadlift",
    category: "deadlift",
    value: "510 kg",
    holders: [
      {
        athleteArchiveId: 176,
        athleteName: "Hafthór Júlíus Björnsson",
        country: "Iceland",
        countryCode: "ISL",
        contestArchiveId: 1946,
        contestName: "2025 World Deadlift Championships",
      }
    ],
  },
  {
    id: 16,
    name: "Max. 18-inch Deadlift",
    category: "deadlift",
    value: "537.5 kg",
    holders: [
      {
        athleteArchiveId: 190,
        athleteName: "Oleksii Novikov",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 78,
        contestName: "2020 WSM Final",
      }
    ],
  },
  {
    id: 28,
    name: "Max. Hummer Tire Deadlift",
    category: "deadlift",
    value: "549 kg",
    holders: [
      {
        athleteArchiveId: 190,
        athleteName: "Oleksii Novikov",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 1162,
        contestName: "2022 Shaw Classic",
      }
    ],
  },
  {
    id: 19,
    name: "Max. Log Lift",
    category: "overhead-press",
    value: "231 kg",
    holders: [
      {
        athleteArchiveId: 352,
        athleteName: "Cheick Sanou",
        country: "Burkina Faso",
        countryCode: "BUR",
        contestArchiveId: 1572,
        contestName: "2024 World Log Lift Championships",
      }
    ],
  },
  {
    id: 21,
    name: "Max. Axle Press",
    category: "overhead-press",
    value: "218 kg",
    holders: [
      {
        athleteArchiveId: 2269,
        athleteName: "Mitchell Hooper",
        country: "Canada",
        countryCode: "CAN",
        contestArchiveId: 1461,
        contestName: "2024 Giants Live Strongman Classic",
      }
    ],
  },
  {
    id: 73,
    name: "Max. Behind-the-Neck Jerk",
    category: "overhead-press",
    value: "252 kg",
    holders: [
      {
        athleteArchiveId: 2251,
        athleteName: "Lucas Hatton",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 2033,
        contestName: "2025 America's Strongest Man",
      }
    ],
  },
  {
    id: 74,
    name: "Max. Dumbbell",
    category: "overhead-press",
    value: "151 kg",
    holders: [
      {
        athleteArchiveId: 1348,
        athleteName: "David Shamey",
        country: "Russia",
        countryCode: "RUS",
        contestArchiveId: 1545,
        contestName: "2024 Strongman World Cup",
      }
    ],
  },
  {
    id: 18,
    name: "Max. Squat",
    category: "squat",
    value: "440 kg",
    holders: [
      {
        athleteArchiveId: 3,
        athleteName: "Bill Kazmaier",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 5,
        contestName: "1981 World's Strongest Man",
      }
    ],
  },
  {
    id: 32,
    name: "Log for Reps (140-149 kg)",
    category: "overhead-press",
    value: "12 reps (140 kg)",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 645,
        contestName: "2013 SCL Brazil",
      }
    ],
  },
  {
    id: 30,
    name: "Log for Reps (150-159 kg)",
    category: "overhead-press",
    value: "10 reps (155 kg)",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 130,
        contestName: "2011 WSM Final",
      }
    ],
  },
  {
    id: 33,
    name: "Log for Reps (160-169 kg)",
    category: "overhead-press",
    value: "10 reps (163 kg)",
    holders: [
      {
        athleteArchiveId: 177,
        athleteName: "Tom Stoltman",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 1421,
        contestName: "2023 Rogue Invitational",
      }
    ],
  },
  {
    id: 34,
    name: "Log for Reps (170-179 kg)",
    category: "overhead-press",
    value: "5 reps (173 kg)",
    holders: [
      {
        athleteArchiveId: 191,
        athleteName: "Maxime Boudreault",
        country: "Canada",
        countryCode: "CAN",
        contestArchiveId: 269,
        contestName: "2020 Arnold USA",
      }
    ],
  },
  {
    id: 71,
    name: "Log for Reps (180-189 kg)",
    category: "overhead-press",
    value: "5 reps (180 kg)",
    holders: [
      {
        athleteArchiveId: 175,
        athleteName: "Mateusz Kieliszkowski",
        country: "Poland",
        countryCode: "POL",
        contestArchiveId: 261,
        contestName: "2019 Arnold Europe",
      },
      {
        athleteArchiveId: 352,
        athleteName: "Cheick Sanou",
        country: "Burkina Faso",
        countryCode: "BUR",
        contestArchiveId: 175,
        contestName: "2019 WUS Dubai",
      }
    ],
  },
  {
    id: 52,
    name: "Dumbbell for Reps (90-99 kg)",
    category: "overhead-press",
    value: "15 reps (90 kg)",
    holders: [
      {
        athleteArchiveId: 56,
        athleteName: "Derek Poundstone",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 217,
        contestName: "2009 Arnold Strongman Classic",
      }
    ],
  },
  {
    id: 53,
    name: "Dumbbell for Reps (100-109 kg)",
    category: "overhead-press",
    value: "11 reps (103 kg)",
    holders: [
      {
        athleteArchiveId: 56,
        athleteName: "Derek Poundstone",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 216,
        contestName: "2010 Arnold Strongman Classic",
      }
    ],
  },
  {
    id: 54,
    name: "Dumbbell for Reps (110-119 kg)",
    category: "overhead-press",
    value: "8 reps (110 kg)",
    holders: [
      {
        athleteArchiveId: 257,
        athleteName: "Mike Jenkins",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 215,
        contestName: "2011 Arnold Strongman Classic",
      },
      {
        athleteArchiveId: 190,
        athleteName: "Oleksii Novikov",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 1162,
        contestName: "2022 Shaw Classic",
      },
      {
        athleteArchiveId: 190,
        athleteName: "Oleksii Novikov",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 149,
        contestName: "2020 Shaw Classic",
      }
    ],
  },
  {
    id: 67,
    name: "Viking Press (140-149 kg)",
    category: "overhead-press",
    value: "23 reps (140 kg)",
    holders: [
      {
        athleteArchiveId: 311,
        athleteName: "Jarno Hams",
        country: "Netherlands",
        countryCode: "NED",
        contestArchiveId: 1009,
        contestName: "2008 Strongest Man in the Netherlands",
      }
    ],
  },
  {
    id: 68,
    name: "Viking Press (150-159 kg)",
    category: "overhead-press",
    value: "21 reps (159 kg)",
    holders: [
      {
        athleteArchiveId: 53,
        athleteName: "Hugo Girard",
        country: "Canada",
        countryCode: "CAN",
        contestArchiveId: 414,
        contestName: "2001 Northeast Strongman Showdown",
      }
    ],
  },
  {
    id: 69,
    name: "Viking Press (160-169 kg)",
    category: "overhead-press",
    value: "19 reps (160 kg)",
    holders: [
      {
        athleteArchiveId: 249,
        athleteName: "Bjørn Andre Solvang",
        country: "Norway",
        countryCode: "NOR",
        contestArchiveId: 614,
        contestName: "2016 SCL Norway",
      }
    ],
  },
  {
    id: 37,
    name: "Squat for Reps (300-309 kg)",
    category: "squat",
    value: "16 reps (307 kg)",
    holders: [
      {
        athleteArchiveId: 53,
        athleteName: "Hugo Girard",
        country: "Canada",
        countryCode: "CAN",
        contestArchiveId: 833,
        contestName: "2003 Canada's Strongest Man",
      }
    ],
  },
  {
    id: 64,
    name: "Squat for Reps (310-319 kg)",
    category: "squat",
    value: "17 reps (318 kg)",
    holders: [
      {
        athleteArchiveId: 2251,
        athleteName: "Lucas Hatton",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 2480,
        contestName: "2026 WSM Group 3",
      }
    ],
  },
  {
    id: 65,
    name: "Squat for Reps (320-329 kg)",
    category: "squat",
    value: "15 reps (329 kg)",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 112,
        contestName: "2014 WSM Final",
      }
    ],
  },
  {
    id: 35,
    name: "Atlas Stones (5x, max 180 kg)",
    category: "stones",
    value: "14.2 s",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 402,
        contestName: "2010 Giants Live Turkey",
      }
    ],
  },
  {
    id: 36,
    name: "Atlas Stones (5x, max 200 kg)",
    category: "stones",
    value: "17.54 s",
    holders: [
      {
        athleteArchiveId: 176,
        athleteName: "Hafthór Júlíus Björnsson",
        country: "Iceland",
        countryCode: "ISL",
        contestArchiveId: 275,
        contestName: "2017 Europe's Strongest Man",
      }
    ],
  },
  {
    id: 38,
    name: "Farmer's Walk (120-129 kg)",
    category: "farmers-walk",
    value: "2.80 m/s",
    valueNote: "(120 kg, 70 m, 25 s)",
    holders: [
      {
        athleteArchiveId: 11,
        athleteName: "Janne Virtanen",
        country: "Finland",
        countryCode: "FIN",
        contestArchiveId: 57,
        contestName: "2000 WSM Final",
      }
    ],
  },
  {
    id: 39,
    name: "Farmer's Walk (130-139 kg)",
    category: "farmers-walk",
    value: "3.45 m/s",
    valueNote: "(132 kg, 30 m, 8.69 s)",
    holders: [
      {
        athleteArchiveId: 62,
        athleteName: "Johannes Årsjö",
        country: "Sweden",
        countryCode: "SWE",
        contestArchiveId: 2189,
        contestName: "2012 Nordic Strongest Man",
      }
    ],
  },
  {
    id: 55,
    name: "Farmer's Walk (140-149 kg)",
    category: "farmers-walk",
    value: "2.55 m/s",
    valueNote: "(145 kg, 30 m, 11.76 s)",
    holders: [
      {
        athleteArchiveId: 288,
        athleteName: "Andrus Murumets",
        country: "Estonia",
        countryCode: "EST",
        contestArchiveId: 419,
        contestName: "2007 IFSA Lithuania Grand Prix",
      }
    ],
  },
  {
    id: 56,
    name: "Farmer's Walk (150-159 kg)",
    category: "farmers-walk",
    value: "3.02 m/s",
    valueNote: "(150 kg, 60 m, 19.9 s)",
    holders: [
      {
        athleteArchiveId: 4,
        athleteName: "Mariusz Pudzianowski",
        country: "Poland",
        countryCode: "POL",
        contestArchiveId: 344,
        contestName: "2006 Poland Grand Prix",
      }
    ],
  },
  {
    id: 57,
    name: "Farmer's Walk (160-169 kg)",
    category: "farmers-walk",
    value: "2.81 m/s",
    valueNote: "(160 kg, 30 m, 10.67 s)",
    holders: [
      {
        athleteArchiveId: 253,
        athleteName: "Vytautas Lalas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 665,
        contestName: "2012 Arnold Europe",
      }
    ],
  },
  {
    id: 59,
    name: "Frame Carry (300-319 kg)",
    category: "farmers-walk",
    value: "2.68 m/s",
    valueNote: "(300 kg, 40 m, 14.91 s)",
    holders: [
      {
        athleteArchiveId: 250,
        athleteName: "Martin Wildauer",
        country: "Austria",
        countryCode: "AUT",
        contestArchiveId: 634,
        contestName: "2014 SCL Hungary",
      }
    ],
  },
  {
    id: 60,
    name: "Frame Carry (320-339 kg)",
    category: "farmers-walk",
    value: "3.22 m/s",
    valueNote: "(320 kg, 30 m, 9.31 s)",
    holders: [
      {
        athleteArchiveId: 197,
        athleteName: "Aivars Šmaukstelis",
        country: "Latvia",
        countryCode: "LAT",
        contestArchiveId: 574,
        contestName: "2019 SCL Russia",
      }
    ],
  },
  {
    id: 61,
    name: "Frame Carry (340-359 kg)",
    category: "farmers-walk",
    value: "2.20 m/s",
    valueNote: "(340 kg, 40 m, 18.21 s)",
    holders: [
      {
        athleteArchiveId: 66,
        athleteName: "Terry Hollands",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 653,
        contestName: "2013 SCL Portugal",
      }
    ],
  },
  {
    id: 62,
    name: "Frame Carry (360-379 kg)",
    category: "farmers-walk",
    value: "2.19 m/s",
    valueNote: "(360 kg, 20 m, 9.13 s)",
    holders: [
      {
        athleteArchiveId: 189,
        athleteName: "Evan Singleton",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 1613,
        contestName: "2025 Giants Live Strongman Classic",
      }
    ],
  },
  {
    id: 63,
    name: "Frame Carry (400-419 kg)",
    category: "farmers-walk",
    value: "2.45 m/s",
    valueNote: "(400 kg, 18 m, 7.35 s)",
    holders: [
      {
        athleteArchiveId: 190,
        athleteName: "Oleksii Novikov",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 995,
        contestName: "2021 Arnold UK",
      }
    ],
  },
  {
    id: 45,
    name: "Super Yoke (380-399 kg)",
    category: "yoke",
    value: "2.49 m/s",
    valueNote: "(380 kg, 30 m, 12.05 s)",
    holders: [
      {
        athleteArchiveId: 805,
        athleteName: "Emanuel Pescari",
        country: "Austria",
        countryCode: "AUT",
        contestArchiveId: 1898,
        contestName: "2022 Austria's Strongest Man",
      }
    ],
  },
  {
    id: 46,
    name: "Super Yoke (400-419 kg)",
    category: "yoke",
    value: "2.65 m/s",
    valueNote: "(410 kg, 30 m, 11.34 s)",
    holders: [
      {
        athleteArchiveId: 271,
        athleteName: "Vidas Blekaitis",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 192,
        contestName: "2007 IFSA Strongman World Championships",
      },
      {
        athleteArchiveId: 303,
        athleteName: "Vasyl Virastyuk",
        country: "Ukraine",
        countryCode: "UKR",
        contestArchiveId: 192,
        contestName: "2007 IFSA Strongman World Championships",
      }
    ],
  },
  {
    id: 47,
    name: "Super Yoke (420-439 kg)",
    category: "yoke",
    value: "2.35 m/s",
    valueNote: "(422 kg, 30 m, 12.78 s)",
    holders: [
      {
        athleteArchiveId: 56,
        athleteName: "Derek Poundstone",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 333,
        contestName: "2010 Mohegan Sun Grand Prix",
      }
    ],
  },
  {
    id: 48,
    name: "Super Yoke (440-459 kg)",
    category: "yoke",
    value: "2.32 m/s",
    valueNote: "(450 kg, 20 m, 8.61 s)",
    holders: [
      {
        athleteArchiveId: 193,
        athleteName: "Graham Hicks",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 753,
        contestName: "2018 Britain's Strongest Man",
      }
    ],
  },
  {
    id: 51,
    name: "Super Yoke (500-519 kg)",
    category: "yoke",
    value: "1.81 m/s",
    valueNote: "(506 kg, 20 m, 11.06 s)",
    holders: [
      {
        athleteArchiveId: 2269,
        athleteName: "Mitchell Hooper",
        country: "Canada",
        countryCode: "CAN",
        contestArchiveId: 1162,
        contestName: "2022 Shaw Classic",
      }
    ],
  },
  {
    id: 27,
    name: "Keg Toss (8 Kegs)",
    category: "throwing",
    value: "15.71 s",
    valueNote: "(18 to 25 kg, 4.88 metres)",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 279,
        contestName: "2013 Europe's Strongest Man",
      }
    ],
  },
  {
    id: 70,
    name: "Keg for Height (15 kg)",
    category: "throwing",
    value: "7.77 m",
    holders: [
      {
        athleteArchiveId: 176,
        athleteName: "Hafthór Júlíus Björnsson",
        country: "Iceland",
        countryCode: "ISL",
        contestArchiveId: 1462,
        contestName: "2024 Strongest Man on Earth",
      }
    ],
  },
  {
    id: 24,
    name: "Weight Over Bar (25 kg)",
    category: "throwing",
    value: "7.15 m",
    holders: [
      {
        athleteArchiveId: 683,
        athleteName: "Audrius Jokūbaitis",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 2589,
        contestName: "2025 Lietuvos galiūnų čempionato",
      }
    ],
  },
  {
    id: 25,
    name: "Fingal's Fingers (5 Fingers)",
    category: "flipping",
    value: "28.69 s",
    valueNote: "(200 to 320 kg)",
    holders: [
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 70,
        contestName: "2009 WSM Final",
      }
    ],
  },
  {
    id: 22,
    name: "Africa Stone",
    category: "distance-carry",
    value: "110 m",
    holders: [
      {
        athleteArchiveId: 4,
        athleteName: "Mariusz Pudzianowski",
        country: "Poland",
        countryCode: "POL",
        contestArchiveId: 191,
        contestName: "2000 WSM Group 5",
      }
    ],
  },
  {
    id: 66,
    name: "Húsafell Stone",
    category: "distance-carry",
    value: "109.95 m",
    holders: [
      {
        athleteArchiveId: 2562,
        athleteName: "Paddy Haynes",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 1871,
        contestName: "2025 Iceland's Strongest Man",
      }
    ],
  },
  {
    id: 40,
    name: "Car Deadlift for Reps (300-319 kg)",
    category: "deadlift",
    value: "23 reps (300 kg)",
    holders: [
      {
        athleteArchiveId: 250,
        athleteName: "Martin Wildauer",
        country: "Austria",
        countryCode: "AUT",
        contestArchiveId: 723,
        contestName: "2009 SCL Serbia",
      }
    ],
  },
  {
    id: 41,
    name: "Car Deadlift for Reps (320-339 kg)",
    category: "deadlift",
    value: "21 reps (320 kg)",
    holders: [
      {
        athleteArchiveId: 281,
        athleteName: "Darren Sadler",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 343,
        contestName: "2007 Mohegan Sun Grand Prix",
      },
      {
        athleteArchiveId: 58,
        athleteName: "Mark Felix",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 343,
        contestName: "2007 Mohegan Sun Grand Prix",
      }
    ],
  },
  {
    id: 42,
    name: "Car Deadlift for Reps (340-359 kg)",
    category: "deadlift",
    value: "24 reps (345 kg)",
    holders: [
      {
        athleteArchiveId: 562,
        athleteName: "Lars Rørbakken",
        country: "Norway",
        countryCode: "NOR",
        contestArchiveId: 975,
        contestName: "2012 Norway's Strongest Man",
      }
    ],
  },
  {
    id: 43,
    name: "Car Deadlift for Reps (360-379 kg)",
    category: "deadlift",
    value: "20 reps (365 kg)",
    holders: [
      {
        athleteArchiveId: 71,
        athleteName: "Brian Shaw",
        country: "United States",
        countryCode: "USA",
        contestArchiveId: 402,
        contestName: "2010 Giants Live Turkey",
      },
      {
        athleteArchiveId: 171,
        athleteName: "Žydrūnas Savickas",
        country: "Lithuania",
        countryCode: "LTU",
        contestArchiveId: 402,
        contestName: "2010 Giants Live Turkey",
      }
    ],
  },
  {
    id: 44,
    name: "Car Deadlift for Reps (380-399 kg)",
    category: "deadlift",
    value: "16 reps (380 kg)",
    holders: [
      {
        athleteArchiveId: 58,
        athleteName: "Mark Felix",
        country: "Great Britain",
        countryCode: "GBR",
        contestArchiveId: 279,
        contestName: "2013 Europe's Strongest Man",
      }
    ],
  }
]

export const eventRecordCategories = [
  { id: "all", label: "All Events" },
  { id: "deadlift", label: "Deadlift" },
  { id: "squat", label: "Squat" },
  { id: "overhead-press", label: "Overhead Press" },
  { id: "distance-carry", label: "Distance Carry" },
  { id: "throwing", label: "Throwing" },
  { id: "flipping", label: "Flipping" },
  { id: "stones", label: "Stones" },
  { id: "farmers-walk", label: "Farmer's Walk" },
  { id: "yoke", label: "Yoke" },
] as const

export type EventRecordCategoryId = (typeof eventRecordCategories)[number]["id"]

export function getEventRecords(category: EventRecordCategoryId = "all") {
  if (category === "all") return eventRecords
  return eventRecords.filter((record) => record.category === category)
}
