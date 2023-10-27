/* 개별 다이어리 보는 페이지 */

import React, { useEffect, useState } from 'react'
import Switch_ai from '../components/Switch_ai'
import Date from '../components/Page_main/Date'
import Diary_Sidebar from '../components/Page_Diary/Diary_Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DiaryDetail = () => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 식물 목록별 조회하기 위한 id값 가져오기
    const { diaryId } = useParams();

    // 다이어리 정보 State
    const [diaryDetail, setDiaryDetail] = useState();

    // 다이어리 이미지 리스트
    const [imgList, setImgList] = useState();

    // 개별 다이어리 조회 함수
    const readOneDiary = () => {
        axios.get(`${masterURL}/diary/readOneDiary?diaryId=${diaryId}`)
            .then((res) => {
                console.log(res);
                setDiaryDetail(res.data);
                setImgList(JSON.parse(res.data.imgUrl.image_url))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        readOneDiary();
    }, [])

    return (
        <div className='web_top_container'>
            <div className='writeDiary_container'>
                <div className='main_big_pie1'>
                    <Diary_Sidebar />
                    <div className='diaryPie'>

                        <div className='diaryTop'>
                            <div className='web_pageInfo'>
                                <img src='/Image/book_logo.png' className='web_pageInfo_img'></img>
                                <div className='web_infoText'>다이어리 보기</div>
                            </div>
                            <div className='forMobile'>
                                <Switch_ai /> {/* AI 진단정보 받아와야함 */}
                            </div>

                            <div className='profile_container2'> {/* 사진(모바일만) */}
                                <div className='profile_green'>
                                    <img src="/Image/monstera.jpg" alt="green" />
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className='diaryBottom'>
                            <div className='forDesktop'>
                                <Date />
                                <br />
                                <div className='green_photo'>
                                    <img src={imgList[0].image_url} alt="green" />
                                </div>
                            </div>

                            <div className='forDesktop2'>
                                <div className='input_container2'>
                                    <div className='titleBox'>
                                        {diaryDetail.diary.title}
                                    </div>
                                    <div className='contentBox'>
                                    {diaryDetail.diary.content}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


    )
}

export default DiaryDetail