import React from 'react'
import styles from "./ImageCreated.module.css";
import rectangle1 from '../../../../assets/images/rectangle-30768@2x.png'
import rectangle2 from '../../../../assets/images/rectangle-30733@2x.png'
import rectangle3 from '../../../../assets/images/rectangle-30769@2x.png'
import rectangle4 from '../../../../assets/images/rectangle-30764@2x.png'
import rectangle5 from '../../../../assets/images/rectangle-30763@2x.png'
import rectangle6 from '../../../../assets/images/rectangle-30765@2x.png'

const ImageCreated = () => {
  return (
    <>
    <div className={styles.imagecreated}>
      <div className={styles.imagecreatedChild} />
      <b className={styles.imagesCreated}>Images Created</b>
      <div className={styles.imageCreated}>
        <img
          className={styles.imageCreatedChild}
          alt="rectangle"
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
        <img
          className={styles.imageCreatedChild2}
          alt=""
          src={rectangle6}
        />
      </div>
    </div>
      
    </>
  )
}

export default ImageCreated
