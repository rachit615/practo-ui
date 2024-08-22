"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AntdInput from "../../components/shared/Input";
import classNames from "classnames";
import CustomSelect from "@/app/components/shared/CustomSelect";
import AntdCheckbox from "../../components/shared/AntdCheckbox/index";
import AntdButton from "../../components/shared/AntdButton/index";

const NewPatientSignupPage = () => {
  const mobileOptions = [
    { value: "+91(IND)", label: "+91(IND)" },
    { value: "+65(SGP)", label: "+65(SGP)" },
    { value: "+63(PHL)", label: "+63(PHL)" },
    { value: "", label: "+60(MYS)" },
    { value: "", label: "+91(IND)" },
    { value: "", label: "+91(IND)" },
  ];
  const [receivePromotionalOffers, setReceivePromotionalOffers] =
    useState(false);

  const onChange = (e) => {
    setReceivePromotionalOffers(e.target.checked);
  };

  return (
    <div className={styles.registerForm}>
      <div className={styles.outerBox}>
        <div className={styles.boxHeader}>
          <p className={classNames(styles.fontBold, styles.joinPracto)}>
            Join Practo
          </p>
          <div className={styles.isDoctorWrapper}>
            <p className={styles.isDoctorLabel}>Are you a doctor?</p>
            <span className={styles.loginRegisterText}>Register Here</span>
          </div>
        </div>

        <div className={styles.outerSpace}>
          <p className={styles.labelText}>Full Name</p>
          <div className={classNames(styles.pt8)}>
            <AntdInput placeholder="Full Name" variant={"medium"} />
          </div>
          <p className={classNames(styles.pt8, styles.labelText)}>
            Mobile Number
          </p>
          <div className={classNames(styles.pt8, styles.mobileNumber)}>
            <CustomSelect
              options={mobileOptions}
              className={styles.countryCode}
              showSearch={false}
              defaultValue="+91(IND)"
              popupClassName={styles.countryCodePopup}
            />
            <AntdInput placeholder="Mobile Number" variant={"medium"} />
          </div>
          <p className={classNames(styles.pt8, styles.labelText)}>
            Create Password
          </p>
          <div className={classNames(styles.pt8)}>
            <AntdInput
              placeholder="Password"
              variant={"medium"}
              type="password"
            />
          </div>
          <div className={classNames(styles.otpFlow, styles.pt20)}>
            <AntdCheckbox
              checked={receivePromotionalOffers}
              onChange={onChange}
            />
            <div className={styles.termsAndConditionWrapper}>
              <p className={styles.font12}>
                Recieve relevant offers and promotional communication from
                Practo
              </p>
              <p
                className={classNames(styles.font12, styles.font10, styles.pt8)}
              >
                By signing up, I agree to terms
              </p>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <AntdButton
              type={"primary"}
              btnText={"Send OTP"}
              className={styles.sendOtpBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPatientSignupPage;
