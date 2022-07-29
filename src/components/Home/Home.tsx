import { FC } from 'react';
import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import styles from './Home.module.css';
import { USERS } from '../../utils/constant';

interface HomeProps { }

const Home: FC<HomeProps> = () => {

  const getCards = () => {
    return (
      <>
        {USERS.map((person, index) => {
          return <Card
            key={index}
            content={'no-content'}
            header={{ title: person.name, subtitle: person.role, img: person.img }}
            footer={{ title: person.company }}
          />
        })}
      </>
    );
  }

  return (
    <div className={styles.Home} data-testid="Home">
      <label>
        Home Cards
      </label>
      <CardContainer>
        {getCards()}
      </CardContainer>
    </div>
  );
};

export default Home;
