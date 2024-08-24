"use client";
import React from "react";
import styles from "./styles.module.scss";
import SlickCarousel from "../../../components/shared/SlickCarousel/index";
import DoctorSpecialityCard from "./index";
import { doctorSpecialityCards } from "./helper";

const DoctorSpecialityCards = () => {
  const carouselContent = () => {
    return doctorSpecialityCards.map((card, index) => {
      return (
        <div key={index}>
          <DoctorSpecialityCard
            title={card.title}
            subTitle={card.subTitle}
            image={card.image}
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.doctorSpecialityCards}>
      <div className={styles.sectionHeader}>
        <p className={styles.title}>
          Book an appointment for an in-clinic consultation
        </p>
        <p className={styles.subTitle}>
          Find experienced doctors across all specialties
        </p>
      </div>

      <div className={styles.doctorSpecialityCardsCarousel}>
        <SlickCarousel carouselContent={carouselContent} />
      </div>
    </div>
  );
};

export default DoctorSpecialityCards;
