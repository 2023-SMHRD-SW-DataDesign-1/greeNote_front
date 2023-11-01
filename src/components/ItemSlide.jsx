import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataContext } from '../contexts/DataContext';

const ItemSlide = ({ data }) => {
  const settings = {
    dots: true, // 페이지 번호 표시
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 전환 속도 (밀리초)
    slidesToShow: 1, // 보여질 슬라이드 수
    slidesToScroll: 1, // 슬라이드 전환 시 이동할 슬라이드 수
    autoplay: true,
    arrows: false
  };

  // 현재 선택된 식물 정보
  const { selectedPlantData } = useContext(DataContext);


  return (
    <div className='top_container'>
      <Slider {...settings}>
        {data.map((img, idx) => (
          <div className='slide_container' key={idx}>
            <img src={img.image_url} alt={img.name} />
            <div className='slide_text_box'>
              <div className='slide_plantName'>{selectedPlantData.title}</div>
              <div className='slide_season'>{img.season}</div>
              <div className='slide_date'>{img.registration_date}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ItemSlide;
