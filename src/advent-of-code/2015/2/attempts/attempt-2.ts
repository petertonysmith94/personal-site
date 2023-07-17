import { AdventAttempt, AdventInputConfig } from "../../../types";

/**
 * List of dimensions (length l, width w, and height h) of each present
 * 
 * To find the surface area of any present, calculate 2*l*w + 2*w*h + 2*h*l
 * The elves also need a little extra paper for each present: the area of the smallest side.
 * 
 * Therefore equation = (2*l*w + 2*w*h + 2*h*l) + smallest side
 */
export const attempt2: AdventAttempt = (input: AdventInputConfig): number => {
  return input.content.split('\n').reduce((total, present) => {
    const [l, w, h] = present.split('x').map(Number);
    const smallestSide = Math.min(l * w, w * h, h * l);
    return total + (2 * l * w + 2 * w * h + 2 * h * l) + smallestSide;
  }, 0);
}