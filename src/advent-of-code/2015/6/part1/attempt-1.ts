import { AdventAttempt, AdventInputConfig } from "../../../types";

type Grid = boolean[][];
type Coordinate = { x: number, y: number }

const initialiseGrid = (size: number, fill: boolean = false): Grid => {
  if (size <= 0) {
    throw new Error('Size must be an positive integer')
  }

  return Array.from({ length: size }).map((_) => {
    return Array.from({ length: size}).map(_ => fill);
  })
}

function *getIterableCoordinates (a: Coordinate, b: Coordinate): Generator<Coordinate> {
  const [xMin, xMax] = [Math.min(a.x, b.x), Math.max(a.x, b.x)];
  const [yMin, yMax] = [Math.min(a.y, b.y), Math.max(a.y, b.y)];

  for (let x = xMin; x <= xMax; x++) {
    for (let y = yMin; y <= yMax; y++) {
      yield { x, y }
    }
  }
}

function *getIteratableGrid (grid: Grid): Generator<{ coordinate: Coordinate, value: boolean }> {
  const coordinates = getIterableCoordinates(
    { x: 0, y: 0 },
    { x: grid.length - 1, y: grid.length - 1 }
  );

  for (const coordinate of coordinates) {
    yield {
      coordinate,
      value: grid[coordinate.x][coordinate.y],
    }
  }
}

const gridOperator = (grid: Grid, opts: { a: Coordinate, b: Coordinate, operation: (current: boolean) => boolean }): Grid => {
  const coordinates = Array.from(getIterableCoordinates(opts.a, opts.b));
  for (const { x, y } of coordinates) {
    grid[x][y] = opts.operation(grid[x][y])
  }
  return grid
}

const turnOn = (_: boolean) => true;
const toggle = (current: boolean) => !current;
const turnOff = (_: boolean) => false;

type Instruction = {
  operation: (current: boolean) => boolean,
  a: Coordinate;
  b: Coordinate;
}

const instructionRegex = /([a-z ]+)([0-9]+)(,)([0-9]+)( through )([0-9]+)(,)([0-9]+)/

const operationMap: Record<string, (curr: boolean) => boolean> = {
  'turn on': turnOn,
  'toggle': toggle,
  'turn off': turnOff,
}

const parseInstruction = (rawInstruction: string): Instruction => {
  const matches = rawInstruction.trim().match(instructionRegex);
  if (!matches) {
    throw new Error(`The inputted instruction "${rawInstruction}", doesn't appear to be a valid instruction (or incorrect RegEx)`)
  }
  const [_input, rawOperation, ax, _, ay, __, bx, ___, by] = matches;

  return {
    operation: operationMap[rawOperation.trim()],
    a: { x: Number(ax), y: Number(ay) },
    b: { x: Number(bx), y: Number(by) },
  }
}

/**
 * 
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig): number => {
  let lights = initialiseGrid(1000)
  const instructions = input.content.split('\n').filter(v => v.trim().length > 0).map(parseInstruction);

  for (const instruction of instructions) {
    gridOperator(lights, instruction);
  }

  return Array.from(getIteratableGrid(lights)).reduce((acc: number, { value }) => {
    acc += value ? 1 : 0;
    return acc;
  }, 0) 
}