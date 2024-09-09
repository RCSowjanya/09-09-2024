import React from "react";
import { BsBagCheck } from "react-icons/bs";

const CustomLegend = () => {
  return (
    <div className="flex flex-col mt-11">
      <div className="flex  justify-between">
        <BsBagCheck
          size={14}
          className="text-[#4AB5BE] font-[900] bg-[#E2FFF3]"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-[600]">Reality Sales</p>
          <p className="text-[12px] font-[400]">Global</p>
        </div>
        <div>
          <p className="text-[14px] font-[600]">8000</p>
        </div>
      </div>
      <div className="flex  justify-between mt-3">
        <BsBagCheck size={14} className="text-[#FFCF00] font-[900] mt-2" />
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-[600]">Target Sales</p>
          <p className="text-[12px] font-[400]">Commercial</p>
        </div>
        <div>
          <p className="text-[14px] font-[600]">12211</p>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend;
