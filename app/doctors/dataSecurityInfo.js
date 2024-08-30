import React from "react";
import styles from "./styles.module.scss";
import { certificatesList, highlights } from "./helper";
import Image from "next/image";
import Icon from "../components/shared/Icon/index";
import AntdButton from "../components/shared/AntdButton/index";

const DataSecurityInfo = () => {
  return (
    <div className={styles.dataSecurityInfoWrapper}>
      <div className={styles.dataSecurityInfo}>
        <div className={styles.highlights}>
          <div className={styles.highlightsTitle}>
            <h2>Safety of your data is our</h2>
            <h2 className={styles.fontWeight700}>top priority.</h2>
          </div>
          <div className={styles.highlightsList}>
            {highlights.map((h) => {
              return (
                <div className={styles.listItem}>
                  <Icon
                    name="check"
                    className={styles.checkIcon}
                    alt="Check Icon"
                  />
                  <span className={styles.listItemDesc}>{h.display}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.readMoreBtnWrapper}>
            <AntdButton
              type={"primary"}
              btnText={"Read more"}
              className={styles.readMoreBtn}
            />
          </div>
        </div>

        <div className={styles.securytImageWrapper}>
          <Image
            src={`/images/security.png`}
            width={250}
            height={250}
            className={styles.securtyImage}
          />
        </div>
      </div>
      <div className={styles.certificatesList}>
        {certificatesList.map((ct) => {
          return (
            <div className={styles.certificateWraper}>
              <Image src={`/images/${ct.image}.png`} width={65} height={65} />
              <div className={styles.certificateInfo}>
                <p>{ct.title}</p>
                <p>{ct.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataSecurityInfo;
