import React from "react";
import styles from "./EnhanceArtwork.module.css";
import rectangle1 from "../../../../assets/images/rectangle-30760@2x.png";
import rectangle2 from "../../../../assets/images/rectangle-30772@2x.png";
import { Link } from "react-router-dom";
const EnhanceArtwork = () => {
  return (
    <>
      <div className={styles.enhanceartwork}>
        <div className={styles.enhanceArtwork}>
          <div className={styles.enhanceArtworkTop}>
            <b className={styles.start}>{`Enhance `}</b>
            <b className={styles.creating}>
              <span>Artwo</span>
              <span className={styles.rk}>rk</span>
            </b>
          </div>
          <div className={styles.enhanceArtworkButtom}>
            <div className={styles.enhanceArtworkButtomLeft}>
              <img
                className={styles.enhanceArtworkItem}
                alt="reactangular 2"
                src={rectangle2}
              />
            </div>
            <div className={styles.enhanceArtworkButtomRight}>
              <img
                className={styles.enhanceArtworkChild}
                alt="retangular"
                src={rectangle1}
              />
            </div>
          </div>

          <div className={styles.vectorParent}>
            <Link to='/startcreating' className={styles.startNowbtn}>{`Generate `}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhanceArtwork;
