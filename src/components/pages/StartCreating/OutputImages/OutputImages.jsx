import React from "react";
import styles from "./OutputImages.module.css";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../../assets/images/image-13.png";
import image2 from "../../../../assets/images/image12.png";
import image3 from "../../../../assets/images/image-14.png";
import image4 from "../../../../assets/images/image-11.png";
import reload from "../../../../assets/images/reload.svg";
import { Link } from "react-router-dom";

const OutputImages = () => {
  return (
    <>
      <Container fluid>
        <Row className={styles.chooseimagesizeContainer}>
          <Col xs={12} md={4} className={styles.startTextCol}>
            <b className={styles.startText}>Start</b>
            <p>
              <b className={styles.creatingText}>
                <span>CREAT</span>
                <span className={styles.ingText}>ING</span>
              </b>
            </p>
            <p className={styles.krieitVerbText}>/kri’eit/ verb</p>
            <p className={styles.bringSomethingIntoText}>
              bring (something) into existence.
            </p>
            <p className={styles.aiAllRightstext}>
              2023 @ Ai. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md={8} className={`${styles.imagesizeRightCol}`}>
          <div className={styles.selectYourFavouriteText}>
            <div>
            <span>Select Your Favourite image </span>
            </div>
            <div>
            <Link to="/startcreating" className={styles.createNew}>Create New</Link>
            <Link to="#" className={styles.reload}><img src={reload} alt="" className="img-fluid"/></Link>
            </div>
            
            
                </div>
            <div className={styles.imagesizeRightbox}>
            
              <Row className={styles.glleryrow}>
                <Col xs={6} md={6}>
                  <img src={image1} alt="box 1" className="img-fluid" />
                </Col>
                <Col xs={6} md={6}>
                  <img src={image2} alt="box 2" className="img-fluid" />
                </Col>
                <Col xs={6} md={6}>
                  <img src={image3} alt="Box 3" className="img-fluid" />
                </Col>
                <Col xs={6} md={6}>
                  <img src={image4} alt="box 4" className="img-fluid" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default OutputImages;
