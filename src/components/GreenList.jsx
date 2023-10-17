import React from 'react'

const GreenList = () => {
  return (
    <div className='greenlist'>
      <div className='list_container'>
        <a href="#">
          <div className='all'>
            ALL
          </div>
        </a>
        <a href="#">
          <div className='new'>
            new
          </div>
        </a>
        <a href="#">
          <div className='add'>
            add
          </div>
        </a>
      </div>

      <div className='text'>
        <div className='all2'>
          전체식물
        </div>
        <div className='new2'>
          몬스테라
        </div>
        <div className='add2'>
          반려 추가
        </div>
      </div>

    </div>
  )
}

export default GreenList