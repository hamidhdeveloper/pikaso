import React,{useState} from "react";
import styles from "./ImageCanvas.module.css";
import { Row, Col,Form } from "react-bootstrap";
import backicon from "../../../../assets/images/back-icon.svg";
import frame from "../../../../assets/images/imageCanvasbg.png";
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const ImageCanvas = ({ selectedImage, onClearImage }) => {
  console.log(selectedImage);
  //for backbtn
  const handleClearImage = () => {
    onClearImage();
  };
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
        <Col xs={12} md={4} className={styles.ImageCanvasConatinerLeft}>
             <div className={styles.ConatinerLeftImage}>
                <img src={selectedImage} alt="" className={`${styles.selecteimgfrmae} img-fluid`}/>
                <img src={frame} alt="buttomframe"  className={`${styles.buttomframe} img-fluid`}/>
              </div>
        </Col>
        <Col xs={12} md={8} className={styles.ImageCanvasConatinerRight}>
          <div className={styles.first}>
           <Link onClick={handleClearImage}> <img src={backicon} alt="" style={{marginRight: '2rem'}}/></Link>
          </div>
          <div className={styles.second}>
            <div>
              <b className={styles.imageOnA}>Image on a Canvas</b>
            </div>
            <div style={{marginBottom: '1rem'}}>
              <div className={styles.sampleView}>Sample view</div>
            </div>
            <div>
              <div className={styles.frame}>
                <img src={selectedImage} alt=""/>
              </div>
            </div>
            <div style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Print:</span>
                <span className={styles.pspan}> Inkjet</span>
              </div>
            </div>
            <div style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Material:</span>
                <span className={styles.pspan}> Cotton</span>
              </div>
            </div>
            <div style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Finishing:</span>
                <span className={styles.pspan}> Wooden</span>
              </div>
            </div>
            <div style={{marginBottom:'0rem'}}>
            <div className={styles.printInkjet}>
               <span>Delivery:</span>
                <span className={styles.pspan}> 3-7 working days</span>
              </div>
            </div>
            <div style={{marginTop:'3rem'}}>
           
      <div className="d-flex">
      <div style={{ border: '1px solid',cursor:'pointer',padding: '0rem 0.3rem' }} onClick={handleDecrease}>
      <AiOutlineMinus />
      </div>
        <input type="number" value={quantity} min={1} max={10} readOnly className={styles.quantityInput} />
        <div style={{ border: '1px solid',cursor:'pointer',padding: '0rem 0.3rem' }} onClick={handleIncrease}>
      <AiOutlinePlus />
      </div>
      </div>
    
            </div>
          </div>
          <div className={styles.third}>
            <div style={{    marginBottom: '1rem'}}>
            <b className={styles.aed7290}>
        <span>AED</span>
        <span className={styles.spanPrice}> 72.90</span>
      </b>
            </div>
            <div>
              <Link className={styles.checkoutbtn}>Checkout <BsArrowRight /></Link>
            </div>
            <div style={{marginTop: '2rem'}}>
              <Link to='/startcreating' className={styles.creatnewbtn}>Create New </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ImageCanvas;
