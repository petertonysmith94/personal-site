import { AdventDayConfig, AdventInputConfig } from "../../types";
import { content } from "./content";
import { attempts as attemptsPart1 } from "./part1";
import { attempts as attemptsPart2 } from "./part2";

const input: AdventInputConfig = {
  url: 'No resource',
  content: content

  // // Part 1
  // content: 'ugknbfddgicrmopn', // nice
  // content: 'aaa', // nice
  // content: 'jchzalrnumimnmhp', // naughty
  // content: 'haegwjzuvuyypxyu', // naughty
  // content: 'dvszwmarrgswjxmb', // naughty


  // // Part 2
  // content: 'qjhvhtzxzqqjkmpb',
  // content: 'xxyxx',
  // content: 'uurcxstgmygtbstg',
  // content: 'ieodomkazucvgmuy',
}

const part1: AdventDayConfig = {
  day: 5,
  part: 1,
  url: '/2015/day/4',
  title: 'Day 5: Doesn\'t He Have Intern-Elves For This?',
  question: `
    Santa needs help figuring out which strings in his text file are naughty or nice.

    A nice string is one with all of the following properties:
    
    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
    For example:
    
    ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
    aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
    jchzalrnumimnmhp is naughty because it has no double letter.
    haegwjzuvuyypxyu is naughty because it contains the string xy.
    dvszwmarrgswjxmb is naughty because it contains only one vowel.
    How many strings are nice?
  `,
  input,
  solution: {
    attempts: () => attemptsPart1,
    answer: 255
  }
}

const part2: AdventDayConfig = {
  day: 5,
  part: 2,
  url: '/2015/day/4',
  title: 'Day 5: Doesn\'t He Have Intern-Elves For This?',
  question: `
    Now find one that starts with six zeroes.
  `,
  input,
  solution: {
    attempts: () => attemptsPart2,
    answer: 1038736
  }
}


export const day5 = [
  part1,
  part2
];
