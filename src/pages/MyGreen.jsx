/* 저장된 내 식물들이 보이는 리스트페이지 */

import React from 'react'
import AiHeader from '../components/AiHeader'
import { Link } from 'react-router-dom'
import GreenList_all from '../components/GreenList_all'

const MyGreen = () => {
  return (
    <div className='myGreen_container'>
      <AiHeader /> {/* header */}
      <div className='main_title'>
        <Link to="/" className='book'>
          <img src="/Image/book_logo.PNG" alt="book" />
        </Link>
        내 반려식물
      </div>
      <br />

      <GreenList_all />

      <div className="icon_add"> {/* 추가 아이콘 */}
        <Link to="/addgreen" className='button_links'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Link>
      </div>

    </div>
  )
}

export default MyGreen