import React from "react";
import styles from "./styles.module.scss";
import { certificatesList, highlights } from "./helper";
import Image from "next/image";
import Icon from "../components/shared/Icon/index";
import AntdButton from "../components/shared/AntdButton/index";
import SectionContent from "../components/Doctors/SectionContent/index";

const DataSecurityInfo = () => {
  return (
    <div className={styles.dataSecurityInfoWrapper}>
      <div className={styles.dataSecurityInfo}>
        <SectionContent
          highlights={highlights}
          btnText={"Read more"}
          highlightTitle={"Safety of your data is our"}
          hightlightTitleBold={"top priority."}
          btnClass={styles.readMoreBtn}
          image={{
            name: "security",
            height: 250,
            width: 250,
          }}
        >
          <div className={styles.certificatesList}>
            {certificatesList.map((ct) => {
              return (
                <div className={styles.certificateWraper}>
                  <Image
                    src={`/images/${ct.image}.png`}
                    width={65}
                    height={65}
                  />
                  <div className={styles.certificateInfo}>
                    <p>{ct.title}</p>
                    <p>{ct.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContent>
      </div>
    </div>
  );
};

export default DataSecurityInfo;
