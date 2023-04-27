import React from 'react'

import styles from "./Header.module.css";
import vector from '../../assets/images/vector.svg'
import path from '../../assets/images/path-9.svg'
import group from '../../assets/images/group-9244.svg'
import ellipse from '../../assets/images/ellipse-4.svg'


const Header = () => {
  return (
    <>

<div className={styles.header}>
      <div className={styles.homeParent}>
        <div className={styles.home}>
          <p className={styles.p}>Home</p>
          <p className={styles.p}>
            <span>{`     `}</span>
            <span className={styles.span}>*</span>
          </p>
        </div>
        <div className={styles.about}>About</div>
        <div className={styles.howItsWork}>How its work</div>
      </div>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <b className={styles.lo}>LO</b>
          <b className={styles.go}>GO</b>
        </div>
        <img className={styles.path9Icon} alt="" src={path} />
        <img className={styles.groupChild} alt="" src={group} />
        <img className={styles.groupItem} alt="" src={ellipse} />
        <div className={styles.div}>1</div>
      </div>
    </div>
    </>
  )
}

export default Header

