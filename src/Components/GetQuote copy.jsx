import React, { useState, useEffect } from "react";
import quote from "../Images/quote.webp";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import LogicsforQuote from "./LogicsforQuote";
import { MdOutlineHouse } from "react-icons/md";
import YourName from "./YourName";
import FullAddress from "./FullAddress";
import ContactDetails from "./ContactDetails";
import TypeofOrganization from "./TypeofOrganization";
import CurrentSanction from "./CurrentSanction";
import TypeofRoof from "./TypeofRoof";
import Attachments from "./Attachments";
import AttachmentsSection from "./AttachmentsSection";
import CapacitytoInstall from "./CapacitytoInstall";
import LocationDetails from "./LocationDetails";
import Installation from "./Installation";
import PeakLoad from "./PeakLoad";
import TotalAreaRoof from "./TotalAreaRoof";
import { ToastContainer } from "react-toastify";
import submission from "../Images/submission.png";

const GetQuote = () => {
  const {
    step,
    errors,
    formData,
    handleBack,
    handleNext,
    handleChange,
    changeHandle,
    handleSubmit,
    validateStep,
    isLastStep,
    setFormData,
    handleFileChange,
    handleOrganizationTypeChange,
    setStep,
    handlePeakLoadChange,
    isSubmitted,
    handleRoofTypeChange,
    loading,
  } = LogicsforQuote();

  const [canProceed, setCanProceed] = useState(true);
  const [isEmpanelled, setIsEmpanelled] = useState(true);
  const [needSubsidy, setNeedSubsidy] = useState("No");
  const [roofRights, setIsRoofRights] = useState(false);
  const [isOption, setIsOption] = useState(true);
  const [electricityConnectivity, setElectricityConnectivity] = useState(false);

  useEffect(() => {
    setCanProceed(validateStep());
  }, [step, formData]);

  const handleNextClick = () => {

      handleNext({
        roofRights,
        electricityConnectivity,
        isOption,
        isEmpanelled,
      });
  
  };

  const handleSubmitClick = () => {
    if (canProceed) {
      handleSubmit();
    }
  };

  const electricityConnectivityToggle = (selectedOption) => {
    setElectricityConnectivity(selectedOption);
    if (selectedOption) {
      setStep(31);
    } else {
      setStep(34);
    }
  };

  const handleRoofRightToggleNo = (selectedOption) => {
    setIsRoofRights(selectedOption);
    if (selectedOption) {
      setStep(18);
    } else {
      setStep(20);
    }
  };

  const handleRoofRightToggleYes = (selectedOption) => {
    setIsOption(selectedOption);
    if (selectedOption) {
      setStep(25);
    } else {
      setStep(27);
    }
  };

  const handleToggle = (selectedOption) => {
    setIsEmpanelled(selectedOption);
    if (selectedOption) {
      setStep(5);
    } else {
      setStep(8);
    }
  };

  const handleToggleChange = (e) => {
    const newSubsidyState = needSubsidy === "Yes" ? "No" : "Yes";
    setNeedSubsidy(newSubsidyState);

    setFormData({
      ...formData,
      needSubsidy: newSubsidyState,
    });

    if (newSubsidyState === "Yes") {
      setIsOption(true);
      setStep(15);
    } else {
      setIsRoofRights(false);
      setStep(22);
    }
  };

  return (
    <div>
      <div className="relative bg-house h-auto max-[1000px]:mb-11">
        <div className="relative flex flex-col items-center justify-center pt-[5%] ml-[2%] max-[600px]:ml-0">
          <div className="absolute left-6 top-[17%] max-[1050px]:relative max-[1050px]:left-0 max-[1050px]:mx-auto max-[1050px]:flex max-[1050px]:justify-center max-[1050px]:w-full">
            <img
              src={quote}
              className="w-full h-full max-[1050px]:h-[50%] max-[1050px]:w-[50%] object-cover"
              alt="cusp-quote"
            />
          </div>

          <div className="relative w-[55vw] max-[1100px]:w-full border rounded-xl bg-white border-[#FFAC0B] flex flex-col justify-center px-11 py-6  shadow-custom mt-[5%] max-[1000px]:mx-auto mb-[3%]">
            {isSubmitted ? (
              <div className="flex justify-center flex-col items-center py-[5%]">
                <div className="text-center">
                  <img src={submission} className="" alt="submission" />
                </div>
                <div className="text-center">
                  <h1 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                    Thank You For Your submission
                  </h1>
                  <p className="text-[14px] font-[500]">
                    We have successfully received your submission and our team
                    will review your information shortly. Your inquiry is
                    important to us, and we aim to respond as quickly as
                    possible.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-[#0BB68D] text-white px-11 py-2 rounded-md mt-6"
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {step === 0 && (
                  <div>
                    <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                      Type of Customer
                    </h2>
                    <div className="flex gap-4 my-[2%] w-full max-[1000px]:flex-col items-center justify-center">
                      <div>
                        <p
                          className={`group border-2 ${
                            formData.customerType === "Residential"
                              ? "bg-[#D3900D] text-white"
                              : "border-[#D3900D] text-[#D3900D] hover:bg-[#D3900D] hover:text-white"
                          } flex gap-3 text-[16px] rounded-full px-16 py-3 cursor-pointer`}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Residential",
                            });
                            setStep(11);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className={`${
                              formData.customerType === "Residential"
                                ? "text-white"
                                : "text-[#D3900D] group-hover:text-white"
                            } transition-colors duration-300`}
                          />
                          <span
                            className={`${
                              formData.customerType === "Residential"
                                ? "text-white"
                                : "group-hover:text-white"
                            }`}
                          >
                            Residential
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                          className={`group border-2 ${
                            formData.customerType === "Commercial"
                              ? "bg-[#D3900D] text-white"
                              : "border-[#D3900D] text-[#D3900D] hover:bg-[#D3900D] hover:text-white"
                          } flex gap-3 text-[16px] rounded-full px-16 py-3 cursor-pointer`}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Commercial",
                            });
                            setStep(1);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className={`${
                              formData.customerType === "Commercial"
                                ? "text-white"
                                : "text-[#D3900D] group-hover:text-white"
                            } transition-colors duration-300`}
                          />
                          <span
                            className={`${
                              formData.customerType === "Commercial"
                                ? "text-white"
                                : "group-hover:text-white"
                            }`}
                          >
                            Commercial
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.customerType === "Residential" && step > 0 && (
                  <div className="mx-7">
                    <div>
                      {step === 11 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 12 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 13 && (
                        <div>
                          <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
                            Connection Type
                          </h2>
                          <div className="flex gap-6 my-[4%] w-full max-[1000px]:flex-col items-center justify-center">
                            <h4
                              className={`flex gap-3 font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer 
                             ${
                               formData.connectionType === "Ongrid"
                                 ? "bg-[#D3900D] text-white"
                                 : "text-[#D3900D] bg-[#FFF7E7] hover:bg-[#D3900D] hover:text-white"
                             }`}
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Ongrid",
                                });
                                setStep(14);
                              }}
                            >
                              On Grid
                            </h4>
                            <h4
                              className={`border border-[#D3900D] rounded-full font-[600] px-20 py-2 text-[16px] cursor-pointer
                             ${
                               formData.connectionType === "Offgrid"
                                 ? "bg-[#D3900D] text-white"
                                 : "text-[#D3900D] hover:bg-[#D3900D] hover:text-white"
                             }`}
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Offgrid",
                                });
                                setStep(29);
                              }}
                            >
                              Off Grid
                            </h4>
                          </div>
                        </div>
                      )}
                      {step >= 14 && step < 29 && (
                        <div>
                          {step === 14 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
                                Need Subsidy?
                              </h2>
                              <div className="flex items-center justify-center">
                                <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={needSubsidy === "Yes"}
                                      onChange={handleToggleChange}
                                      className="sr-only"
                                    />
                                    <div
                                      className={`block w-14 h-8 rounded-full transition-colors ${
                                        needSubsidy === "Yes"
                                          ? "bg-[#0BB68D]"
                                          : "bg-gray-300"
                                      }`}
                                    ></div>
                                    <div
                                      className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
                                        needSubsidy === "Yes"
                                          ? "translate-x-full bg-gray-200"
                                          : "bg-gray-400"
                                      }`}
                                    ></div>
                                  </div>
                                  <span
                                    className={`ml-3 font-[600] text-[16px] ${
                                      needSubsidy === "Yes"
                                        ? "text-gray-500"
                                        : "text-gray-400"
                                    }`}
                                  >
                                    {needSubsidy === "Yes" ? "Yes" : "No"}
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}
                          {needSubsidy && step === 15 && (
                            <CurrentSanction
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {needSubsidy && step === 16 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {needSubsidy && step === 17 && (
                            <Installation
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {needSubsidy && step === 17 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Roof Rights
                              </h2>
                              <label className="flex items-center justify-center cursor-pointer">
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    checked={roofRights}
                                    onChange={(e) =>
                                      handleRoofRightToggleNo(e.target.checked)
                                    }
                                    className="sr-only"
                                  />
                                  <div
                                    className={`block w-14 h-8 rounded-full transition-colors ${
                                      roofRights
                                        ? "bg-[#0BB68D]"
                                        : "bg-gray-300"
                                    }`}
                                  ></div>
                                  <div
                                    className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
                                      roofRights
                                        ? "translate-x-full bg-gray-200"
                                        : "bg-gray-400"
                                    }`}
                                  ></div>
                                </div>
                                <span
                                  className={`ml-3 font-[600] text-[16px] ${
                                    roofRights
                                      ? "text-gray-500"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {roofRights ? "Yes" : "No"}
                                </span>
                              </label>
                            </div>
                          )}
                          {needSubsidy && roofRights && step === 18 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {needSubsidy && roofRights && step === 19 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {needSubsidy && !roofRights && step === 20 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {needSubsidy && !roofRights && step === 21 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {!needSubsidy && step >= 22 && step < 26 && (
                            <div>
                              {step === 22 && (
                                <CurrentSanction
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 23 && (
                                <TotalAreaRoof
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}
                              {step === 24 && (
                                <Installation
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}
                              {step === 24 && (
                                <div>
                                  <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                    Roof Rights
                                  </h2>
                                  <label className="flex items-center justify-center cursor-pointer">
                                    <div className="relative">
                                      <input
                                        type="checkbox"
                                        checked={isOption}
                                        onChange={(e) => {
                                          setFormData({
                                            ...formData,
                                            batteryBackup: e.target.value,
                                          });
                                          handleRoofRightToggleYes(
                                            e.target.checked
                                          );
                                        }}
                                        className="sr-only"
                                      />
                                      <div
                                        className={`block w-14 h-8 rounded-full transition-colors ${
                                          isOption
                                            ? "bg-[#0BB68D]"
                                            : "bg-gray-300"
                                        }`}
                                      ></div>
                                      <div
                                        className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
                                          isOption
                                            ? "translate-x-full bg-gray-200"
                                            : "bg-gray-400"
                                        }`}
                                      ></div>
                                    </div>
                                    <span
                                      className={`ml-3 font-[600] text-[16px] ${
                                        isOption
                                          ? "text-gray-500"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      {isOption ? "Yes" : "No"}
                                    </span>
                                  </label>
                                </div>
                              )}
                            </div>
                          )}
                          {!needSubsidy &&
                            isOption &&
                            step >= 25 &&
                            step < 27 && (
                              <div>
                                {step === 25 && (
                                  <Attachments
                                    formData={formData}
                                    changeHandle={changeHandle}
                                  />
                                )}
                                {step === 26 && (
                                  <CapacitytoInstall
                                    formData={formData}
                                    handleChange={handleChange}
                                  />
                                )}
                              </div>
                            )}
                          {!needSubsidy &&
                            !isOption &&
                            step >= 27 &&
                            step < 29 && (
                              <div>
                                {step === 27 && (
                                  <Attachments
                                    formData={formData}
                                    changeHandle={changeHandle}
                                  />
                                )}
                                {step === 28 && (
                                  <CapacitytoInstall
                                    formData={formData}
                                    handleChange={handleChange}
                                  />
                                )}
                              </div>
                            )}
                        </div>
                      )}
                      {step >= 29 && (
                        <div>
                          {step === 29 && (
                            <PeakLoad
                              formData={formData.load}
                              handlePeakLoadChange={handlePeakLoadChange}
                            />
                          )}
                          {step === 30 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Electricity Connectivity
                              </h2>
                              <label className="flex items-center justify-center cursor-pointer">
                                <div className="relative">
                                  <input
                                    type="checkbox"
                                    checked={electricityConnectivity}
                                    onChange={(e) => {
                                      setFormData({
                                        ...formData,
                                        electricityConnectivity: e.target.value,
                                      });
                                      electricityConnectivityToggle(
                                        e.target.checked
                                      );
                                    }}
                                    className="sr-only"
                                  />
                                  <div
                                    className={`block w-14 h-8 rounded-full transition-colors ${
                                      electricityConnectivity
                                        ? "bg-[#0BB68D]"
                                        : "bg-gray-300"
                                    }`}
                                  ></div>
                                  <div
                                    className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
                                      electricityConnectivity
                                        ? "translate-x-full bg-gray-200"
                                        : "bg-gray-400"
                                    }`}
                                  ></div>
                                </div>
                                <span
                                  className={`ml-3 font-[600] text-[16px] ${
                                    electricityConnectivity
                                      ? "text-gray-500"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {electricityConnectivity ? "Yes" : "No"}
                                </span>
                              </label>
                            </div>
                          )}
                          {step === 31 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 32 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 33 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 34 && (
                            <TotalAreaRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 35 && (
                            <Attachments
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 36 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {formData.customerType === "Commercial" && step > 0 && (
                  <div className="mx-7">
                    <div>
                      {step === 1 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 2 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 3 && (
                        <TypeofOrganization
                          formData={formData}
                          handleOrganizationTypeChange={
                            handleOrganizationTypeChange
                          }
                        />
                      )}
                      {step === 4 && (
                        <div>
                          <CurrentSanction
                            formData={formData}
                            handleChange={handleChange}
                          />
                          <div className="flex items-center justify-center space-x-3 mt-9">
                            <h2 className="text-[#004A9C] font-[600] text-[16px] text-center">
                              Need Battery Backup
                            </h2>
                            <label className="flex items-center justify-center cursor-pointer">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={isOption}
                                  onChange={(e) =>
                                    handleToggle(e.target.checked)
                                  }
                                  className="sr-only"
                                />
                                <div
                                  className={`block w-14 h-8 rounded-full transition-colors ${
                                    isEmpanelled
                                      ? "bg-[#0BB68D]"
                                      : "bg-gray-300"
                                  }`}
                                ></div>
                                <div
                                  className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
                                    isEmpanelled
                                      ? "translate-x-full bg-gray-200"
                                      : "bg-gray-400"
                                  }`}
                                ></div>
                              </div>
                              <span
                                className={`ml-3 font-[600] text-[16px] ${
                                  isEmpanelled
                                    ? "text-gray-500"
                                    : "text-gray-400"
                                }`}
                              >
                                {isEmpanelled ? "Yes" : "No"}
                              </span>
                            </label>
                          </div>
                        </div>
                      )}
                      {step === 5 && (
                        <TypeofRoof
                          formData={formData}
                          handleChange={handleChange}
                          handleRoofTypeChange={handleRoofTypeChange}
                        />
                      )}
                      {step === 6 && (
                        <AttachmentsSection
                          formData={formData}
                          changeHandle={changeHandle}
                        />
                      )}
                      {step === 7 && (
                        <CapacitytoInstall
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 8 && (
                        <TypeofRoof
                          formData={formData}
                          handleChange={handleChange}
                          handleRoofTypeChange={handleRoofTypeChange}
                        />
                      )}
                      {step === 9 && (
                        <AttachmentsSection
                          formData={formData}
                          changeHandle={changeHandle}
                        />
                      )}
                      {step === 10 && (
                        <CapacitytoInstall
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                    </div>
                  </div>
                )}
                <div className="flex justify-center gap-8 mt-8 w-full">
                  {errors.length > 0 && (
                    <div className="text-red-500">
                      {errors.map((error, index) => (
                        <div key={index} className="error-message">
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex justify-center gap-8 mt-8 w-full">
                  {step > 0 && (
                    <button
                      className="border-2 border-[#0BB68D] text-[16px] font-[400] rounded-md px-8 py-2 items-center text-[#0BB68D] flex gap-3"
                      onClick={handleBack}
                    >
                      <FiArrowLeftCircle className="" />
                      Back
                    </button>
                  )}
                  {!loading && (
                    <button
                      className={`border-2 text-[16px] border-[#0BB68D] font-[400] px-8 py-2 flex rounded-md items-center gap-3 bg-[#0BB68D] text-white 
                      }`}
                      onClick={isLastStep ? handleSubmitClick : handleNextClick}
                      // disabled={!canProceed || loading}
                    >
                      {isLastStep ? "Submit" : "Next"}
                      <FiArrowRightCircle className="" />
                    </button>
                  )}
                  {loading && (
                    <button
                      className={`border-2 text-[16px] border-[#0BB68D] font-[400] px-8 py-2 flex rounded-md items-center gap-3 ${
                        loading
                          ? "bg-[#0BB68D] text-white"
                          : "bg-gray-300 text-gray-500"
                      }`}
                      disabled={loading}
                    >
                      Please wait....
                      <FiArrowRightCircle className="" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GetQuote;
