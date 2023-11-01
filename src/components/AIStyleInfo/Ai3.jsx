import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Ai3 extends React.Component {
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
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSuDim5_cpnrbSnSd6T9BOv2362s6BjlKHA&usqp=CAU'/>
                </div>
                <div className='style_photo'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMjubcNUHuil3CZNcALuBLdElksNbdh2oPyZ4FxaFwwMpjHGw97Magt4k4YpJD4eMpYE&usqp=CAU'/>
                </div>
            </Slider>
        </div>
    );
}
}

export default Ai3