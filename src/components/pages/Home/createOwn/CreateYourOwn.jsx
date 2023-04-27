import React from "react";
import styles from "./CreateYourOwn.module.css";
import rectangle from "../../../../assets/images/rectangle-30756@2x.png";
// import rectangle5 from '../../../../assets/images/rectangle-5.svg'

const CreateYourOwn = () => {
  return (
    <>
      <div className={styles.createown}>
        <div className={styles.owntop}>
          <b className={`${styles.start}`}>{`Create `}</b>
          <b className={styles.creating}>
            <span>Your o</span>
            <span className={styles.wn}>wn</span>
          </b>
        </div>
        <div className={styles.ownbottom}>
          <div className={styles.ownbottomLeft}>
            <img
              className={styles.groupChild}
              alt="rectangle"
              src={rectangle}
            />
          </div>
          <div className={styles.ownbottomRight}>
          <div className={styles.aiImageGeneratorContainer}>
          <p className={styles.aiImageGeneratorIsTheFutu}>
            <b>AI Image Generator is the Future</b>
          </p>
          <p className={styles.nowItsAi}>
            Now it's AI period. Create amazing artwork by yourself using the
            power of Fotor's Artificial Intelligence image generator. Turn your
            imagination into paintings automatically. Try the best AI art
            generator now.
          </p>
        </div>
        <button className={styles.startNowbtn}>{`Generate `}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateYourOwn;
