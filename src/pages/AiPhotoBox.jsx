import React from 'react'
import AiPlant from '../components/AiPlant'
import AiPhoto from '../components/AiPhoto'

const AiPhotoBox = () => {
    return (
        <div className='web_top_container'>
            <div className='web_container'>
                <div className='web_box'>
                    <AiPlant />
                    <AiPhoto />
                </div>
            </div>
        </div>
    )
}

export default AiPhotoBox