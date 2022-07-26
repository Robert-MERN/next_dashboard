import React from 'react'
import Head from 'next/head'

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionSix from '../sections/SectionSix';
import SectionNine from '../sections/SectionNine';
// landing sections import 
import LandingSectionFive from '../landingSection/LandingSectionFive';
import LandingSectionSeven from '../landingSection/LandingSectionSeven';
// components import
import Footer from '../components/Footer';
const ServicesFour = () => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | SEO</title>
      </Head>
      <div id="topSection" className='w-screen min-h-screen variation-one'>
        <SectionFour
          serviceText="What's SEO? SEO targets unpaid traffic through the use of search engines and keywords rather than using ad spend to bring more quality, relevant visitors to your website, resulting in more conversions or leads for your business. If you haven't been optimizing your site or content for SEO, start now! Our team will help develop a targeted strategy that will work for your specific niche."
          bgColor="#FBEC7A"
          service="Search Engine Optimization"
          image="seo.png"
        />
        <LandingSectionFive half={true} bgColor="#FFC2E1" />
        <SectionFive bgColor="#b3fffd" />
        <LandingSectionSeven serviceFour={true} pageName={"service-page"} bgColor="#FBEC7A" />
        <SectionNine bgColor="#66B6FF" />
        <Footer bgColor="#FFCAA8" home={true} />
      </div>
    </>
  )
}

export default ServicesFour