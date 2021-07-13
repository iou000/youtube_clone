# Youtube clone

youtube data api를 활용한 유튜브 사이트 클론 프로젝트

## 실행 명령어

yarn start

초기화면
![Untitled](https://user-images.githubusercontent.com/68727627/125381618-33b27180-e3cf-11eb-868c-4b982d79d9bf.png)

검색기능
![Untitled](https://user-images.githubusercontent.com/68727627/125381732-60668900-e3cf-11eb-9e9c-9ab8fa7601fc.png)

영상선택화면
![Untitled](https://user-images.githubusercontent.com/68727627/125381849-9b68bc80-e3cf-11eb-9600-e5eb5ae4c012.png)


## 사용된 기술

![html5](https://user-images.githubusercontent.com/68727627/125381961-cce18800-e3cf-11eb-9a79-78c76f41c712.png) 
![1_CeuWv9fCjD1uTiTuKytnBQ](https://user-images.githubusercontent.com/68727627/125382010-de2a9480-e3cf-11eb-9ac6-4ec6cfd8d7df.png) 
![postcss](https://user-images.githubusercontent.com/68727627/125382054-ed114700-e3cf-11eb-8b2a-9fca859de74d.png) 

## 컴포넌트 설계

- app
    - search_header
    - video_list
        - vidio_item
    - vidoe_detail

## API

- Open API : **youtube api**

    youtube data api 사용

## 서비스

sevice.js

- mostPopular()

    유튜브에서 가장 유명한 영상의 목록들을 받아옴.

- searchVideos(query)

    query= {input.current.value} 유튜브에서 query에 맞는 영상들의 데이터를 받아옴.
