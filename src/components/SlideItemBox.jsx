import React from 'react'
import ItemSlide from './ItemSlide'

const SlideItemBox = () => {
  return (
    <div>
            <div className='flipText'>플립북갤러리</div>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png'></img>
                <div className='web_infoText'>플립북 갤러리</div>
            </div>
            <ItemSlide/>
        </div>
  )
}

export default SlideItemBox