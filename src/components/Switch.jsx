import React from 'react'

const Switch = () => {

    return (
        <div class="switch_control"> {/* 스위치 버튼 */}
            <div className='text3'>
                물주기
            </div>
            <div class="check">
                <input id="check-5" type="checkbox" />
                <label for="check-5" />
            </div>
        </div>
    )
}

export default Switch