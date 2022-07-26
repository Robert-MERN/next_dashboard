import React, { lazy } from 'react';
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';
import SectionNine from '../sections/SectionNine';
// components import 
import Footer from '../components/Footer';


const about = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | About</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour bgColor="#FBEC7A" about={"about"} />
        <SectionFive bgColor="#FFC2E1" />
        <SectionSix bgColor="#38F1B0" />
        <SectionNine bgColor="#FBEC7A" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default about