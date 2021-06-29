import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo((props) => {

    const displayType = props.display === 'list' ? styles.list : styles.grid;

    return (
    <ul className={`${styles.videos} ${displayType}`}>
        {props.videos.map(video => {  //props(videos) 배열을 돌면서 vidoe에 있는 items(배열 원소)를 VideoItem컴포넌트로 만들어줌.
            return <VideoItem 
                    key={video.id} 
                    video={video} 
                    onVideoClick={props.onVideoClick}
                    display={props.display}
            />
        })}
    </ul>
    )

});

export default VideoList;