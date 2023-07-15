import { HomeWrapper } from "../../pages/home/home.styles"

export const Page = ({
  title
}: {
  title: string
}) => (
  <HomeWrapper>
    <h1>{ title }</h1>
  </HomeWrapper>
)
