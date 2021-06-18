import React from 'react';

const VideoItem = (props) => {           

    return(
        <li>{props.video.snippet.title}</li>
    )
};

export default VideoItem;