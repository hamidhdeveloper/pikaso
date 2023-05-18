import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.png'
import styles from "./Header.module.css";
import group from '../../assets/images/group-9244.svg'
import ellipse from '../../assets/images/ellipse-4.svg'
import { Link, useLocation } from 'react-router-dom';
import LoginPopup from '../pages/Login/LoginPopup';
import {GrDocumentTime} from 'react-icons/gr'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {AiOutlineProfile,AiOutlineShoppingCart,AiFillCloseCircle} from 'react-icons/ai'

const Header = () => {
  const location = useLocation();
  const startCreating = location.pathname === '/startcreating';
  const home = location.pathname === '/';
  // for modal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  // for canvas off click on menu 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
       {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className={`${styles.navBackground} mb-3`} style={{zIndex: '98',background: 'none'}}>
          <Container fluid>
            
            <Link to="/" ><img src={logo} alt='logo' className={`${styles.logo} ${startCreating ? styles.inverted : ''}`} /></Link>
            <Nav
            className={`${styles.mynav} ${home ? 'd-none d-md-block' : 'd-none'}`} 
          > 
            <Link to="/" className={`${location.pathname === '/' ? 'active' : ''} ${startCreating ? styles.whiteLink : ''}`}>Home</Link>
            <Link to="about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="howitswork" className={location.pathname === '/howitswork' ? 'active' : ''}>How its work</Link>
            
            
          </Nav>
            <div className={styles.headerRight}>
            <Link to='/login' className={styles.loginbtn}>Login</Link>
            <Link to='/signup' className={styles.signupbtn}>SignUp</Link>
              <div className={styles.cartIcons}>
              
              <img className={`${styles.groupChild} ${startCreating ? styles.inverted : ''}`} alt="" src={group} />
        <img className={styles.groupItem} alt="" src={ellipse} onClick={toggleModal} />
        <div className={styles.count}>1</div>
              </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={`${styles.customTogglerIcon} ${startCreating ? styles.inverted : ''}`} onClick={handleShow} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"  show={show} onHide={handleClose}  
            >
              <Offcanvas.Header style={{alignItems:'baseline',padding: '1rem 2.5rem'}} >
        
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={styles.menuTitle}>
                  Menu
                  
                </Offcanvas.Title>
                <span onClick={handleClose}><AiFillCloseCircle style={{cursor:'pointer'}} size={25}/></span>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <hr style={{width: '19rem',margin: '0 auto'}}/>
                <ul className={styles.sideMenu}>
                  <li><a href='#action1'><GrDocumentTime />History <BsArrowRightCircleFill style={{ marginLeft: 'auto'}}/></a></li>
                  <li><a href='#action1'><AiOutlineProfile />Profile <BsArrowRightCircleFill style={{ marginLeft: 'auto'}}/></a></li>
                  <li><Link to='/cart' onClick={handleClose}><AiOutlineShoppingCart />Cart <BsArrowRightCircleFill style={{ marginLeft: 'auto'}}/></Link></li>
                </ul>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}

      {/* modal import here */}
      <LoginPopup />
    </>
  )
}

export default Header
