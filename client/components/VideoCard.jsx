import React from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';



const VideoCard = ({ image, text, bgColor, size, link}) => {

    return (
        <>
            <a rel="noreferrer noopener" href={link} target="_blank" >
                <div className={`lg:w-400 2xl:w-450 md:w-550 xl:h-250 md:h-350 w-320 h-250 border-5 border-black  rounded-xl transition-all duration-400 ${styles['video-card']} overflow-hidden relative cursor-pointer`} >
                    <Image layout='fill' src={image} className={`${size || "object-cover"} h-full w-full transition-all duration-300 ${bgColor}`} alt="card" />
                    <p className={`text-center w-full font-sans text-white text-21 font-extrabold absolute ${styles.cardText} px-2`} >{text}</p>
                </div>
            </a>
        </>
    )
}

export default VideoCard