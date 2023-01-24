import React, { CSSProperties } from 'react';
import styles from './button.module.scss';
import { Button } from 'antd';
import Image from 'next/image';
import arrow_img from '../../../public/images/arrow.png';
import noNameArraow from '../../../public/images/noNameArrow_1.png';
import darkArrow from '../../../public/images/dark_arrow.png';
import Typography from 'common/Typography';

interface IButton {
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  theme?: 'light' | 'dark';
  className?: string;
  noArrow?: true | false;
  name?: string;
  onClick: () => void;
}

const ButtonC = ({
  theme,
  type,
  className,
  name,
  onClick,
  noArrow,
}: IButton) => {
  return (
    <Typography>
      <Button
        type={theme === 'light' ? type : type}
        className={`${theme === 'light' ? styles.light_btn : styles.dark_btn} ${
          name ? null : styles.noName
        } ${className || ''} switzer-regular`}
        onClick={onClick}
      >
        {name ? (
          <span className={`${styles.btn_title} lf-btn`}>{name}</span>
        ) : null}
        {noArrow ? null : (
          <Image alt="arraow" src={arrow_img} height={14} width={14} />
        )}
      </Button>
    </Typography>
  );
};

interface INonameProps {
  theme: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const NoNameBtn = ({ theme, className, onClick }: INonameProps) => {
  return (
    <div
      className={`${
        theme === 'light' ? styles.light_theme : styles.dark_theme
      } ${className ? className : ''}`}
      onClick={onClick}
    >
      <Image
        alt="arraow"
        src={theme === 'light' ? noNameArraow : darkArrow}
        height={14}
        width={18}
      />
    </div>
  );
};

export default ButtonC;
