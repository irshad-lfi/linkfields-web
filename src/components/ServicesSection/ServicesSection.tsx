import React from 'react';
import styles from './servicesection.module.scss';
import Typography from 'common/Typography';
import Image from 'next/legacy/image';
import ContentWithImage from 'components/ContentWithImage';
import engineering from '../../../public/images/engineering.png';
import consulting from '../../../public/images/consulting.png';
import cloud from '../../../public/images/cloud.png';
import automation from '../../../public/images/automation.png';
import technology from '../../../public/images/technology.png';
import teams from '../../../public/images/teams.png';
import ButtonC, { NoNameBtn } from 'components/Button/Button';
import { Col, Row } from 'antd';

const data = [
  {
    title: 'Engineering',
    desc: 'Creating impact by harnessing technology',
    btn: 'Read more',
    image: engineering,
    fullWidth: true,
    showImg: true,
    featured: true,
  },
  {
    title: 'Consulting',
    desc: 'Facilitating effective technology change',
    btn: '',
    image: consulting,
    fullWidth: false,
    showImg: true,
    featured: false,
  },
  {
    title: 'Cloud',
    desc: 'The future is on the cloud',
    btn: '',
    image: cloud,
    fullWidth: true,
    showImg: true,
    featured: false,
  },
  {
    title: 'Automation',
    desc: 'Amplifying business growth with automation',
    btn: '',
    image: automation,
    fullWidth: true,
    showImg: true,
    featured: false,
  },
  {
    title: 'Technology',
    desc: 'Facilitating change by mobilizing technology',
    btn: '',
    image: technology,
    fullWidth: false,
    showImg: true,
    featured: false,
  },
  {
    title: 'Teams',
    desc: 'Synchronized teamwork for higher output',
    btn: '',
    image: teams,
    fullWidth: false,
    showImg: true,
    featured: false,
  },
  {
    tag: 'Don’t hesitate',
    title: 'Contact the experts',
    desc: 'Synchronized teamwork for higher output',
    btn: '',
    image: null,
    fullWidth: false,
    showImg: false,
    featured: false,
  },
];

const feature_card = data.filter((d) => d.featured);
let remaining = data.filter((d) => !d.featured);
const four_cards = remaining.slice(0, 4);
remaining = remaining.slice(4, data.length);

const ServicesSection = () => {
  return (
    <Typography className={`${styles.container}`}>
      <div className={`${styles.tag_icon}`}>
        <div className={`${styles.circle}`}></div>
        <div className={`${styles.tag} lf-tags`}>What we do</div>
      </div>
      <h2 className={`${styles.main_title}`}>
        Paving the road to a digital change
      </h2>

      <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 16 }}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <ContentWithImage imgSrc={feature_card[0]?.image} borderRadius="true">
            <div className={`${styles.featured_card}`}>
              <h1 className={`${styles.title}`}>{feature_card[0]?.title}</h1>
              <div className={`${styles.desc} lf-bd-lg`}>
                {feature_card[0]?.desc}
              </div>
              <ButtonC
                name={feature_card[0]?.btn}
                type="default"
                onClick={() => console.log('Linkfields')}
                className={`${styles.btn}`}
              />
            </div>
          </ContentWithImage>
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <div className={`${styles.four_cards}`}>
            {four_cards.map((card, id) => {
              return (
                <div
                  className={`${
                    card.fullWidth ? styles.fullImageCard : styles.normalCard
                  }`}
                  key={id}
                >
                  <div className={`${styles.image_container}`}>
                    <Image
                      src={card.image}
                      alt="content-bg-img"
                      layout="fill"
                    />
                  </div>
                  <div className={`${styles.content}`}>
                    <h4 className={`${styles.title}`}>{card.title}</h4>
                    <div className={`${styles.desc} lf-bd-sm`}>{card.desc}</div>
                    <NoNameBtn
                      theme="dark"
                      onClick={() => console.log('Linkfields')}
                      className={`${styles.btn}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
      <div className={`${styles.remaining_cards}`}>
        {remaining.map((card, id) => {
          if (!card.image) {
            return (
              <div className={`${styles.simpleCard}`} key={id}>
                <div className={`${styles.tag_circle}`}>
                  <div className={`${styles.circle}`}></div>
                  <div className={`${styles.tag} lf-caption`}>{card.tag}</div>
                </div>
                <h3 className={styles.title}>{card.title}</h3>
                <NoNameBtn
                  theme="dark"
                  onClick={() => console.log('Linkfields')}
                  className={`${styles.btn}`}
                />
              </div>
            );
          }

          if (card.image) {
            return (
              <div
                className={`${
                  card.fullWidth ? styles.fullImageCard : styles.normalCard
                }`}
                key={id}
              >
                <div className={`${styles.image_container}`}>
                  <Image
                    src={card.image}
                    alt="content-bg-img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={`${styles.content}`}>
                  <h4 className={`${styles.title}`}>{card.title}</h4>
                  <div className={`${styles.desc} lf-bd-sm`}>{card.desc}</div>
                  <NoNameBtn
                    theme="dark"
                    onClick={() => console.log('Linkfields')}
                    className={`${styles.btn}`}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </Typography>
  );
};

export default ServicesSection;
