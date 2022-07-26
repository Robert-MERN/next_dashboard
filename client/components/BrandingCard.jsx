import React from 'react'
import Image from "next/image";

const BrandingCard = ({ bgColor, icon, text }) => {
  const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className={`border-4 border-transparent  xl:w-270 xl:min-h-200 md:h-300  md:w-450  w-270 min-h-200 rounded-xl transition-all duration-400  p-4  flex flex-col items-center justify-center`} >
        <div className='w-full flex justify-center my-4'>
          <Image src={icon} objectFit="contain" objectPosition="center" width="100" height="100" alt="brands" />
        </div>
        <p className='text-19 text-center leading-none my-4' >{text}</p>
      </div>
    </>
  )
}

export default BrandingCard