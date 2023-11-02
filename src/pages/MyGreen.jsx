/* 저장된 내 식물들이 보이는 리스트페이지 */

import React, { useEffect, useState } from 'react'
import AiHeader from '../components/AiHeader'
import { Link } from 'react-router-dom'
import GreenList_all from '../components/GreenList_all'
import axios from 'axios'

const MyGreen = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

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

  // 파일 삭제
  const [selectedFiles, setSelectedFiles] = useState([]);

  const FileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const FileDelete = () => {
    if (selectedFiles.length === 0) {
      alert('파일을 선택하세요.');
      return;
    }

    // 여러 파일을 순회하며 삭제 요청을 보냅니다.
    selectedFiles.forEach((file) => {
      axios.post('/delete', null, { params: { file: file.name } })
        .then((response) => {
          if (response.data.success) {
            alert(`${file.name} 파일이 삭제되었습니다.`);
          } else {
            alert(`${file.name} 파일 삭제 실패.`);
          }
        })
        .catch((error) => {
          console.error(`${file.name} 삭제 에러:`, error);
        });
    });
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
            <div className='mid_title_bin'> {/* 삭제 아이콘 */}
              <img src="/Icon/bin.png" alt="bin" onClick={FileDelete} />
            </div>

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

        <GreenList_all />


      </div>

    </div>
  )
}

export default MyGreen