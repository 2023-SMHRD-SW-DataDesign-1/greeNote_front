import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import AiRadio from './AiRadio';
import { DataContext } from '../contexts/DataContext';
import Ai1 from './AIStyleInfo/Ai1';
import Ai2 from './AIStyleInfo/Ai2';
import Ai3 from './AIStyleInfo/Ai3';
import Ai4 from './AIStyleInfo/Ai4';
import { useNavigate } from 'react-router-dom';

const AiPhoto = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 선택된 식물 정보 데이터
    const { selectedPlantData } = useContext(DataContext);

    // 사진 정보 저장할 State
    const [diaryImages, setDiaryImages] = useState([]);

    const nav = useNavigate();


    // 선택된 식물의 다이어리 사진들 가져오기
    const readDiaryImg = () => {
        axios.get(`${masterURL}/diary/readDiaryImg?plantId=${selectedPlantData.plantId}`)
            .then((res) => {
                setDiaryImages(res.data);
                console.log(res.data);
                console.log(diaryImages);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    const [selectedImage, setSelectedImage] = useState(0);

    // 모달의 표시 여부를 관리하는 상태
    const [isModalOpen, setIsModalOpen] = useState(false);


    // 식물 클릭시 모달창 열리고 x누르면 닫힘
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // 아이템 클릭시 모달창 닫힘
    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleImageClick = (e) => {
        if (selectedImage === e.target.src) {
            setSelectedImage(null);
        } else {
            setSelectedImage(e.target.src)
        }
    };

    const handleUpload = () => {
        if (selectedImage) {
            // 선택된 이미지를 업로드
            console.log("url", selectedImage);
            // 여기다가 생성 AI 구문 작성할 것
            nav('/aiReturn');
        } else {
            // 이미지를 선택하지 않았을 때 처리
            console.log('사진을 선택해주세요.');
        }
    };

    // 라디오 버튼 선택 기본
    const [selectedOption, setSelectedOption] = useState('피카소');


    // 라디오 버튼 스타일 선택
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);

    };

    useEffect(() => {
        readDiaryImg();
    }, [selectedPlantData])


    return (
        <div className='photo_top_container'>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>생성 AI로 나만의 이미지 만들기</div>
            </div>
            <div className="photo_second_container">
                <div className="photo_container">
                    {diaryImages.map((data, idx) => (
                        JSON.parse(data.image_url).map((url) => (
                            <div key={idx}>
                                <img
                                    className={`item_photo ${selectedImage === url.image_url ? 'selected' : ''}`}
                                    onClick={(e) => handleImageClick(e)}
                                    src={url.image_url}
                                />
                            </div>
                        ))
                    ))}
                </div>
            </div>

            {/* AI 스타일 선택창 라디오버튼 */}
            <div className='radio_container'>
                <div className='radio_text_box'>
                    <div className='radio_text'>스타일 선택</div>
                    <img className='img_question' src='./Image/question.png' onClick={toggleModal}></img>
                </div>
                <div className='web_radio_box'>
                    <AiRadio
                        label="피카소"
                        name="radioGroup"
                        value="피카소"
                        checked={selectedOption === "피카소"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="밀레"
                        name="radioGroup"
                        value="밀레"
                        checked={selectedOption === "밀레"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="고흐"
                        name="radioGroup"
                        value="고흐"
                        checked={selectedOption === "고흐"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="호쿠사이"
                        name="radioGroup"
                        value="호쿠사이"
                        checked={selectedOption === "호쿠사이"}
                        onChange={handleRadioChange}
                    />

                    {/* <p>Selected option: {selectedOption}</p> */}
                </div>
            </div>

            <div className='photo_btn_div'>
                <button className="uploadBtn" onClick={handleUpload}>
                    AI 이미지 생성
                </button>
            </div>


            {/* Ai스타일 모달창 */}
            {isModalOpen && (
                <div className="modal_background">
                    <div className="modal_content style">
                        <div className='modal_header'>
                            <div className='modal_info_container'>
                                <img src='/Image/ic_leaf_home.png' />
                                <div className='modal_info'>AI 스타일</div>
                            </div>
                        </div>
                        <div className='image_container'>
                            {selectedOption === '피카소' && <Ai1 />}
                            {selectedOption === '밀레' && <Ai2 />}
                            {selectedOption === '고흐' && <Ai3 />}
                            {selectedOption === '호쿠사이' && <Ai4 />}
                        </div>
                        <div className='radio_container'>
                            <div className='radio_box'>
                                <AiRadio
                                    label="피카소"
                                    name="radioGroup"
                                    value="피카소"
                                    checked={selectedOption === "피카소"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    label="밀레"
                                    name="radioGroup"
                                    value="밀레"
                                    checked={selectedOption === "밀레"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    label="고흐"
                                    name="radioGroup"
                                    value="고흐"
                                    checked={selectedOption === "고흐"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    label="호쿠사이"
                                    name="radioGroup"
                                    value="호쿠사이"
                                    checked={selectedOption === "호쿠사이"}
                                    onChange={handleRadioChange}
                                />
                            </div>
                        </div>
                        <div className='ai_style_btn_div'>
                            <button className='ai_style_btn' onClick={closeModal}>선택완료</button>
                        </div>
                    </div>

                </div>
            )}

        </div >
    )

}
export default AiPhoto