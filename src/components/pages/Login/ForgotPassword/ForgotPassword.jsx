import React,{useState} from 'react'
import styles from './ForgotPassword.module.css';
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";


const ForgotPassword = () => {
  const [email, setEmail] = useState(''); 
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

      // validate email
      if (!email) {
        setEmailError('Email is required');
        formIsValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Email is invalid');
        formIsValid = false;
      } else {
        setEmailError('');
      }

      if (formIsValid) {
        // console.log('link is sent successfully');
        // call your API or redirect to another page
      }

  }

  return (
    <>
    <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}></Col>
          </Row>

          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" style={{ marginTop: "7rem" }} />
              <form className={styles.myform} onSubmit={handleSubmit}>
              <div>
                <span className={styles.welcomeToText}>
                  <span className={styles.spanText}>Verify your email </span>
                </span>
              </div>

              <div style={{position:'relative'}}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.username}
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p style={{ color: 'red',fontSize: '0.8rem',textAlign: 'right',position: 'absolute',top: '1rem',right: '1rem' }}>{emailError}</p>}
              </div>

              <div style={{ marginBottom: "7rem", marginTop: "2rem" }}>
                <button type='submit' className={styles.loginbtn} >
                  Verify
                </button>
              </div>
              </form>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
          </Row>
    </>
  )
}

export default ForgotPassword
