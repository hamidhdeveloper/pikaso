import React from 'react'
import styles from './ForgotPassword.module.css';
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
    <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}></Col>
          </Row>

          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" style={{ marginTop: "7rem" }} />
              <p>
                <span className={styles.welcomeToText}>
                  <span className={styles.spanText}>Verify your email </span>
                </span>
              </p>

              <p>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.username}
                />
              </p>

              <p style={{ marginBottom: "7rem", marginTop: "2rem" }}>
                <Link className={styles.loginbtn} >
                  Verify
                </Link>
              </p>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
          </Row>
    </>
  )
}

export default ForgotPassword
