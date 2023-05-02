import React, { useState, useRef } from "react";
import styles from "./VerifyForm.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";

import { InputGroup, FormControl } from "react-bootstrap";

const VerifyForm = () => {
  const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleVerifyClick = () => {
    setShowVerifyCode(true);
  };

  // for code verification
  const [code, setCode] = useState("");
  const inputs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    setCode((prevCode) => {
      const newCode = prevCode.split("");
      newCode[index] = value;
      return newCode.join("");
    });
    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

  // code verification ends
  return (
    <>
      {!showVerifyCode ? (
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
                  placeholder="Email or username"
                  className={styles.username}
                />
              </p>

              <p style={{ marginBottom: "7rem", marginTop: "2rem" }}>
                <Link className={styles.loginbtn} onClick={handleVerifyClick}>
                  Verify
                </Link>
              </p>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
          </Row>
        </>
      ) : (
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
                <span className={styles.digitText}>Enter the 4-digit verification code</span>
              </p>
              <p style={{marginTop: '-1.5rem'}}>
                <span className={styles.digitText}>we send to test@gmail.com</span>
              </p>
              {/* <p>
                <input type="text" placeholder="Code" className={styles.username}/>
              </p> */}
              {/* code verfication */}
              <InputGroup className={styles.verificationCodeInput}>
                {[...Array(4)].map((_, index) => (
                  <FormControl
                    key={index}
                    type="text"
                    maxLength={1}
                    value={code[index] || ""}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(input) => (inputs.current[index] = input)}
                  />
                ))}
              </InputGroup>
              {/* code verifcation ends here */}

              <p style={{ marginBottom: "7rem", marginTop: "2rem" }}>
                <Link className={styles.loginbtn}>Verify</Link>
              </p>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
          </Row>
        </>
      )}
    </>
  );
};

export default VerifyForm;
