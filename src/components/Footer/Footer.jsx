import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styles from "./Footer.module.css";
import ellipse from '../../assets/images/ellipse-142.svg'
import group from '../../assets/images/group-9243.svg'
import instagram from '../../assets/images/instagram.svg'
import tiktok from '../../assets/images/tik-tok.svg'
import twitter from '../../assets/images/twitter.svg'
import linkin from '../../assets/images/xmlid-801.svg'

const Footer = () => {
  return (
    <>
   <Row className={styles.myfooter}>
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>
        Column 1
      </Col>
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>
        Column 2
      </Col>
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>
        Column 3
      </Col>
      <Col xs={12} sm={3} md={3} lg={3} xl={3}>
        Column 4
      </Col>
    </Row>



    <footer className={styles.footer}>
      <div className={styles.footr}>
        <img className={styles.footrChild} alt="" src={group} />
        <img className={styles.footrItem} alt="" src={ellipse} />
        <div className={styles.companyParent}>
          <b className={styles.company}>Company</b>
          <div className={styles.pricingTermsAndContainer}>
            <ul className={styles.pricingTermsAndConditionsP}>
              <li className={styles.pricing}>Pricing</li>
              <li className={styles.pricing}>Terms and Conditions</li>
              <li>{`Privacy policy  `}</li>
            </ul>
          </div>
        </div>
        <div className={styles.helpParent}>
          <b className={styles.help}>Help</b>
          <div className={styles.contactUsShareContainer}>
            <ul className={styles.pricingTermsAndConditionsP}>
              <li className={styles.pricing}>Contact Us</li>
              <li>Share Feedback</li>
            </ul>
          </div>
        </div>
        <div className={styles.supportParent}>
          <b className={styles.support}>Support</b>
          <div className={styles.reportABugContainer}>
            <ul className={styles.pricingTermsAndConditionsP}>
              <li className={styles.pricing}>Report a Bug</li>
              <li>Report an Outage</li>
            </ul>
          </div>
        </div>
        <div className={styles.followUsParent}>
          <b className={styles.followUs}>Follow Us</b>
          <a
            className={styles.arabyAiArabyContainer}
            href="https://www.instagram.com/araby.ai/"
            target="_blank"
            rel="noreferrer"
          >
            <ul className={styles.arabyAiArabyAiArabyAi}>
              <li className={styles.pricing}>@Araby AI</li>
              <li className={styles.pricing}>@Araby AI</li>
              <li className={styles.pricing}>@Araby AI</li>
              <li>@Araby AI</li>
            </ul>
          </a>
          <img className={styles.instagramIcon} alt="" src={instagram} />
          <img className={styles.twitterIcon} alt="" src={twitter} />
          <img className={styles.tikTokIcon} alt="" src={tiktok} />
          <img className={styles.xmlid801Icon} alt="" src={linkin} />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
