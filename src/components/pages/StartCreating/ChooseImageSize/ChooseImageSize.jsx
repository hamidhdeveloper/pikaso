import React,{useState} from "react";
import styles from "./ChooseImageSize.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChooseImageSize = () => { 
  const size1 = '2*3';
  const size2 = '1*1';
  const size3 = '3*2';
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
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
            <div className={styles.imagesizeRightbox}>
              <input type="text" placeholder="Give us a design!" />
              <div
                className={styles.choseImageSizeText}
              >{`Choose image size `}</div>
              <Row>
                <Col xs={4} className={styles.image2Icon2Col} >
                  <span className={`${styles.box1} ${selectedSize === size1 && styles.selected}`} onClick={() => handleSizeClick(size1)}></span>
                  <p className={styles.size1}>2*3</p>
                </Col>
                <Col xs={4} className={styles.image2Icon2Col}>
                  <span className={`${styles.box2} ${selectedSize === size2 && styles.selected}`} onClick={() => handleSizeClick(size2)}></span>
                  <p className={styles.size2}> 1*1</p>
                </Col>
                <Col xs={4} className={styles.image2Icon2Col}>
                  <span className={`${styles.box3} ${selectedSize === size3 && styles.selected}`} onClick={() => handleSizeClick(size3)}></span>
                  <p className={styles.size3}> 3*2</p>
                </Col>
                <Link to='/outputimages' className={styles.startNowbtn}>{`Generate `}</Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChooseImageSize;
