import { Input } from "antd";
import React from "react";
import "./input.scss";
import classNames from "classnames";
import styles from "./styles.module.scss";

const AntdInput = ({ variant, ...props }) => {
  const { className } = props;
  return (
    <Input
      className={classNames("customInput", className, {
        [styles.mediumText]: variant === "medium",
      })}
      {...props}
    />
  );
};

export default AntdInput;
