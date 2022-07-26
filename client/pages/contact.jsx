import React from 'react'
import Head from 'next/head'

// sections import 
import SectionOne from '../sections/SectionOne';
import SectionEight from '../sections/SectionEight';
import SectionNine from '../sections/SectionNine';
// components import 
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="" />
                <meta name="google-site-verification" content="Oz0BqM6gmPoS5We6gF98vLq07cZjOOq6eviTxYsBV2Y" />
                <title id="website-title">Dad Designs Web | Contact Us</title>
            </Head>
            <div id="topSection" className='w-screen min-h-screen variation-one' >
                <SectionOne contact={true} />
                <SectionNine bgColor="#FFC2E1" />
                <SectionEight bgColor="#66B6FF" />
                <Footer bgColor="#FFCAA8" home={true} />
            </div>
        </>

    )
}

export default Contact