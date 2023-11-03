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
    const { selectedPlantData, setContentImg, setStyleImg } = useContext(DataContext);

    // 사진 정보 저장할 State
    const [diaryImages, setDiaryImages] = useState([]);

    // navigate 선언
    const nav = useNavigate();

    // 스타일 이미지 주소
    const styleArr = [
        {
            name: '피카소',
            style_image: 'https://firebasestorage.googleapis.com/v0/b/greenote-d2774.appspot.com/o/%ED%94%BC%EC%B9%B4%EC%86%8C.jpg?alt=media&token=0c8ff994-2f9d-48ac-8a9a-d0fcbeda7486'
        },
        {
            name: '밀레',
            style_image: 'https://firebasestorage.googleapis.com/v0/b/greenote-d2774.appspot.com/o/%EB%B0%80%EB%A0%88.jpg?alt=media&token=e99d28a3-95fa-4518-bd14-1f1d264c81de'
        },
        {
            name: '고흐',
            style_image: 'https://firebasestorage.googleapis.com/v0/b/greenote-d2774.appspot.com/o/%EA%B3%A0%ED%9D%90.jpg?alt=media&token=699cb9c5-50ce-4744-8ea3-505ac95bf703'
        },
        {
            name: '호쿠사이',
            style_image: 'https://firebasestorage.googleapis.com/v0/b/greenote-d2774.appspot.com/o/%ED%98%B8%EC%BF%A0%EC%82%AC%EC%9D%B4.jpg?alt=media&token=ebfc234f-5467-40ef-8bcb-08012c738f85'
        }
    ]

    // 선택된 식물의 다이어리 사진들 가져오기
    const readDiaryImg = async () => {
        await axios.get(`${masterURL}/diary/readDiaryImg?plantId=${selectedPlantData.plantId}`)
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

    const handleUpload = async () => {
        if (selectedImage) {
            // 선택된 이미지를 업로드
            const style = styleArr.filter((item)=> item.name === selectedOption);
            console.log(selectedImage);
            setContentImg(selectedImage);
            setStyleImg(style[0].style_image);
            // await axios.post(`http://127.0.0.1:5000/styleTransfer`, {
            //     content_image: selectedImage,
            //     style_image: style[0].style_image
            // })
            // .then((res)=>{
            //     console.log(res);
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })

            nav(`/aiReturn?plant_id=${selectedPlantData.plantId}`);
        } else {
            // 이미지를 선택하지 않았을 때 처리
            console.log('사진을 선택해주세요.');
        }
    };

    // 라디오 버튼 선택 기본
    const [selectedOption, setSelectedOption] = useState('피카소');

    // 라디오 버튼 스타일 선택
    const handleRadioChange = (e) => {
        const style = styleArr.filter((item) => item.name === e.target.value)
        setSelectedOption(style[0].name);
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
                    {diaryImages.map((data) => (
                        JSON.parse(data.image_url).map((url) => (
                            <div className='item_photo_div'>
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
                        key="피카소"
                        label="피카소"
                        name="radioGroup"
                        value="피카소"
                        checked={selectedOption === "피카소"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        key="밀레"
                        label="밀레"
                        name="radioGroup"
                        value="밀레"
                        checked={selectedOption === "밀레"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        key="고흐"
                        label="고흐"
                        name="radioGroup"
                        value="고흐"
                        checked={selectedOption === "고흐"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        key="호쿠사이"
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
                                    key="피카소"
                                    label="피카소"
                                    name="radioGroup"
                                    value="피카소"
                                    checked={selectedOption === "피카소"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    key="밀레"
                                    label="밀레"
                                    name="radioGroup"
                                    value="밀레"
                                    checked={selectedOption === "밀레"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    key="고흐"
                                    label="고흐"
                                    name="radioGroup"
                                    value="고흐"
                                    checked={selectedOption === "고흐"}
                                    onChange={handleRadioChange}
                                />
                                <AiRadio
                                    key="호쿠사이"
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