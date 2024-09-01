"use client";
import React from "react";
import styles from "./styles.module.scss";
import FilterSelect from "./FilterSelect";
import {
  genderOptions,
  patientStories,
  experienceOptions,
  relevanceOptions,
} from "./constant";

const FilterSection = () => {
  return (
    <div>
      <div className={styles.filterTop}>
        <div className={styles.filterTopWrapper}>
          <FilterSelect
            option={genderOptions}
            name={"gender"}
            placeholder={"Gender"}
            className={styles.mr16}
            onChange={(id, name) => {
              console.log("id@@", id);
            }}
          />
          <FilterSelect
            option={patientStories}
            name={"patientStories"}
            placeholder={"Patient Stories"}
            className={styles.mr16}
            onChange={(id, name) => {
              console.log("id@@", id, name);
            }}
          />

          <FilterSelect
            option={experienceOptions}
            name={"experience"}
            placeholder={"Experience"}
            className={styles.mr16}
            onChange={(id, name) => {
              console.log("id@@", id);
            }}
          />

          <FilterSelect
            option={relevanceOptions}
            name={"relevance"}
            placeholder={"Relevance"}
            className={styles.mr16}
            onChange={(id, name) => {
              console.log("id@@", id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
