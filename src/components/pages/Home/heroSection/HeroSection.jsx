import React,{useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import LoginPopup from "../../Login/LoginPopup";
// import rectangle from '../../../../assets/images/rectangle-30705@2x.png'
// import rectangle3 from '../../../../assets/images/rectangle-3.svg'
const HeroSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // const [showLoginModal, setShowLoginModal] = useState(false);
  // check if the user login already
  const startNow = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
    // Redirect user to login page
       setShowModal(true);
      //  console.log('hero',showLoginModal)
    }else{
      navigate('/startcreating');
      // console.log('hero',showLoginModal)
    }
    
  }
  return (
    <>
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
      <Link to="startcreating" className={styles.startNowbtn} onClick={startNow}>start now</Link>
      {/* <div className={styles.startNowButton}>
        <img
          className={styles.startNowButtonChild}
          alt="reactangle3"
          src={rectangle3}
        />
        <div className={styles.startNow}>start now</div>
      </div> */}
    </div>
    <LoginPopup showModal={showModal} setShowModal={setShowModal} />
    </>
    
  );
};

export default HeroSection;
