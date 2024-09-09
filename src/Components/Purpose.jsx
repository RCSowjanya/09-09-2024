import React from "react";
import purposebg from "../Images/purpose.webp";
import mission from "../Images/mission.webp";
import vision from "../Images/vision.webp"
const Purpose = () => {
  const data = [
    { id: 1, img:mission,heading: "Mission", content: [
      "Enabling Clean and Green Future.",
      "Partner in Sustainable Development."
    ] },
    { id: 2, img:vision, heading: "Vision", content: [
      "Ethics Backed Prosperous Organization.",
      "Bridging the Market Gap."
    ] },
    
  ];
  return (
    <div className="bg-[#75D1D8] py-[3%] px-[3%]">
      <div className="flex max-[1000px]:flex-col gap-11">
        {/*--first column---*/}
        <div className="w-1/2 max-[1000px]:w-full max-[1000px]:mt-5">
          <img src={purposebg} className="w-full" alt="purpose-bg" />
          <h2 className="text-[34px] font-[600] ad text-[#10373A]">Purpose of the platform</h2>
          <p className="text-[23px] font-[500] text-[#10373A]  ad">
            <span className="text-orange-600 font-bold text-[23px]">C</span>
            onnecting
            <span className="text-orange-600 font-bold text-[23px]"> U</span>ser
            and
            <span className="text-orange-600 font-bold text-[23px]"> S</span>
            ervices
            <span className="text-orange-600 font-bold text-[23px]"> P</span>
            rovider
            <span className="text-orange-600 font-bold text-[23px]"> (CUSP)</span>
          </p>
          
        </div>
        {/*--second column---*/}
        <div className="w-1/2 max-[1000px]:w-full">
          <div className="flex-1">
            {data.map((item) => (
              <div key={item.id} className="mb-9">
                <div className="flex gap-3 max-[600px]:flex-col max-[600px]:items-center  bg-[#E1F5F1] p-6 rounded-l-2xl rounded-br-2xl">
                  <img src={item.img} className="w-24 h-24" alt={item.img} />
                  <div className="">
                    <h2 className="text-[#253745] text-[18px] font-[500] ad mb-3 ml-2 max-[600px]:text-center">{item.heading}</h2>
                    <ul className="list-outside list-disc text-[18px] font-[500] space-y-2 text-[#14201B]">
                  {item.content.map((text, idx) => (
                    <li key={idx} className="ml-6 text-[18px] font-[500]">{text}</li>
                  ))}
                </ul>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-4 max-[600px]:p-2">
        <p className="text-[16px] font-[400] leading-[22.4px] text-[#14201B] ">
        Our motivation stems from the pressing need to accelerate the adoption of renewable energy, particularly solar power, in India. Witnessing the fragmented landscape of solar products and services, we envisioned a centralized platform to streamline the process for both installers and suppliers.</p>
       <p>We support you in your decision to transition to green energy. We facilitate users and service providers to connect, negotiate and contract in transparent way. We ensure win-win situation for all. Please refer to our OBJECTIVES.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Purpose;
