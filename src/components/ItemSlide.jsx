import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ItemSlide extends React.Component {
  render() {

    const props = this.props;

    const settings = {
      dots: true, // 페이지 번호 표시
      infinite: true, // 무한 루프
      speed: 500, // 슬라이드 전환 속도 (밀리초)
      slidesToShow: 1, // 보여질 슬라이드 수
      slidesToScroll: 1, // 슬라이드 전환 시 이동할 슬라이드 수
      autoplay: true,
    };

    
    return (
      <div>
          <div className='top_container'>
          <Slider {...settings}>
            {props.data.map((img, idx) => (
              <div className='slide_container' key={idx}>
                <img src='/Image/plant_ex.jpg'></img>
                  <div className='slide_text_box'>
                    <div className='slide_plantName'>{img.name}</div>
                    <div className='slide_season'>{img.season}</div>
                    <div className='slide_date'>{img.date}</div>
                  </div>
              </div>
            ))}


          </Slider>
        </div>
      </div>
     
    );
  }
}

export default ItemSlide;