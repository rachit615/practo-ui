import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const DoctorSpecialityCard = ({ title, subTitle, image }) => {
  return (
    <div className={styles.doctorSpecialityCard}>
      <Image
        src={`/images/${image}.jpg`}
        width={"280"}
        height={"200"}
        className={styles.cardImg}
      />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default DoctorSpecialityCard;
