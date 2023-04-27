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
      <div className={styles.imagecreatedChildContainer} />
      <div className={styles.imagecreatedChildTop}>
       <b className={styles.imagesCreated}>Images Created</b>
      </div>
      <div className={styles.imagecreatedChildButtom}>
        <div className={styles.imagesAll}>
        <div className={styles.imagesAllCol1}>
        <img
          className={styles.imageCreatedItem}
          alt=""
          src={rectangle2}
        />
        
        </div>
        <div className={styles.imagesAllzCol2}>
        <img
          className={styles.imageCreatedChildItem2}
          alt="rectangle"
          src={rectangle1}
        />
        <img
          className={styles.rectangleIcon4}
          alt=""
          src={rectangle4}
        />
        <img
          className={styles.imageCreatedInner5}
          alt=""
          src={rectangle3}
        />
        <img
          className={styles.imageCreatedChild11}
          alt=""
          src={rectangle5}
        />
        <img
          className={styles.imageCreatedChild22}
          alt=""
          src={rectangle6}
        /> 
        </div>
        
        
        
         
        
        </div>
      </div>
      
      <div className={styles.imageCreated}>
        
      </div>
    </div>
      
    </>
  )
}

export default ImageCreated

