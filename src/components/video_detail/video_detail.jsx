import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {
    
    
    
    return (

    <div className={styles.container}>
        <iframe 
          className={styles.video}
          type="text/html" 
          src={`https://www.youtube.com/embed/${props.video.id}`}
          title = "youtube video player"
          frameBorder="0"
          allowFullScreen>
        </iframe>
        <div className={styles.video_primary_info}>
            <h2 className={styles.videoTitle}>{props.video.snippet.title}</h2>
        </div>
        <div className={styles.video_secondary_info}>
            <h2 className={styles.channelTitle}>{props.video.snippet.channelTitle}</h2>
            <pre className={styles.video_description}>{props.video.snippet.description}</pre>
        </div>
        <div className={styles.comment}>
            <h4>댓글</h4>
        </div>

    </div>

    )
};

export default VideoDetail;