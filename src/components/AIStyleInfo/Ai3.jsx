import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Ai3 extends React.Component {
    render() {
        const settings = {
            infinite: true, // 무한 루프
            slidesToShow: 1, // 보여질 슬라이드 수
            slidesToScroll: 1, // 슬라이드 전환 시 이동할 슬라이드 수
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            arrows: false
        };


        return (
            <div className='style_top_container'>
                <Slider {...settings}>
                    <div className='style_photo'>
                        <img src='Image/ai_van_gogh.jpg' />
                    </div>
                    <div className='style_photo'>
                        <img src='Image/van_gogh.jpg' />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Ai3