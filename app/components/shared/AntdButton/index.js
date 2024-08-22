import React from "react";
import { Button } from "antd";
import "./button.scss";
import classNames from "classnames";

const AntdButton = ({ btnText, type, className, ...rest }) => {
  return (
    <Button
      type={type}
      className={classNames(className, "practoBtn commonBtn")}
      {...rest}
    >
      {btnText}
    </Button>
  );
};

export default AntdButton;
