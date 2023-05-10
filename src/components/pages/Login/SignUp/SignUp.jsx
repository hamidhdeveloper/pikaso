import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import VerifyForm from "./VerifyForm";
import axios from "axios";
import Loading from "../../Loading/Loading";
import { errorToast, successToast } from "../../toast/Toast";
import { Registeration } from "../../../../redux/actions/auth";

const SignUp = () => {
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("At least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;

    if (!email) {
      setEmailError("Email is required");
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      formIsValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      formIsValid = false;
    } else if (password.length < 6) {
      setPasswordError("At least 6 characters long");
      formIsValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      formIsValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      formIsValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (formIsValid) {
      setShowLoading(true);
      const data = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      Registeration(data, setShowLoading, setShowVerifyForm);
    }
  };

  return (
    <>
      <Loading showLoading={showLoading} setShowLoading={showLoading} />

      {!showVerifyForm && (
        <>
          <Row className={styles.loginContainer}>
            <Col xs={12} md={12} className={styles.closebtn}></Col>
          </Row>

          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              <img src={logo} alt="" />
              <div style={{ marginBottom: "1rem" }}>
                <span className={styles.welcomeToText}>
                  <span>Welcome to </span>
                  <span className={styles.spanText}>Picasso Ai</span>
                </span>
              </div>
              <form className={styles.myform} onSubmit={handleSubmit}>
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.username}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.username}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                  />
                  {passwordError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    >
                      {passwordError}
                    </p>
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={styles.username}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleConfirmPasswordBlur}
                  />
                  {confirmPasswordError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    >
                      {confirmPasswordError}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: "3rem", marginTop: "2rem" }}>
                  <button type="submit" className={styles.loginbtn}>
                    Sign Up
                  </button>
                </div>
              </form>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}></Col>
          </Row>
        </>
      )}
      {showVerifyForm && <VerifyForm email={email} />}
    </>
  );
};

export default SignUp;
