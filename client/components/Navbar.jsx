import React from 'react'
import styles from "../styles/Home.module.css";


const Navbar = ({ toShow }) => {
  return (
    <>
      <div style={{ backgroundColor: `${toShow ? "#FBEC7A" : "transparent"}` }} className={`opacity-90 fixed w-screen right-0 left-0 top-0 ${styles.navbar} 2xl:h-140 md:h-110 h-85`} >

      </div>
    </>
  )
}

export default Navbar