import React from 'react'

const Input_diaryWrite = () => {
    return (
        <div className='input_container2'>
            <input
                className='titleBox'
                placeholder='제목을 입력 해 주세요' />
                <br/>
            <input
                className='contentBox'
                placeholder='내용을 입력 해 주세요' />
        </div>
    )
}

export default Input_diaryWrite