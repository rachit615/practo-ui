import React from "react";
import styles from "./styles.module.scss";
import GlobalSearch from "../components/GlobalSearch/index";
import { popularSearchLinks } from "./helper";
import { appFeatures } from "./helper";

const DoctorsBanner = () => {
  return (
    <div className={styles.findDoctorsBanner}>
      <div className={styles.headerContainer}>
        <h1>Your home for health</h1>
      </div>
      <div className={styles.subHeading}>
        <p>Find and Book</p>
      </div>
      <div className={styles.findDoctorsSearchContainer}>
        <GlobalSearch
          searchWrapperClass={styles.searchContainerClass}
          globalSearchHeight={styles.searchHeight}
        />
      </div>
      <div className={styles.popularSearches}>
        <p className={styles.popularSearchLabel}>Popular searches:</p>
        <ul className={styles.popularSearchList}>
          {popularSearchLinks.map((item) => (
            <li key={item.value} className={styles.popularSearchItem}>
              {item.display}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.appFeatures}>
        {appFeatures.map((feature) => (
          <div className={styles.appFeature}></div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsBanner;
