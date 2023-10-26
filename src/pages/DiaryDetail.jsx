/* 개별 다이어리 보는 페이지 */

import React from 'react'
import Switch_ai from '../components/Switch_ai'
import Date from '../components/Page_main/Date'
import Input_diaryWrite from '../components/Input_diaryWrite'
import Diary_Sidebar from '../components/Page_wirteDiary/Diary_Sidebar'

const DiaryDetail = () => {
    return (
        <div className='web_top_container'>
            <div className='writeDiary_container'>
                <div className='main_big_pie1'>
                    <Diary_Sidebar />
                    <div className='diaryPie'>

                        <div className='diaryTop'>
                            <div className='mid_title1'> {/* 소제목 */}
                                <div className='mid_title2'>
                                    <img src="/Image/book_logo.PNG" alt="book" />
                                    다이어리 보기
                                </div>
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
                                    <img src="/Image/monstera.jpg" alt="green" />
                                </div>
                            </div>

                            <div className='forDesktop2'>
                                <div className='input_container2'>
                                    <div className='titleBox'>
                                        다이어리 제목
                                    </div>
                                    <div className='contentBox'>
                                        다이어리 내용
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