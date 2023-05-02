import React,{useState} from 'react'
import styles from "./VerifyForm.module.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../../../assets/images/logo.png'
import { Link } from "react-router-dom";
const VerifyForm = () => {
    const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleVerifyClick = () => {
    setShowVerifyCode(true);
  };
  return (
    <>
    {!showVerifyCode ? (
  <>
    <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}>
            </Col> 
        </Row> 
        
          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" />
              <p>
              <span className={styles.welcomeToText}>
                  <span className={styles.spanText}>Verify your email </span>
                </span>
              </p>
              
              <p>
                <input type="email" placeholder="Email or username" className={styles.username} />
              </p>
              
              <p style={{marginBottom: '3rem', marginTop: '2rem'}}>
               <Link className={styles.loginbtn} onClick={handleVerifyClick}>Verify</Link>
              </p>
               
    

            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              
            </Col>
          </Row>
  </>
) : (
  <>
    <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}>
            </Col> 
        </Row> 
        
          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" />
              <p>
              <span className={styles.welcomeToText}>
                  <span className={styles.spanText}>Verify your email </span>
                </span>
              </p>
              <p>
               <span>Enter the 4-digit verification code</span>
              </p>
              <p>
                <span>we send to test@gmail.com</span>
              </p>
              <p>
                <input type="text" placeholder="Code" className={styles.username}/>
              </p>
              
              <p style={{marginBottom: '3rem', marginTop: '2rem'}}>
               <Link className={styles.loginbtn} >Verify</Link>
              </p>
               
    

            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              
            </Col>
          </Row>
  </>
)}
      
    </>
  )
}

export default VerifyForm
