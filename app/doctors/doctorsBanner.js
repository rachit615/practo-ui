import React from 'react';
import styles from './styles.module.scss';
import GlobalSearch from '../components/GlobalSearch/index';
import { popularSearchLinks } from './helper';
import { appFeatures } from './helper';
import { serviceMenus } from './helper';
import Icon from '../components/shared/Icon/index';

const DoctorsBanner = () => {
  return (
    <div className={styles.findDoctorsBanner}>
      <div className={styles.headerContainer}>
        <h1>Your home for health</h1>
      </div>
      <div className={styles.subHeading}>
        <p>Find and Book</p>
      </div>
      <div className={styles.findDoctorsSearchContainer}>
        <GlobalSearch
          searchWrapperClass={styles.searchContainerClass}
          globalSearchHeight={styles.searchHeight}
        />
      </div>
      <div className={styles.popularSearches}>
        <p className={styles.popularSearchLabel}>Popular searches:</p>
        <ul className={styles.popularSearchList}>
          {popularSearchLinks.map((item) => (
            <li key={item.value} className={styles.popularSearchItem}>
              {item.display}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.appFeatures}>
        {appFeatures.map((feature) => (
          <div className={styles.appFeature}></div>
        ))}
      </div>
      <div className={styles.serviceMenuWrapper}>
        <div className={styles.serviceMenu}>
          {serviceMenus.map((servMenu) => {
            return (
              <a className={styles.serviceMeneOption}>
                <Icon
                  name={servMenu.iconName}
                  className={styles.serviceMenuIcon}
                  alt='Chat Icon'
                />
                <span className={styles.serviceMenuText}>{servMenu.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsBanner;
