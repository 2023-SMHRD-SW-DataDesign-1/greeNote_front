import React from 'react'


const AiPlant = () => {
  return (
    
    <div className='ai_plant_container'>
      <div className='plant_container'>
        <div className='plant_nickname'>
          무몬
        </div>
        <div className='plant_data'>

          <div className='circle plant_image_color'>
            <div className='circle plant_main_image' >
              <img className='circle plant_main_image' src='/Image/plant_ex.jpg' />
            </div>
          </div>

          <div className='plant_text_data'>
            <div className='plant_species'>몬스테라 델리오사</div>
            <div className='plant_date'>2023년 5월 27일</div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default AiPlant

