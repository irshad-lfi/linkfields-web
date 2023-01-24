import Typography from 'common/Typography';
import ButtonC from 'components/Button/Button';
import Image from 'next/legacy/image';
import React, { CSSProperties } from 'react';
import styles from './showitems.module.scss';

interface IShowitems {
  tag: string;
  title: string;
  btn?: string;
  desc?: string;
  items?: any[];
  cardCss?: string | CSSProperties;
  cardType: 'side' | 'vertical';
}

const ShowItems = ({
  tag,
  title,
  btn,
  desc,
  items,
  cardCss,
  cardType,
}: IShowitems) => {
  return (
    <Typography className={`${styles.container}`}>
      <div className={`${styles.content_section}`}>
        <div className={styles.tag_con}>
          <div className={`${styles.circle}`}></div>
          <div className={`${styles.tag} lf-caption`}>{tag}</div>
        </div>
        <h3 className={`${styles.title}`}>{title}</h3>
        {btn ? (
          <ButtonC
            type="primary"
            theme="light"
            name={btn}
            onClick={() => console.log('Linkfields')}
            className={`${styles.btn}`}
          />
        ) : null}
        {desc ? <div className={`${styles.desc}`}>{desc}</div> : null}
      </div>
      <div className={`${styles.items_section}`}>
        {items?.map((item, id) => {
          return (
            <div
              className={`${
                cardType === 'side' ? styles.sideCard : styles.verticalCard
              } ${cardCss}`}
              key={id}
            >
              <h5 className={`${styles.title}`}>{item.title}</h5>
              <div className={`${styles.img_container}`}>
                <Image
                  alt="img"
                  src={item.image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Typography>
  );
};

export default ShowItems;
