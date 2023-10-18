/* 다이어리 작성하는 페이지 */

import React from 'react'
import AiHeader from '../components/AiHeader'
import Switch_ai from '../components/Switch_ai'



const WriteDiary = () => {
    return (
        <div className='writeDiary_container'>
            <div>
                <Switch_ai />
            </div>
            <div>
                <AiHeader />
            </div>

        </div>
    )
}

export default WriteDiary