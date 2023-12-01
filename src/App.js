import { useState } from 'react';
import React from 'react';
import Header from './components/Header'
import SectionFirst from './components/SectionFirst'
import SectionSecond from './components/SectionSecond'
import SectionThird from './components/SectionThird';
import SectionFouth from './components/SectionFourth';
import SectionFifth from './components/SectionFifth';
import Footer from './components/Footer';

const App=()=> {
  const [itemState, setItemState]=useState([{
    id: 1,
    name: 'Hacker',
    email: '@JhonNFT',
    ava: 'gifAvatar1.gif',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 1.png',
    percent: '20%'
  },
  {
    id: 2,
    name: 'Jhon',
    email: '@JhonNFT',
    ava: 'Avatar2.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 2.png',
    percent: '20%'
  },
  {
    id: 3,
    name: 'Hacker',
    email: '@JhonNFT',
    ava: 'Avatar3.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 3.png',
    percent: '20%'
  },
  {
    id: 4,
    name: 'Jhon',
    email: '@JhonNFT',
    ava: 'Avatar4.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 4.png',
    percent: '20%'
  },
  {
    id: 5,
    name: 'Jhon',
    email: '@JhonNFT',
    ava: 'Avatar4.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 4.png',
    percent: '20%'
  },
  {
    id: 6,
    name: 'Jhon',
    email: '@JhonNFT',
    ava: 'Avatar4.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 4.png',
    percent: '20%'
  },
  {
    id: 7,
    name: 'Jhon',
    email: '@JhonNFT',
    ava: 'Avatar4.png',
    ethereum: 1.2,
    dollor: 2432.35,
    artwork: 'Девушка 4.png',
    percent: '20%'
  }
  ])

  return (
    <div className="App">
      <Header/>
      <SectionFirst/>
      <SectionSecond itemState={itemState}/>
      <SectionThird itemState={itemState}/>
      <SectionFouth/>
      <SectionFifth/>
      <Footer/>
    </div>
  );
}

export default App;
