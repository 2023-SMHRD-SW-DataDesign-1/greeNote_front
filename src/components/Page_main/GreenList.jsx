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
        console.log(res.data); // 리스트 형태로 들어있음
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
        while (true) {
          currentDate = addDays(new Date(currentDate), value.gardening[field]);
          if (currentDate.toISOString().slice(0, 10) === registration_date.toISOString().slice(0, 10)) {
            onOff = true;
            break;
          } else if (currentDate > registration_date) {
            break;
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
        <Link to="/mygreen" className='button_link2'> {/* 전체선택 */}
          <div className='all'>
            ALL
          </div>
        </Link>
        {plantList.map((value) => (
          <Link to={`/greendiary/${value.plantId}`} className='button_link2'> {/* 대표식물 */}
            <div className='photo'>
              <img src={`${value.image}`} alt="green" />
            </div>
            <div>
              {value.title}
            </div>
          </Link>
        ))}
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
          {plantList.map((value) => (
            value.title
          ))}
        </div>
        <div className='add2'>
          반려 추가
        </div>
      </div>
    </div>
  )
}

export default GreenList