import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 300,
            autoplay: true,
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="pb-20 relative">
                <h2 className="text-[32px] font-semibold text-[#3A416F] text-center py-10">App Screens</h2>
                <Slider {...settings}>
                    <div>
                        <img src="/1 (1).png" className="md:h-[500px]" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/1 (2).png" className="md:h-[500px]" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/1 (3).png" className="md:h-[500px]" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/1 (4).png" className="md:h-[500px]" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/1 (5).png" className="md:h-[500px]" alt="" srcset="" />
                    </div>
                </Slider>

                <img src="/aaa123.png" alt="" srcset="" className='absolute right-0 top-0 opacity-20'/>

                <img src="/heart.png" alt="" srcset="" className='absolute left-0 -bottom-50 opacity-20'/>
            </div>
        );
    }
}