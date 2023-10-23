import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const AiHeader = ({ onSelectComponent }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMenuLeave = () => {
        setIsMenuOpen(false);
    };

    const handleMenuSelect = (componentName) => {
      onSelectComponent(componentName);
      setIsMenuOpen(false);
    };


    return (
        <div className='ai_header_container'>
            <div className='ai_header_box'>
                <Link to='/'>
                <div className='m_logo'>
                <img src="Image/ic_leaf_home.png" alt="" />
                </div>
                </Link>
                <div className='web_logo'>
                    <img src="Image/web_logo.png" alt="" />
                </div>

                <div className='meat' onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
                    <img src='Image/ic_meatball.png' className='ic_meat' /> {/*미트볼 아이콘 */}
                    {isMenuOpen && (
                        <div >
                            <div className='meat_menu' onClick={() => handleMenuSelect("diary")}>Diary</div>
                            <div className='meat_menu' onClick={() => handleMenuSelect("ai")}>AI</div>
                            <div className='meat_menu' onClick={() => handleMenuSelect("slide")}>Slide</div>
                        </div>
                    )}
                </div>

                <div >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-house-door icon_home_d" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default AiHeader