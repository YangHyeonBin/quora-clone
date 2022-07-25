import { Fragment } from 'react';

import Header from '../header/Header';
import NavBar from '../nav/NavBar';
import Feed from '../Feed/Feed';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <Feed />
    </Fragment>
  )
};

export default Main;