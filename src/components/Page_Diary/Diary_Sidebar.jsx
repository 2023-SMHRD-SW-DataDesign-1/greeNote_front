import React, { useContext, useState } from 'react'
import axios from 'axios'
import { DataContext } from '../../contexts/DataContext';

const Diary_Sidebar = () => {

    /*     // 임시 식물
        const defaultPlant = {
            image_url: '/Image/plant_ex.jpg',
            color: 'blue',
            plant_id: 2,
            nickname: '무몬',
            species: '식물종',
            start_date: '2023년 5월 27일'
        }
        const [selectedPlantData, setSelectedPlantData] = useState(defaultPlant);
    
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
    
        // 리스트에서 꺼내온 식물 정보
        const handleItemChoiceClick = (selectedPlant) => {
            console.log('Selected Plant:', selectedPlant);
            setSelectedPlantData(selectedPlant)
        };
    
        const bgStyle = {
            backgroundColor: selectedPlantData.color,
        }
     */

    /*     // 식물 전체 리스트 받아오기
        const plantList = [
            {
                image_url: '/Image/monstera.jpg',
                color: '#E17E0E',
                plant_id: 0,
                nickname: '별명1',
                species: '식물종1',
                start_date: '2023년 5월 1일'
            },
            {
                image_url: '/Image/monstera2.jpg',
                color: '#87E04C',
                plant_id: 1,
                nickname: '별명2',
                species: '식물종2',
                start_date: '2023년 6월 1일'
            },
            {
                image_url: '/Image/plant_ex.jpg',
                color: '#DE5DAC',
                plant_id: 2,
                nickname: '별명3',
                species: '식물종3',
                start_date: '2023년 7월 1일'
    
            },
            {
                image_url: '/Image/monstera.jpg',
                color: '#DE5D5F',
                plant_id: 0,
                nickname: '별명4',
                species: '식물종4',
                start_date: '2023년 8월 10일'
            }
            ,
            {
                image_url: '/Image/monstera2.jpg',
                color: '#97DE5D',
                plant_id: 1,
                nickname: '별명5',
                species: '식물종5',
                start_date: '2023년 9월 15일'
            },
            {
                image_url: '/Image/plant_ex.jpg',
                color: '#DEC45D',
                plant_id: 2,
                nickname: '별명6',
                species: '식물종6',
                start_date: '2023년 10월 20일'
            }
            ,
            {
                image_url: '/Image/monstera.jpg',
                color: '#69E0D8',
                plant_id: 0,
                nickname: '별명7',
                species: '식물종7',
                start_date: '2023년 11월 15일'
            },
            {
                image_url: '/Image/monstera2.jpg',
                color: '#5E72E0',
                plant_id: 1,
                nickname: '별명8',
                species: '식물종8',
                start_date: '2023년 11월 30일'
            },
            {
                image_url: '/Image/plant_ex.jpg',
                color: '#E63C2C',
                plant_id: 2,
                nickname: '별명9',
                species: '식물종9',
                start_date: '2023년 12월 20일'
            }
    
    
        ] */


    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 식물 목록 저장 State
    const { selectedPlantData } = useContext(DataContext);

    // 선택된 plant의 날짜를 xx일째로 바꿔주는 함수
    const changeDate = (targetDateStr) => {
        const targetDate = new Date(targetDateStr);

        if (isNaN(targetDate)) {
            return "날짜 형식이 올바르지 않습니다.";
        }

        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            return "오늘";
        } else {
            return `${Math.abs(daysDifference)}일째`;
        }
    }

    return (
        <div className='sidebar'> {/* 사이드바 */}
            <div className='ai_plant_container'>
                <div className='plant_container'>
                    <div className='plant_data'>
                        <div className='plant_container'>
                            <div className='plant_nickname'>
                                {selectedPlantData.nickname}
                            </div>
                            <div className='plant_data'>
                                <div className='circle plant_image_color' style={{ backgroundColor: selectedPlantData.color }} >
                                    <div className='circle' >
                                        <img className="circle plant_main_image" src={`${selectedPlantData.image}`} alt="Plant" />
                                    </div>
                                </div>
                                <div className='plant_text_data'>
                                    <div className='plant_species'>{selectedPlantData.title}</div>
                                    <div className='plant_date'>{changeDate(selectedPlantData.start_date)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Diary_Sidebar