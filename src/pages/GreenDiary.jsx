/* 식물 별 정리된 다이어리 */

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_diary from '../components/Header_diary'
import Diary_content from '../components/Diary_content'
import AiPlant from '../components/AiPlant';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

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
        console.log(res);
        setDiaryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readDiary();
  }, [])


  return (
    <div className='web_top_container'>
      <div className='greendiary_container'>
        <Header_diary /> {/* header */}

        <div className='main_big_pie1'>
          <AiPlant />
          <div className='diary_all'>
            <div className='mid_title1'>
              <div className='mid_title2'>
                <img src="/Image/book_logo.PNG" alt="book" />
                내 반려식물의 다이어리 모아보기
              </div>
              {<button>
                <Link to={`/writediary/${plant_id}`}>
                  테스트 버튼
                </Link>
              </button>}
              <div className='mid_title_bin2'>
                <img src="/Icon/bin.png" alt="bin" />
              </div>
            </div>
            <div className='diary_box'>
              {diaryList.map((value) => <Diary_content key={value.diary_id} props={value}/>)}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default GreenDiary