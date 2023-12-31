import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext';

const Header_home2 = () => {

  // 전체 식물 리스트
  const { plantList, selectedPlantData } = useContext(DataContext);

  // 첫번째 식물 ID를 담을 State
  const [firstPlant, setFirstPlant] = useState('1');

  useEffect(() => {
    if (plantList.length > 0) {
      setFirstPlant(plantList[0].plantId);
    }
  }, [firstPlant])

  return (

    <div className='web_top_container'>
      <div className='header_container '>

        <div className='headerBox'>
          <div className="logo"> {/* 우리 로고 */}
            <Link to="/main">
              <img src="/Image/home_logo.png" alt="logo" />
            </Link>
          </div>

          <div className="header_menu">
            <div className='menu1'>
              <Link to={`/greendiary?plant_id=${selectedPlantData.plantId}`} >
                다이어리
              </Link>
            </div>

            <div className='menu2'>
              <Link to={`/ai?plant_id=${selectedPlantData.plantId}`} >
                생성AI사진
              </Link>
            </div>

            <div className='menu3'>
              <Link to={`/slide?plant_id=${selectedPlantData.plantId}`} >
                슬라이드
              </Link>
            </div>
          </div>
        </div>

        <div className="nav_menu">
          <div className="icon_mypage"> {/* 마이페이지 아이콘 */}
            <Link to="/mypage" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </Link>

          </div>
          <div className="icon_logout"> {/* 로그아웃 아이콘 */}
            <Link to="/" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header_home2