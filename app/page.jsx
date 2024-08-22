import Image from "next/image";

import OfferingCard from "./components/OfferingsCard/index";
import ConsultationCategoryCard from "./components/ConsultationCategoryCard/index";
import DoctorSpecialityCard from "./components/DoctorSpecialityCard/index";
import styles from "./styles.module.scss";

import PractoHomePage from "../pages/home/index";

export default function Home() {
  return (
    <>
      <PractoHomePage />
      {/* <ConsultationCategoryCard />
      <DoctorSpecialityCard /> */}
    </>
  );
}
