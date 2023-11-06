import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_home2 from './Page_main/Header_home2'
import { DataContext } from '../contexts/DataContext';


const AiHeader = () => {

    const { selectedPlantData } = useContext(DataContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMenuLeave = () => {
        setIsMenuOpen(false);
    };


    return (
        <div className='ai_header_container'>
            <div className='ai_header_box'>
                <div className='m_logo'>
                    <Link to='/main'>
                        <img src="Image/ic_leaf_home.png" alt="" />
                    </Link>
                    <div className='m_pageInfo'>
                        {window.location.pathname === '/greendiary' && '다이어리'}
                        {window.location.pathname === '/ai' && '생성 AI'}
                        {window.location.pathname === '/aiReturn' && 'AI 이미지'}
                        {window.location.pathname === '/slide' && '슬라이드'}
                        {window.location.pathname === '/mypage' && '마이페이지'}
                        {window.location.pathname === '/' && '로그아웃'}
                    </div>
                </div>

                <div className='meat' onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
                    <img src='Image/ic_meatball.png' className='ic_meat' /> {/*미트볼 아이콘 */}
                    {isMenuOpen && (
                        <div >
                            <Link to={`/greendiary?plant_id=${selectedPlantData.plantId}`} className='menuLink'>
                                <div className='meat_menu'>다이어리</div>
                            </Link>
                            <Link to={`/ai?plant_id=${selectedPlantData.plantId}`} className='menuLink'>
                                <div className='meat_menu'>생성 AI</div>
                            </Link>
                            <Link to={`/slide?plant_id=${selectedPlantData.plantId}`} className='menuLink'>
                                <div className='meat_menu'>슬라이드</div>
                            </Link>
                            <Link to='/mypage' className='menuLink'>
                                <div className='meat_menu'>마이페이지</div>
                            </Link>
                            <Link to='/' className='menuLink'>
                                <div className='meat_menu'>로그아웃</div>
                            </Link>
                        </div>
                    )}
                </div>
                <div className='web_header'>
                    <Header_home2 />
                </div>
            </div>

        </div>

    )
}

export default AiHeader