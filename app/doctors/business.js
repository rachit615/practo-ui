import React from 'react'
import SectionContent from '../components/Doctors/SectionContent'
import styles from "./styles.module.scss"
import { businessHighlights } from './helper'

const Business = () => {
  return (
    <div className= {styles.businessWrapper}>
        <SectionContent
            highlights={businessHighlights}
            btnText={"Learn More"}
            highlightTitle={"Leading Healthcare Providers."}
            hightlightTitleBold={"Trust us for Business"}
            btnClass={styles.readMoreBtn}
            image={{
              name : "business",
              height : 531,
              width : 392,
            }}
        >
        <div>
            children
        </div>
        </SectionContent>
    </div>
  )
}

export default Business