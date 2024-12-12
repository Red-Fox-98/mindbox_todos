import { FC } from 'react';
import Styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ name, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(Styles.btn, isActive && Styles.btnActive)}>
      {name}
    </button>
  );
};

export default Button;
