import React, { useState } from 'react';
import ItemPlantChoice from '../components/ItemPlantChoice'

const GreenProfile = () => {

  // 임시 식물
  const defaultPlant = {
    image_url: '/Image/plant_ex.jpg',
    color: '#3b53d8',
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



  // 식물 전체 리스트 받아오기
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
  ]


  return (
    <div className='plant_container2'>


      <div className='plant_data'>
        <div className='circle plant_image_color' style={bgStyle} >
          <div className='circle' >
            <img className="circle plant_main_image" src={selectedPlantData.image_url} alt="Plant" onClick={toggleModal} />
          </div>
        </div>

        <div className='plant_text_data2'>
          <div className='plant_nickname2'>{selectedPlantData.nickname}</div>
          <div className='plant_species2'>{selectedPlantData.species}</div>
          <div className='plant_date2'>{selectedPlantData.start_date}</div>
        </div>
      </div>


      {isModalOpen && (
        <div className="modal_background">
          <div className="modal_content">
            {/* 모달 내용을 이곳에 추가 */}
            <div className='modal_header'>
              <div className='modal_info_container'>
                <img src='/Image/ic_leaf_home.png' />
                <div className='modal_info'>내 반려식물</div>
              </div>
              <div className="modal_close">
                <span onClick={toggleModal}>X</span>
              </div>
            </div>
            <div className='modal_plant_container'>
              <div className='modal_plant_list'>
                {plantList.map((data, idx) => (
                  <ItemPlantChoice key={idx} data={data} onItemClick={handleItemChoiceClick} closeModal={closeModal} />

                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GreenProfile