import React,{useState} from "react";
import styles from "./Login.module.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'
import { Link , useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loading/Loading";
import { LoginU } from "../../../redux/actions/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showForgotForm, setShowForgotForm] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleForgotClick = () => {
    setShowForgotForm(true);
  };

// for login validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

// validate on blur function
const validateEmail = () => {
  if (!email) {
    setEmailError('Email is required');
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError('Email is invalid');
    return false;
  } else {
    setEmailError('');
    return true;
  }
};

const validatePassword = () => {
  if (!password) {
    setPasswordError('Password is required');
    return false;
  } else if (password.length < 6) {
    setPasswordError('At least 6 characters long');
    return false;
  } else {
    setPasswordError('');
    return true;
  }
};

  const handleSubmit = async(e) => {
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

// validate password
      if (!password) {
        setPasswordError('Password is required');
        formIsValid = false;
      } else if (password.length < 6) {
        setPasswordError('At least 6 characters long');
        formIsValid = false;
      } else {
        setPasswordError('');
      }
     
// submit the form if there are no errors
      if (formIsValid) {
        setShowLoading(true)
        
        const data = {
          email: email,
          password: password
        };
        LoginU(data, setShowLoading,() => {navigate("/")});
      }

  }

  return (
    <>
    <Loading showLoading={showLoading}setShowLoading={showLoading} />
    {!showForgotForm ? (
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
              <form onSubmit={handleSubmit} className={styles.myform}>
              <div style={{position:'relative'}}>
                <input type="email" placeholder="Email" className={styles.username} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} on="true"/>
                {emailError && <p style={{ color: 'red',fontSize: '0.8rem',textAlign: 'right',position: 'absolute',top: '1rem',right: '1rem' }}>{emailError}</p>}
              </div>
              <div style={{position:'relative'}}>
                <input type="password" placeholder="Password" className={styles.username} value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} on="true"/>
                {passwordError && <p style={{ color: 'red',fontSize: '0.8rem',textAlign: 'right',position: 'absolute',top: '1rem',right: '1rem' }}>{passwordError}</p>}
              </div>
              <div className={styles.forgotcol}>
                 <span className={styles.forgotThePasswordText}><Link onClick={handleForgotClick}>Forgot password ?</Link></span>
              </div>
              <div>
               <button type="submit" className={styles.loginbtn}>Login</button>
              </div>
              <div style={{marginBottom: '3rem', marginTop: '2rem'}} className={styles.signupbtnContainer}>
               <Link to='/signup' className={styles.signupbtn}>Sign Up</Link>
              </div>
              </form>
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
            </Col>
          </Row>
      </>
    ):(
      <>
      <ForgotPassword />
      </>
    )}
    </>
  )
}

export default Login
