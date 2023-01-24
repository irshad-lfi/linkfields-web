import React from 'react';
import styles from './footer.module.scss';
import Typography from 'common/Typography';
import Image from 'next/legacy/image';
import footerLFI from '../../../public/images/footer_lfi.png';
import linkedin from '../../../public/images/linkedin.png';
import twitter from '../../../public/images/twitter.png';
import facebook from '../../../public/images/facebook.png';

const services = [
  {
    title: 'Engineering',
    sections: ['Application development', 'Quality control', 'DevOps'],
  },
  {
    title: 'Consulting',
    sections: [
      'Product Discovery',
      'Solution Discovery',
      'UX / UI Design',
      'Technology Advisory',
    ],
  },
  {
    title: 'Cloud',
    sections: [
      'Cloud Consulting',
      'Cloud Migration',
      'Cloud Development',
      'Kubernetes Services',
    ],
  },
  {
    title: 'Automation',
    sections: ['Digital Transformation', 'Robotic Process  Automation'],
  },
  {
    title: 'Technology',
    sections: ['Big Data Enginnering', 'AI & Machine Learning'],
  },
  {
    title: 'Teams',
    sections: ['Staff Augmentation', 'Managed Team'],
  },
];

const Footer = () => {
  return (
    <Typography className={`${styles.container}`}>
      <div className={`${styles.primary_links}`}>
        <div className={`${styles.first_section}`}>
          <Image
            src={footerLFI}
            alt="lfi"
            width={39}
            height={42}
            className={`${styles.title}`}
          />
          <div className={`${styles.subsection_1}`}>
            <div className={`${styles.btn} lf-btn`}>About Us</div>
            <div className={`${styles.btn} lf-btn`}>Our Approach</div>
            <div className={`${styles.btn} lf-btn`}>Careers</div>
            <div className={`${styles.btn} lf-btn`}>Blog</div>
            <div className={`${styles.btn} lf-btn`}>Contact us</div>
          </div>
          <div className={`${styles.subsection_2}`}>
            <div className={`${styles.social_links}`}>
              <Image
                src={linkedin}
                alt="linkedin"
                width={22}
                height={22}
                className={`${styles.img_links}`}
                // style={{marginRight: "1rem"}}
              />
              <Image
                src={twitter}
                alt="twitter"
                width={25}
                height={20}
                className={`${styles.img_links}`}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={25}
                height={25}
                className={`${styles.img_links}`}
              />
            </div>
            <div className={`${styles.btn} lf-btn`}>info@linkfields.com</div>
          </div>
        </div>
        <div className={`${styles.second_section}`}>
          <div className={`${styles.title} lf-caption`}>Services</div>
          <div className={`${styles.servicesSection}`}>
            {services.map((service, id) => {
              return (
                <div className={styles.service} key={id}>
                  <div className={`${styles.btn} lf-btn`}>{service.title}</div>
                  <div className={`${styles.sections}`}>
                    {service.sections.map((s, id) => {
                      return (
                        <div className={`${styles.link} lf-link`} key={id}>
                          {s}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.third_section}`}>
          <div className={`${styles.title} lf-caption`}>Industries</div>
          <div className={`${styles.industries}`}>
            <div className={`${styles.link} lf-link`}>Telecom</div>
            <div className={`${styles.link} lf-link`}>Banking</div>
            <div className={`${styles.link} lf-link`}>Insurance</div>
            <div className={`${styles.link} lf-link`}>Fintech</div>
            <div className={`${styles.link} lf-link`}>FMCG</div>
            <div className={`${styles.link} lf-link`}>Mining</div>
          </div>
        </div>
      </div>
      <div className={`${styles.mobile}`}>
        <div className={`${styles.social_links}`}>
          <Image
            src={linkedin}
            alt="linkedin"
            width={22}
            height={22}
            className={`${styles.img_links}`}
            // style={{marginRight: "1rem"}}
          />
          <Image
            src={twitter}
            alt="twitter"
            width={25}
            height={20}
            className={`${styles.img_links}`}
          />
          <Image
            src={facebook}
            alt="facebook"
            width={25}
            height={25}
            className={`${styles.img_links}`}
          />
        </div>
        <div className={`${styles.btn} lf-btn`}>info@linkfields.com</div>
      </div>
      <div className={`${styles.secondary_links}`}>
        <div className={`${styles.sec_link}`}>
          © Copyright 2022 Linkfields. All Rights Reserved
        </div>
        <div className={`${styles.sec_links}`}>
          <div className={`${styles.link_1}`}>Privacy Policy</div>
          <div className={`${styles.link_2}`}>Terms of Use</div>
          <div className={`${styles.link_3}`}>Cookies Policy</div>
        </div>
      </div>
    </Typography>
  );
};

export default Footer;
