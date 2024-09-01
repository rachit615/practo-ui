import React from "react";
import styles from "./styles.module.scss";
import GlobalSearch from "../../components/GlobalSearch/index";
import Link from "next/link";
import classNames from "classnames";

const SearchHeader = () => {
  return (
    <div className={styles.searchHeaderWrapper}>
      <div className={styles.searchContainer}>
        <GlobalSearch
          searchWrapperClass={styles.p0}
          searchLocationWidth={styles.locationWidth}
          searchSuggestionWidth={styles.suggestionWidth}
        />
      </div>

      <div className={styles.primeClinicWrapper}>
        <p className={styles.label}>Fed up of endless wait?</p>
        <span className={styles.primeClicnicText}>
          Look for clinic with{" "}
          <span
            className={classNames(
              styles.purpleColor,
              styles.fontWeight700,
              styles.cursorPointer,
              styles.primeLabel
            )}
          >
            Prime
          </span>
        </span>
      </div>
    </div>
  );
};

export default SearchHeader;
