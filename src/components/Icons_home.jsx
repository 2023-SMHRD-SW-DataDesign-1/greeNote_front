import React from 'react'
import { Link } from 'react-router-dom'

const Icons_home = () => {
    return (
        <div className='foot_menu'>
            <Link to="/ai" className='icon_AI'> {/* AI 아이콘 */}
                <img src="/Icon/ai.PNG" alt="ai_icon" />
            </Link>

            <Link to="/filpbook" className='icon_AI'> {/* 플립북 아이콘 */}
                <img src="/Icon/filpBook.PNG" alt="filpBook_icon" />
            </Link>

        </div>
    )
}

export default Icons_home