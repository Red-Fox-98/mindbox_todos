import { FC } from 'react';
import Styles from './HomePage.module.scss';
import Todos from 'src/widgets/Home/Todos/Todos';

const HomePage: FC = () => {
  return (
    <div className={Styles.content}>
      <div className={Styles.todos}>
        <div className={Styles.header}>{'todos'}</div>
        <Todos />
      </div>
    </div>
  );
};

export default HomePage;
