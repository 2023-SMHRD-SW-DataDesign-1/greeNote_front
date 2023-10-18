import React from 'react'
import axios from 'axios'

const TestJoin = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 회원가입 요청 전송
    const joinMember = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const obj = {};

        formData.forEach((value, key) => {
          obj[key] = value;
        });

        await axios.post(`${masterURL}/member/join`, obj)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={joinMember}>
                ID : <input type="text" name="id" />
                <br />
                PW : <input type="password" name="pw" />
                <br />
                닉네임 : <input type="text" name="nickName" />
                <br />
                이름 : <input type="text" name="userName" />
                <br />
                <button type='submit'> 클릭 </button>
            </form>
        </div>
    )
}

export default TestJoin