import React, { useState } from "react";
import styles from "./LoginPopup.module.css";
import { Row, Col, Modal } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
const LoginPopup = () => {
  const [showModal, setShowModal] = useState(true);
  // for login validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      // validate email
      if (!email) {
        setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Email is invalid');
      } else {
        setEmailError('');
      }
  
      // validate password
      if (!password) {
        setPasswordError('Password is required');
      } else if (password.length < 6) {
        setPasswordError('At least 6 characters long');
      } else {
        setPasswordError('');
      }
  
      // submit the form if there are no errors
      if (!emailError && !passwordError) {
        console.log('Login successful!');
        // call your API or redirect to another page
      }

  }
  

  return ( 
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} >
        <Modal.Body className={styles.modalBody}>
        <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}>
            {/* <button type="button" class="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button> */}
            </Col>
        </Row>
        
          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" />
              <p>
              <span className={styles.welcomeToText}>
                  <span>Welcome to </span>
                  <span className={styles.spanText}>Picasso Ai</span>
                </span>
              </p>
              <form onSubmit={handleSubmit}>
              <p style={{position:'relative'}}>
                <input type="email" placeholder="Email" className={styles.username} value={email} onChange={(e) => setEmail(e.target.value)}/>
                {emailError && <p style={{ color: 'red',fontSize: '0.8rem',textAlign: 'right',position: 'absolute',top: '1rem',right: '1rem' }}>{emailError}</p>}
              </p>
              <p style={{position:'relative'}}>
                <input type="password" placeholder="Password" className={styles.username} value={password} onChange={(e) => setPassword(e.target.value)}/>
                {passwordError && <p style={{ color: 'red',fontSize: '0.8rem',textAlign: 'right',position: 'absolute',top: '1rem',right: '1rem' }}>{passwordError}</p>}
              </p>
              <p className={styles.forgotcol}>
                 <span className={styles.forgotThePasswordText}><Link>Forgot the password ?</Link></span>
              </p>
              <p>
               <button  type="submit" className={styles.loginbtn} >Login</button>
              </p>
              <p style={{marginBottom: '3rem', marginTop: '2rem'}} className={styles.signupbtnContainer}>
               <Link to='/signup' className={styles.signupbtn} onClick={() => setShowModal(false)}>Sign Up</Link>
              </p>
               
              </form>

            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginPopup;
