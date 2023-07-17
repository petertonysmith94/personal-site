import { AdventAttempt, AdventInputConfig } from "../../../types";

export const attempt1: AdventAttempt = (input: AdventInputConfig): number => {
  const weightOpenParenthesis = +1;
  const weightCloseParenthesis = -1;

  return input.content.split('').reduce((acc, char) => {
    if (char !== '(' && char !== ')') throw new Error('Invalid character');
    acc = acc + (char === '(' ? weightOpenParenthesis : weightCloseParenthesis)
    return acc;
  }, 0)
}