import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const ConsultationCategoryCard = ({ title, image }) => {
  return (
    <div className={styles.consultationCardWrapper}>
      <Image
        src={`/images/${image}.png`}
        width={"120"}
        height={"120"}
        className={styles.cardImg}
      />
      <div className={styles.categoryWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.consultNowBtn}>CONSULT NOW</p>
      </div>
    </div>
  );
};

export default ConsultationCategoryCard;
