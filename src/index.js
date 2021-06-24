import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeService from './components/service/youtubeService';

const youtubeService = new YoutubeService(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeService={youtubeService}/>
  </React.StrictMode>,
  document.getElementById('root')
);