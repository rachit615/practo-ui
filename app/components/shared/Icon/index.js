import React from "react";

const Icon = ({ name, ...props }) => {
  const iconPath = `/icons/${name}.svg`;

  return <img src={iconPath} alt={`${name} icon`} {...props} />;
};

export default Icon;
