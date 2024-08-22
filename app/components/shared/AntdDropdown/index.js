import { Dropdown } from "antd";
import React from "react";

const AntdDropdown = ({ menu, placement, children, ...props }) => {
  console.log("menu@@", menu);
  return (
    <Dropdown menu={{ items: menu }} placement={placement} arrow {...props}>
      {children}
    </Dropdown>
  );
};

export default AntdDropdown;
