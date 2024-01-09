import { useMemo } from "react";
import { SocialLink } from "../components/socials/socials";
import { IColor, ISize, Social } from "../types";

const SocialComponent = ({ name, url, size, color, icon: IconComponent  }: Social & IColor & ISize) => (
  <SocialLink key={name} href={url} style={{ maxHeight: size }}>
    <IconComponent
      height={size}
      width={size}
      color={color}
    />
  </SocialLink>
)

export const Socials = ({ socials, color, size }: { socials: Array<Social> } & IColor & ISize) => {
  const Components = useMemo(() => socials.map(
    (social, index) => <SocialComponent key={`social-${index}`} {...social} color={color} size={size} />
  ), [socials])

  return (<>{ Components }</>)
}