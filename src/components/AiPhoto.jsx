import React, { useContext, useEffect, useState } from 'react'
import ItemPhoto from './ItemPhoto'
import axios from 'axios';
import AiRadio from './AiRadio';
import AiStylePreview from './AiStylePreview';
import { DataContext } from '../contexts/DataContext';

const AiPhoto = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 선택된 식물 정보 데이터
    const { selectedPlantData } = useContext(DataContext);

    // 사진 정보 저장할 State
    const [diaryImages, setDiaryImages] = useState([]);


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
        // const clickedImage = e.target;
        // if (selectedImage === e.target.src) {
        //     // console.log('e.target:', e.target)
        //     setSelectedImage(0); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
        //     clickedImage.style.border = 'none';
        // } else {
        //     // 이미 선택된 이미지에 선택 해제 스타일 적용
        //     if (selectedImage) {
        //         const previouslySelectedImage = document.querySelector(`[src="${selectedImage}"]`);

        //         previouslySelectedImage.style.border = 'none'; // 선택 해제 스타일 적용

        //     }
        //     setSelectedImage(e.target.src); // 새 이미지를 선택
        //     clickedImage.style.border = '6px solid #5192B3';
        // }
        // console.log('selectedImage:', e.target.src);
        if(selectedImage === e.target.src){
            setSelectedImage(null);
        } else{
            setSelectedImage(e.target.src)
        }
    };

    const handleUpload = () => {
        if (selectedImage) {
            // 선택된 이미지를 업로드
            console.log("url", selectedImage);
            // 여기다가 생성 AI 구문 작성할 것
        } else {
            // 이미지를 선택하지 않았을 때 처리
            console.log('사진을 선택해주세요.');
        }
    };

    const [selectedOption, setSelectedOption] = useState(null);

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
                                    className={`item_photo ${selectedImage === url ? 'selected' : ''}`}
                                    onClick={(e) => handleImageClick(e)}
                                    src={url.image_url}
                                />
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <div className='radio_container'>
                <div className='radio_text_box'>
                    <div className='radio_text'>스타일 선택</div>
                    <img className='img_question' src='./Image/question.png' onClick={toggleModal}></img>
                </div>
                <div className='radio_box'>
                    <AiRadio
                        label="모자이크"
                        name="radioGroup"
                        value="모자이크"
                        checked={selectedOption === "모자이크"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="점묘화"
                        name="radioGroup"
                        value="점묘화"
                        checked={selectedOption === "점묘화"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="판화"
                        name="radioGroup"
                        value="판화"
                        checked={selectedOption === "판화"}
                        onChange={handleRadioChange}
                    />
                    <AiRadio
                        label="폴리곤"
                        name="radioGroup"
                        value="폴리곤"
                        checked={selectedOption === "폴리곤"}
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


            {isModalOpen && (
                <div className="modal_background">
                    <div className="modal_content">
                        {/* 모달 내용을 이곳에 추가 */}
                        <div className='modal_header'>
                            <div className='modal_info_container'>
                                <img src='/Image/ic_leaf_home.png' />
                                <div className='modal_info'>AI 스타일</div>
                            </div>
                            <div className="modal_close">
                                <span onClick={toggleModal}>X</span>
                            </div>
                        </div>
                        <div className='modal_plant_container'>
                            <AiStylePreview />
                        </div>
                    </div>
                </div>
            )}

        </div >
    )

}
export default AiPhoto