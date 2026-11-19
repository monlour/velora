import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import PlusIcon from '../../assets/icons/plus.svg?react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Logo />
        <Button variant="header-action" icon={<PlusIcon aria-hidden="true" />}>
          Add route
        </Button>
      </div>
    </header>
  );
};

export default Header;
