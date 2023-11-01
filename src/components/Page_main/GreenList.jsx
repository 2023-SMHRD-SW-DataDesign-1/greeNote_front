import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext';

const GreenList = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록 저장 State
  const { plantList, setPlantList } = useContext(DataContext);

  // 식물 목록 가져오는 함수
  const readPlantList = async () => {
    await axios.get(`${masterURL}/plant/readPlantList`)
      .then((res) => {
        console.log('Main/식물 목록 가져오기', res.data); // 리스트 형태로 들어있음
        setPlantList(res.data)
        alarmDate(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // 알람 on/off State
  const [alarm, setAlarm] = useState(false);

  // 알람 날짜 판단 함수
  const alarmDate = (list) => {
    const registration_date = new Date();
    registration_date.setHours(0, 0, 0, 0);
    const fields = ['watering', 'repotting', 'ventilation', 'nutrition_management'];
    let onOff = false;
    list.forEach((value) => {
      const date = new Date(value.start_date);
      fields.forEach((field) => {
        let currentDate = new Date(date);
        if (value.gardening[field] != 0) {
          while (true) {
            currentDate = addDays(new Date(currentDate), value.gardening[field]);
            if (currentDate.toISOString().slice(0, 10) === registration_date.toISOString().slice(0, 10)) {
              onOff = true;
              setAlarm(onOff);
              break;
            } else if (currentDate > registration_date) {
              break;
            }
          }
        }
      });
    });
    // alarm 값에 따라서 사용하면 됨, DB의 alarm 컬럼은 현재 미사용중, 반영할지 안할지는 나중에 결정할 것
    setAlarm(onOff);
  }

  // 날짜 더하는 함수
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // 마운트 시 실행
  useEffect(() => {
    readPlantList()
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
            ADD
          </div>
          <div className='linkText'>식물추가</div>
        </Link>

        {plantList && plantList.map((value) => (
          <Link to={`/greendiary/${value.plantId}`} className='linkPhoto'> {/* 대표식물 */}
            <div className='photo' style={{ backgroundColor: value.color }}>
              <img src={`${value.image}`} alt="green" />
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