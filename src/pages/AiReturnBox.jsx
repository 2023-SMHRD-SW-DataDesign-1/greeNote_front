import React from 'react'
import AiPlant from '../components/AiPlant'
import AiReturnPhoto from '../components/AiReturnPhoto'

const AiReturnBox = () => {
  return (
    <div className='web_top_container'>
      <div className='web_container'>

        <div className='web_box'>
          <AiPlant />
          <AiReturnPhoto />
        </div>
      </div>
    </div>
  )
}

export default AiReturnBox