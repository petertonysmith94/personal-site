import { dark } from "./dark"
import { light } from "./light"

/**
 * Create the theme based on the mode
 * 
 * @param mode 
 * @returns 
 */
export const createTheme = (mode: 'light' | 'dark' = 'dark') => {
  return mode === 'dark' ? dark : light
}