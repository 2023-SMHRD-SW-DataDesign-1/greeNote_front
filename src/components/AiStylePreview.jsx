import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class AiStylePreview extends React.Component {
    render() {

        const style = [
            {
                img: '0',
                style: '모자이크'
            },
            {
                img: '1',
                style: '점묘화'
            },
            {
                img: '2',
                style: '판화'
            },
            {
                img: '3',
                style: '폴리곤'
            }
        ]

        const settings1 = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        };

        const settings2 ={
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        }


        return (
            <div>
                <div className='top_container'>
                    <Slider {...settings1}>
                        {style.map((style, idx) => (
                            <div className='slide_container' key={idx}>
                                <div>
                                    {style.style}
                                </div>

                            </div>
                        ))}
                    </Slider>

                    <Slider {...settings2}>
                        {style.map((style, idx) => (
                            <div className='slide_container' key={idx}>
                                <div>
                                    {style.style}
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}

export default AiStylePreview;