import React, { useContext, useState } from 'react'
import axios from 'axios'
import { DataContext } from '../../contexts/DataContext';

const Diary_Sidebar = () => {

    // 임시 식물
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
    const { plantList, setPlantList } = useContext(DataContext);

    // 식물 목록 가져오는 함수
    const readPlantList = async () => {
        await axios.get(`${masterURL}/plant/readPlantList`)
            .then((res) => {
                console.log(res.data); // 리스트 형태로 들어있음
                setPlantList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className='sidebar'>
            <div className='ai_plant_container'>
                <div className='plant_container'>
                    <div className='plant_data'>

                        {plantList.map((value) => (
                            <div className='plant_container'>
                                <div className='plant_nickname'>
                                    {value.nickname}
                                </div>
                                <div className='plant_data'>
                                    <div className='circle plant_image_color' style={{ backgroundColor: value.color }} >
                                        <div className='circle' >
                                            <img className="circle plant_main_image" src={`${value.image}`} alt="Plant" onClick={toggleModal} />
                                        </div>
                                    </div>

                                    <div className='plant_text_data'>
                                        <div className='plant_species'>{value.title}</div>
                                        <div className='plant_date'>{value.start_date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Diary_Sidebar