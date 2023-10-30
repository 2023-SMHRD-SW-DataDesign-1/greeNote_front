import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class AiStylePreview extends React.Component {
    render() {

        const style = [
            {
                img: 'Image/1.jpg',
                style: '모자이크'
            },
            {
                img: 'Image/2.jpg',
                style: '점묘화큐브'
            },
            {
                img: 'Image/3.jpg',
                style: '폴리곤'
            },
        ]

        const sliderSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
          };
      
          const navSliderSettings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dot:false,
            centerMode: true,
            focusOnSelect: true,
          };
      
          return (
            <div>
              <Slider {...sliderSettings}>
                {style.map((style,idx)=>(
                    <div className='style_container' key={idx}>
                        <img src={style.img}/>
                    </div>
                ))}
              </Slider>
              <Slider className="slider-nav" {...navSliderSettings}>
              {style.map((style,idx)=>(
                    <div className='style_container' key={idx}>
                        <img src={style.img}/>
                    </div>
                ))}
              </Slider>
            </div>
          );
    }
}

export default AiStylePreview;