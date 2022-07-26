import React from 'react';
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
// components import
import Footer from '../components/Footer';

const Terms = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Terms & Conditions</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour bgColor="#FBEC7A" terms={"Terms & Conditions"} />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default Terms