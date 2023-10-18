import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AiPlant from '../components/AiPlant'
import AiHeader from '../components/AiHeader'
import AiPhoto from '../components/AiPhoto'

const Ai = () => {
  return (
    <div>
        <div><AiHeader/></div>
        <div>
            <AiPlant/>
        </div>
        <div><AiPhoto/></div>
    </div>

  )
}

export default Ai