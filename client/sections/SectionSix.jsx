import React from 'react'
import Image from 'next/image'

// images import 
import html from "../public/images/html.png"
import css from "../public/images/css.png"
import react from "../public/images/react.png"
import angular from "../public/images/angular.png"
import vue from "../public/images/vue.png"
import bootstrap from "../public/images/bootstrap.png"
import go from "../public/images/go.png"
import php from "../public/images/php.png"
import javascript from "../public/images/javascript.png"
import python from "../public/images/python.png"
import java from "../public/images/java.png"
import node from "../public/images/node.png"
import falcon from "../public/images/falcon.png"
import android from "../public/images/android.png"
import ai from "../public/images/a-i.png"
import proc from "../public/images/pro-c.png"
import ps from "../public/images/p-s.png"
import pr from "../public/images/p-r.png"
import fcp from "../public/images/f-c-p.png"
import threeDmax from "../public/images/3d-max.png"
import maya from "../public/images/maya.png"
import blender from "../public/images/blender.png"

const SectionSix = ({ bgColor, services, services2 }) => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex flex-col items-center py-20 px-8 2xl:px-8" >
        <p className='text-46 lg:text-72 2xl:text-100 mb-14 text-center xl:leading-80 leading-50' >{"Our tech stack"}</p>
        <div className='2xl:w-1400 lg:w-1000 w-full p-6 ' >
          {!services && !services2 &&
            <p className='xl:text-34 text-28 text-center' >Front-End</p>
          }
          {!services && !services2 &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <Image width="100" height="100" src={html} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={css} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={react} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={angular} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={vue} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={bootstrap} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={go} className='object-contain w-100' alt="" />
            </div>
          }
          {!services && !services2 &&
            <p className='xl:text-34 text-28 text-center' >Back-End</p>
          }
          {!services && !services2 &&
            <div className='flex 2xl:w-full justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <Image width="100" height="100" src={php} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={javascript} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={python} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={java} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={node} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={falcon} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={android} className='object-contain w-100' alt="" />
            </div>
          }
          {
            services &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <Image width="100" height="100" src={ai} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={proc} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={ps} className='object-contain w-100' alt="" />
            </div>
          }
          {
            services2 &&
            <div className='flex justify-center flex-wrap w-full my-10 gap-3 lg:gap-8 2xl:gap-20'>
              <Image width="100" height="100" src={pr} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={fcp} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={threeDmax} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={maya} className='object-contain w-100' alt="" />
              <Image width="100" height="100" src={blender} className='object-contain w-100' alt="" />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default SectionSix