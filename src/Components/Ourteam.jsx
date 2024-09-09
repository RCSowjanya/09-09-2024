import React from "react";
import avatar from "../Images/cusp ceo.webp";

const Ourteam = () => {
  const teamMembers = [
    { name: "Akshay Verma", role: "Chief Executive Officer", img: avatar },
    { name: "ShAkshay Verma", role: "Chief Executive Officer", img: avatar },
    { name: "Akshay Verma", role: "Chief Executive Officer", img: avatar },
    // { name: "Akshay Verma", role: "Chief Executive Officer", img: avatar },
    // { name: "ShAkshay Verma", role: "Chief Executive Officer", img: avatar },
    // { name: "Akshay Verma", role: "Chief Executive Officer", img: avatar },
  ];

  return (
    <div>
      <div className="bg-[#75D1D8] p-[5%]">
        <div className="text-center text-black">
          <h2 className="text-[34px] font-[600]  text-[#004A9C] ad">
            Our Team
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-[2%] max-[600px]:space-y-6  ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center relative"
              >
                <img
                  src={member.img}
                  className="w-full h-auto object-cover"
                  alt={`${member.name} avatar`}
                />
                <div className="absolute bottom-0 w-full bg-[#4348BD]  text-white text-center py-2 ">
                  <h1 className="text-lg">{member.name}</h1>
                  <h6 className="text-sm">{member.role}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
