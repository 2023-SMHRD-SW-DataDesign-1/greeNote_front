import React from 'react'
import Switch from './Switch'


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




        </div >
    )
}

export default Gardening