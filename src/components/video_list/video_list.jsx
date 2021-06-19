import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => {

    return (
    <ul className={styles.videos}>
        {props.videos.map(video => {  //props(videos) 배열을 돌면서 vidoe에 있는 items(배열 원소)를 VideoItem컴포넌트로 만들어줌.
            return <VideoItem key={video.id} video={video}/>
        })}
    </ul>
    )

};

export default VideoList;