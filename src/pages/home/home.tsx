import { Socials } from '../../components/socials';
import { socials } from '../../config/socials';

export const Home = () => {
  return (
    <div>
      <Socials socials={socials} color='black' />
    </div>
  );
}