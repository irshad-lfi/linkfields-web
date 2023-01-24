import React from 'react';
import styles from './fullscreenimg.module.scss';
import Typography from 'common/Typography';
import ContentWithImage from 'components/ContentWithImage';
import ButtonC from 'components/Button/Button';

interface IFullScreenImgProps {
  tag?: string;
  title?: string;
  image?: any;
  desc?: string;
  btn?: string;
  onClick?: () => void;
}

const FullScreenImg = ({
  title,
  image,
  tag,
  desc,
  btn,
  onClick,
}: IFullScreenImgProps) => {
  return (
    <Typography>
      <ContentWithImage imgSrc={image} borderRadius="false">
        <div className={`${styles.container}`}>
          <div className={styles.tag_con}>
            <div className={`${styles.circle}`}></div>
            <div className={`${styles.tag} lf-caption`}>{tag}</div>
          </div>
          <h2 className={`${styles.title}`}>{title}</h2>
          <div className={`${styles.desc} lf-bd-lg`}>{desc}</div>
          <ButtonC
            type="primary"
            theme="light"
            name={btn}
            className={`${styles.btn}`}
            onClick={onClick}
          />
        </div>
      </ContentWithImage>
    </Typography>
  );
};

export default FullScreenImg;
