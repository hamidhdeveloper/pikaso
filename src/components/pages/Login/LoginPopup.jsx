import React, { useState } from "react";
import styles from "./LoginPopup.module.css";
import { Row, Col, Modal } from "react-bootstrap";
const LoginPopup = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header  closeButton></Modal.Header>
        <Modal.Body>
        <button type="button" class="btn-close" aria-label="Close"></button>
          <Row className={styles.loginContainer}>
            <Col xs={12} md={6} className={styles.loginContainerLeft}>
              Column 1
            </Col>
            <Col xs={12} md={6} className={styles.loginContainerRight}>
              Column 2
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginPopup;
