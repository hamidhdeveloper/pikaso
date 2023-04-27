import React from 'react'
import styles from "./ImagesEnhance.module.css";

import rectangle1 from '../../../../assets/images/rectangle-30768@2x.png'
import rectangle2 from '../../../../assets/images/rectangle-30764@2x.png'
import rectangle3 from '../../../../assets/images/rectangle-30763@2x.png'
import rectangle4 from '../../../../assets/images/rectangle-30765@2x.png'
import rectangle5 from '../../../../assets/images/rectangle-30767@2x.png'
import rectangle6 from '../../../../assets/images/rectangle-30776@2x.png'

const ImagesEnhance = () => {
  return (
    <>
    <div className={styles.imagesenhance}>
      <div className={styles.imagesenhanceChild} />
      <div className={styles.aiAllRights}>
        Created by Araby Ai. All rights reserved.
      </div>
      <b className={styles.imagesEnhance}>{`Images Enhance `}</b>
      <div className={styles.imageCreated}>
        <img
          className={styles.imageCreatedChild}
          alt=""
          src={rectangle1}
        />
        <img
          className={styles.imageCreatedItem}
          alt=""
          src={rectangle2}
        />
        <img
          className={styles.imageCreatedInner}
          alt=""
          src={rectangle3}
        />
        <img
          className={styles.rectangleIcon}
          alt=""
          src={rectangle4}
        />
        <img
          className={styles.imageCreatedChild1}
          alt=""
          src={rectangle5}
        />
      </div>
      <img
        className={styles.imagesenhanceItem}
        alt=""
        src={rectangle6}
      />
    </div>
      
    </>
  )
}

export default ImagesEnhance
