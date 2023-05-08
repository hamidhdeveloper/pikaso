import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Cart.module.css";
import backicon from "../../../assets/images/back-icon.svg";
import cartimage from "../../../assets/images/image-14.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { Overlay, Tooltip } from "react-bootstrap";
import { BsArrowRight } from 'react-icons/bs';

const Cart = () => { 
  // remove btn
  const [show, setShow] = useState(false);
  const target = useRef(null);
  
  // for quantity
  
  const [quantity2, setQuantity2] = useState(1);

  
  const handleDecrease2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  const handleIncrease2 = () => {
    if (quantity2 < 10) {
      setQuantity2(quantity2 + 1);
    }
  };
  return (
    <div>
      <Row className={styles.cartContainer}>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={styles.cartCenter}
        >
          <div className={styles.cartBody}>
            <div className={styles.left}>
              <Link to="/outputimages">
                {" "}
                <img src={backicon} alt="" style={{ marginRight: "2rem" }} className={styles.backIcon} />
              </Link>
            </div>
            <div className={styles.right}>
              <b className={styles.title}>Checkout</b>
              <div className={styles.itemBox}>
                <div className={styles.itemBoxLeft}>
                  <img
                    src={cartimage}
                    alt=""
                    className={`${styles.itemBoxLeftImg} img-fluid`}
                  />
                </div>
                <div className={styles.itemBoxCenter}>
                  <b className={styles.itemTitle}>Image on a Canvas</b>
                  <div>
                    <b className={styles.itemTitle2}>
                      A4 (21 x 21 cm) w/ wooden frame
                    </b>
                  </div>
                  <div>
                    <span className={styles.itemTitle3}>AED 72.90</span>
                  </div>
                </div>
                <div className={styles.itemBoxRight}>
                  <div className="d-flex">
                    <div
                      style={{
                        border: "1px solid",
                        cursor: "pointer",
                        padding: "0rem 0.3rem",
                      }}
                      onClick={handleDecrease2}
                    >
                      <AiOutlineMinus />
                    </div>
                    <input
                      type="number"
                      value={quantity2}
                      min={1}
                      max={10}
                      readOnly
                      className={styles.quantityInput}
                    />
                    <div
                      style={{
                        border: "1px solid",
                        cursor: "pointer",
                        padding: "0rem 0.3rem",
                      }}
                      onClick={handleIncrease2}
                    >
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
                <div className={styles.itemMenu}>
                  <div
                    ref={target}
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    <CiMenuKebab />
                  </div>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="bottom"
                  >
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        <Link className={styles.remove}>Remove</Link>
                      </Tooltip>
                    )}
                  </Overlay>
                </div>
              </div>
              <div className={styles.total}>
                <b className={styles.aed7290}>
                  <span className={styles.totolText}>Total:</span>
                  <span>AED</span>
                  <span className={styles.spanPrice}> 145.80</span>
                </b>
              </div>
              <div className={styles.proceedAlign}>
              <Link to='/' className={styles.checkoutbtn}>Proceed <BsArrowRight /></Link>
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
