import Footer from 'common/Footer/Footer';
import Header from 'components/Header/Header';
import Link from 'next/link';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
