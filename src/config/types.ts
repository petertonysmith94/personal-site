/**
 * Application configuration contract
 */
export type Config = {
  socials: Social[]
}

export type Social = {
  /**
   * Name of the social media platform
   */
  name: string,
  
  /**
   * Redirection URL
   */
  url: string,

  /**
   * The icon to be displayed
   */
  icon: Icon
}

/**
 * Icon can either be a string or an object with light and dark properties (which will be used for light and dark mode respectively)
 */
export type Icon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>