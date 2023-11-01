import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext';

const GreenList_all = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록 저장 State
  const { plantList, setPlantList } = useContext(DataContext);

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
  const [alarms, setAlarms] = useState([]);

  // 알람 날짜 판단 함수
  const alarmDate = (list) => {
    const registration_date = new Date();
    registration_date.setHours(0, 0, 0, 0);
    const fields = ['watering', 'repotting', 'ventilation', 'nutrition_management'];
    const newAlarms = new Array(list.length).fill(false);

    list.forEach((value, index) => {
      const date = new Date(value.start_date);
      fields.forEach((field) => {
        let currentDate = new Date(date);
        if (value.gardening[field] !== 0) {
          while (true) {
            currentDate = addDays(new Date(currentDate), value.gardening[field]);
            if (currentDate.toISOString().slice(0, 10) === registration_date.toISOString().slice(0, 10)) {
              newAlarms[index] = true;
              break;
            } else if (currentDate > registration_date) {
              break;
            }
          }
        }
      });
    });

    setAlarms(newAlarms);
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

  // // 알람 on off에따른 색 o/x
  // const alarmCircleStyle = {
  //   backgroundColor: alarm ? '#2dda50' : 'none',
  // };

  return (
    <div className='greenlist'>

      <div className='list_container2'>
        <Link to="/mygreen" className='linkPhoto2'> {/* 전체선택 */}
          <div className='alarm_circle_all_none'></div>
          <div className='select_all'>
            ALL
          </div>
        </Link>

        {plantList && plantList.map((value, index) => (
          <Link to={`/greendiary/${value.plantId}`} className='linkPhoto2'>
            <div className='alarm_circle_all' style={{ backgroundColor: alarms[index] ? '#2dda50' : 'transparent' }} />
            <div className='green' style={{ backgroundColor: value.color }}>
              <img src={`${value.image}`} alt="green" />
            </div>
            <div className='linkText2'>
              {value.nickname}
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default GreenList_all