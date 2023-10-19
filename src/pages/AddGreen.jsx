/* 식물 추가 페이지 */

import React, { useState } from 'react';
import AiHeader from '../components/AiHeader'
import { Link } from 'react-router-dom'


const AddGreen = () => {

  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageFile(file);
      setPreviewURL(imageURL);
    }
  };

  const onClick = () => {
    if (imageFile) {
      // 이미지 데이터를 서버로 전송하는 로직을 작성합니다.
      const formData = new FormData();
      formData.append('image', imageFile);

      // Axios 또는 fetch API를 사용하여 서버로 데이터를 전송합니다.
      // 예: Axios 사용

      // axios.post('/upload', formData)
      //   .then(response => {
      //     console.log('업로드 성공');
      //   })
      //   .catch(error => {
      //     console.error('업로드 실패', error);
      //   });
    }
  };

    return (
      <div className='add_container'>
        <AiHeader />
        <div className='addGreen'>
          내 반려 식물의 프로필
        </div>

        <form>
          <div className='photoGreen'>{/* 사진과 입력 */}
            {previewURL ? (
              <img src={previewURL} alt="green" />
            ) : (
              <p>No Image</p>
            )}
          </div>
          <button onClick={onClick} className='photoGreen2'>
            <input
              type='file'
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={onChange}
            />
          </button>
          <br/><br/>
          <div className='input_container2'>
            <input
              className='greenName'
              placeholder='식물의 실제 이름'
            />
            <input
              className='greenStart'
              placeholder='키우기 시작한 날    ex) 23-10-18'
            />
            <input
              className='Lastwater'
              placeholder='마지막 물 준 날       ex) 23-10-18'
            />
            <input
              className='greenNickname'
              placeholder='애칭'
            />
            <input
              className='greenText'
              placeholder='한 줄 메세지'
            />
            <input
              className='greenColor'
              placeholder='대표색 지정'
            />
          </div>

          <div className='gardening_container'> {/* 관리주기설정 */}
            <div className='title'>
              관리 주기 설정
            </div>
            <div className='info_text'>
              관리주기는 비설정 가능
            </div>
            <div className="switch_control"> {/* 스위치 버튼 */}
              <div className='text3'>
                물 주기
              </div>
              <div className="check">
                <input id="check-1" type="checkbox" />
                <label for="check-1" />
              </div>
            </div>
            <div className="switch_control"> {/* 스위치 버튼 */}
              <div className='text3'>
                분갈이하기
              </div>
              <div className="check">
                <input id="check-2" type="checkbox" />
                <label for="check-2" />
              </div>
            </div>
            <div className="switch_control"> {/* 스위치 버튼 */}
              <div className='text3'>
                영양관리
              </div>
              <div className="check">
                <input id="check-3" type="checkbox" />
                <label for="check-3" />
              </div>
            </div>
            <div class="switch_control"> {/* 스위치 버튼 */}
              <div className='text3'>
                환기하기
              </div>
              <div className="check">
                <input id="check-4" type="checkbox" />
                <label for="check-4" />
              </div>
            </div>
          </div >
          <br />

          <button type='submit' className='complete_button'>
            <Link to="/" className='button_links'>작성완료</Link>
          </button>
        </form>

      </div>
    )
  }

export default AddGreen;