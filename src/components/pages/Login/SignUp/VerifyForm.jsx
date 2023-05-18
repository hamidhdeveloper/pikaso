import React, { useState, useRef, useEffect } from "react";
import styles from "./VerifyForm.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Verify , ResendOtp } from "../../../../redux/actions/auth";
import { InputGroup, FormControl } from "react-bootstrap";
import Loading from "../../Loading/Loading";


const VerifyForm = (props) => {
  
  const navigate = useNavigate();

  const [codeComplete, setCodeComplete] = useState(false);
  const [code, setCode] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (code.length === 4) {
      setCodeComplete(true);
    } else {
      setCodeComplete(false);
    }
  }, [code]);

  // for code verification

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
  // code verification api
  const verifyCode = async (e) => {
    e.preventDefault();
    setShowLoading(true);
    const useremail = props.email; // get the email from the user input
    const usercode = code;

    const data = {
      email: useremail,
      otp: usercode,
    };
    Verify(data, setShowLoading,() => {navigate("/")});
  }
  // resend otp
  const resendOtp = async () => {
    setShowLoading(true);
    const useremail = props.email;
    const data = {
      email: useremail,
    };
    ResendOtp(data, setShowLoading);
  };

  return (
    <>
      <Loading showLoading={showLoading} setShowLoading={showLoading} />
      <Row className={styles.loginContainer}>
        <Col xs={12} md={12} className={styles.closebtn}></Col>
      </Row>

      <Row className={styles.loginContainer}>
        <Col xs={12} md={6} className={styles.loginContainerLeft}>
          <img src={logo} alt="" style={{ marginTop: "7rem" }} />
          <form className={styles.myform}>
            <div>
              <span className={styles.welcomeToText}>
                <span className={styles.spanText}>Verify your email </span>
              </span>
            </div>

            <div>
              <span className={styles.digitText}>
                Enter the 4-digit verification code
              </span>
            </div>
            <div style={{ marginTop: "-1.5rem" }}>
              <span className={styles.digitText}>we send to {props.email}</span>
            </div>
            <div style={{ marginTop: "-1.5rem" }}>
              <span className={styles.digitTextLink} onClick={resendOtp}>
                Resend OTP
              </span>
            </div>
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

            <div style={{ marginBottom: "7rem", marginTop: "2rem" }}>
              {codeComplete ? (
                <Link className={styles.loginbtn} onClick={verifyCode}>
                  Verify
                </Link>
              ) : (
                <Link className={styles.loginbtn} style={{ opacity: ".5" }}>
                  Verify
                </Link>
              )}
            </div>
          </form>
        </Col>
        <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
      </Row>
    </>
  );
};

export default VerifyForm;
