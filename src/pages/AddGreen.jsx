import React from 'react'
import Header_etc from '../components/Header_etc'
import Input_addGreen from '../components/Input_addGreen'
import Gardening from '../components/Gardening'

const AddGreen = () => {
  return (
    <div className='add_container'>
      <Header_etc />
      <div className='photoGreen'>
        photo
      </div>
      <div>
        사진등록하기
      </div>
      <Input_addGreen/>
      <Gardening/>


    </div>
  )
}

export default AddGreen