import { PageWrapper } from "./page.styles"

export const Page = ({
  title
}: {
  title: string
}) => (
  <PageWrapper>
    <h1>{ title }</h1>
  </PageWrapper>
)
