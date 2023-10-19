/* 식물 추가 페이지 */

import React from 'react'
import Input_addGreen from '../components/Input_addGreen'
import Gardening from '../components/Gardening'
import AiHeader from '../components/AiHeader'
import { Link } from 'react-router-dom'

const AddGreen = () => {
  return (
    <div className='add_container'>
      <AiHeader />
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

      <br />
      <div className='complete_button'>
        <Link to="/" className='button_link'>작성완료</Link>
      </div>


    </div>
  )
}

export default AddGreen