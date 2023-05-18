import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';
import styles from "./ImagesEnhance.module.css"; 

import rectangle1 from '../../../../assets/images/rectangle-30768@2x.png'
import rectangle2 from '../../../../assets/images/rectangle-30764@2x.png'
import rectangle3 from '../../../../assets/images/rectangle-30763@2x.png'
import rectangle4 from '../../../../assets/images/rectangle-30765@2x.png'
import rectangle5 from '../../../../assets/images/rectangle-30767@2x.png'
import rectangle6 from '../../../../assets/images/rectangle-30776@2x.png'

const ImagesEnhance = () => {
  return (
    <>
  <Container>
  <Row>
    <Col sm={12}>
    <b className={styles.imagesEnhanceText}>{`Images Enhance `}</b>
    </Col>
  </Row>
  <Row className={styles.imagesenhanceContainer}>
    <Col sm={6} md={4}>
      <img className={`${styles.img1} img-fluid`} alt="" src={rectangle5} />
    </Col>
    <Col sm={6} md={3}>
      <img className={`${styles.img2} img-fluid`} alt="" src={rectangle1} />
      <img className={`${styles.img2} img-fluid`} alt="" src={rectangle6} />
    </Col>
    <Col md={5}>
      <img className={`${styles.img3} img-fluid`} alt="" src={rectangle2} />
      <img className={`${styles.img5} img-fluid`} alt="" src={rectangle3} />
      <img className={`${styles.img4} img-fluid`} alt="" src={rectangle4} />
    </Col>
  </Row>
  <Row>
    <Col sm={12}>
    <div className={styles.AllRights}>
        Created by Araby Ai. All rights reserved.
      </div>
    </Col>
  </Row>
</Container>
      
    </>
  )
}

export default ImagesEnhance
