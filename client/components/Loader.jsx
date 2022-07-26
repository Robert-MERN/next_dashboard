import React from 'react'
import styles from "../styles/Home.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.loader} >
        <div className={styles["loader-child"]}></div>
      </div>
    </>
  )
}

export default Loader