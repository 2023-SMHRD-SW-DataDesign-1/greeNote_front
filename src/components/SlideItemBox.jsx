import React from 'react'
import ItemSlide from './ItemSlide'

const SlideItemBox = () => {

  const arr = [
    {
      url : '123',
      name : '무몬',
      season : '가을',
      date : '2023.01.01'
    },
    {
      url : '123',
      name : '무몬',
      season : '여름',
      date : '2023.01.01'
    },
    {
      url : '123',
      name : '무몬',
      season : '겨울',
      date : '2023.01.01'
    },
    {
      url : '123',
      name : '무몬',
      season : '봄',
      date : '2023.01.01'
    },
    {
      url : '123',
      name : '무몬',
      season : '가을',
      date : '2023.01.01'
    },
    {
      url : '123',
      name : '무몬',
      season : '가을',
      date : '2023.01.01'
    },

  ]

  return (
    <div>
            <div className='web_pageInfo'>
                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                <div className='web_infoText'>슬라이드</div>
            </div>
            <ItemSlide data={arr}/>
        </div>
  )
}

export default SlideItemBox