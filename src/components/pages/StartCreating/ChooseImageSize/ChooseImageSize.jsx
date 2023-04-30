import React from 'react'
import styles from "./ChooseImageSize.module.css";
import icon1 from "../../../../assets/images/image-2@2x.png";
import icon2 from "../../../../assets/images/image-3@2x.png";
import { Container, Row, Col } from 'react-bootstrap';


const ChooseImageSize = () => {
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
      <br/> <br/><br/><br/>
      <p className={styles.aiAllRightstext}>2023 @ Ai. All rights reserved.</p>
      
        </Col>
        <Col xs={12} md={8} className={styles.imagesizeRightCol}>
          <div className={styles.imagesizeRightbox}>
            <input type='text' placeholder='Give us a design!' />
            <div className={styles.choseImageSizeText}>{`Choose image size `}</div>
            <Row>
        <Col xs={6} className={styles.image2Icon2Col}>
        <img className={styles.image1IconImg} alt="" src={icon1} />
        <p className={styles.size1}>2*1</p>
        </Col>
        <Col xs={6} className={styles.image2Icon2Col}>
        <img className={styles.image2IconImg} alt="" src={icon2} />
        <p className={styles.size2}>  1*1</p>
        </Col>
        <button className={styles.startNowbtn}>{`Generate `}</button>
      </Row>
          </div>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default ChooseImageSize
