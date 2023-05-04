import React,{useState} from 'react'
import styles from "./SignUp.module.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../../../assets/images/logo.png'
import { Link } from "react-router-dom";
import VerifyForm from './VerifyForm';
 


const SignUp = () => {
  const [showVerifyForm, setShowVerifyForm] = useState(false);

  const handleSignUpClick = () => {
    setShowVerifyForm(true);
  };
  return (
    <>
    
    {!showVerifyForm && (
      <>
       <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}>
            </Col> 
        </Row> 
        
          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" />
              <div style={{marginBottom: '1rem'}}>
              <span className={styles.welcomeToText}>
                  <span>Welcome to </span>
                  <span className={styles.spanText}>Picasso Ai</span>
                </span>
              </div>
              <form className={styles.myform}>
              <div>
                <input type="text" placeholder="Email" className={styles.username}/>
              </div>
              <div>
                <input type="password" placeholder="Password" className={styles.username}/>
              </div>
              <div>
                <input type="password" placeholder="Confirm Password" className={styles.username}/>
              </div>
              
              <div style={{marginBottom: '3rem', marginTop: '2rem'}}>
               <Link className={styles.loginbtn} onClick={handleSignUpClick}>Sign Up</Link>
              </div>
               
              </form>

            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              
            </Col>
          </Row>
      </>
    )}
          {showVerifyForm && <VerifyForm />}
    </>
  )
}

export default SignUp
