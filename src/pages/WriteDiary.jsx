/* 다이어리 작성하는 페이지 */

import React from 'react'
import AiHeader from '../components/AiHeader'
import Switch_ai from '../components/Switch_ai'
import Profile from '../components/Profile'
import Date from '../components/Date'
import Green_photo from '../components/Green_photo'
import Input_diaryWrite from '../components/Input_diaryWrite'
import { Link } from 'react-router-dom'
import Footer_diary from '../components/Footer_diary'



const WriteDiary = () => {
    return (
        <div className='writeDiary_container'>

            <div className='header_diary'>
                <Switch_ai />
                <AiHeader />
            </div>

            <br />
            <div className='profile_container2'>
                <Profile />
            </div>
            <br />
            <Date />
            <br />
            <Green_photo />
            <br />

            <div className='write_container'>
                <Input_diaryWrite />
            </div>
            <Footer_diary />

            <br />
            {/*             <div className='complete_button'>
                <Link to="/" className='button_link'>작성완료</Link>
            </div> */}



        </div>
    )
}

export default WriteDiary