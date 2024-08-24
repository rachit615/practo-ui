"use client";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";

const SecondaryNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveClass = (path) => {
    return pathname === path ? styles.activeLink : "";
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.secondaryNavbar}>
      <ul className={styles.navItemsList}>
        <li
          className={classNames(styles.navItem, getActiveClass("/login"))}
          onClick={() => handleNavigation("/login")}
        >
          <p>Login</p>
        </li>
        <li
          className={classNames(
            styles.navItem,
            getActiveClass("/new_patient_signup")
          )}
          onClick={() => handleNavigation("/new_patient_signup")}
        >
          <p>Register</p>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNavbar;
