import React from "react";
import SearchHeader from "./searchHeader";
import FilterSection from "../../components/Search/FilterSection/index";
import DoctorsListing from "./DoctorsListing/index";

const DoctorsSearchPage = () => {
  return (
    <div>
      <SearchHeader />
      <FilterSection />
      <DoctorsListing />
    </div>
  );
};

export default DoctorsSearchPage;
