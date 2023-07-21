import { AdventAttempt, AdventInputConfig } from "../../../types";

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

const getPairFrequency = (acc: Record<string, number>, character: string, index: number, initial: string[]) => {
  if (typeof initial[index + 1] == 'undefined') {
    return acc
  }

  const pair = initial[index] + initial[index + 1];
  acc[pair] = (acc[pair]) ? (acc[pair] + 1) : 1;
  
  return acc;
}

const hasNonConsecutiveNumbers = (indices: number[]) => {
  if (indices.length <= 1) {
    return false;
  }

  const sorted = indices.sort();

  for (let i = 0; i < sorted.length; i++) {
    const curr = sorted[i]

    if (sorted[i + 1] !== curr + 1) {
      return true;
    }
  }
  return false;
}

const hasPairWithoutOverlap = (source: string, pairs: string[]): boolean => {
  for (let pair of pairs) {
    // Below we assume that the pairs are subset of the source 
    const indicesOfPairs = [...source.matchAll(new RegExp(pair, 'gi'))].map(v => v.index!)
    if (hasNonConsecutiveNumbers(indicesOfPairs))  {
      console.log(pair, indicesOfPairs)
      return true
    }
  }

  return false;
}

function *takeMeToTheWindowShop <T>(item: Array<T>, windowSize: number): Generator<Array<T>> {
  if (windowSize > item.length) {
    throw Error(`You are not allowed a window size more than the input array, ${JSON.stringify(item)}`);
  }

  const maxIndex = (item.length + 1) - windowSize;
  for (let i = 0; i < maxIndex; i++) {
    yield item.slice(i, i + windowSize)
  }
}

/**
 * Nice string has all of these properties:
 *  - Contains a pair of any two letters that appears at least twice (with no overlap)
 *  - It contains at least one letter which repeats with exactly one letter between them, like xyx
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig, maxValue: number = 10000000): number => {
  const isNice = createPredicator([
    (row: string): boolean => {


      const pairFrequency = row.split('').reduce(getPairFrequency, {} as Record<string, number>);
      const pairsWithMoreThanTwo = Object.entries(pairFrequency).filter(([_, count]) => count >= 2).map(([pair, count]) => pair)
      const hasPair = hasPairWithoutOverlap(row, pairsWithMoreThanTwo)
      console.log(row, hasPair)
      return hasPair
    },
    (row: string): boolean => {
      const split = row.split('')
      const windows = takeMeToTheWindowShop(split, 3);
      
      for (const window of windows) {
        const indexZero = window[0];
        const indexTwo = window[2];
        if (indexZero == indexTwo) {
          return true;
        }
      }
      return false;
    }
  ])

  return input.content.split('\n')
    .filter(row => row.trim().length > 0)
    .reduce((acc: number, row: string) => {
      acc += isNice(row) ? 1 : 0
      return acc
    }, 0);
}