export const dark = {
  mode: 'dark',
  primary: '#fff',
  secondary: '#fff',
  background: '#000',
  text: '#fff',

  // Socials
  socials: {
    github: '%PUBLIC_URL%/github-white.svg',
    linkedin: '%PUBLIC_URL%/linkedin-white.svg',
    twitter: '%PUBLIC_URL%/twitter-white.svg',
    instagram: '%PUBLIC_URL%/instagram-white.svg',
  }
}

export const light = {
  mode: 'dark',
  primary: '#000',
  secondary: '#000',
  background: '#fff',
  text: '#000',

  // Socials
  socials: {
    github: '%PUBLIC_URL%/github.svg',
    linkedin: '%PUBLIC_URL%/linkedin.svg',
    twitter: '%PUBLIC_URL%/twitter.svg',
    instagram: '%PUBLIC_URL%/instagram.svg',
  }
}

/**
 * 
 * @param mode 
 * @returns 
 */
export const theme = (mode: 'light' | 'dark' = 'dark') => {
  return mode === 'dark' ? dark : light
}