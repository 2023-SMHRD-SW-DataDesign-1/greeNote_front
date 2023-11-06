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


    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 식물 목록 저장 State
    const { selectedPlantData, setSelectedPlantData } = useContext(DataContext);

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

    // 선택된 plant 감지하는 함수
    const nowSelected = () => {
        const selectedData = plantList.find(data => data.plantId === parseInt(plant_id));

        if (selectedData) {
            setSelectedPlantData(selectedData);
        } else {
            setSelectedPlantData(plantList[0]);
        }
    }

    useEffect(() => {
        nowSelected();
    }, []);

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
                                    <div className='days_div'>
                                        <img className='sprout' src='Image/sprout.png' />
                                        <div className='plant_date'>{changeDate(selectedPlantData.start_date)}</div>
                                    </div>
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