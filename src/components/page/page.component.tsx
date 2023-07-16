import { PageTitle, PageWrapper } from "./page.styles"

export const Page = ({
  title,
  component: Component
}: {
  title: string,
  component: () => JSX.Element
}) => (
  <PageWrapper>
    <PageTitle>
      { title }
    </PageTitle>

    <Component />
  </PageWrapper>
)
