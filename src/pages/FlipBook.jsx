import React from 'react'
import AiHeader from '../components/AiHeader'
import ItemFlipBook from '../components/ItemFlipBook'

const FlipBook = () => {
  return (
    <div>
        <div>
            <AiHeader/>
        </div>

        <div className='flipText'>
            플립북 갤러리
        </div>

        <div>
            <ItemFlipBook/>
        </div>
    </div>
  )
}

export default FlipBook