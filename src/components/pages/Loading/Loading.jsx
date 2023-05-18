import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ showLoading }) => {
  return (
    <>
      {showLoading && (
        <>
          <div className={styles.preload}>
            <div className={styles.skfoldingcube}>
              <div className={`${styles.skcube1} ${styles.skcube}`} />
              <div className={`${styles.skcube2} ${styles.skcube}`} />
              <div className={`${styles.skcube4} ${styles.skcube}`} />
              <div className={`${styles.skcube3} ${styles.skcube}`} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Loading;
