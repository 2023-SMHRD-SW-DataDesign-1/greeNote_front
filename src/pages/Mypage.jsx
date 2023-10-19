import React from 'react'
import { Link } from 'react-router-dom'

const Mypage = () => {
    return (
        <div className='mypage_container'>
            <div className="input_logo"> {/* 우리 로고 */}
                <img src="/Image/intro_logo.png" alt="logo" />
            </div>
            <div className='main_title'>
                회원정보수정
            </div>
            <form>
                <div className='text2'>
                    이름
                </div>
                <div className='session_info'>
                    session이름
                </div>
                <div className='text2'>
                    아이디
                </div>
                <div className='session_info'>
                    session아이디
                </div>
                <div className='text2'>
                    비밀번호
                </div>
                <input
                    className='mypage_pw'
                    placeholder='비밀번호'
                />

                <div className='text2'>
                    별칭
                </div>
                <input
                    className='mypage_nickname'
                    placeholder='별칭'
                />
                <br /><br /><br />

                <button type='submit' className='complete_button'>
                    <Link to="/" className='button_link'>수정완료</Link>
                </button>
            </form>

        </div>
    )
}

export default Mypage