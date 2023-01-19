import React from 'react';
import styles from './typography.module.scss';

interface TypographyProps {
  children: any;
  className?: string;
}

const Typography = (props: TypographyProps) => {
  const { children, className } = props;

  if (!children) {
    return null;
  }

  return (
    <div className={`${styles.typography_root} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default Typography;
