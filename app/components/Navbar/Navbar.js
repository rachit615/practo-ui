"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import AntdDropdown from "../shared/AntdDropdown/index";
import { corporateMenuItems } from "./constant";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isDoctorRoute = pathname === "/doctors";

  const handleAuthClick = () => {
    router.push("/login");
  };
  const handleGotoHomepage = () => {
    router.push("/");
  };
  const dropdownItem = (menuItems, textLabel) => {
    return (
      <AntdDropdown menu={menuItems} placement={"bottomRight"}>
        <div className={styles.iconTextWrapper}>
          <p className={styles.rightContentLabel}>{textLabel}</p>
          <DownOutlined className={styles.downIcon} />
        </div>
      </AntdDropdown>
    );
  };

  return (
    <div
      className={classNames(styles.navbarWrapper, {
        [styles.doctorNavbarClass]: isDoctorRoute,
      })}
    >
      <Image
        src={"	https://blog.practo.com/wp-content/uploads/2017/04/1.png"}
        width={"154"}
        height={"75"}
        className={styles.practoLogo}
        onClick={handleGotoHomepage}
      />
      <div className={styles.navbarMain}>
        <div className={styles.navbarTabs}>
          <div className={styles.navbarTab}>Find Doctors</div>
          <div className={styles.navbarTab}>Video Consult</div>
          <div className={styles.navbarTab}>Surgeries</div>
        </div>

        <div className={styles.navbarRightContent}>
          <div className={styles.navbarRightSideContent}>
            {dropdownItem(corporateMenuItems, "For Corporates")}
            {dropdownItem(corporateMenuItems, "For Providers")}
            {dropdownItem(corporateMenuItems, "Security & help")}
          </div>
          <Button onClick={handleAuthClick}>Login / Signup</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
