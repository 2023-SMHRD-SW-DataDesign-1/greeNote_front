import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Ai4 extends React.Component {
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
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM00UituvDY0iKE4QV87j7kScB55TpgXssCQ&usqp=CAU'/>
                </div>
                <div className='style_photo'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWAi5EOzJgrHJ6GvUO-vvwifPr-jX9nLrFQ&usqp=CAU'/>
                </div>
            </Slider>
        </div>
    );
}
}

export default Ai4