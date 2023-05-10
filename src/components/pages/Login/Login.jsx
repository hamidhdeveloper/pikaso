import React,{useState} from "react";
import styles from "./Login.module.css";
import { Row, Col } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'
import { Link , useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loading/Loading";
import { errorToast, successToast } from '../toast/Toast';
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
        // console.log('Login successful1!');
        // call your API or redirect to another page'
        setShowLoading(true)
        const url =  `${process.env.REACT_APP_BASE_URL}api/v1/user/login`;
        const data = {
          email: email,
          password: password
        };
        const headers = {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        };
      
        try {
          const response = await axios.post(url, data, { headers });
          if (response.status === 200) {
            const token = response.data.data.token;
            localStorage.setItem('token', token);
            successToast('Successfully logged in!');
              
              setShowLoading(false)
              navigate('/');
            // console.log('login successful');
          }
          // console.log(response.data);
        } catch (error) { 
          if (error.response.status === 400 || error.response.status === 401) {
            
            errorToast('Invalid credentials!');
              setShowLoading(false)
            // console.log('Invalid credentials! email or password is incorrect');
          } else {
            toast.error('Something went wrong please try again later');
          }
        }
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
