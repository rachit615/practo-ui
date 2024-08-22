import React from "react";
import styles from "./styles.module.scss";
import { consultationCategoryCards } from "./helper";
import ConsultationCategoryCard from "./index";

const ConsultationCategoryCards = () => {
  return (
    <div className={styles.consultationCategoryCards}>
      <div className={styles.headerSection}>
        <p className={styles.headerTitle}>
          Consult top doctors online for any health concern{" "}
        </p>
        <p className={styles.headerSubtitle}>
          Private online consultations with verified doctors in all specialists
        </p>
      </div>

      <div className={styles.consultationCards}>
        {consultationCategoryCards.map((card) => {
          return (
            <ConsultationCategoryCard image={card.image} title={card.title} />
          );
        })}
      </div>
    </div>
  );
};

export default ConsultationCategoryCards;
