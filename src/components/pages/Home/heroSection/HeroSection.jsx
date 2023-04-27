import styles from "./HeroSection.module.css";
// import rectangle from '../../../../assets/images/rectangle-30705@2x.png'
// import rectangle3 from '../../../../assets/images/rectangle-3.svg'
const HeroSection = () => {
  return (
    <div className={styles.herosection}> 
      <div className={styles.aiGeneratedImagesWrapper}>
        <div
          className={styles.aiGeneratedImages}
        >{`Ai generated images  `}</div>
      </div>
      <div className={styles.artwork}>
        <p className={styles.a}>A</p>
        <p className={styles.r}>R</p>
        <p className={styles.r}>T</p>
        <p className={styles.w}>W</p>
        <p className={styles.r}>O</p>
        <p className={styles.r}>R</p>
        <p className={styles.k}>K</p>
      </div>
      <div className={styles.mAKContainer}>
        <p className={styles.r}>M</p>
        <p className={styles.r}>a</p>
        <p className={styles.r}>k</p>
        <p className={styles.r}>e</p>
        <p className={styles.r}>Y</p>
        <p className={styles.r}>o</p>
        <p className={styles.r}>u</p>
        <p className={styles.r}>r</p>
        <p className={styles.r}> O</p>
        <p className={styles.r}>w</p>
        <p className={styles.r}>n</p>
      </div>
      <button className={styles.startNowbtn}>start now</button>
      {/* <div className={styles.startNowButton}>
        <img
          className={styles.startNowButtonChild}
          alt="reactangle3"
          src={rectangle3}
        />
        <div className={styles.startNow}>start now</div>
      </div> */}
    </div>
  );
};

export default HeroSection;
