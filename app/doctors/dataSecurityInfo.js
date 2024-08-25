import React from "react";
import styles from "./styles.module.scss";
import { highlights } from "./helper";
import Image from "next/image";

const DataSecurityInfo = () => {
  return (
    <div className={styles.dataSecurityInfo}>
      <div className={styles.highlights}>
        <div className={styles.highlightsTitle}>
          <h2>Safety of your data is our</h2>
          <h2 className={styles.fontWeight700}>top priority.</h2>
        </div>
        <div className={styles.highlightsList}>
          {highlights.map((h) => {
            return (
              <div className={styles.listItem}>
                <Image src={"/images/check"} width={"24"} height={"24"} />
                <span className={styles.listItemDesc}>{h.display}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataSecurityInfo;
