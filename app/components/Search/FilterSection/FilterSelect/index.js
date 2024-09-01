"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Icon from "@/app/components/shared/Icon";
import classNames from "classnames";

const FilterSelect = ({ className, option, onChange, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option?.id, name);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(styles.cFilterBox, className)}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <span className={styles.cDropdownSelected}>
        <span className={styles.selectedOption}>
          {selectedOption === null ? placeholder : selectedOption?.display}
        </span>

        <Icon
          name="chevron-down"
          className={classNames(
            styles.uTransitionTransform,
            styles.iconIcDropdown,
            {
              [styles.rotated]: isOpen,
            }
          )}
        />
      </span>
      {isOpen && (
        <ul className={styles.cDropdownList}>
          {option.map((o) => {
            return (
              <li
                className={styles.cDropdownListItem}
                onClick={() => handleOptionClick(o)}
              >
                {o.display}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
