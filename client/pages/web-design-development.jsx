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

const ServicesOne = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Web Development</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="First impressions are everything and your website is a representation of who you are. It's the first place anyone looks when it comes to selling your services, showcasing your work, or connecting with new leads. Let's build you a website that you (and your dad!) would be proud of. Complex, multi-page website? Small, simple landing page? If you can dream it, we can build it. Our team of experienced web developers will work with you from start to finish to figure out exactly what you need and how we can translate your unique personality onto the web."
          bgColor="#FBEC7A"
          service="Web Design & Development"
          image="wd.png"
        />
        <SectionSix bgColor="#C6F4AF" />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <LandingSectionOne bgColor="#ffc780" />
        <SectionFive bgColor="#b3fffd" />
        <LandingSectionSeven pageName={"service-page"} bgColor="#FBEC7A" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesOne