import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import AntdButton from "../../shared/AntdButton";
import Icon from "../../shared/Icon";

const DoctorCard = () => {
  const btnText = () => {
    return (
      <div className={styles.bookClicnicVisit}>
        <p>Book Clinic Visit</p>
        <p className={styles.font11}>No Booking fee</p>
      </div>
    );
  };
  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorCardDetails}>
        <div className={styles.doctorImageWrapper}>
          <div className={styles.doctorImage}>
            <Image
              src={"/images/drimage.png"}
              height={140}
              width={140}
              className={styles.circle}
            />
            <div className={styles.viewProfile}>
              <span className={styles.color}>View Profile</span>
            </div>
          </div>
        </div>
        <div className={styles.doctorInfoWrapper}>
          <div className={styles.doctorName}>
            <h2 className={classNames(styles.doctorLabel, styles.mb4)}>
              Dr. Kaushal B Patel
            </h2>
          </div>
          <div className={styles.specialityExperienceWrapper}>
            <div className={styles.speciality}>
              <span>Medical Oncologist </span>
            </div>
            <div className={classNames(styles.experince, styles.speciality)}>
              <span> 20 years experience overa</span>
            </div>
          </div>
          <div className={styles.addressDetailsWrpper}>
            <span className={styles.practiceLocality}>Nanpura,</span>
            <span className={styles.practiceCity}>Surat</span>
            &nbsp;
            <span className={styles.dotSeprator}></span>
            <span> Elite Hemat Onco Clinic</span>
            <span>
              &nbsp;
              <span>+1</span>
              <span>more</span>
            </span>
            <div>
              <span>₹1500</span>&nbsp;
              <span>Consultation fee at clinic</span>
            </div>
          </div>

          <button className={styles.ratingStoriesWrapper}>
            <div className={classNames(styles.rating, styles.successLabelBold)}>
              <Icon name={"thumbs-up"} className={styles.mr2rem} />
            </div>
            <span className={styles.percentageNumber}>99%</span>
          </button>
        </div>
      </div>

      <div className={styles.doctorApointmentSection}>
        <div className={styles.doctorAppointmentWrapper}>
          <div className={styles.doctorApoointnt}>
            <div className={styles.availabitlyWrapper}>
              <Icon name={"calendarCheck"} />
              <span className={styles.availablityLable}>
                Available Tommorow
              </span>
            </div>
            <div className={styles.bookClinicVisit}>
              <AntdButton
                btnText={btnText()}
                className={styles.bookClinicBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
