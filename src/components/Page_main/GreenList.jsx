import React from 'react'
import { Link } from 'react-router-dom'

const GreenList = () => {
  return (
    <div className='greenlist'>

      <div className='list_container'>
        <Link to="/mygreen" className='button_link2'> {/* 전체선택 */}
          <div className='all'>
            ALL
          </div>
        </Link>
        <Link to="/greendiary" className='button_link2'> {/* 대표식물 */}
          <div className='photo'>
            <img src="/Image/monstera.jpg" alt="green" />
          </div>
        </Link>
        <Link to="/addgreen" className='button_link2'> {/* 식물추가 */}
          <div className='add'>
            add
          </div>
        </Link>
      </div>

      <div className='list_container2'>
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