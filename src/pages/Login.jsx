import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';

const Login = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;
  // axios 설정
  axios.defaults.withCredentials = true;
  // navigate 선언
  const nav = useNavigate();

  // 회원정보 State
  const { memberInfo, setMemberInfo } = useContext(DataContext);

  // 로그인 함수
  const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = {};

    formData.forEach((value, key) => {
      obj[key] = value;
    });

    await axios.post(`${masterURL}/auth/login`, obj)
      .then((res) => {
        console.log(res);
        setMemberInfo(res.data);
        sessionStorage.setItem('id', res.data.id);
        sessionStorage.setItem('memberid', res.data.memberid);
        nav('/main');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='bodyController'>
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

          <form onSubmit={login}>
            <div className='login_box2'>
              <input
                className='join_id'
                placeholder='아이디'
                name='memberid'
              />
              <input
                className='join_pw'
                placeholder='비밀번호'
                name='password'
              />

            </div>
            <br /><br /><br />

            <button type='submit' className='login_button2'>
              로그인
            </button>
          </form>
        </div>
      </div >

    </div>
  )
}

export default Login