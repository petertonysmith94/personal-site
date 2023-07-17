import { AdventAttempt, AdventInputConfig } from "../../../types";

/**
 * The ribbon required to wrap a present is the shortest distance around its sides (or the smallest perimeter of any one face)
 * 
 * Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present.
 * 
 * 2x3x4 = 2+2+3+3 = 10 feet of ribbon (for wrapping)
 * 2*3*4 = 24 feet of ribbon (for the bow)
 * ribbon total = 34 feet
 * 
 * 1x1x10 = 1+1+1+1 = 4 feet of ribbon (for wrapping)
 * 1*1*10 = 10 feet of ribbon (for the bow)
 * ribbon total = 14 feet
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig): number => {
  return input.content.split('\n').reduce((total, present) => {
    const [l, w, h] = present.split('x').map(Number);
    const smallestSide = Math.min(l + w, w + h, h + l);
    return total + (smallestSide * 2) + (l * w * h);
  }, 0)
}