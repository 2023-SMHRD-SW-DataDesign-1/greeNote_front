/* 식물 별 정리된 다이어리 */

import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_diary from '../components/Header_diary'
import Diary_content from '../components/Diary_content'
import AiPlant from '../components/AiPlant';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import GreenDiary_photo from '../components/GreenDiary_photo';

const GreenDiary = () => {

  // URL 통합 관리
  const masterURL = process.env.REACT_APP_MASTER_URL;

  // 식물 목록별 조회하기 위한 id값 가져오기
  const { plant_id } = useParams();

  // 다이어리 목록을 담을 State
  const [diaryList, setDiaryList] = useState([]);

  // 식물 목록별 다이어리 조회
  const readDiary = () => {
    console.log(plant_id);
    axios.get(`${masterURL}/diary/readDiary/${plant_id}`)
      .then((res) => {
        console.log(res);
        setDiaryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    readDiary();
  }, [])






  const arr = [
    {
      url: 'https://bloomingnme.com/web/product/big/202202/8db17f5a11ddc87b3333d5506156ec17.jpg',
      name: '1',
    },
    {
      url: 'https://image.babosarang.co.kr/product/detail/EKE/7610691492/_401.jpg',
      name: '2',
    },
    {
      url: 'https://m.bfagarden.com/web/upload/NNEditor/20190711/copy-1562832260-IMG_4821.JPG',
      name: '3',
    },
    {
      url: 'https://cdn.imweb.me/upload/S201905295cee7c0f94cee/f08cf31ba5aa2.jpeg',
      name: '4',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QQ2n-KWzAP84wnEwfQTF6JIUub2E0Ua31w&usqp=CAU',
      name: '5',
    },
    {
      url: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2843513800/B.jpg?391000000',
      name: '6',
    },
    {
      url: 'https://www.dailimseed.co.kr/modules/shop/files/2021/04/27/8351_1.jpg?v=20221021225123',
      name: '7',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzf2g1NXpXDIGmko4N-PPz0sGdHEMlgIaqA&usqp=CAU',
      name: '8',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8EZuv9gNTL1gWht2nKZkm2eI5b7mzRPcJA&usqp=CAU',
      name: '9',
    },
    {
      url: 'https://blog.kakaocdn.net/dn/cVOH8a/btqDRMK9kRl/EHXKPRgcrQbNIsOc8k8ycK/img.jpg',
      name: '10',
    },
    {
      url: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cDjc/image/iW__wJmW9VmK_7af57pqEulPAF0.jpg',
      name: '11',
    }

  ]
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (image) => {
    if (selectedImage.url === image.url) {
      setSelectedImage(0); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
    } else {
      setSelectedImage(image); // 새 이미지를 선택
    }
    console.log('selectedImage:', selectedImage);
  };








  return (
    <div className='web_top_container'>
      <div className='greendiary_container'>

        <div className='main_big_pie1'>
          <AiPlant />
          <div className='diary_all'>
            <div className='mid_title'>
              <div className='mid_title2'>
                <img src="/Image/book_logo.PNG" alt="book" />
                다이어리 모아보기
              </div>
              <div className='icons2'>
                <div className='mid_title_bin2'>
                  <img src="/Icon/bin.png" alt="bin" />
                </div>
                <Link to={`/writediary/${plant_id}`} className='mid_tilte_edit'>
                  <img src="/Icon/edit.png" alt="edit" />
                </Link>
              </div>
            </div>

            {/* {diaryList.map((value) => <Diary_content key={value.diary_id} diary={value.diary} imgUrl={value.imgUrl} />)} */}
            <div className='diary_box'>
              <div className='diary_box2'>
                {arr.map((img, idx) => (
                  <GreenDiary_photo key={idx} data={img} selected={selectedImage.url === img.url}
                    onClick={() => handleImageClick(img)} />
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenDiary