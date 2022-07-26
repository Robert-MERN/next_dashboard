import React from 'react'
import { useRouter } from "next/router";
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Image from 'next/image';
// importing images
import iconWebp from "../public/images/icon.webp";


const Footer = ({ home, bgColor }) => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
  const router = useRouter();

  return (
    <>

      <div style={{ backgroundColor: bgColor }} className="py-8 px-8 flex flex-col items-center" >
        {home &&
          <div className='w-full lg:w-1000 2xl:w-1200 flex xl:flex-row flex-col justify-center flex-wrap' >
            <div className="flex-1 px-6  mb-14 cursor-pointer flex justify-center">
              <div onClick={() => router.push("/")} >
                <>
                  <Image src={iconWebp} className='object-contain w-fit lg:w-400  xl:w-fit' alt="" />
                </>
              </div>
            </div>
            <div className="flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center">
              <p className='text-24 my-1 mb-6' >quick links</p>
              <div onClick={() => router.push("/")} >
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Home</p>
              </div>
              <div onClick={() => router.push("/services")} href="/services" >
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Services</p>
                </>
              </div>
              <div onClick={() => router.push("/about")} href="/about" >
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >About</p>
                </>
              </div>
              <div onClick={() => router.push("/contact")} href="/contact" >
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Contact</p>
                </>
              </div>
            </div>
            <div className="flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center">
              <p className='text-24 my-1 mb-6' >Services</p>
              <a href="/web-design-services-v1-a" target="_blank">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Design Promo</p>
                </>
              </a>

              <div onClick={() => router.push("/web-design-development")} href="/web-design-development">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Design & Development</p>
                </>
              </div>
              <div onClick={() => router.push("/logo-design")} href="/logo-design">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Logo Design</p>
                </>
              </div>
              <div onClick={() => router.push("/web-application-development")} href="/web-application-development">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Web Application Development</p>
              </div>
              <div onClick={() => router.push("/search-engine-optimization")} href="/search-engine-optimization">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Search Engine Optimization</p>
              </div>
              <div onClick={() => router.push("/social-media-marketing")} href="/social-media-marketing">
                <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Social Media Marketing</p>
              </div>
              <div onClick={() => router.push("/mobile-application-development")} href="/mobile-application-development">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Mobile Application Development</p>
                </>
              </div>
              <div onClick={() => router.push("/graphic-design")} href="/graphic-design">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Graphic Design</p>
                </>
              </div>
              <div onClick={() => router.push("/video-editing")} href="/video-editing">
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Video Editing</p>
                </>
              </div>
              <div onClick={() => router.push("/content-writing-publications")}>
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Content Writing & Publications</p>
                </>
              </div>
              <div onClick={() => router.push("/testimonials")}>
                <>
                  <p className='text-18 font-bold font-sans my-1 cursor-pointer hover:underline' >Testimonials</p>
                </>
              </div>
            </div>
            <div className="flex-1 px-0 sm:px-3 mb-14 xl:text-left">
              <p className='text-24 my-1 mb-6 text-center xl:text-left' >Contact</p>
              <a rel="noreferrer noopener" href="tel:647-660-1776">
                <p className='text-18 font-bold font-sans my-1 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline' ><CallIcon className='mr-3' /> <span>647-660-1776</span></p>
              </a>
              <a rel="noreferrer noopener" href="mailto:sales@daddesignsweb.com">
                <p className='text-18 font-bold font-sans my-3 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline' ><MailIcon className='mr-3' /> <span>sales@daddesignsweb.com</span></p>
              </a>
              <p className='text-18 font-bold font-sans mt-3 flex xl:justify-start justify-center w-full items-start xl:items-center text-center xl:text-left' >
                <LocationOnIcon className='mr-0 sm:mr-3' style={{ transform: "scale(1.2)" }} ></LocationOnIcon>
                <span>218-39 New Delhi Drive, Markham ON L3S 0E1</span></p>
            </div>
          </div>
        }
        <div className={`w-full lg:w-1000 2xl:w-1400 items-center flex justify-between flex-col xl:flex-row py-6 ${home && "border-t-1 border-black"}`}>
          <div>
            <p className='text-17 font-medium font-sans my-1 text-center' >Copyright © Dad Designs Web - All Rights Reserved 2022</p>
          </div>
          {!home &&
            <div onClick={() => router.push("/")} href="/" >
              <>
                <Image width="300" height="300" className='object-contain' src={iconWebp} alt="" />
              </>
            </div>
          }
          <div className='flex' >
            <div onClick={() => router.push("/terms-conditions")}>
              <>
                <p className='text-14 sm:text-17 font-medium font-sans pr-4 my-1 border-r border-slate-500 cursor-pointer' >Terms & Conditions</p>
              </>
            </div>
            <div onClick={() => router.push("/privacy-policy")} >
              <>
                <p className='text-14 sm:text-17 font-medium font-sans my-1  pl-4 cursor-pointer' >Privacy Policy</p>
              </>
            </div>
          </div>
          <div className='flex items-center justify-between my-4' >
            <a rel="noreferrer noopener" href="https://www.instagram.com/daddesignsweb/" target="_blank" >
              <InstagramIcon className='scale-150 mr-3' ></InstagramIcon>
            </a>
            <a rel="noreferrer noopener" href="https://www.facebook.com/daddesignsweb" target="_blank" >
              <FacebookIcon className='scale-150 ml-3' ></FacebookIcon>
            </a>
          </div>
        </div>
        {!home &&
          <div className={`w-full lg:w-1000 2xl:w-1400 flex md:flex-row flex-col items-center mb-10 xl:mb-0 `} >
            <a rel="noreferrer noopener" href="tel:647-660-1776" className="flex-1 md:border-r-1 md:border-black md:pr-5 flex md:justify-end justify-center font-sans text-18 font-semibold items-center">
              <CallIcon className='mr-3' ></CallIcon> <span>647-660-1776</span>
            </a>
            <a rel="noreferrer noopener" href="mailto:sales@daddesignsweb.com" className="flex-1 md:pl-5 flex font-sans text-18 font-semibold items-center">
              <MailIcon className='mr-3' ></MailIcon> <span>sales@daddesignsweb.com</span>
            </a>
          </div>
        }

      </div >
    </>
  )
}

export default Footer