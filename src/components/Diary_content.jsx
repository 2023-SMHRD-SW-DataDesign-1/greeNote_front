import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Diary_content = ({ props }) => {
  return (
    <div className='diary_container'>
      <Link to="/diarydetail" className='button_links'>
        <div className='diaryFile'>
          선택 된 사진이 <br />없습니다.
        </div>
      </Link>

      <div className='diary_content'>
        <div className="top">
          <div className='title2'>
            {props && props.title}
          </div>
          <img src="/Icon/bin.png" alt="bin" /> {/* 휴지통 아이콘 */}
        </div>
        <div className='contents'>
          {props && props.content}
        </div>
      </div>
    </div>
  )
}

export default Diary_content