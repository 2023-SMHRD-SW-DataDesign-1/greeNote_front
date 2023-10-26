/* 다이어리 작성하는 페이지 */

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Sidebar from '../components/Page_main/Sidebar'
import Diary_Sidebar from '../components/Page_wirteDiary/Diary_Sidebar';
import AiPlant from '../components/AiPlant';

const WriteDiary = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 식물 목록별 조회하기 위한 id값 가져오기
    const { plant_id } = useParams();

    const today2 = new Date();

    /* 오늘 날짜 출력하기 */
    const Today2 = today2.toLocaleDateString();
    const year = today2.getFullYear();
    const month = String(today2.getMonth() + 1).padStart(2, '0');
    const day = String(today2.getDate()).padStart(2, '0');
    const registration_date = `${year}-${month}-${day}`;

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
        obj['plant_id'] = plant_id;
        obj['ai_result'] = '흰가루병'; // 나중에 제대로 만들 것
        obj['diary_imageDto'] = imageUrls;
        obj['registration_date'] = registration_date;

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
        <div className='web_top_container'>
            <div className='writeDiary_container'>

                <div className='main_big_pie1'>
                    <AiPlant />
                    <div className='main_pie1'>
                        <div className='web_pageInfo'>
                            <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                            <div className='web_infoText'>다이어리 작성하기</div>
                        </div>

                        <div className='diary_pie'>
                            <div className='partRight'>

                                <div className='diaryDate1'> {/* 날짜 */}
                                    <div className='date'>
                                        {Today2}
                                    </div>
                                    <div className='week'>
                                        {dayOfWeek2}
                                    </div>
                                </div>
                                <div className='diary_photo1'>
                                    <div className='green_photo'>
                                        {previewURL ? (
                                            <img src={previewURL} alt="green" />
                                        ) : (
                                            <p>선택 된 이미지가 없습니다</p>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <br />

                            <div className='partLeft'>
                                <form onSubmit={addDiary}>

                                    <div className='diaryDate2'> {/* 날짜 */}
                                        <div className='date'>
                                            {Today2}
                                        </div>
                                        <div className='week'>
                                            {dayOfWeek2}
                                        </div>
                                    </div>

                                    <div className='profile_container2'> {/* 사진(모바일만) */}
                                        <div className='profile_green'>
                                            <img src="/Image/monstera.jpg" alt="green" />
                                        </div>
                                    </div>


                                    <div className='diary_photo2'>
                                        <div className='green_photo'>
                                            {previewURL ? (
                                                <img src={previewURL} alt="green" />
                                            ) : (
                                                <p>선택 된 이미지가 없습니다</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="switch_ai"> {/* 스위치 버튼 */}
                                        <div className='text3'>
                                            AI 진단
                                        </div>
                                        <div className="check">
                                            <input id="check-5" type="checkbox" />
                                            <label for="check-5" />
                                        </div>
                                    </div>

                                    <div className=''>
                                        <div className='input_container2'>
                                            <input
                                                className='titleBox'
                                                placeholder='제목을 입력 해 주세요'
                                                name='title' />
                                            <br />
                                            <textarea
                                                className='contentBox'
                                                placeholder='내용을 입력 해 주세요'
                                                name='content' />
                                        </div>
                                        <div className='footer-container'>
                                            <input
                                                type='file'
                                                accept="image/*"
                                                multiple
                                                onChange={thumbnail}
                                                name=''
                                                className='inputWrite'
                                            />
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
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>

                </div>


            </div>
        </div >
    )
}

export default WriteDiary