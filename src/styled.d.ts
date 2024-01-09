import type { CSSProp } from "styled-components";
import type { Theme } from './theme/types';

declare module "styled-components" {
 export interface DefaultTheme extends Theme {}
}

declare module "react" {
 interface DOMAttributes {
   css?: CSSProp;
 }
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}