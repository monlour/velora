import type {ReactElement} from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type DefaultButtonProps = {
  children: string;
  variant?: 'default';
  icon?: ReactElement;
};

type HeaderActionButtonProps = {
  children: string;
  variant: 'header-action';
  icon: ReactElement;
};

type ButtonProps = DefaultButtonProps | HeaderActionButtonProps;

const Button = ({children, variant = 'default', icon}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.root, {
        [styles.headerAction]: variant === 'header-action',
      })}
      type="button"
      aria-label={variant === 'header-action' ? children : undefined}
    >
      {icon}
      {variant === 'header-action' ? (
        <span className={styles.text}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
