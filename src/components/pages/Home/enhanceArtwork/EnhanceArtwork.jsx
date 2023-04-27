import React from 'react'
import styles from "./EnhanceArtwork.module.css";
import rectangle1 from '../../../../assets/images/rectangle-30760@2x.png'
import rectangle2 from '../../../../assets/images/rectangle-30772@2x.png'
import rectangle5 from '../../../../assets/images/rectangle-5.svg'
const EnhanceArtwork = () => {
  return (
    <>
      <div className={styles.enhanceartwork}>
      <div className={styles.enhanceArtwork}>
        <b className={styles.creating}>
          <span>Artwo</span>
          <span className={styles.rk}>rk</span>
        </b>
        <b className={styles.start}>{`Enhance `}</b>
        <img
          className={styles.enhanceArtworkChild}
          alt="retangular"
          src={rectangle1}
        />
        <img
          className={styles.enhanceArtworkItem}
          alt="reactangular 2"
          src={rectangle2}
        />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src={rectangle5} />
          <div className={styles.generate}>{`Generate `}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EnhanceArtwork
