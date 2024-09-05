import React from 'react'
import SectionContent from '../components/Doctors/SectionContent'
import styles from "./styles.module.scss"
import { medicineHighlights } from './helper'

const Medicine = () => {
  return (
    <div className = {styles.medicineWrapper} >
        <SectionContent
            highlights={medicineHighlights}
            btnText={"Order Medicines"}
            highlightTitle={"Get all your medicines."}
            hightlightTitleBold={"Everytime. On time."}
            btnClass={styles.readMoreBtn}
            image={{
              name : "medicine_kit",
              height : 400,
              width : 400,
            }}
        >
        <div>
            children
        </div>
        </SectionContent>
    </div>
  )
}

export default Medicine