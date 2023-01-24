import React, { useRef } from 'react';
import styles from './slider.module.scss';
import Typography from 'common/Typography';
import { Carousel } from 'antd';
import ButtonC, { NoNameBtn } from 'components/Button/Button';

const sliderData = [
  {
    title: 'Top 5 Engineering Agencies Worldwide. CSS Design Awards',
    image: '',
    test: '',
  },
  {
    title: 'Top 1 Engineering Agencies Worldwide. CSS Design Awards',
    image: '',
    test: '',
  },
  {
    title: 'Top 2 Engineering Agencies Worldwide. CSS Design Awards',
    image: '',
    test: '',
  },
];

const SliderComponent = () => {
  const sliderRef: any = useRef();

  return (
    <Typography className={`${styles.container}`}>
      <div className={`${styles.tag_con}`}>
        <div className={`${styles.circle}`}></div>
        <div className={`${styles.tag} lf-caption`}>awards & recognitions</div>
      </div>
      <Carousel
        ref={sliderRef}
        swipeToSlide={true}
        draggable
        className={`${styles.carousel}`}
      >
        {sliderData.map((slide, id) => {
          return (
            <div className={`${styles.slide}`} key={id}>
              <h2 className={`${styles.title}`}>{slide.title}</h2>
              <div className={`${styles.test}`}>{slide.test}</div>
            </div>
          );
        })}
      </Carousel>

      <div className={`${styles.button_con}`}>
        <NoNameBtn
          theme="light"
          onClick={() => {
            sliderRef.current.prev();
          }}
          className={styles.prevBtn}
        />
        <NoNameBtn
          theme="light"
          onClick={() => {
            sliderRef.current.next();
          }}
          className={styles.nextBtn}
        />
      </div>
    </Typography>
  );
};

export default SliderComponent;
