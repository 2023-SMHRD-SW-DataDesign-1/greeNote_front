import React, { useState } from 'react'


const AiPlant = () => {

    // 모달의 표시 여부를 관리하는 상태
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  


  return (

    <div className='ai_plant_container'>
      <div className='plant_container'>
        <div className='plant_nickname'>
          무몬
        </div>
        <div className='plant_data'>

          <div className='circle plant_image_color'>
            <div className='circle plant_main_image' >
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
                        <img src='/Image/ic_leaf_home.png'/>
                        <div className='modal_info'>내 반려식물</div>
                        </div>
                    </div>
                </div>
            )}
     
    </div>

  )
}

export default AiPlant

