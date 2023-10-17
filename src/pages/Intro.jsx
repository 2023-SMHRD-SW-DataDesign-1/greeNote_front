import React from 'react'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (
      
    <div className='intro_container'>
      <div className="intro_logo"> {/* 우리 로고 */}
        <img src="/Image/intro_logo.png" alt="logo" />
      </div>
      <div className='login_button'>
        <Link to="/Login" className='button_link'>로그인</Link>
      </div>
      <div className='join_button'>
        <Link to="/Join" className='button_link'>회원가입</Link>
      </div>
    </div>

  )
}

export default Intro