import React from 'react'
import ItemSlide from './ItemSlide'

const SlideItemBox = () => {
  return (
    <div>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>슬라이드</div>
            </div>
            <ItemSlide/>
        </div>
  )
}

export default SlideItemBox