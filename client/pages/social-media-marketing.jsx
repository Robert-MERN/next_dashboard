import React from 'react'
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionNine from '../sections/SectionNine';
// landing sections import 
import LandingSectionFive from '../landingSection/LandingSectionFive';
import LandingSectionSeven from '../landingSection/LandingSectionSeven';
// components import
import Footer from '../components/Footer';
const ServicesFive = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Social Media Marketing</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Facebook and TikTok and Instagram, oh my! Staying relevant in today's world of short attention spans and consumer mindset can be overwhelming. If you don't have a clue where to start when it comes to social media, don't worry. Our marketing department will assign you a strategist that will work with you from start to finish to figure out:"
          bgColor="#FBEC7A"
          service="Social Media Marketing"
          image="ssm.png"
        />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <SectionFive bgColor="#b3fffd" />
        <LandingSectionSeven serviceFive={true} pageName={"service-page"} bgColor="#FBEC7A" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesFive