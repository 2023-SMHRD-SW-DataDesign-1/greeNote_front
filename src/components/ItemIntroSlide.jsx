import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ItemIntroSlide extends React.Component {
    render() {
  
      const introImage =[
        {
            url:'./Image/monstera.jpg',
            idx:'0'
        },
        {
            url:'./Image/home_logo.png',
            idx:'1'
        },
        {
            url:'./Image/web_logo.png',
            idx:'2'
        }
      ]
  
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
              {introImage.map((img) => (
                <div className='intro_slide_container' key={img.idx}>
                  <img src={img.url} className='introImg'></img>
                </div>
              ))}
  
  
            </Slider>
          </div>
        </div>
       
      );
    }
  }
  
  export default ItemIntroSlide;