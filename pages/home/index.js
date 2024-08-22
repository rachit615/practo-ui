import React from "react";
import styles from "./styles.module.scss";
import OfferingCards from "../../app/components/OfferingsCard/offeringCards";
import ConsultationCategoryCards from "../../app/components/ConsultationCategoryCard/consultationCategoryCards";
import DoctorSpecialityCards from "../../app/components/DoctorSpecialityCard/doctorSpecialityCards";
import GlobalSearch from "../../app/components/GlobalSearch/index";

const PractoHomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.content}>
        <GlobalSearch />
      </div>
      <div className={styles.content}>
        <OfferingCards />
      </div>
      <div className={styles.content}>
        <ConsultationCategoryCards />
      </div>
      <div className={styles.content}>
        <DoctorSpecialityCards />
      </div>
    </div>
  );
};

export default PractoHomePage;
