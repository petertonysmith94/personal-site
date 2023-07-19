import { AdventYearConfig } from "../types"
import { day1 } from "./1/config"
import { day2Part1, day2Part2 } from "./2/config"
import { day3Part1, day3Part2 } from "./3/config"
import { day4Part1, day4Part2 } from "./4/config"

export const twentyFifteen: AdventYearConfig = {
  year: 2015,
  days: [
    day1,
    day2Part1,
    day2Part2,
    day3Part1,
    day3Part2,
    day4Part1,
    day4Part2
  ]
}