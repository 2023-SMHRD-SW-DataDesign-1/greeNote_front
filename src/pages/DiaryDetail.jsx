/* 개별 다이어리 보는 페이지 */

import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../contexts/DataContext';
import Diary_Sidebar from '../components/Page_Diary/Diary_Sidebar'
import axios from 'axios'
import { Link, useLocation, useParams } from 'react-router-dom'
import GreenProfile from '../components/GreenProfile';
import Date from '../components/Page_main/Date';

const DiaryDetail = ({ data }) => {

    // URL 통합 관리
    const masterURL = process.env.REACT_APP_MASTER_URL;

    // 식물 목록별 조회하기 위한 id값 가져오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const diaryId = queryParams.get('diaryId');

    // 다이어리 정보 State
    const [diaryDetail, setDiaryDetail] = useState([]);

    // 다이어리 이미지 리스트
    const [imgList, setImgList] = useState([]);

    // 개별 다이어리 조회 함수
    const readOneDiary = async () => {
        try {
            await axios.get(`${masterURL}/diary/readOneDiary?diaryId=${diaryId}`)
                .then((res) => {
                    console.log('개별 다이어리 조회', res);
                    const image = JSON.parse(res.data.imgUrl.image_url);

                    setDiaryDetail(res.data.diary);
                    setImgList(image);

                    console.log(image);
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {

        }
    }

    useEffect(() => {
        readOneDiary();
    }, []);

    /*************************  사이드바 */
    // 식물 목록 저장 State
    const { selectedPlantData } = useContext(DataContext);

    return (
        <div className='web_top_container'>
            <div className='writeDiary_container'>
                <div className='main_page1'>
                    <Diary_Sidebar /> {/* 사이드바 */}
                    <div className='diaryPie'>

                        <div className='diaryTop'>
                            <div className='mid_title'>
                                <div className='mid_title2'>
                                    <img src="/Image/book_logo.png" alt="book" className='bookLogo' />
                                    다이어리 보기
                                </div>
                                <Link to={`/greendiary?plant_id=${selectedPlantData.plantId}`} className='mid_title_edit'>
                                    <img src="/Icon/back.png" alt="bin" />
                                </Link>
                            </div>

                            <div className='profile_container2'> {/* 사진(모바일만) */}
                                <GreenProfile />
                            </div>

                            <br />
                        </div>

                        <div className='diaryBottom'>
                            <div className='leftPart'>
                                <div className='date_container'> {/* 작성된 날자 */}
                                    <div className='date'>
                                        {diaryDetail.registrationDate}
                                    </div>
                                    <div className='week'>

                                    </div>
                                </div>
                                <br />
                                {/* 현재 제일 첫번째 사진 1장만 반영됨 */}
                                {imgList.length > 0 ? (
                                    <div className='green_photo'>
                                        <img src={imgList[0].image_url} alt="green" />
                                    </div>
                                ) : (
                                    <div>등록된 사진이 없습니다!</div>
                                )}
                            </div>

                            <div className='rightPart'>
                                <div className='infoDisease'>
                                    AI 진단명: {diaryDetail.aiResult}
                                </div>
                                <div className='input_container3'>
                                    <div className='titleBox'>
                                        {diaryDetail.title}
                                    </div>
                                    <div className='contentBox'>
                                        {diaryDetail.content}
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