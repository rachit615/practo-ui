import React from "react";
import styles from "./styles.module.scss";
import { offeringCards } from "./helper";
import OfferingCard from "./index";

const OfferingCards = () => {
  return (
    <div className={styles.offeringCardsWrapper}>
      <div className={styles.cardsWrapper}>
        {offeringCards.map((card) => {
          return (
            <OfferingCard
              image={card.image}
              title={card.title}
              subTitle={card.subTitle}
              imgStyle={card.imgStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OfferingCards;
