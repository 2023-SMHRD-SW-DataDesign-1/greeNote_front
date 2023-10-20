import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login_container'>
      <div className="input_logo"> {/* 우리 로고 */}
        <img src="/Image/intro_logo.png" alt="logo" />
      </div>
      
      <div className='login_box'>
        <div className='login'>
          <span className="logo_font">greeNote</span>
          <span className="etc_font">의 서비스
            <br />이용을 위해 로그인 해 주세요.</span>
        </div>

        <form onSubmit={1}>
          <input
            className='join_id'
            placeholder='아이디'
          />
          <input
            className='join_pw'
            placeholder='비밀번호'
          />
          <br /><br /><br /><br />

          <button type='submit' className='login_button'>
            <Link to="/" className='button_links'>로그인</Link>
          </button>
        </form>
      </div>

    </div >
  )
}

export default Login