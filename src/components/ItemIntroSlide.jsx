import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ItemIntroSlide extends React.Component {
    render() {
  
      const introImage =[
        {
            url:'./Image/intro1.png',
            idx:'0'
        },
        {
            url:'./Image/intro2.png',
            idx:'1'
        },
        {
            url:'./Image/intro3.png',
            idx:'2'
        },
        {
            url:'./Image/intro4.png',
            idx:'3'
        }
      ]
  
      const settings = {
        dots: true, // 페이지 번호 표시
        infinite: true, // 무한 루프
        speed: 500, // 슬라이드 전환 속도 (밀리초)
        slidesToShow: 1, // 보여질 슬라이드 수
        slidesToScroll: 1, // 슬라이드 전환 시 이동할 슬라이드 수
        autoplay: true,
        arrows:false
      };
  
      
      return (
        <div className='intro_top_container'> 
            <Slider {...settings}>
              {introImage.map((img) => (
                <div className='intro_slide_container' key={img.idx}>
                  <img src={img.url} className='introImg'></img>
                </div>
              ))}
  
  
            </Slider>         
        </div>
       
      );
    }
  }
  
  export default ItemIntroSlide;