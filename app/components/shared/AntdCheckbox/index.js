import React from "react";
import { Checkbox } from "antd";

const AntdCheckbox = (props) => {
  const { children } = props;
  return <Checkbox {...props}>{children}</Checkbox>;
};

export default AntdCheckbox;
