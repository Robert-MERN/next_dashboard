import React from 'react'
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionNine from '../sections/SectionNine';
import CustomOrderSection from '../sections/CustomOrderSection';

// landing sections import 
import LandingSectionFive from '../landingSection/LandingSectionFive';
import LandingSectionSeven from '../landingSection/LandingSectionSeven';
// components import
import Footer from '../components/Footer';

const ServicesNine = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Content Writing</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Need some words to go with that? Consult your trusty dads for help with content writing - we can craft anything from blogs and newsletters to landing pages and websites. Let us know what you want to communicate and we'll do the rest while making sure you sound fresh, snappy and on-brand."
          bgColor="#FBEC7A"
          service="Content Writing & Publications"
          image="cw.png"
        />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <SectionFive bgColor="#b3fffd" />
        <LandingSectionSeven pageName={"content-writing"} content={true} bgColor="#FBEC7A" />
        <CustomOrderSection
          slider1={{ name: "No of Pages", min: 1, max: 100 }}
          bgColor="#ffc780" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesNine