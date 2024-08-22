import React from "react";
import styles from "./styles.module.scss";

const SecondaryNavbar = () => {
  return (
    <div className={styles.secondaryNavbar}>
      <ul className={styles.navItemsList}>
        <li>
          <p>Login</p>
        </li>
        <li>
          <p>Register</p>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNavbar;
