import React from 'react';
import styles from './guide.module.css';
const Guide = (props) => {
            


    return (
            <ul className={styles.asideBtns}>
                <li className={styles.asideBtn}>
                    <img className={styles.homeImg}src="/images/home.png" alt="homeImg" />
                    <span className={styles.imgName}>홈</span>
                </li>
                <li className={styles.asideBtn}>
                    <img className={styles.compassImg}src="/images/compass.png" alt="compass" />
                    <span className={styles.imgName}>탐색</span>
                </li>
                <li className={styles.asideBtn}>
                    <img className={styles.subscribeImg}src="/images/subscribe.png" alt="subscribe" />
                    <span className={styles.imgName}>구독</span>
                </li>
                <li className={styles.asideBtn}>
                    <img className={styles.folderImg}src="/images/folder.png" alt="folder" />
                    <span className={styles.imgName}>보관함</span>
                </li>
            </ul>
    )
};

export default Guide;