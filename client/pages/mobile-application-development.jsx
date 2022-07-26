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

const mboile_application_development = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Mobile Application Development</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Got an idea for an app? Need help building it? We'd love to. With more than 1000+ apps developed, from native to cross-platform apps, we have the right combo of technology, people, and experience to deliver custom apps that fit your specifications. We're with you every step of the way- right from the initial concept design of your app to its launch on targeted platforms."
          bgColor="#FBEC7A"
          service="Mobile Application Development"
          image="mad.png"
        />
        <SectionSix bgColor="#C6F4AF" />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <LandingSectionOne bgColor="#ffc780" />
        <LandingSectionSeven serviceSix={{ packageName: "Dad Bod Plan", price: "18,999.99" }} pageName={"service-page"} bgColor="#FBEC7A" />
        <SectionFive bgColor="#b3fffd" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default mboile_application_development