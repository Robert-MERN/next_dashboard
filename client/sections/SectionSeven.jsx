import React from 'react'
import { useRouter }  from "next/router";
import Button from '../components/Button';



const SectionSeven = ({ bgColor }) => {
  const router = useRouter();

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-8"  >
        <div className='w-full xl:w-1000 lg:w-800 flex flex-col items-center' >
          <p className='text-46 lg:w-72 2xl:text-100 mb-24 text-center leading-60 2xl:leading-90' >Contact us now href schedule a free consultation!</p>
              <Button customFunc={()=> router.push("/contact")} text="Contact now." ></Button>
        </div>
      </div>
    </>
  )
}

export default SectionSeven