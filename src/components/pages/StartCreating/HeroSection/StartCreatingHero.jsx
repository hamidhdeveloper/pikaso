import React from "react";
import styles from "./StartCreatingHero.module.css";
import { Container, Row, Col } from "react-bootstrap";
// import watercolorbrush from "../../../assets/images/watercolorbrush@2x.png";
const StartCreatingHero = () => {
  return (
    <>
      <Container fluid> 
        <Row className={styles.startCreatingContainer}>
          <Col className="col-xs-12">
            <b className={styles.startCreatingText}>{`Start Creating `}</b>
            <p className={styles.justWriteWhatText}>
              Just write what you want and get Ai generated
            </p>
            <p className={styles.justWriteWhatText}>{` images in seconds `}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StartCreatingHero;
