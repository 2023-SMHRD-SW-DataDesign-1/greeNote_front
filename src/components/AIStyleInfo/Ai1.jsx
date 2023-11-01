import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Ai1 extends React.Component {
    render() {
    const settings = {
        infinite: true, // 무한 루프
        speed: 150, // 슬라이드 전환 속도 (밀리초)
        slidesToShow: 1, // 보여질 슬라이드 수
        slidesToScroll: 1, // 슬라이드 전환 시 이동할 슬라이드 수
        autoplay: true,
        fade: true,
        arrows: false
    };

    return (
        <div className='style_top_container'>
            <Slider {...settings}>
                <div className='style_photo'>
                    <img src='data:image/jpeg;base64,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'></img>
                </div>
                <div className='style_photo'>
                    <img src='data:image/jpeg;base64,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'></img>
                </div>
            </Slider>
        </div>
    );
}
}

export default Ai1