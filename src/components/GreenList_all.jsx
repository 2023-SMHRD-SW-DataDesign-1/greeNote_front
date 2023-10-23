import React from 'react'
import { Link } from 'react-router-dom'

const GreenList_all = () => {
    return (
      <div className='greenlist'>
  
        <div className='list_container'>
          <Link to="/mygreen" className='button_link2'> {/* 전체선택 */}
            <div className='select_all'>
              ALL
            </div>
          </Link>
          <Link to="/greendiary" className='button_link2'> 
            <div className='green'>
              <img src="/Image/monstera.jpg" alt="green" />
            </div>
          </Link>
          <Link to="/greendiary" className='button_link2'> 
            <div className='green2'>
              <img src="/Image/alocasia.jpg" alt="green" />
            </div>
          </Link>
        </div>
  
        <div className='list_container2'>
          <div className='allList_all'>
            전체식물
          </div>
          <div className='allList_new'>
            몬스테라
          </div>
          <div className='allList_add'>
            반려 추가
          </div>
        </div>
      </div>
    )
  }
  
  export default GreenList_all