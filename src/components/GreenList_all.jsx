import React from 'react'
import { Link } from 'react-router-dom'

const GreenList_all = () => {
    return (
      <div className='greenlist'>
  
        <div className='list_container'>
          <Link to="/mygreen" className='button_link2'> {/* 전체선택 */}
            <div className='all'>
              ALL
            </div>
          </Link>
          <Link to="/" className='button_link2'> {/* 대표식물 */}
            <div className='green'>
              <img src="/Image/monstera.jpg" alt="green" width="70" height="70" />
            </div>
          </Link>
          <Link to="/addgreen" className='button_link2'> {/* 식물추가 */}
            <div className='green2'>
              다른 식물
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
  
  export default GreenList_all