import Layout from 'common/Layout/layout';
import GetInTouch from 'components/GetInTouch/GetInTouch';
import HeroSection from 'components/HeroSection/HeroSection';
import ShowItems from 'components/ShowItems/ShowItems';
import SingleCardSection from 'components/SingleCardSection/SingleCard';
import singleCardBg from '../../public/images/homeSingleCard_bg.png';
import telcom from '../../public/images/telcom.png';
import fmcg from '../../public/images/fmcg.png';
import banking from '../../public/images/banking.png';
import manufacturing from '../../public/images/manufacturing.png';
import { attributes, html } from '../content/home.md';
import FullScreenImg from 'components/FullScreenImg/FullScreenImg';
import fullImg from '../../public/images/company_banner.png';
import Blogs from 'components/Blogs/Blogs';
import SliderComponent from 'components/SliderComponent/SliderComponent';
import ServicesSection from 'components/ServicesSection/ServicesSection';
import engineering from '../../public/images/engineering.png';
import cloud from '../../public/images/cloud.png';
import consulting from '../../public/images/consulting.png';

const items = [
  {
    title: 'Telecom',
    image: telcom,
  },
  {
    title: 'FMCG',
    image: fmcg,
  },
  {
    title: 'Banking',
    image: banking,
  },
  {
    title: 'Manufacturing',
    image: manufacturing,
  },
];

const Home = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <ShowItems
      tag="Industries"
      title="Years of experience with a myriad of industries & fields"
      btn="Explore industries"
      cardType="side"
      items={items}
    />
    <SliderComponent />
    <FullScreenImg
      tag="Our Story"
      title="About Linkfields"
      desc="From careers to iconic moments in our history, see what’s current in Linkfields"
      btn="Learn more"
      image={fullImg}
      onClick={() => console.log('Linkfields')}
    />
    <Blogs />
    <SingleCardSection
      bgColor="#F0F0F0"
      imgSrc={singleCardBg}
      tag="careers"
      title="Ready for an extraordinary work experience?"
      btn="Join us"
      onClick={() => console.log('Linkfields')}
    />
    <GetInTouch />
  </Layout>
);

export default Home;
