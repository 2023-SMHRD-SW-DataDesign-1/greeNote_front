/* 다이어리 작성하는 페이지 */

import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import firebaseApp from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import AiPlant from '../components/AiPlant';
import GreenProfile from '../components/GreenProfile';

const WriteDiary = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;
    // axios 설정
    axios.defaults.withCredentials = true;

    // 식물 목록별 조회하기 위한 id값 가져오기
    const { plant_id } = useParams();

    // navigate 선언
    const nav = useNavigate();

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
    const [previewURL, setPreviewURL] = useState(null);
    const [imageUrls, setImageUrls] = useState("");
    const storage = getStorage(firebaseApp);

    const thumbnail = async (e) => {
        const file = e.target.files[0];
        const files = Array.from(e.target.files);
        console.log(files);
        if (file) {
            const imageURL = URL.createObjectURL(file);
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

    // 질병 분류기 함수
    const [disease, setDisease] = useState();
    const aiPlantDisease = (e) => {
        if (e.target.checked === true) {
            console.log(imageUrls);
            axios.post(`http://127.0.0.1:5000/plant_disease`, {
                imageUrl: imageUrls[0]
            })
                .then((res) => {
                    console.log(res);
                    setDisease(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    // 다이어리 작성 함수
    const addDiary = async (e) => {
        e.preventDefault();
        const obj = {};
        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        obj['plant_id'] = plant_id;
        obj['ai_result'] = disease; // 나중에 제대로 만들 것
        obj['diary_imageDto'] = imageUrls;
        obj['registration_date'] = registration_date;

        console.log(obj);

        await axios.post(`${masterURL}/diary/addDiary`, obj)
            .then((res) => {
                console.log(res);
                nav(`/greendiary/${res.data[0].plantId}`)
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

                <div className='main_page1'>
                    <div className='withDesktop'>
                        <AiPlant />
                    </div>
                    <div className='diary_Bigpie'>
                        <div className='mid_title'>
                            <div className='mid_title2'>
                                <img src="/Image/book_logo.PNG" alt="book" className='bookLogo' />
                                다이어리 작성하기
                            </div>
                            <Link to="/greendiary/a" className='mid_title_edit'>
                                <img src="/Icon/back.png" alt="bin" />
                            </Link>
                        </div>

                        <div className='diary_pie'> {/* PC/tablet에서 보이는 부분 */}
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


                            <div className='partLeft'> {/* 모바일에서 보이는 부분 */}
                                <form onSubmit={addDiary}>

                                    <div className='profile_container2'> {/* 사진(모바일만) */}
                                        <GreenProfile />
                                    </div>
                                    <div className='diaryDate2'> {/* 날짜 */}
                                        <div className='date'>
                                            {Today2}
                                        </div>
                                        <div className='week'>
                                            {dayOfWeek2}
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
                                            <input id="check-5" type="checkbox" onChange={aiPlantDisease}/>
                                            <label for="check-5" />
                                        </div>
                                    </div>
                                    <div className='text_alarm'>
                                        AI진단을 원할 경우,<br /> 가까이에서 찍은 사진으로 업로드 바랍니다.
                                    </div>

                                    <div className=''>
                                        <div className='input_container2'> {/* 다이어리 작성 */}
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
                                        <div className='footer-container'> {/* 하단 버튼 */}
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