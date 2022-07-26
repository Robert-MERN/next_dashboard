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
const logo_design = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Logo Design</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Logo design might seem like a simple task, but can be one of the trickiest parts of branding. Your logo is the first line of branding and becomes an icon that people associate with who YOU are. Work with our team of experienced designers throughout the whole creative process to design a logo that conveys your image, the way you want."
          bgColor="#FBEC7A"
          service="Logo Design"
          image="ld.png"
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

export default logo_design