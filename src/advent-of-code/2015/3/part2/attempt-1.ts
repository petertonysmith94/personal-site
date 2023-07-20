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
const directionsToLocationCounts = (point: Point, transformationMap: Record<Direction, Point>) => {
  let currentLoc: Point = [point[0], point[0]];

  return (acc: Record<number, Record<number, number>>, direction: string) => {
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
}

/**
 * Santa creates a robot version of himself, Robo-Santa, to deliver presents with him
 * 
 * Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf
 *  
 * Therefore:
 *  - Santa goes first,
 *  - Then Robo-Santa,
 *  - Then Santa,
 *  - Then Robo-Santa,
 *  - excetera...
 *  - excetera...
 * 
 * @example ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
 * @example ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
 * @example ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig): number => {
  const santaReducer = directionsToLocationCounts([0, 0], transformationMap)
  const roboSantaReducer = directionsToLocationCounts([0, 0], transformationMap)

  let turn: 'santa' | 'robo-santa' = 'santa';

  const locationCounts = input.content.split('').reduce(
    (acc: Record<number, Record<number, number>>, direction: string) => {
      const reducer = turn === 'santa' ? santaReducer : roboSantaReducer
      turn = (turn === 'santa') ? 'robo-santa' : 'santa'
      return reducer(acc, direction);
    },
    { 0: { 0: 2 } }
  )

  return Object.values(locationCounts).reduce((uniqueHouses: number, record: Record<number, number>) => {
    uniqueHouses += Object.keys(record).length
    return uniqueHouses;
  }, 0)
}