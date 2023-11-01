import React, { useContext, useEffect, useState } from 'react'
import ItemSlide from './ItemSlide'
import { DataContext } from '../contexts/DataContext';
import axios from 'axios';

const SlideItemBox = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 현재 선택된 식물 정보
  const { selectedPlantData } = useContext(DataContext);

  // 사진 정보 저장할 State
  const [diaryImages, setDiaryImages] = useState([]);

  // 선택된 식물의 다이어리 사진들 가져오기
  const readDiaryImg = () => {
    axios.get(`${masterURL}/diary/readDiaryImg?plantId=${selectedPlantData.plantId}`)
      .then((res) => {
        console.log('res.data', res.data);
        setDiaryImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // 라벨링 끝난 사진 데이터 담을 State
  const [imgArr, setImgArr] = useState([]);
  // 가져온 사진들 계절 라벨링
  const labelingImg = () => {
    const seasons = ['겨울', '봄', '여름', '가을'];
    const parsedImages = [].concat(...diaryImages.map(item => {
      return JSON.parse(item.image_url).map(imageItem => ({
        image_url: imageItem.image_url,
        season: seasons[Math.floor((new Date(item.registration_date).getMonth()) / 3)],
        registration_date: item.registration_date
      }));
    })).filter(item => item.image_url);
    setImgArr(parsedImages);
    console.log(parsedImages);
  }

  useEffect(() => {
    readDiaryImg();
  }, [selectedPlantData])

  useEffect(() => {
    labelingImg();
  }, [diaryImages]);

  return (
    <div>
      <div className='web_pageInfo'>
        <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
        <div className='web_infoText'>슬라이드</div>
      </div>
      <div className='slide_setBox'>
        {imgArr.length > 0 ? (
          <ItemSlide data={imgArr} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default SlideItemBox