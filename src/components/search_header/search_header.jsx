import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo((props) => {

        const inputRef = useRef(); //input에서 value가져오려고 씀.

        const handleSearch = () => {
            props.onSearch(inputRef.current.value);
        }

        const onClick =() => {
            handleSearch();
        }

        const onKeyPress = (e) => {
            if(e.key === "Enter") {
                handleSearch();
            }
        }
    
        return (
                <header className={styles.header}>

                    <div className={styles.start}>
                        <button className={styles.hamburger}>
                                <img className={styles.hamburgerImg}src="/images/hamburger.png" alt="hamburger" />        
                        </button>
                        <span className={styles.youtube} onClick={props.onLogoClick}>
                        <img className={styles.logo} src="/images/logo.png" alt="logo"/>
                        <h1 className={styles.title} >YouTube</h1>
                        </span>
                    </div>
                        
                    <div className={styles.center}>
                        <input ref={inputRef} className={styles.input} type="search" placeholder="검색" onKeyPress={onKeyPress}/>
                        <button className={styles.searchBtn} type="submit" onClick={onClick}>
                                <img className={styles.searchIcon}src="/images/search.png" alt="search" />
                        </button>
                        <img className={styles.microphoneImg}src="/images/microphone.png" alt="microphone" />
                    </div>

                    <div className={styles.end}>
                        <img className={styles.searchImg}src="/images/search.png" alt="searchImg" />
                        <img className={styles.videoImg}src="/images/video.png" alt="video" />
                        <img className={styles.app_menuImg}src="/images/app_menu.png" alt="app_menu" />
                        <img className={styles.bellImg}src="/images/bell.png" alt="bell" />
                        <img className={styles.profileImg}src="/images/profile.png" alt="profile" />
                    </div>
                    
                </header>


        );
});

export default SearchHeader;