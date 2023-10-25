import React, { useState } from 'react'
import ItemPlantChoice from './ItemPlantChoice'


const AiPlant = () => {

  // 모달의 표시 여부를 관리하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 식물 전체 리스트 받아오기
  const plantList = [
    {
      image_url: '/Image/monstera.jpg',
      color: 'black',
      plant_id: 0,
      nickname: '몬스테라1'
    },
    {
      image_url: '/Image/monstera2.jpg',
      color: 'red',
      plant_id: 1,
      nickname: '몬스테라2'
    },
    {
      image_url: '/Image/plant_ex.jpg',
      color: 'blue',
      plant_id: 2,
      nickname: '무몬'
    },
    {
      image_url: '/Image/monstera.jpg',
      color: 'black',
      plant_id: 0,
      nickname: '몬스테라1'
    },
    {
      image_url: '/Image/monstera2.jpg',
      color: 'red',
      plant_id: 1,
      nickname: '몬스테라2'
    },
    {
      image_url: '/Image/plant_ex.jpg',
      color: 'blue',
      plant_id: 2,
      nickname: '무몬'
    }
  ,
  {
    image_url: '/Image/monstera.jpg',
    color: 'black',
    plant_id: 0,
    nickname: '몬스테라1'
  },
  {
    image_url: '/Image/monstera2.jpg',
    color: 'red',
    plant_id: 1,
    nickname: '몬스테라2'
  },
  {
    image_url: '/Image/plant_ex.jpg',
    color: 'blue',
    plant_id: 2,
    nickname: '무몬'
  }

  
  ]



  return (

    <div className='ai_plant_container'>
      <div className='plant_container'>
        <div className='plant_nickname'>
          무몬
        </div>
        <div className='plant_data'>

          <div className='circle plant_image_color'>
            <div className='circle' >
              <img className="circle plant_main_image" src="/Image/plant_ex.jpg" alt="Plant" onClick={toggleModal} />
            </div>
          </div>

          <div className='plant_text_data'>
            <div className='plant_species'>몬스테라 델리오사</div>
            <div className='plant_date'>2023년 5월 27일</div>
          </div>

        </div>

      </div>
      {isModalOpen && (
        <div className="modal_background">
          <div className="modal_content">
            {/* 모달 내용을 이곳에 추가 */}
            <p onClick={toggleModal}>X</p>
            <div className='modal_info_container'>
              <img src='/Image/ic_leaf_home.png' />
              <div className='modal_info'>내 반려식물</div>
            </div>
            <div className='modal_plant_list'>
            {plantList.map((data, idx) => (
              <ItemPlantChoice key={idx} data={data}/>
                    ))}

              </div>
          </div>
        </div>
      )}

    </div>

  )
}

export default AiPlant

