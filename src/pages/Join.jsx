import axios from 'axios';
import React from 'react'

const Join = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 회원가입 요청 전송
  const signupMember = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = {};

    formData.forEach((value, key) => {
      obj[key] = value;
    });

    await axios.post(`${masterURL}/auth/signup`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='join_container'>
      <div className="input_logo"> {/* 우리 로고 */}
        <img src="/Image/book_logo.png" alt="logo" />
      </div>

      <div className='join_box'>
        <div className='main_title'>
          회원가입
        </div>
        <form onSubmit={signupMember}>
          <div className='join_input'>
            <input
              className='join_id'
              placeholder='아이디'
              name='memberid'
            />
            <div className='id_check'>
              이 아이디는 사용이 가능합니다.
            </div>
            <input
              className='join_pw'
              placeholder='비밀번호'
              name='password'
            />
            <input
              className='join_name'
              placeholder='이름'
              name='membername'
            />
            <input
              className='join_nickname'
              placeholder='별칭'
              name='nickname'
            />
            <br /><br /><br />
            
            <button type='submit' className='join_button2'>
              회원가입
            </button>
          </div>
        </form>

      </div>


    </div>
  )
}

export default Join