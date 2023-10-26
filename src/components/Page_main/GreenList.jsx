import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GreenList = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록 저장 State
  const [plantList, setPlantList] = useState([]);

  // 식물 목록 가져오는 함수
  const readPlantList = async () => {
    await axios.get(`${masterURL}/plant/readPlantList`)
      .then((res) => {
        console.log(res); // 리스트 형태로 들어있음
        setPlantList(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readPlantList();
  }, [])

  return (
    <div className='greenlist'>

      <div className='list_container'>
        <Link to="/mygreen" className='linkPhoto'> {/* 전체선택 */}
          <div className='all'>
            ALL
          </div>
          <div className='linkText'>전체식물</div>
        </Link>
        <Link to="/addgreen" className='linkPhoto'> {/* 식물추가 */}
          <div className='add'>
            add
          </div>
          <div className='linkText'>식물추가</div>
        </Link>

        {plantList.map((value) => (
          <Link to={`/greendiary/${value.plant_id}`} className='linkPhoto'> {/* 대표식물 */}
            <div className='photo' style={{ backgroundColor: value.color }}>
              <img src={`${value.image_url}`} alt="green" />
            </div>
            <div className='linkText'>
              {value.title}
            </div>
          </Link>
        ))}
      </div>


    </div>
  )
}

export default GreenList