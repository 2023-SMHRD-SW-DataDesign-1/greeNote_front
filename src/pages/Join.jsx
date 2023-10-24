import axios from 'axios';
import React, { useState } from 'react';
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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



  // 이미지 핸들러
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [imageUpload, setImageUpload] = useState(null); // 새로운 상태 추가
  const [imageUrl, setImageUrl] = useState(null);
  const storage = getStorage(firebaseApp);

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
            />
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