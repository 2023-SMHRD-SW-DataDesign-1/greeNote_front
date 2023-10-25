import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Diary_content = () => {
  return (
    <div className='diary_container'>
      <Link to="/" className='button_links'>
        <div className='diaryFile'>
          선택 된 사진이 <br />없습니다.
        </div>
      </Link>

      <div className='diary_content'>
        <div className="top">
          <div className='title2'>
            제목제목
          </div>
          <img src="/Icon/bin.png" alt="bin" /> {/* 휴지통 아이콘 */}
        </div>
        <div className='contents'>
          새 잎이 난 지 꽤 됐는데 말린 잎이 아직 펴지기까지 얼마나 더 걸릴려나…
          자꾸 만지면 안 좋은데 새 잎 특유의 연한 촉감이 좋아서 만지게 된다
          (●ˇ∀ˇ●)
        </div>
      </div>
    </div>
  )
}

export default Diary_content