import React from "react";
import styles from "./Login.module.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
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
                  <span>Welcome to </span>
                  <span className={styles.spanText}>Picasso Ai</span>
                </span>
              </p>
              <p>
                <input type="text" placeholder="Email or username" className={styles.username}/>
              </p>
              <p>
                <input type="password" placeholder="Password" className={styles.username}/>
              </p>
              <p className={styles.forgotcol}>
                 <span className={styles.forgotThePasswordText}><Link>Forgot the password ?</Link></span>
              </p>
              <p>
               <Link className={styles.loginbtn}>Login</Link>
              </p>
              <p style={{marginBottom: '3rem', marginTop: '2rem'}}>
               <Link to='/signup' className={styles.signupbtn}>Sign Up</Link>
              </p>
               
    

            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              
            </Col>
          </Row>
    </>
  )
}

export default Login
