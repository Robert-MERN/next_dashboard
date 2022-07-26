import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

// sections import 
import SectionFour from '../sections/SectionFour';
import SectionFive from '../sections/SectionFive';
import SectionNine from '../sections/SectionNine';
import SectionOne from '../sections/SectionOne';
import FaqParent from '../sections/FaqParent';
// landing sections import 
import LandingSectionTwo from '../landingSection/LandingSectionTwo';
import LandingSectionThree from '../landingSection/LandingSectionThree';
import LandingSectionFour from '../landingSection/LandingSectionFour';
import LandingSectionSix from '../landingSection/LandingSectionSix';
import LandingSectionOne from '../landingSection/LandingSectionOne';
import LandingSectionFive from '../landingSection/LandingSectionFive';
import LandingSectionSeven from '../landingSection/LandingSectionSeven';
// components import
import Footer from '../components/Footer';

// images import
import line1 from "../public/images/landline1.webp";
import line2 from "../public/images/customline3.jpg";
import line3 from "../public/images/customline2.jpg";
import line4 from "../public/images/landline4.jpg";
import line5 from "../public/images/landlinejack.jpg";
import line6 from "../public/images/landline5.jpg";
import line7 from "../public/images/customline.jpg";
import line8 from "../public/images/custom36.jpg";
import line9 from "../public/images/custom35.jpg";
import line10 from "../public/images/landline9.jpg";
import line11 from "../public/images/linemiddle.jpg";
import line12 from "../public/images/lineLast.jpg";

const LandingPage = () => {

    const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="" />
                <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
                <title id="website-title">Stunning Custom Websites That Convert Starting From Just $449.99</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="topSection" className='w-screen min-h-screen variation-one' >
                <SectionOne landingPage={true} />
                <div style={{ backgroundColor: "#FBEC7A" }} >
                    <Image objectFit='fill' src={line1} alt="lines" />
                </div>
                <LandingSectionOne bgColor="#FBEC7A" />
                <div style={{ backgroundColor: "#FFC2E1" }} >
                    <Image objectFit='fill' src={line2} alt="lines" />
                </div>
                <SectionFive landingPage={true} bgColor="#FFC2E1" />
                <div style={{ backgroundColor: "#FCEAC7" }} >
                    <Image objectFit='fill' src={line3} alt="lines" />
                </div>
                <LandingSectionThree bgColor="#FCEAC7" />
                <div style={{ backgroundColor: "#F8C5E0" }} >
                    <Image objectFit='fill' src={line4} alt="lines" />
                </div>
                <LandingSectionFour bgColor="#F8C5E0" />
                <div style={{ backgroundColor: "#FCEAC7" }} >
                    <Image objectFit='fill' src={line5} alt="lines" />
                </div>
                <LandingSectionFive bgColor="#FCEAC7" />
                <div style={{ backgroundColor: "#C1F585" }} >
                    <Image objectFit='fill' src={line6} alt="lines" />
                </div>
                <LandingSectionSix bgColor="#C1F585" />
                <div style={{ backgroundColor: "#FBEC7A" }} >
                    <Image objectFit='fill' src={line7} alt="lines" />
                </div>
                <LandingSectionSeven pageName={"landing-page"} bgColor="#FBEC7A" />
                <div style={{ backgroundColor: "#C1F585" }} >
                    <Image objectFit='fill' src={line8} alt="lines" />
                </div>
                <SectionFour bgColor="#C1F585" landingPage={true} />
                <div style={{ backgroundColor: "#F8C5E0" }} >
                    <Image objectFit='fill' src={line9} alt="lines" />
                </div>
                <FaqParent bgColor="#F8C5E0" />
                <div style={{ backgroundColor: "#66B6FF" }} >
                    <Image objectFit='fill' src={line10} alt="lines" />
                </div>
                <LandingSectionTwo bgColor="#66B6FF" />
                <div style={{ backgroundColor: "#dbc074" }} >
                    <Image objectFit='fill' src={line11} alt="lines" />
                </div>
                <SectionNine bgColor="#dbc074" />
                <div style={{ backgroundColor: "#FFCAA8" }} >
                    <Image objectFit='fill' src={line12} alt="lines" />
                </div>
                <Footer home={false} bgColor="#FFCAA8" />
            </div>
        </>

    )
}

export default LandingPage