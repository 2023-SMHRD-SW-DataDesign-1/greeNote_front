import React, { useContext, useState } from 'react';
import ItemPlantChoice from '../components/ItemPlantChoice'
import { DataContext } from '../contexts/DataContext'

const GreenProfile = () => {


/*   // 모달의 표시 여부를 관리하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 식물 클릭시 모달창 열리고 x누르면 닫힘
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 아이템 클릭시 모달창 닫힘
  const closeModal = () => {
    setIsModalOpen(false);
  }; */

  // 리스트에서 꺼내온 식물 정보
  const handleItemChoiceClick = (selectedPlant) => {
    console.log('Selected Plant:', selectedPlant);
    setSelectedPlantData(selectedPlant)
  };


  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록 저장 State
  const { plantList, selectedPlantData, setSelectedPlantData } = useContext(DataContext);

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
    <div className='plant_container2'>


      <div className='plant_data'>
        <div className='circle plant_image_color' style={{ backgroundColor: selectedPlantData.color }} >
          <div className='circle' >
            <img className="circle plant_main_image" src={`${selectedPlantData.image}`} alt="Plant" /* onClick={toggleModal} */ />
          </div>
        </div>

        <div className='plant_text_data2'>
          <div className='plant_nickname2'>{selectedPlantData.nickname}</div>
          <div className='plant_species2'>{selectedPlantData.title}</div>
          <div className='days_div2'>
            <img className='sprout' src='Image/sprout.png' />
            <div className='plant_date'>{changeDate(selectedPlantData.start_date)}</div>
          </div>
        </div>
      </div>


      {/* {isModalOpen && (
        <div className="modal_background">
          <div className="modal_content">
            {/* 모달 내용을 이곳에 추가
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
      )} */}
    </div>
  )
}

export default GreenProfile