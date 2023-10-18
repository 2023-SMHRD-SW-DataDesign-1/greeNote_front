/* 식물 추가 페이지 */

import React from 'react'
import Input_addGreen from '../components/Input_addGreen'
import Gardening from '../components/Gardening'
import AiHeader from '../components/AiHeader'

const AddGreen = () => {
  return (
    <div className='add_container'>
      <AiHeader/>
      <div className='addGreen'>
        내 반려 식물의 프로필
      </div>
      <div className='photoGreen'>
        photo
      </div>
      <div>
        사진등록하기
      </div>
      <Input_addGreen />
      <Gardening />


    </div>
  )
}

export default AddGreen