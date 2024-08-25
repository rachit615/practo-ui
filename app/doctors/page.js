import React from "react";
import DoctorsBanner from "./doctorsBanner";
import styles from "./styles.module.scss";
import DataSecurityInfo from "./dataSecurityInfo";
import classNames from "classnames";

const DoctorsPage = () => {
  return (
    <>
      <DoctorsBanner />
      <div className={classNames(styles.sectionContainer, styles.bgGray)}>
        <DataSecurityInfo />
      </div>
    </>
  );
};

export default DoctorsPage;
