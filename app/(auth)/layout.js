import React from "react";
import NewPatientSignupPage from "./new_patient_signup/page";
import Image from "next/image";
import styles from "./styles.module.scss";
import SecondaryNavbar from "../components/Auth/SecondaryNavBar/index";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <SecondaryNavbar />
      <div className={styles.layoutWrapper}>
        <Image
          src={"https://accounts.practo.com/static/images/illustration.png"}
          width={"394"}
          height={"394"}
          alt="auth img"
        />
        <div className={styles.loginSignUp}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
