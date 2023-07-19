import { Md5 } from 'ts-md5';
import { AdventAttempt, AdventInputConfig } from "../../../types";

/**
 * MD5("Key""i").startWith('00000')
 */
export const attempt1: AdventAttempt = (input: AdventInputConfig, maxValue: number = 10000000): number => {
  const predicate = (md5HashString: string) => md5HashString.startsWith('00000');
  
  for (let i = 0; i < maxValue; i++) {
    const hashInput = `${input.content}${i}`;
    const hash = Md5.hashStr(hashInput)
    if (predicate(hash)) {
      return i
    }
  }

  return -1;
}