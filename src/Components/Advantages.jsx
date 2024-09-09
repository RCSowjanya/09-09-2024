import React from "react";
import img1 from "../Images/advt-1.webp";
import img2 from "../Images/advt-2.webp";
import img3 from "../Images/advt-3.webp";
import img4 from "../Images/advt-4.webp";
import advt1 from "../Images/cups icon7.webp";
import advt2 from "../Images/cups icon6.webp";
import advt3 from "../Images/cups icon3.webp";
import advt4 from "../Images/cups icon5.webp";
import advt5 from "../Images/cups icon8.webp";
import advt6 from "../Images/cups icon1.webp";
import advt7 from "../Images/cups icon4.webp";
import advt8 from "../Images/cups icon2.webp";
import advtimg from "../Images/Pose.webp";

const Advantages = () => {
  const data = [
    {
      id: 1,
      img: advt1,
      heading: "Convenience and Accessibility",
      description:
        "Connect with multiple service providers from the comfort of your home/office.",
    },
    {
      id: 2,
      img: advt2,
      heading: "Comparison Shopping",
      description:
        "Multiple quotes comparison against just one enquiry without spending excessive time on phone calls or visits.",
    },
    {
      id: 3,
      img: advt3,
      heading: "Transparent Pricing",
      description: "Clear and transparent pricing information",
    },
    {
      id: 4,
      img: advt4,
      heading: "Prompt Responses",
      description:
        "CUSP platform is designed to ensure timely responses to your inquiries. We endeavour to respond to your enquiry within 48 hours.",
    },
  ];

  const content = [
    {
      id: 1,
      img: advt5,
      heading: "Security and Trust",
      description:
        "Connect with multiple service providers from the comfort of your home/office.",
    },
    {
      id: 2,
      img: advt6,
      heading: "Access to Financing Schemes",
      description: "Easy Financing Schemes",
    },
    {
      id: 3,
      img: advt7,
      heading: "Access to Promotions and Incentives",
      description:
        "CUSP platform is designed to ensure timely responses to your inquiries. We endeavor to respond to your enquiry within 48 hours.",
    },
    {
      id: 4,
      img: advt8,
      heading: "After Sale Service Support",
      description:
        "End of your installation project is start of our sustainable relationship. We are available any time for after sale -support.",
    },
  ];

  const imgdata = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

  return (
    <div className="bg-[#7AD8E0]">
      <div className="mx-[3%]">
        <h2 className="ad text-4xl text-[#00454B] font-bold text-center pt-11 pb-7">
          Advantages of solar installation through CUSP
        </h2>
        {/*---images in 4 columns---*/}
        <div className="flex  justify-center gap-3 max-[600px]:flex-col max-[600px]:space-y-4 max-[600px]:w-full max-[600px]:gap-0">
          {imgdata.map((item) => (
            <div key={item.id} className="w-1/4 max-[600px]:w-full">
              <img src={item.img} className="w-full h-auto" alt="" />
            </div>
          ))}
        </div>
        {/*---images in 4 columns close---*/}
        {/*---advantges and images----*/}
        <div className="flex flex-col min-[1000px]:flex-row md:space-x-6 mt-11 pb-11">
          {/* First Column */}
          <div className="flex-1 flex flex-col">
            {data.map((item) => (
              <div key={item.id} className="mb-4 flex-1 flex flex-col">
                <div className="flex gap-3 bg-[#FFFDE3] p-2 rounded-l-2xl rounded-br-2xl items-center h-full">
                  <img src={item.img} className="" alt="navy-logo" />
                  <div>
                    <h2 className="ad text-[18px] leading-[28px] font-[600] text-[#0C1717]">
                      {item.heading}
                    </h2>
                    <p className="text-[16px] font-[400] leading-[24px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column (Image) */}
          <div className="mx-auto">
            <img
              src={advtimg}
              alt="advt-pose-img"
              className="w-full h-auto  max-[1000px]:max-w-[50%]!important "
            />
          </div>

          {/* Third Column */}
          <div className="flex-1 flex flex-col">
            {content.map((item) => (
              <div key={item.id} className="mb-4 flex-1 flex flex-col">
                <div className="flex gap-3 bg-[#FFFDE3] p-2 rounded-r-2xl rounded-bl-2xl items-center h-full">
                  <img src={item.img} className="" alt="navy-logo" />
                  <div>
                    <h2 className="ad text-[18px] leading-[28px] font-[600] text-[#0C1717]">
                      {item.heading}
                    </h2>
                    <p className="text-[16px] font-[400] leading-[24px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*---advantges and images----*/}
      </div>
    </div>
  );
};

export default Advantages;
