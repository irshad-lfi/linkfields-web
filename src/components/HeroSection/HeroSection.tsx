import Image from 'next/image';
import React from 'react';
import styles from './herosection.module.scss';
import hero_section_img from '../../../public/images/hero_section_img.png';
import heroSecImgM from '../../../public/images/heroSecImg_2.png';
import arrow_img from '../../../public/images/arrow.png';
import Typography from 'common/Typography';
import ButtonC from 'components/Button/Button';

const HeroSection = () => {
  return (
    <Typography>
      <div className={styles.hero_container}>
        <div className={styles.content_sec}>
          <h2 className={styles.title}>An automation revolution in banking</h2>
          <div className={`${styles.desc} lf-bd-lg`}>
            Re-constructing the present banking scenario into a future-ready
            workspace.
          </div>
          <ButtonC
            theme="light"
            type="primary"
            name="Explore more"
            className={styles.btn}
            onClick={() => console.log('mansur')}
          />
        </div>
        <div className={styles.image_container}>
          <Image
            alt="hero section image"
            src={hero_section_img}
            fill
            className={styles.image}
          />
          <Image
            alt="hero section image"
            src={heroSecImgM}
            fill
            className={styles.image_m}
          />
        </div>
      </div>
    </Typography>
  );
};

export default HeroSection;
