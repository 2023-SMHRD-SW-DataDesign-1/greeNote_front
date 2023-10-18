import React from 'react'
import Input_addGreen from '../components/Input_addGreen'
import Gardening from '../components/Gardening'

const AddGreen = () => {
  return (
    <div className='add_container'>
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