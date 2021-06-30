import React, { useCallback, useEffect, useState }from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtubeService }) {
  const[videos, setVideos] = useState([]);
  const[selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  },[]);

  const search = useCallback((query) => {
    setSelectedVideo(null);
    youtubeService.searchVideos(query)
    .then(videos => setVideos(videos));

  },[youtubeService]);

  const backHome = () => {
    setSelectedVideo(null);
    youtubeService.mostPopular()
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtubeService.mostPopular()
    .then(videos => setVideos(videos));
  },[youtubeService]);




  return (
    <div className={styles.app}>
    <SearchHeader onSearch={search} onLogoClick={backHome}/>
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
