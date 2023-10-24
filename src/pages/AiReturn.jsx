import React, { useState } from 'react'
import AiHeader from '../components/AiHeader'
import AiReturnBox from '../components/AiReturnBox'
import AiPhotoBox from '../components/AiPhotoBox';
import SlideBox from '../components/SlideBox';
import GreenDiary from './GreenDiary';


const AiReturn = () => {
    return (

        <div className='web_top_container'>
            <div className='web_container'>
                <div>
                    <AiHeader/>
                    <AiReturnBox />
                </div>
            </div>
        </div>
    )
}

export default AiReturn
