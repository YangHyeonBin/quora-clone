import Header from '../header/Header';
import NavBar from '../nav/NavBar';
import Feed from '../feed/Feed';
import Ad from '../ad/Ad';

import styles from './Main.module.css';
import { Fragment } from 'react';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <main className={styles.container}>
        <NavBar className={styles.navBar} />
        <Feed className={styles.feed} />
        <Ad className={styles.ad} />
      </main>
    </Fragment>
  )
};

export default Main;