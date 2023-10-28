import React, { useContext, useEffect, useState } from 'react'
import ItemPlantChoice from './ItemPlantChoice'
import { DataContext } from '../contexts/DataContext'


const AiPlant = () => {

  // 식물 리스트
  const { plantList, selectedPlantData, setSelectedPlantData } = useContext(DataContext);

  useEffect(()=>{
    setSelectedPlantData(plantList[0]);
  },[]);

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

  return (

    <div className='ai_plant_container'>

      <div className='plant_container'>
        <div className='plant_nickname'>
          {selectedPlantData.nickname}
        </div>
        <div className='plant_data'>

          <div className='circle plant_image_color' style={bgStyle} >
            <div className='circle' >
              <img className="circle plant_main_image" src={selectedPlantData.image} alt="Plant" onClick={toggleModal} />
            </div>
          </div>

          <div className='plant_text_data'>
            <div className='plant_species'>{selectedPlantData.species}</div>
            <div className='plant_date'>{selectedPlantData.start_date}</div>
          </div>
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

export default AiPlant

