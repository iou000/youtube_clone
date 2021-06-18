import React, { useEffect, useState }from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const[videos, setVideos] = useState([]);

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
    <>
    <VideoList videos={videos}/>
    </>
  );
}

export default App;
