import Head from 'next/head'
// setcions import
import SectionFive from '../sections/SectionFive';
import Footer from '../components/Footer';
import LandingSectionOne from '../landingSection/LandingSectionOne';
import SectionOne from '../sections/SectionOne';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
import SectionFour from '../sections/SectionFour';
import SectionSix from '../sections/SectionSix';
import SectionSeven from '../sections/SectionSeven';
import SectionEight from '../sections/SectionEight';
import SectionNine from '../sections/SectionNine';


const home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
        <title id="website-title">Dad Designs Web | Home</title>
      </Head>
      <div id="topSection" className={'w-screen min-h-screen variation-one'} >

        <SectionOne home="true" ></SectionOne>
        <LandingSectionOne bgColor="#ffc780"></LandingSectionOne>
        <SectionTwo bgColor="#FCEAC7"></SectionTwo>
        <SectionFive bgColor="#FFC2E1"></SectionFive>
        <SectionFour landingPage={true} bgColor="#C1F585" ></SectionFour>
        <SectionThree bgColor="#FBEC7A" ></SectionThree>
        <SectionSix bgColor="#38F1B0" ></SectionSix>
        <SectionSeven bgColor="#BACE55" ></SectionSeven>
        <SectionEight bgColor="#C6F4AF" ></SectionEight>
        <SectionNine bgColor="#66B6FF" ></SectionNine>
        <Footer bgColor="#FFCAA8" home={true} ></Footer>
      </div>
    </>
  )
}

export default home
