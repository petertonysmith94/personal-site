import { PageWrapper } from "./page.styles"

export const Page = ({
  children
}: {
  children: React.ReactNode
}) => (
  <PageWrapper>
    { children }
  </PageWrapper>
)
