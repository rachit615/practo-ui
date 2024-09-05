import React from "react";
import DoctorsBanner from "./doctorsBanner";
import styles from "./styles.module.scss";
import DataSecurityInfo from "./dataSecurityInfo";
import classNames from "classnames";
import DoctorAppointment from "./doctorAppointment";
import Medicine from "./medicine";
import Business from "./business"

const DoctorsPage = () => {
  return (
    <>
      <DoctorsBanner />
      <div className={classNames(styles.sectionContainer, styles.bgGray)}>
        <DataSecurityInfo />
      </div>
      <div className={classNames(styles.sectionContainer)}>
        <DoctorAppointment />
      </div>
      <div className={classNames(styles.sectionContainer, styles.bgGray)}>
        <Medicine />
      </div>
      <div className={classNames(styles.sectionContainer, styles.bgGray)}>
        <Business />
      </div>
    </>
  );
};

export default DoctorsPage;
