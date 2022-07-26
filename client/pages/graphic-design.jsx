import React from 'react'
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';
import SectionNine from '../sections/SectionNine';
// landing sections import 
import LandingSectionOne from '../landingSection/LandingSectionOne';
import LandingSectionFive from '../landingSection/LandingSectionFive';
import LandingSectionSeven from '../landingSection/LandingSectionSeven';
// components import
import Footer from '../components/Footer';

const ServicesSeven = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Graphic Design</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="We can't all be artistic. But at Dad Designs, we are! Need something designed? Throw it at us. We have a team who can bring any vision you have to life. Flyers? Logos? Social media graphics or banners? Website graphics? You name it, we can design it. Just chat with one of our designers today and let us know what you need."
          bgColor="#FBEC7A"
          service="Graphic Design"
          image="gd.png"
        />
        <SectionSix services={true} bgColor="#C6F4AF" />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <LandingSectionOne logo={true} bgColor="#ffc780" />
        <SectionFive bgColor="#b3fffd" />
        <LandingSectionSeven serviceTwo={true} pageName={"service-page"} bgColor="#FBEC7A" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesSeven