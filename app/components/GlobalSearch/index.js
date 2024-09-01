"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import CustomSelect from "../shared/CustomSelect/index";
import "./GlobalSearch.scss";
import classNames from "classnames";

const GlobalSearch = ({
  searchWrapperClass,
  globalSearchHeight,
  searchSuggestionWidth,
  searchLocationWidth,
}) => {
  const options = [
    { value: "varacha-road", label: "Varacha Road" },
    { value: "adajan", label: "Adajan Dn" },
    { value: "udhna", label: "Udhna" },
    { value: "katargam", label: "Katargam" },
    { value: "pandesara", label: "Pandesara" },
    { value: "amroli", label: "Amroli" },
  ];
  const suggestionOptions = [
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "dentist", label: "Dentist" },
    { value: "gynecologist/obstretrician", label: "Gynecologist/obstetrician" },
    { value: "genearl physician", label: "General Physician" },
    { value: "dermatologist", label: "Dermatologist" },
    { value: "ent", label: "Ear-nose-throat " },
    { value: "homeopath", label: "Homeopath" },
    { value: "ayurveda", label: "Ayurveda" },
  ];
  const [location, setLocation] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const onChangeLocation = (value, option) => {
    console.log("value", value);
    console.log("option", option);
    setLocation(value);
  };

  const onChangeSuggestion = (value, option) => {
    setSearchValue(value);
  };

  return (
    <div className={classNames(styles.globalSearchWrapper, searchWrapperClass)}>
      <CustomSelect
        className={classNames(styles.locationSearch, "customSearch", {
          [globalSearchHeight]: globalSearchHeight,
          [searchLocationWidth]: searchLocationWidth,
        })}
        placeholder="Search location"
        optionLabelProp="label2"
        allowClear
        value={location}
        popupClassName={"searchDropdown"}
        onChange={(value, option) => {
          onChangeLocation(value, option);
        }}
        options={options.map((item) => ({
          ...item,
          label2: item.label,
          label: (
            <div className={styles.locationOption}>
              <div className={styles.iconWrapper}>
                <SearchOutlined />
              </div>
              <div className={styles.locationWrapper}>
                <span>{item.label}</span>
                <span>Surat</span>
              </div>
            </div>
          ),
        }))}
      />
      <CustomSelect
        className={classNames(
          styles.suggestionSearch,
          "customSearch",
          "suggestionSearch",
          {
            [globalSearchHeight]: globalSearchHeight,
            [searchSuggestionWidth]: searchSuggestionWidth,
          }
        )}
        placeholder="Search doctors, clinics, hospitals, etc"
        optionLabelProp="label2"
        allowClear
        value={searchValue}
        // open
        onChange={(value, option) => {
          onChangeSuggestion(value, option);
        }}
        popupClassName={"searchDropdown"}
        options={suggestionOptions.map((item) => ({
          ...item,
          label2: item.label,
          label: (
            <div className={styles.suggestionOption}>
              <div className={styles.iconWrapper}>
                <SearchOutlined />
              </div>
              <div className={styles.suggestionWrapper}>
                <span>{item.label}</span>
                <span className={styles.category}>Speciality</span>
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default GlobalSearch;
