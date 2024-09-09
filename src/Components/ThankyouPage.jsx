import React from "react";
import submission from "../Images/submission.png";

const ThankyouPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center py-[5%] rounded-2xl">
      <div className="border border-gray-300 w-full max-w-[60%]  max-[1000px]:max-w-[90%] p-6 rounded-md">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="text-center">
            <img src={submission} alt="submission" className="w-full h-auto" />
          </div>
          <div className="text-center">
            <h1 className="text-[#004A9C] font-semibold text-lg pb-4">
              Thank You For Your Submission
            </h1>
            <p className="text-[1rem] font-medium">
              We have successfully received your submission, and our team will
              review your information shortly. Your inquiry is important to us,
              and we aim to respond as quickly as possible.
            </p>
          </div>

          <div className="text-center">
            <a href="/">
              <button className="px-11 py-2  my-5 bg-[#0BB68D] text-white rounded-md">
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
