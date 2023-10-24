import React from 'react'
import ItemAiReturn from './ItemAiReturn'
import { Link } from 'react-router-dom'

const AiReturnPhoto = () => {
    return (
        <div className='ai_return_top_container'>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>생성 AI로 만든 이미지</div>
            </div>
            <div className='photo_top_container'>
                    <div className='return_container'>
                    <ItemAiReturn />
                    <div className='return_btn_box'>
                    <button className='retry_btn'><Link to="/ai" className='button_link'>다시 선택하기</Link></button>
                    <br></br>

                    <button className='download_btn' >저장하기</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AiReturnPhoto