import ReactMarkdown from "react-markdown";
import { Page } from "../page";
import { PageTitle } from "./page.styles";

type MarkdownPageProps = {
  children: string;
};

export const MarkdownPage = ({ children }: MarkdownPageProps) => {
  return (
    <Page>
      <ReactMarkdown
        children={ children }
        components={{
          h1: ({node, ...props}) => (
            <PageTitle {...props} />
          )
        }}
      />
    </Page>
  )
}