import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiHeader from '../components/AiHeader'
import AiPhotoBox from '../components/AiPhotoBox';

const Ai = () => {

  return (
    <div className='web_top_container'>
    <div className='web_container'>
      <div>
        <AiHeader />
      </div>
      <div>
        <AiPhotoBox />
      </div>
    </div>
    </div>
  )
}

export default Ai