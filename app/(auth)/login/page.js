"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AntdInput from "../../components/shared/Input";
import classNames from "classnames";
import CustomSelect from "@/app/components/shared/CustomSelect";
import AntdCheckbox from "../../components/shared/AntdCheckbox/index";
import AntdButton from "../../components/shared/AntdButton/index";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const handleCheckRemeberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleCheckLoginWithOtp = (e) => {
    setLoginWithOtp(e.target.checked);
  };

  const [loginWithOtp, setLoginWithOtp] = useState(false);

  return (
    <div className={styles.registerForm}>
      <div className={styles.outerBox}>
        <div className={styles.outerSpace}>
          <p className={styles.labelText}>Mobile Number / Email ID</p>
          <div className={classNames(styles.pt8)}>
            <AntdInput
              placeholder="Mobile Number / Email ID"
              variant={"medium"}
            />
          </div>

          <p className={classNames(styles.pt8, styles.labelText)}>Password</p>
          <div className={classNames(styles.pt8)}>
            <AntdInput
              placeholder="Password"
              variant={"medium"}
              type="password"
              className={classNames({
                [styles.pointerEventsNone]: loginWithOtp,
              })}
              disabled={loginWithOtp}
            />
          </div>
          <div className={classNames(styles.otpFlow, styles.pt20)}>
            <div
              className={classNames(styles.forgotPasswordContainer, {
                [styles.opacityHalf]: loginWithOtp,
                [styles.pointerEventsNone]: loginWithOtp,
              })}
            >
              <div className={styles.rememberMeBlock}>
                <AntdCheckbox
                  checked={rememberMe}
                  onChange={handleCheckRemeberMe}
                >
                  <p className={classNames(styles.font12, styles.textMuted)}>
                    Remember for 30 days
                  </p>
                </AntdCheckbox>
              </div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
          </div>
          <div className={styles.pt20}></div>
          <div className={styles.loginWithOtp}>
            <AntdCheckbox
              checked={loginWithOtp}
              onChange={handleCheckLoginWithOtp}
            >
              <p className={classNames(styles.font12, styles.textMuted)}>
                Login with OTP instead of password
              </p>
            </AntdCheckbox>
          </div>
          <div className={styles.btnWrapper}>
            <AntdButton
              type={"primary"}
              btnText={"Login"}
              className={styles.w100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
