import React,{useState} from "react";
import styles from "./ImageCanvas.module.css";
import { Row, Col,Form } from "react-bootstrap";
import backicon from "../../../../assets/images/back-icon.svg";
import Canvas from "../../../../assets/images/imagecanvas.png";
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const ImageCanvas = () => {
  // for quantity
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <Row className={styles.ImageCanvasConatiner}>
        <Col xs={12} md={4} className={styles.ImageCanvasConatinerLeft}></Col>
        <Col xs={12} md={8} className={styles.ImageCanvasConatinerRight}>
          <div>
            <img src={backicon} alt="" style={{marginRight: '2rem'}}/>
          </div>
          <div>
            <p>
              <b className={styles.imageOnA}>Image on a Canvas</b>
            </p>
            <p>
              <div className={styles.sampleView}>Sample view</div>
            </p>
            <p>
              <div className={styles.frame}>
                <img src={Canvas} alt=""/>
              </div>
            </p>
            <p style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Print:</span>
                <span className={styles.pspan}> Inkjet</span>
              </div>
            </p>
            <p style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Material:</span>
                <span className={styles.pspan}> Cotton</span>
              </div>
            </p>
            <p style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Finishing:</span>
                <span className={styles.pspan}> Wooden</span>
              </div>
            </p>
            <p style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Delivery:</span>
                <span className={styles.pspan}> 3-7 working days</span>
              </div>
            </p>
            <p>
            <Form.Group>
      <div className="d-flex">
      <div style={{ border: '1px solid',cursor:'pointer' }} onClick={handleDecrease}>
      <AiOutlineMinus />
      </div>
        <Form.Control type="number" value={quantity} min={1} max={10} readOnly  />
        <div style={{ border: '1px solid',cursor:'pointer' }} onClick={handleIncrease}>
      <AiOutlinePlus />
      </div>
      </div>
    </Form.Group>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ImageCanvas;
