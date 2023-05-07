import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "./Loading.module.css";

const Loading = ({showLoading}) => {
  
  return (
    <>
      {showLoading && (
        <>
          <div className={styles.spinnerContainer}>
            <Spinner
              animation="grow"
              variant="warning"
              className={styles.loading}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Loading;
