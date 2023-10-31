import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Diary_content = ({ diary, imgUrl }) => {

  const image_url = imgUrl && JSON.parse(imgUrl.image_url)

  return (
    <div className='diary_container'>
      <Link to={`/diarydetail/${diary.diaryId}`} className='linkFile'>
        <div className='diaryFile'>
          <img src={diary && image_url[0].image_url} alt='plantImg' className='diaryFile'/>
        </div>
      </Link>
      
      <div className='diary_content'>
        <div className="top">
          <div className='title2'>
            {diary && diary.title}
          </div>
          <img src="/Icon/bin.png" alt="bin" className='diaryContent_bin'/> {/* 휴지통 아이콘 */}
        </div>
        <div className='contents'>
          {diary && diary.content}
        </div>
      </div>


    </div>
  )
}

export default Diary_content