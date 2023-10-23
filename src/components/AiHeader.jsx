import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_home from './Page_main/Header_home'


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

                <div className='web_header'>
                    <Header_home />
                </div>
            </div>

        </div>

    )
}

export default AiHeader