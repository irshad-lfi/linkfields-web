import React from 'react';
import { Col, Row } from 'antd';
import Typography from 'common/Typography';
import styles from './getintouch.module.scss';
import ButtonC from 'components/Button/Button';

const GetInTouch = () => {
  return (
    <Typography>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.tag} lf-caption`}>GET IN TOUCH</div>
          <h2 className={`${styles.title}`}>
            {`Let's connect over a virtual coffee`}
          </h2>
        </div>
        <div className={styles.form_container}>
          <form>
            <input
              id="input"
              type="text"
              placeholder="Your Name"
              className={`${styles.name} lf-input-text`}
            />
            <input
              id="input"
              type="text"
              placeholder="Company Name"
              className={`${styles.companyName} lf-input-text`}
            />
            <input
              id="input"
              type="email"
              placeholder="E-mail"
              className={`${styles.email} lf-input-text`}
            />
            <input
              id="input"
              type="text"
              placeholder="Message"
              className={`${styles.message} lf-input-text`}
            />
            <ButtonC
              theme="dark"
              name="Submit"
              onClick={() => console.log('Linkfields')}
              className={`${styles.btn}`}
            />
          </form>
        </div>
      </div>
    </Typography>
  );
};

export default GetInTouch;
