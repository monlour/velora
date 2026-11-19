import BicycleIcon from '../../assets/icons/bicycle.svg?react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a className={styles.root} href="/">
      <span className={styles.iconWrapper} aria-hidden="true">
        <BicycleIcon className={styles.icon} />
      </span>
      <span className={styles.name}>Velora</span>
    </a>
  );
};

export default Logo;
