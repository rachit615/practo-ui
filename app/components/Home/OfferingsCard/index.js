import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const OfferingCard = ({ imgStyle, image, title, subTitle }) => {
  return (
    <div className={styles.offeringCardWrapper}>
      <div style={imgStyle} className={styles.imgWrapper}>
        <Image
          src={`/images/${image}.png`}
          width={"154"}
          height={"75"}
          className={styles.cardImg}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.offeringTitle}>{title}</p>
        <p className={styles.offeringSubtitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default OfferingCard;
