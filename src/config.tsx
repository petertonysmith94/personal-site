import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import { ReactComponent as Logo } from './assets/logo.svg';
import Profile from './pages/profile.md'
import ReactMarkdown from 'react-markdown';

const markdown = (contents: string) => (<><ReactMarkdown children={contents} /></>);

const config = {
  logo: Logo,
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/petertonysmith94/',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/petertonysmith/',
      icon: LinkedInIcon
    },
  ],
  pages: [
    () => markdown(Profile),
  ]
};


export { config };