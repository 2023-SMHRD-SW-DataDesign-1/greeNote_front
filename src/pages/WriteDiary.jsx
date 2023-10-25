/* 다이어리 작성하는 페이지 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

const WriteDiary = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    const today2 = new Date();

    /* 오늘 날짜 출력하기 */
    const Today2 = today2.toLocaleDateString();

    /* 오늘 요일 출력하기 */
    const options = { weekday: 'long' };

    // 'long' 옵션은 요일을 긴 형태(예: "Monday")로 출력합니다.
    const dayOfWeek2 = today2.toLocaleDateString('ko-KR', options);

    // 이미지 핸들 함수와 스테이트들
    const [imageFile, setImageFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState("");
    const storage = getStorage(firebaseApp);

    const thumbnail = async (e) => {
        const file = e.target.files[0];
        const files = Array.from(e.target.files);
        console.log(files);
        setImageUpload(file)
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageFile(file);
            setPreviewURL(imageURL);
        }
        if (file === null) return;
        try {
            const result = await Promise.all(files.map((value, index) => {
                const imageRef = ref(storage, `images/${Date.now() + index}`);
                // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
                return uploadBytes(imageRef, value)
                    .then((snapshot) => getDownloadURL(snapshot.ref));
            }))
            for (const url of result) {
                setImageUrls((prevImageUrls) => [...prevImageUrls, url]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // 위에 있는 함수에서 Flask 서버로 전송할 데이터 획득해서 사용하기!! (나중에)

    // 다이어리 작성 함수
    const addDiary = async (e) => {
        e.preventDefault();

        const obj = {};
        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        obj['plant_id'] = 1; // Plant_id는 현재 임의의 값 넣어놨음. 나중에 조회 기능 만들때 client에서부터 가져올 수 있도록 할 것
        obj['ai_result'] = '흰가루병'; // 나중에 제대로 만들 것
        obj['diary_imageDto'] = imageUrls;

        console.log(obj);

        await axios.post(`${masterURL}/diary/addDiary`, obj)
            .then((res) => {
                console.log(res);
                const image_url = JSON.parse(res.data[1].image_url)
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
        <div className='writeDiary_container'>

            <div className='header_diary'>
                <div className="switch_ai"> {/* 스위치 버튼 */}
                    <div className='text3'>
                        AI 진단
                    </div>
                    <div className="check">
                        <input id="check-5" type="checkbox" />
                        <label for="check-5" />
                    </div>
                </div>
                <div className=''> {/* 홈버튼 아이콘 */}
                    <Link to="/" className='icon_home2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door icon_home2" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <br />

            <form onSubmit={addDiary}>
                <div className='profile_container2'> {/* 사진 */}
                    <div className='profile_green'>
                        <img src="/Image/monstera.jpg" alt="green" />
                    </div>
                </div>
                <br />

                <div className='date_container'> {/* 날짜 */}
                    <div className='date'>
                        {Today2}
                    </div>
                    <div className='week'>
                        {dayOfWeek2}
                    </div>
                </div>
                <br />

                <div className='green_photo'>
                    {previewURL ? (
                        <img src={previewURL} alt="green" />
                    ) : (
                        <p>선택 된 이미지가 없습니다</p>
                    )}
                </div>
                <input
                    type='file'
                    /* style={{display:"none"}} */
                    accept="image/*"
                    multiple
                    onChange={thumbnail}
                    name=''
                />
                <br /><br />
                <div className='input_container2'>
                    <input
                        className='titleBox'
                        placeholder='제목을 입력 해 주세요'
                        name='title' />
                    <br />
                    <input
                        className='contentBox'
                        placeholder='내용을 입력 해 주세요'
                        name='content' />
                </div>
                <div className='footer-container'>
                    <div className="footer_bin">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </div>

                    <button type='submit' className="footer_ok">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                    </button>
                </div>
            </form>
            <br />

            {/*             <div className='complete_button'>
                <Link to="/" className='button_link'>작성완료</Link>
            </div> */}

        </div>
    )
}

export default WriteDiary