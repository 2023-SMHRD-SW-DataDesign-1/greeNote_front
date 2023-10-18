import React from 'react'

const Switch = (props) => {

    return (
        <div class="checkbox-wrapper-5"> {/* 스위치 버튼 */}
            <div className='text3'>
                {props.name}
            </div>
            <div class="check">
                <input id="check-5" type="checkbox" />
                <label for="check-5" />
            </div>
        </div>
    )
}

export default Switch