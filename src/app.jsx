import React, { useEffect, useState }from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtubeService }) {
  const[videos, setVideos] = useState([]);
  const[selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = (query) => {
    setSelectedVideo(null);
    youtubeService.searchVideos(query)
    .then(videos => setVideos(videos));

  }

  useEffect(() => {
    youtubeService.mostPopular()
    .then(videos => setVideos(videos));
  },[]);




  return (
    <div className={styles.app}>
    <Search_header onSearch={search}/>
    <section className={styles.content}>
      { selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </section>
    </div>
  );
}

export default App;
