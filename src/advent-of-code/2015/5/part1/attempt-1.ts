import { AdventAttempt, AdventInputConfig } from "../../../types";

const vowels = 'aeiou'.split('')
const bannedWords = ['ab', 'cd', 'pq', 'xy']

type PredicateFn = (row: string) => boolean;
const createPredicator = (fns: Array<PredicateFn>): PredicateFn => {
  return (row: string): boolean => {
    for (const fn of fns) {
      if (!fn(row))
        return false;
    }
    return true;
  }
}

const getCharacterFrequencies = (row: string): Record<string, number> => {
  return row.split('').reduce((acc, character: string) => {
    acc[character] = !acc[character] ? 1 : acc[character] + 1;
    
    return acc;
  }, {} as Record<string, number>)
}

const getSumOfCharacters = (characters: string[]) => (frequencies: Record<string, number>): number => {
  return characters.reduce((acc: number, currentCharacter: string) => {
    if (typeof frequencies[currentCharacter] === 'number') {
      acc += frequencies[currentCharacter]
    }

    return acc
  }, 0)
}

/**
 * Nice string:
 *  - 3 vowels (aeiou only),
 *  - At least one letter appears twice in a row
 *  - Does not contain the string "ab", "cd", "pq", or "xy"
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig, maxValue: number = 10000000): number => {
  const getNumberOfVowels = getSumOfCharacters(vowels)

  const isNice = createPredicator([
    (row: string): boolean => {
      const frequencies = getCharacterFrequencies(row)
      const numberOfVowels = getNumberOfVowels(frequencies);
      return numberOfVowels >= 3
    },
    (row: string): boolean => {
      const iterableRow = row.split('');

      for (let i = 0; i < iterableRow.length; i++) {
        if (iterableRow[i] === iterableRow[i + 1]) {
          // We've found at least one letter that appears twice in a row
          return true;
        }
      }
      return false
    },
    (row: string): boolean => {
      for (const bannedWord of bannedWords) {
        if (row.includes(bannedWord)) {
          return false;
        }
      }
      return true;
    }
  ])

  return input.content.split('\n')
  .filter(row => row.trim().length > 0)
  .reduce((acc: number, row: string) => {
    acc += isNice(row) ? 1 : 0
    return acc
  }, 0);
}