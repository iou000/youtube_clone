class YoutubeService {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    mostPopular() {
        //유튜브에서 가장 유명한 영상들의 데이터를 받아옴.
    return fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?&part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        this.getRequestOptions
    )
     .then(response => response.json())
     .then(result => result.items)
     .catch(error => console.log('error', error))
    }


    searchVideos(query) {
        // query= input.current.value 유튜브에서 query에 맞는 영상들의 데이터를 받아옴.
    return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
         this.getRequestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
    .catch(error => console.log('error', error))
    }

}

export default YoutubeService;