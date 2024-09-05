import React from 'react'
import SectionContent from '../components/Doctors/SectionContent'
import styles from "./styles.module.scss"
import { appointHighlights } from './helper'
import classNames from 'classnames'

const DoctorAppointment = () => {
  return (
    <div className={styles.doctorAppointmentWrapper} > 
        <SectionContent
          highlights={appointHighlights}
          btnText={"Find me the right doctor"}
          highlightTitle={"Instant appointment with"}
          hightlightTitleBold={"doctors.Guaranteed."}
          btnClass={classNames(styles.readMoreBtn, styles.btnAutoWidth)}
          image={{
            name: "security",
            height: 250,
            width: 250,
          }}
        >
        <div>
          children
        </div>
        </SectionContent>
    </div>
  )
}

export default DoctorAppointment