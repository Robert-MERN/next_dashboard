import React from 'react'
import useStateContext from '../context/ContextProvider'
import CloseIcon from '@material-ui/icons/Close';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";


const Menu = ({ classes }) => {
  const { setActiveMenu, activeMenu } = useStateContext();
  const router = useRouter();
  return (
    <>

      <div className={`top-0 right-0 left-0 bottom-0 bg-yellow-300 py-10 px-4 md:p-10 xl:p-16 fixed ${styles.menu} ${activeMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-700 ${classes}`} >
        <div className='w-full h-full flex flex-col 2xl:mx-64 xl:flex-row'  >
          {activeMenu &&
            <div className='flex-1 p-2 flex flex-col justify-center' >

              <p onClick={() => { setActiveMenu((prev) => !prev); router.push("/") }} className='text-34 xl:text-65 cursor-pointer' >Home</p>

              <p onClick={() => { setActiveMenu((prev) => !prev); router.push("/services") }} className='text-34 xl:text-65 cursor-pointer' >Services</p>

              <p onClick={() => { setActiveMenu((prev) => !prev); router.push("/about") }} className='text-34 xl:text-65 cursor-pointer' >About</p>

              <p onClick={() => { setActiveMenu((prev) => !prev); router.push("/contact") }} className='text-34 xl:text-65 cursor-pointer' >Contact</p>
            </div>
          }
          {activeMenu &&
            <div className='flex-1 h-full p-2 flex flex-col justify-center' >
              <a href="tel:647-660-1776">
                <div onClick={() => setActiveMenu((prev) => !prev)} className='font-sans font-bold  text-21 xl:text-28 flex items-center cursor-pointer my-1'>
                  <CallIcon className='mr-4' />
                  <p>647-660-1776</p>
                </div>
              </a>
              <a href="mailto:sales@daddesignsweb.com">
                <div onClick={() => setActiveMenu((prev) => !prev)} className='flex items-center font-sans font-bold text-21 xl:text-28 cursor-pointer my-1' >
                  <MailIcon className='mr-4' />
                  <p>sales@daddesignsweb.com</p>
                </div>
              </a>

            </div>
          }
        </div>
        {activeMenu &&

          <div className='absolute right-8 top-8' >
            <button className='hover:scale-300 scale-250  transition-all' onClick={() => setActiveMenu((prev) => !prev)} >
              <CloseIcon className='hover:drop-shadow-3xl' /></button>
          </div>

        }
      </div>
    </>
  )
}

export default Menu 