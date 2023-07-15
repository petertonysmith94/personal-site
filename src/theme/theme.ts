import { Theme } from "../types"

const light: Theme = {
  primary: '#000',
  secondary: '#000',
  background: '#fff',
  text: '#000',
}

const dark: Theme = {
  primary: '#fff',
  secondary: '#fff',
  background: '#000',
  text: '#fff',
}

/**
 * Create the theme based on the mode
 * 
 * @param mode 
 * @returns 
 */
export const createTheme = (mode: 'light' | 'dark' = 'dark') => {
  return mode === 'dark' ? dark : light
}