import React from 'react'
import Switch from './Switch'
import { Link } from 'react-router-dom'

const Gardening = () => {
    return (
        <div className='gardening_container'>
            <div className='title'>
                관리 주기 설정
            </div>
            <div className='info_text'>
                관리주기는 비설정 가능
            </div>

            <Switch name="물주기"/>
            <Switch name="분갈이하기"/>
            <Switch name="영양관리"/>
            <Switch name="환기하기"/>

            <br/>
            <div className='complete_button'>
            <Link to="/" className='button_link'>등록완료</Link>
            </div>


        </div >
    )
}

export default Gardening