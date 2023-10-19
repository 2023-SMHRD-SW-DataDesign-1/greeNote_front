import React from 'react'
import ItemAiReturn from './ItemAiReturn'
import { Link } from 'react-router-dom'

const AiPhotoReturn = () => {
  return (
    <div className='top_container'>
    <div className='ai_return_container'>
        <ItemAiReturn/>

        <div><Link to="/ai" className='retry_btn button_link'>다시 선택하기</Link></div>
        <br></br>
        
        <div className='download_btn button_link' >저장하기</div>

    </div>
</div>
  )
}

export default AiPhotoReturn