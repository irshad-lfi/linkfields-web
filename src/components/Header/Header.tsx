import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Typography from 'common/Typography';
import Image from 'next/legacy/image';
import logo from '../../../public/images/lfi_logo.png';
import ButtonC from 'components/Button/Button';

const Header = () => {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(60);

  // const controlNavbar = () => {
  //   console.log('mansur', window.scrollY);
  //   console.log('lastScrollY', lastScrollY);

  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY >= lastScrollY) { // if scroll down hide the navbar
  //       setShow(false);
  //     } else { // if scroll up show the navbar
  //       setShow(true);
  //     }

  //     // remember current page location to use in the next move
  //     // setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);

  return (
    <Typography className={`${styles.container}`}>
      <div className={styles.img_con}>
        <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.links}>
        <div className={`${styles.link} lf-btn`}>Services</div>
        <div className={`${styles.link} lf-btn`}>Industries</div>
        <div className={`${styles.link} lf-btn`}>Company</div>
        <div className={`${styles.link} lf-btn`}>Carrers</div>
      </div>
      <ButtonC
        type="default"
        onClick={() => console.log('Linkfields')}
        name="Contact us"
        className={styles.btn}
        noArrow={true}
      />
    </Typography>
  );
};

export default Header;
