import React from 'react';
import Typography from 'common/Typography';
import styles from './singlecard.module.scss';
import Image from 'next/legacy/image';
import ButtonC from 'components/Button/Button';
import ContentWithImage from 'components/ContentWithImage';

interface ISingleCardProps {
  bgColor: string;
  imgSrc: any;
  tag: string;
  title: string;
  btn: string;
  onClick: () => void;
  className?: string;
}

const SingleCardSection = ({
  imgSrc,
  title,
  tag,
  btn,
  onClick,
  className,
  bgColor,
}: ISingleCardProps) => {
  return (
    <Typography>
      <div
        className={`${styles.container} ${className || ''}`}
        style={{ background: bgColor }}
      >
        <ContentWithImage borderRadius="true" imgSrc={imgSrc}>
          <div className={`${styles.singlecardContainer}`}>
            <div className={styles.tag_con}>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.tag} lf-caption`}>{tag}</div>
            </div>
            <h2 className={`${styles.title} `}>{title}</h2>
            <ButtonC
              theme="light"
              type="primary"
              name={btn}
              onClick={() => console.log('Linkfields')}
              className={`${styles.btn}`}
            />
          </div>
        </ContentWithImage>
      </div>
    </Typography>
  );
};

export default SingleCardSection;
