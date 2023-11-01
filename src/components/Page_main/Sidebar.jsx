import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'

const Sidebar = () => {

    const { memberInfo } = useContext(DataContext);

    return (
        <div className='sidebar'>
            <div className='ai_plant_container'>

                <div className='plant_container'>
                    <div className='plant_data'>

                        <div className='user_image'>
                            <img className='circle plant_main_image' src={memberInfo.profileImg} alt='프로필 이미지'/>
                        </div>
                        <div>
                            <span className='user_name'>{memberInfo.membername}</span>
                            <span className='user_welcome'>님<br />안녕하세요?</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sidebar