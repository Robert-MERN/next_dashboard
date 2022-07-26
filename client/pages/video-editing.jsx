import React from 'react'
import Head from 'next/head'


// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';
import SectionNine from '../sections/SectionNine';

// landing sections import 
import LandingSectionFive from '../landingSection/LandingSectionFive';

// components import
import Footer from '../components/Footer';
import CustomOrderVideo from '../sections/CustomOrderVideo';

const ServicesEight = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Video Editing</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="Take your branding a step further and bring it to life. Video is the future of the web, from social media to advertising. We offer 2D and 3D animation from scratch, or we can create promo or product videos if you already have footage. Let us tell your story."
          bgColor="#FBEC7A"
          service="Video Editing"
          image="ve.png"
        />
        <SectionFive services={true} bgColor="#b3fffd" />
        <SectionSix services2={true} bgColor="#C6F4AF" />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <SectionFive bgColor="#d1b3ff" />
        <CustomOrderVideo bgColor="#ffc780" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesEight