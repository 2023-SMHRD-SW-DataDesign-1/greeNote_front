import React from 'react'
import ItemAiReturn from './ItemAiReturn'
import { Link } from 'react-router-dom'

const AiPhotoReturn = () => {
  return (
    <div className='top_container'>
    <div className='ai_return_container'>
        <ItemAiReturn/>

        <button  className='retry_btn'><Link to="/ai" className='button_link'>다시 선택하기</Link></button>
        <br></br>
        <button className='download_btn button_link' >저장하기</button>

    </div>
</div>
  )
}

export default AiPhotoReturn