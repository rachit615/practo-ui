import React from "react";
import styles from "./styles.module.scss";
import Icon from "../../../components/shared/Icon";
import classNames from "classnames";

const ListingHeader = () => {
  return (
    <div className={styles.listingHeader}>
      <div className={classNames(styles.lisitngTitle, styles.mt12)}>
        <p className={styles.title}> 1 doctors available in Surat</p>
      </div>
      <div className={classNames(styles.listingSubtitle, styles.mt12)}>
        <Icon name={"verified"} className={styles.mr4} />
        <p className={styles.font15}>
          Book appointments with minimum wait-time & verified doctor details
        </p>
      </div>
    </div>
  );
};

export default ListingHeader;
