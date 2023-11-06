import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Diary_content = ({ diary, imgUrl }) => {

  const image_url = imgUrl && JSON.parse(imgUrl.image_url)

  return (
    <div className='diary_container'>
      <Link to={`/diarydetail?diaryId=${diary.diaryId}&plant_id=${diary.plantId}`} className='linkFile'>
        <div className='diaryFile'>
          <img src={diary && image_url[0].image_url} alt='plantImg' className='diaryFile'/>
        </div>
      </Link>
      
      <div className='diary_content'>
        <div className="top">
          <div className='title2'>
            {diary && diary.title}
          </div>
        </div>
        <div className='contents'>
          {diary && diary.content}
        </div>
      </div>


    </div>
  )
}

export default Diary_content