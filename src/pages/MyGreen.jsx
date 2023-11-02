/* 저장된 내 식물들이 보이는 리스트페이지 */

import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom'
import GreenList_all from '../components/GreenList_all'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const MyGreen = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록 저장 State
  const { plantList, setPlantList } = useContext(DataContext);

  const nav = useNavigate();

  // 식물 목록 가져오는 함수
  const readPlantList = async () => {
    await axios.get(`${masterURL}/plant/readPlantList`)
      .then((res) => {
        console.log(res); // 리스트 형태로 들어있음
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readPlantList();
  }, [])



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

  const [isDeletionMode, setIsDeletionMode] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);


  // 삭제 버튼 onClick
  const handleDeleteIconClick = async () => {
    if (isDeletionMode) {
      if (selectedPlant) {
        console.log('삭제 할 이미지', selectedPlant);
        await axios.get(`${masterURL}/plant/deletePlant?plantId=${selectedPlant.plantId}`)
          .then((response) => {
            if (response.data === 'success') {
              alert(`${selectedPlant.nickname} 파일이 삭제되었습니다.`);
              nav('/main');
            } else {
              alert(`${selectedPlant.nickname} 파일 삭제 실패.`);

            }
          })
          .catch((error) => {
            console.error(`${selectedPlant.nickname} 삭제 에러:`, error);
          });
        setSelectedPlant(null);
      }
      setIsDeletionMode(false);
    } else {
      setIsDeletionMode(true);
    }
  };

  // 파일 선택
  const [selectedImage, setSelectedImage] = useState(1);

  const handleImageClick = (e, value) => {
    console.log('선택된 이미지', value);
    if (isDeletionMode) {
      if (selectedPlant === value) {
        setSelectedPlant(null);
      } else {
        setSelectedPlant(value);
      }
    } else {
      if (selectedImage === e.target.src) {
        setSelectedImage(null);
      } else {
        setSelectedImage(e.target.src);
      }
    }
  };

  const selectedStyle = {
    backgroundColor: selectedImage ? '{value.color}' : 'none', // 선택된 이미지에 테두리 스타일 추가
    borderRadius: selectedImage ? '50%' : 'none',
    width: selectedImage ? '100px' : 'none',
    height: selectedImage ? '100px' : 'none',
    boxShadow: selectedImage ? '0px 1px 10px 4px grey' : 'none',
  };



  return (
    <div className='web_top_container'>
      <div className='myGreen_container'>


        <div className='mid_title1'>
          <div className='mid_title2'>
            <img src="/Image/book_logo.PNG" alt="book" />
            내 반려식물
          </div>
          <div className='icons'>
            <button className='mid_title_bin' onClick={handleDeleteIconClick}>
              <img src="/Icon/bin.png" alt="bin" />
            </button>

            <div className="icon_add"> {/* 추가 아이콘 */}
              <Link to="/addgreen" className='button_links'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className='greenlist'> {/* 식물 리스트 부분 GreenList_all */}
          <div className={`list_container2 ${isDeletionMode ? 'deletionModeBackground' : ''}`}>
            {/*             <Link to="/mygreen" className='linkPhoto2'> {/* 전체선택
              <div className='alarm_circle_all_none'></div>
              <div className='select_all'>
                ALL
              </div>
            </Link> */}

            {plantList && plantList.map((value, index) => (
              <Link to={isDeletionMode ? '#' : `/greendiary?plant_id=${value.plantId}`} className='linkPhoto2' >
                <div className='alarm_circle_all' style={{ backgroundColor: alarms[index] ? '#2dda50' : 'transparent' }} />

                <div className='green'
                  style={selectedImage === value.image ? selectedStyle : { backgroundColor: value.color }}>
                  <img
                    src={selectedPlant === value ? (isDeletionMode ? 'Icon/bin2.png' : value.image) : value.image}
                    alt="green"
                    onClick={(e) => handleImageClick(e, value)}
                  />
                </div>

                <div className='linkText2'>
                  {value.nickname}
                </div>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default MyGreen