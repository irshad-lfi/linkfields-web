import React from 'react';
import { useRef } from 'react';
import styles from './slider.module.scss';
import { Image, Carousel } from 'antd';

const Slider = () => {
  const list = [
    'img/footer_img1.png',
    'img/footer_img2.png',
    'img/footer_img3.png',
    'img/footer_img4.png',
    'img/footer_img5.png',
    'img/footer_img6.png',
    'img/footer_img1.png',
    'img/footer_img2.png',
    'img/footer_img3.png',
    'img/footer_img4.png',
    'img/footer_img5.png',
    'img/footer_img6.png',
  ];
  const sliderRef: any = useRef();

  const handlePrev = () => sliderRef.current.prev();

  const handleNext = () => sliderRef.current.next();

  return (
    <div className={styles.container}>
      <Carousel
        ref={sliderRef}
        // pauseOnDotsHover={true}
        // style={{ width: '1040px' }}
        className={styles.carousel_root}
        autoplay={true}
        speed={2000}
        autoplaySpeed={2000}
        swipeToSlide={true}
        draggable
        slidesToShow={6}
        dots={false}
      >
        {list.map((data, ind) => (
          <div key={ind} className={styles.image_container}>
            <Image preview={false} className={styles.image} src={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
