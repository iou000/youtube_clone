import React, { memo } from 'react';
import styles from './video_item.module.css';


const VideoItem = memo((props) => {      
    
    const displayType = props.display === 'list' ? styles.list : styles.grid;
    return(
        <li className={`${styles.container} ${displayType}`} onClick={() => {props.onVideoClick(props.video)}}>
        <div className={`${styles.video} ${displayType}`}>
            <img className={`${styles.thumbnail} ${displayType}`}
            src={props.video.snippet.thumbnails.medium.url} 
            alt="video thumbnail" />

            <div className={`${styles.details} ${displayType}`}>
                <div className={`${styles.metadatas} ${displayType}`}>
                    <p className={`${styles.title} ${displayType}`}> {props.video.snippet.title}</p>
                    <p className={`${styles.channel} ${displayType}`}> {props.video.snippet.channelTitle}</p>
                </div>
            </div>

        </div>
        </li>
    )
});

export default VideoItem;