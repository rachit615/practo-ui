import React from "react";
import styles from "./styles.module.scss";
import Icon from "../../shared/Icon";
import AntdButton from "../../shared/AntdButton";
import Image from "next/image";

const SectionContent = ({
  highlights,
  btnText,
  btnClass,
  image,
  highlightTitle,
  hightlightTitleBold,
  imageClass,
  children,
}) => {
  return (
    <div className={styles.sectionContentWrapper}>
      <div className={styles.sectionContent}>
        <div className={styles.highlights}>
          <div className={styles.highlightsTitle}>
            <h2>{highlightTitle}</h2>
            <h2 className={styles.fontWeight700}>{hightlightTitleBold}</h2>
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

          <div className={styles.btnWrapper}>
            <AntdButton
              type={"primary"}
              btnText={btnText}
              className={btnClass}
            />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={`/images/${image?.name}.png`}
            width={image.width}
            height={image.height}
            className={imageClass}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default SectionContent;
