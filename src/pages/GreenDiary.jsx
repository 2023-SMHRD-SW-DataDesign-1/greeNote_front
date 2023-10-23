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
        <div>
          <Header_diary />
        </div>
        <div>
          <AiPlant />
        </div>
        <br/>
        <div>
          <Diary_content />
          <Diary_content />
          <Diary_content />
          <Diary_content />
        </div>
      </div>

    </div>
  )
}

export default GreenDiary