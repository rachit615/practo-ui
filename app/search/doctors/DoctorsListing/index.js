import React from "react";
import styles from "./styles.module.scss";
import ListingHeader from "./listingHeader";
import DoctorCard from "../../../components/Search/DoctorCard/index";

const DoctorsListing = () => {
  return (
    <div className={styles.doctorsListingWrapper}>
      <div className={styles.listingLeft}>
        <div className={styles.mlr60}>
          <ListingHeader />
          <DoctorCard />
        </div>
      </div>
      <div className={styles.listingRight}></div>
    </div>
  );
};

export default DoctorsListing;
