import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../../../assets/images/logo.png";
import VerifyForm from "./VerifyForm";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleSignUpClick = () => {
    setShowVerifyForm(true);
  };
  // for validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
// for blur validation
const handleEmailBlur = () => {
  if (!email) {
    setEmailError("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError("Email is invalid");
  } else {
    setEmailError("");
  }
}

const handlePasswordBlur = () => {
  if (!password) {
    setPasswordError("Password is required");
  } else if (password.length < 6) {
    setPasswordError("At least 6 characters long");
  } else {
    setPasswordError("");
  }
}

const handleConfirmPasswordBlur = () => {
  if (!confirmPassword) {
    setConfirmPasswordError("Confirm password is required");
  } else if (password !== confirmPassword) {
    setConfirmPasswordError("Passwords do not match");
  } else {
    setConfirmPasswordError("");
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;

    // validate email
    if (!email) {
      setEmailError("Email is required");
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      formIsValid = false;
    } else {
      setEmailError("");
    }

    // validate password
    if (!password) {
      setPasswordError("Password is required");
      formIsValid = false;
    } else if (password.length < 6) {
      setPasswordError("At least 6 characters long");
      formIsValid = false;
    } else {
      setPasswordError("");
    }

    // validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      formIsValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      formIsValid = false;
    } else {
      setConfirmPasswordError("");
    }

    // submit the form if there are no errors
    if (formIsValid) {
      // handleSignUpClick()
      // console.log('Signup successful!');
      setShowLoading(true);
      const url = `${process.env.REACT_APP_BASE_URL}api/v1/user/register`;
      const data = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const headers = {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      };

      try {
        const response = await axios.post(url, data, { headers });
        if (response.status === 200) {
          toast.success("Verification code sent!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{color:'#DFA968'}
            });
          // console.log('Registration successful');
          setShowLoading(false);
          handleSignUpClick();
        }
        // console.log(response.data);
      } catch (error) {
        if(error.response.status === 400) {
          setShowLoading(false);
          toast.error("Invalid Parameter",{
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{color:'black'}
            });
        }
        if (error.response.status === 409) {
          setShowLoading(false);
          toast.error("User already exists",{
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{color:'black'}
            });
        } else {
          toast.error("Something went wrong please try again later");
        }
      }
    }
  };

  return (
    <>
      <ToastContainer />
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
