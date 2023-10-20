import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiHeader from '../components/AiHeader'
import AiViewBox from '../components/AiViewBox';

const Ai = () => {

  return (
    <div className='web_top_container'>
    <div className='web_container'>
      <div>
        <AiHeader />
      </div>
      <div>
        <AiViewBox />
      </div>
    </div>
    </div>
  )
}

export default Ai