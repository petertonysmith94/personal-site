import { AdventAttempt, AdventInputConfig } from "../../../types";

type Point = [number, number]
type Direction = '^' | '>' | 'v' | '<'
const transformationMap: Record<Direction, Point> = {
  '^': [0, 1],
  '>': [1, 0],
  'v': [0, -1],
  '<': [-1, 0],
}
const applyTransformation = (a: Point, b: Point): Point => {
  return [
    a[0] + b[0],
    a[1] + b[1]
  ]
}
const directionsToLocationCounts = (currentLoc: Point) => (acc: Record<number, Record<number, number>>, direction: string) => {
  const transformation = transformationMap[direction as Direction]
  currentLoc = applyTransformation(currentLoc, transformation);
  
  // Add point to map count
  const [x, y] = currentLoc;
  if (!acc[x]) {
    acc[x] = {}
    acc[x][y] = 1
    return acc;
  }

  if (!acc[x][y]) {
    acc[x][y] = 1
    return acc;
  }

  acc[x][y]++
  return acc
}

/**
 * Santa begins by delivering a present to the house at his starting location (0, 0)
 * 
 * Moves are always exactly one house to the north (^), south (v), east (>), or west (<).
 * After each move, he delivers another present to the house at his new location.
 * 
 * TLDR: Santa ends up visiting some houses more than once. How many houses receive at least one present?
 * 
 * @example ">" delivers presents to 2 houses: one at the starting location, and one to the east.
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig): number => {
  let currentLoc: Point = [0, 0]
  const locationCounts = input.content.split('').reduce(
    directionsToLocationCounts(currentLoc),
    { 0: { 0: 1 } }
  )

  return Object.values(locationCounts).reduce((uniqueHouses: number, record: Record<number, number>) => {
    uniqueHouses += Object.keys(record).length
    return uniqueHouses;
  }, 0)

}