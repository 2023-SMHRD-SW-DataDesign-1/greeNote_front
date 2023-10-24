/* 식물 별 정리된 다이어리 */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_diary from '../components/Header_diary'
import Diary_content from '../components/Diary_content'
import AiPlant from '../components/AiPlant';

const GreenDiary = () => {
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
              <div className='mid_title_bin2'>
                <img src="/Icon/bin.png" alt="bin" />
              </div>
            </div>
            <div className='diary_box'>
              <Diary_content />
              <Diary_content />
              <Diary_content />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default GreenDiary