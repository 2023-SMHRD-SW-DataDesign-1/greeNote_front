import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='join_container'>
      <div className="input_logo"> {/* 우리 로고 */}
        <img src="/Image/intro_logo.png" alt="logo" />
      </div>
      <div className='main_title'>
        회원가입
      </div>
      <div className='join_input'>
        <input
          className='join_id'
          placeholder='아이디'
        />
        <div className='id_check'>
          이 아이디는 사용이 가능합니다.
        </div>
        <input
          className='join_pw'
          placeholder='비밀번호'
        />
        <input
          className='join_name'
          placeholder='이름'
        />
        <input
          className='join_nickname'
          placeholder='별칭'
        />
        <br /><br /><br /><br />

        <div className='join_button'>
          <Link to="/" className='button_link'>회원가입</Link>
        </div>

      </div>

    </div>
  )
}

export default Join