import React from 'react'

const Input_addGreen = () => {
    return (
        <div className='input_container2'>
            <input
                className='greenName'
                placeholder='식물의 실제 이름'
            />
            <input
                className='greenStart'
                placeholder='키우기 시작한 날    ex) 23-10-18'
            />
            <input
                className='Lastwater'
                placeholder='마지막 물 준 날       ex) 23-10-18'
            />
            <input
                className='greenNickname'
                placeholder='애칭'
            />
            <input
                className='greenText'
                placeholder='한 줄 메세지'
            />
            <input
                className='greenColor'
                placeholder='대표색 지정'
            />
        </div>
    )
}

export default Input_addGreen