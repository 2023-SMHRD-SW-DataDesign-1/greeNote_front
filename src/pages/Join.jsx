import axios from 'axios';
import React, { useState } from 'react';
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const Join = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;
  // axios 설정
  axios.defaults.withCredentials = true;
  // navigate 선언
  const nav = useNavigate();

  // 아이디 체크
  const [checkError, setCheckError] = useState("");

  // 회원가입 요청 전송
  const signupMember = async (e) => {
    e.preventDefault(); // form태그 페이지 이동을 막아두기

    const formData = new FormData(e.target);
    const obj = {};

    formData.forEach((value, key) => {
      obj[key] = value;
    });
    obj['profileImg'] = imageUrl;

    await axios.post(`${masterURL}/auth/signup`, obj)
      // 성공
      .then((res) => {
        console.log('회원가입 요청', res);

        // 아이디 중복체크
        if (res.data.memberid == "중복된 아이디 입니다.") {
          setCheckError("이미 다른 사용자가 사용중 입니다.");
        } else {
          setCheckError("이 아이디는 사용이 가능합니다.");

        // 가입 완료
          nav('/login');
        }
      })
      // 에러
      .catch((err) => {
        console.log(err);
      })
  };

// 이미지 핸들러
const [imageFile, setImageFile] = useState(null);
const [previewURL, setPreviewURL] = useState(null);
const [imageUpload, setImageUpload] = useState(null); // 새로운 상태 추가
const [imageUrl, setImageUrl] = useState(null);
const storage = getStorage(firebaseApp);

// 이미지를 firebase안에 넣고 주소값 가져오는 함수
const thumbnail = async (e) => {
  const file = e.target.files[0];
  setImageUpload(file)
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setImageFile(file);
    setPreviewURL(imageURL);
  }
  if (file === null) return;
  const imageRef = ref(storage, `images/${Date.now()}`);
  // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
  await uploadBytes(imageRef, file).then((snapshot) => {
    // 파일 경로 저장
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrl(url);
      console.log(url);
    });
  });
};





return (
  <div className='bodyController'>
    <div className='join_container'>
      <div className="input_logo"> {/* 우리 로고 */}
        <img src="/Image/book_logo.png" alt="logo" />
      </div>

      <div className='join_box'>
        <div className='main_title'>
          회원가입
        </div>
        <form onSubmit={signupMember}>
          <div className='join_box2'>
            <div className='join_photo'>{/* 사진과 입력 */}
              {previewURL ? (
                <img src={previewURL} alt="green" />
              ) : (
                <p>No Image</p>
              )}
            </div>
            <input
              type='file'
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={thumbnail}
              name='image'
              className='inputJoin'
            />

            <br />
            <input
              className='join_id'
              placeholder='아이디'
              name='memberid'
            />
            <div className='id_check'>
              <span id="checkMess">{checkError}</span>
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
            <br /><br />

            <button type='submit' className='join_button2'>
              회원가입
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
)
}

export default Join