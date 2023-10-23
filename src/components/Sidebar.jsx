import React from 'react'

const sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='ai_plant_container'>
                <div className='plant_container'>
                    <div className='plant_data'>

                        <div className='user_image'>
                            <img className='circle plant_main_image' src='/Image/plant_ex.jpg' />
                        </div>
                        <div>
                            <span className='user_name'>홍길동</span>
                            <span className='user_welcome'>님<br />안녕하세요?</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default sidebar