import React from 'react'
import { Link } from 'react-router-dom'

const Icons_home = () => {
    return (
        <div className='middle_menu'>
            <Link to="/ai" className='icon_AI'> {/* AI 아이콘 */}
                <img src="/Icon/ai.PNG" alt="ai_icon" />
            </Link>

            <Link to="/flipbook" className='icon_AI'> {/* 플립북 아이콘 */}
                <img src="/Icon/flipBook.PNG" alt="flipBook_icon" />
            </Link>

        </div>
    )
}

export default Icons_home