import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import './styles.scss';

export default function App(): React.ReactElement {
  return (
    <div className="Container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
