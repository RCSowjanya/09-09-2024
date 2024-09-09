import React from "react";
import greenfuture from "../Images/testimonials-bg.png";
import quotes from "../Images/quotes.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test from "../Images/test-1.png";

const Testimonials = () => {
  const data = [
    {
      name: "Rajesh K.",
      designation: "Project Manager",
      description:
        "CUSP made our transition to solar seamless and cost-effective! The platform connected us with top-notch providers, and we were able to compare quotes easily. The whole process was transparent and hassle-free. Highly recommend!",
      rating: 5,
      comment: "",
      img: test,
    },
    {
      name: "Rajesh K.",
      designation: "Project Manager",
      description:
        "Zen AWeSim has been working satisfactorily under the maintenances of Zen Technologies ltd. It has been very useful for training purpose and helps the trainees to attain perfection in weapon handling and weapon firing.",
      rating: 4,
      img: test,
    },
    {
      name: "Rajesh K.",
      designation: "Project Manager",
      description:
        "Multi-functional target system (Zen MFTS) helps us to prepare trainees for real-life situations through its standard and complex exercise of Reflex shooting with live fire.",
      rating: 4,
      img: test,
    },
    {
      name: "Rajesh K.",
      designation: "Project Manager",
      description:
        "The Zen Advanced Weapon Simulator, installed and commissioned by Zen Technologies limited, Hyderabad, has been functioning well and helping officers and sailors to improve their shooting skills in Tactical and Judgmental scenarios.",
      rating: 4,
      img: test,
    },
  ];

  const settings = {
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1000,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="bg-[#E7F0E9] pt-[3%] pb-[3%] testimonials">
      <div className="flex max-[1000px]:flex-col max-[1000px]:space-y-5 mx-[5%]">
        <div className="w-1/2 max-[1000px]:w-full h-auto bg-white py-6 px-8 rounded-l-2xl flex-1 min-h-[410px]">
          <h4 className="text-[#FF6F1E] inter text-[24px] font-[700]">
            Testimonials
          </h4>
          <h2 className="text-[#253745] ad text-[34px] font-[600]">
            Our Satisfied Clients
          </h2>
          <Slider {...settings}>
            {data.map((testimonial, index) => (
              <div key={index} className="">
                {/*---flex-start---*/}
                <div className="flex pt-[5%] max-[600px]:flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="">
                      <img
                        className="rounded-full"
                        src={testimonial.img}
                        alt={`testimonial-${index}`}
                      />
                    </div>
                    <div className="">
                      <h3 className="ad text-[18px] font-[500]   text-[#253745]">
                        {testimonial.name}
                      </h3>
                      {testimonial.designation && (
                        <p className="text-[14.18px] text-[#CDCDCD] inter">
                          {testimonial.designation}
                        </p>
                      )}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span className="text-[#FFD12E] text-xl" key={i}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img src={quotes} className="" alt="quotes" />
                  </div>
                </div>
                <p className="mt-5 text-[16px] leading-[25px] text-[#414141] font-[400]">
                  {testimonial.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-1/2 max-[1000px]:w-full flex-1 min-h-[410px]">
          <img src={greenfuture} className="w-full h-full" alt="greenfuture" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
