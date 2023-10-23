/* 개별 다이어리 보는 페이지 */

import React from 'react'
import AiHeader from '../components/AiHeader'
import Switch_ai from '../components/Switch_ai'
import Profile from '../components/Profile'
import Date from '../components/Page_main/Date'
import Green_photo from '../components/Green_photo'
import Input_diaryWrite from '../components/Input_diaryWrite'
import { Link } from 'react-router-dom'

const DiaryDetail = () => {
    return (
        <div className='writeDiary_container'>

            <div className='header_diary'>
                <Switch_ai /> {/* AI 진단정보 받아와야함 */}
                <AiHeader />
            </div>

            <br />
            <div className='profile_container2'>
                <Profile /> {/* 선택한 식물 정보 받아와야함 */}
            </div>
            <br />
            <Date /> {/* 날짜 받아와야함 */}
            <br />
            <Green_photo /> {/* 사진 받아와야함 */}
            <br />

            <div className='write_container'>
                <Input_diaryWrite /> {/* 내용 받아와야함 */}
            </div>





        </div>
    )
}

export default DiaryDetail