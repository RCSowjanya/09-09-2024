import React from "react";
import objective from "../Images/Cusp-about.png";
import object from "../Images/object.png";
import vision from "../Images/vision.png";
import mission from "../Images/mission.png";
import objectives from "../Images/objectives.webp";

const data = [
  {
    img: mission,
    title: "Mission",
    content: [
      "Enabling Clean and Green Future.",
      "Partner in Sustainable Development.",
    ],
  },
  {
    img: vision,
    title: "Vision",
    content: [
      "Ethics Backed Prosperous Organization.",
      "Bridging the Market Gap.",
    ],
  },
  {
    img: objectives,
    title: "Objectives",
    content: [
      "Creating Household brand synonymous with sustainability.",
      "Happy Stakeholders, Empowered Customers Prosperous Service Providers",
    ],
  },
];

const Objectives = () => {
  return (
    <div className="bg-[#FFF4D9] p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row h-auto">
        <div className="w-full lg:w-2/5 bg-[#7AD8E0] flex items-center justify-center p-4 lg:p-8">
          {/* Objective Image */}
          <img src={objective} className="w-full h-auto" alt="objective" />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col justify-center bp-4 lg:p-8">
          <div className="w-full h-full">
            <iframe
              width="500"
              height="500"
              src="https://www.youtube.com/embed/S2gmpaTCtm8?si=Z9lBfkmRynp2XeHO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/*   <div className="w-full lg:w-3/5 flex flex-col justify-center items-start p-6 lg:pr-[20%] relative z-10">
          {data.map((item, index) => (
            <div key={index} className="flex gap-5 my-7 relative">
              <img
                src={item.img}
                className="w-20 h-20 absolute top-1/2 transform -translate-y-1/2 "
                alt={item.title}
              />
              <div className="ml-24 lg:ml-28">
                <h2 className="text-[34px] max-[600px]:text-[24px] text-[#004A9C] font-[600]">
                  {item.title}
                </h2>
                <ul className="list-outside list-disc text-[18px] font-[500] space-y-2 text-[#14201B]">
                  {item.content.map((text, idx) => (
                    <li key={idx} className="ml-6">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Objectives;
