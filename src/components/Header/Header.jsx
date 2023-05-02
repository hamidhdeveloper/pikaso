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
              <div className={styles.cartIcons}>
              <img className={`${styles.groupChild} ${startCreating ? styles.inverted : ''}`} alt="" src={group} />
        <img className={styles.groupItem} alt="" src={ellipse} onClick={toggleModal} />
        <div className={styles.count}>1</div>
              </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={`${styles.customTogglerIcon} ${startCreating ? styles.inverted : ''}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li><a href='#action1'>History</a></li>
                  <li><a href='#action1'>Payment method</a></li>
                  <li><a href='#action1'>Cart</a></li>
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
