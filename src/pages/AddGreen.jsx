/* 식물 추가 페이지 */

import React, { useState } from 'react';
import AiHeader from '../components/AiHeader'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

const AddGreen = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 이미지 핸들러
  const [imageFile, setImageFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
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
      });
    });
  };

  // 목록 등록 함수
  const addPlantList = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const plantObj = {
      image: imageUrl,
      title: formData.get('title'),
      start_date: formData.get('startDate'),
      watering_date: formData.get('wateringDate'),
      nickname: formData.get('nickname'),
      message: formData.get('message'),
      color: formData.get('color'),
      gardeningDto: {
        watering: formData.get('water') === 'on' ? 7 : null,
        repotting: formData.get('repot') === 'on' ? 90 : null,
        nutrition_management: formData.get('nutrition') === 'on' ? 80 : null,
        ventilation: formData.get('ventilation') === 'on' ? 40 : null
      }
    };

    await axios.post(`${masterURL}/plant/addPlantList`, plantObj)
      .then((res) => {
        console.log(res);
      })
      .catch(async (err) => {
        console.log(err);
        if (err.message === "Request failed with status code 401") {
          await axios.get(`${masterURL}/auth/reissue`)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
  }

  return (
    <div className='web_top_container'>
      <div className='add_container'>
        <AiHeader />
        <div className='mid_title3'>
          <img src="/Image/book_logo.PNG" alt="book" />
          내 반려 식물의 프로필
        </div>

        <form onSubmit={addPlantList}>
          <div className='main_big_pie2'>
            <div className='photoGreen1'>
              <div className='photoGreen'>{/* 사진과 입력 */}
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
                className='inputPhoto'
              />
            </div>
            <br /><br />
            <div className='input_container2'>
              <div className='mini_title1'>
                기본 정보
              </div>
              <input
                className='greenName'
                placeholder='식물의 실제 이름'
                name='title'
              />
              <input
                className='greenStart'
                placeholder='키우기 시작한 날    ex) 23-10-18'
                type='date'
                name='startDate'
              />
              <input
                className='Lastwater'
                placeholder='마지막 물 준 날       ex) 23-10-18'
                type='date'
                name='wateringDate'
              />
              <input
                className='greenNickname'
                placeholder='애칭'
                name='nickname'
              />
              <input
                className='greenText'
                placeholder='한 줄 메세지'
                name='message'
              />
              <input
                type='color'
                className='greenColor'
                name='color'
              />
            </div>
            <br/><br/>

            <div className='gardening_container'> {/* 관리주기설정 */}
              <div className='mini_title2'>
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
                  <input id="check-1" type="checkbox" name='water' />
                  <label for="check-1" />
                </div>
              </div>
              <div className="switch_control"> {/* 스위치 버튼 */}
                <div className='text3'>
                  분갈이하기
                </div>
                <div className="check">
                  <input id="check-2" type="checkbox" name='repot' />
                  <label for="check-2" />
                </div>
              </div>
              <div className="switch_control"> {/* 스위치 버튼 */}
                <div className='text3'>
                  영양관리
                </div>
                <div className="check">
                  <input id="check-3" type="checkbox" name='nutrition' />
                  <label for="check-3" />
                </div>
              </div>
              <div class="switch_control"> {/* 스위치 버튼 */}
                <div className='text3'>
                  환기하기
                </div>
                <div className="check">
                  <input id="check-4" type="checkbox" name='ventilation' />
                  <label for="check-4" />
                </div>
              </div>
              <button type='submit' className='complete_button'>
                작성완료
              </button>
            </div >
            <br />

          </div>
        </form>

      </div>

    </div>
  )
}

export default AddGreen;