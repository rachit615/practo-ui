import { Select } from "antd";
import React from "react";

const CustomSelect = (props) => {
  const { className, options, placeholder, optionLabelProp } = props;

  return (
    <Select
      placeholder={placeholder}
      optionLabelProp={optionLabelProp}
      showSearch
      className={className}
      options={options}
      {...props}
    />
  );
};

export default CustomSelect;
