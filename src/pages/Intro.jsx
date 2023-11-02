/* 시작 페이지 */

import React from 'react'
import { Link } from 'react-router-dom'
import ItemIntroSlide from '../components/ItemIntroSlide'


const Intro = () => {
  return (
    <div className='intro_top_container'>
      <div>
        <img className='intro_logo2' src="/Image/home_logo.png" alt="" />
      </div>
      <div className='intro_container'>
        <div className='intro_slide_container'>
          <div className="intro_slide">
            {/* 이미지 */}
            <ItemIntroSlide />
          </div>
        </div>
        <div className='intro_buttons'>
          <div className='intro_login_button'>
            <Link to="/Login" className='button_links'>로그인</Link>
          </div>
          <div className='intro_join_button'>
            <Link to="/Join" className='button_links'>회원가입</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Intro