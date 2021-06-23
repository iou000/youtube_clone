import React, { useEffect, useState }from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const[videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    // query= input.current.value 유튜브에서 query에 맞는 영상들의 데이터를 받아옴.
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDqC6RvlhzrU4wupY19pMYO6tCTTMIPqPA`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //유튜브에서 가장 유명한 영상들의 데이터를 받아옴.
    fetch("https://youtube.googleapis.com/youtube/v3/videos?&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDqC6RvlhzrU4wupY19pMYO6tCTTMIPqPA",
     requestOptions
     )
      .then(response => response.json())
      .then(result =>  setVideos(result.items))  //videos(처음엔 빈 배열)를 response의 items로 업데이트
      .catch(error => console.log('error', error));

  },[]);




  return (
    <div className={styles.app}>
    <Search_header onSearch={search}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
