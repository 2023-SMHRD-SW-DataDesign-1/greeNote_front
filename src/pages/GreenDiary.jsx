/* 식물 별 정리된 다이어리 */

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiPlant from '../components/AiPlant';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import GreenDiary_photo from '../components/GreenDiary_photo';

const GreenDiary = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록별 조회하기 위한 id값 가져오기
  const { plant_id } = useParams();

  // 다이어리 목록을 담을 State
  const [diaryList, setDiaryList] = useState([]);

  // 식물 목록별 다이어리 조회
  const readDiary = () => {
    console.log(plant_id);
    axios.get(`${masterURL}/diary/readDiary/${plant_id}`)
      .then((res) => {
        console.log('식물 목록별 다이어리', res);
        setDiaryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readDiary();
  }, [])

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (image) => {
    if (selectedImage.url === image.url) {
      setSelectedImage(0); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
    } else {
      setSelectedImage(image); // 새 이미지를 선택
    }
    console.log('selectedImage:', selectedImage);
  };

  return (
    <div className='web_top_container'>
      <div className='greendiary_container'>

        <div className='main_page1'>
          <AiPlant />
          
          <div className='diary_all'>
            <div className='mid_title'>
              <div className='mid_title2'>
                <img src="/Image/book_logo.PNG" alt="book" />
                다이어리 모아보기
              </div>
              <div className='icons2'>
                <div className='mid_title_bin2'> 
                  <img src="/Icon/bin.png" alt="bin" />
                </div>
                <Link to={`/writediary/${plant_id}`} className='mid_title_edit'>
                  <img src="/Icon/edit.png" alt="edit" />
                </Link>
              </div>
            </div>

            {/* {diaryList.map((value) => <Diary_content key={value.diary_id} diary={value.diary} imgUrl={value.imgUrl} />)} */}
            <div className='diary_box'>
              <div className='diary_box2'>
                {diaryList && diaryList.map((item, idx) => (
                  <GreenDiary_photo key={idx} data={item} />
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenDiary