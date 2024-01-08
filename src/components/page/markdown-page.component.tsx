import ReactMarkdown from "react-markdown";
import { Page } from "../page";
import { H1, P } from "./page.styles";

type MarkdownPageProps = {
  children: string;
};

export const MarkdownPage = ({ children }: MarkdownPageProps) => {
  return (
    <Page>
      <ReactMarkdown
        children={ children }
        components={{
          h1: ({ node, ...props }) => <H1 {...props} />,
          p: ({ node, ...props }) => <P {...props} />,
        }}
      />
    </Page>
  )
}