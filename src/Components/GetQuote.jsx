import React, { useState, useEffect } from "react";
import quote from "../Images/cusp-partner.webp";
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
import bghouse from "../Images/cusp-house.webp";
import { FaInfoCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";
import PreviewDetails from "./PreviewDetails";
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
    setErrors,
  } = LogicsforQuote();

  const [isEmpanelled, setIsEmpanelled] = useState(true);
  const [needSubsidy, setNeedSubsidy] = useState("No");
  const [roofRights, setIsRoofRights] = useState(false);
  const [isOption, setIsOption] = useState(true);
  const [electricityConnectivity, setElectricityConnectivity] = useState(false);
  const handleNextClick = () => {
    if (validateStep()) {
      handleNext({
        roofRights,
        electricityConnectivity,
        isOption,
        isEmpanelled,
        needSubsidy,
      });
    }
  };
  const handlePreviewShow = () => {
    setStep(37);
  };
  const handleSubmitClick = () => {
    if (validateStep()) {
      handleSubmit();
    }
  };

  const electricityConnectivityToggle = (selectedOption) => {
    setElectricityConnectivity(selectedOption);
    // if (selectedOption) {
    //   setStep(31);
    // } else {
    //   setStep(34);
    // }
  };

  const handleRoofRightToggleNo = (selectedOption) => {
    setIsRoofRights(selectedOption);
    setErrors([]);
    if (selectedOption) {
      // setStep(18);
    } else {
      //setStep(20);
    }
  };

  const handleRoofRightToggleYes = (selectedOption) => {
    setIsOption(selectedOption);
    if (selectedOption) {
     // setStep(25);
    } else {
      //setStep(27);
    }
  };

  const handleToggle = (selectedOption) => {
    setIsEmpanelled(selectedOption);
    alert(selectedOption)
    if (selectedOption) {
     // setStep(5);
    } else {
      //setStep(8);
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
      // setStep(15);
    } else {
      setIsOption(false);
      //setStep(22);
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          CUSP Solar -Top Solar Power Panel Suppliers Quotations - Get a Quote
        </title>
        <meta
          name="description"
          content="Discover the Solar Companies Quotations From CUSP Solar in Near by location.  CUSP Solar offers solar solutions for homes and businesses. Get a quote Now"
        />
      </Helmet>
      <div className="relative h-auto max-[1000px]:mb-11 flex justify-center min-h-[50vh]">
        <div className="getaquote-img1 max-[600px]:hidden">
          <img src={quote} alt="cusp-quote" />
        </div>
        <div className="getaquote-img2">
          <img src={bghouse} className="" alt="" />
        </div>
        <div className="relative w-[60vw] max-[600px]:w-full  bg-white border border-[#0BB68D] rounded-lg flex flex-col justify-center px-11 py-6  shadow-custom mt-[5%] max-[1000px]:mx-auto mb-[3%]">
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
                  important to us, and we aim to respond as quickly as possible.
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
                        className={`group border ${
                          formData.customerType === "Residential"
                            ? "bg-[#004A9C] text-white"
                            : "border-[#004A9C] text-[#004A9C] hover:bg-[#004A9C] hover:text-white"
                        } flex gap-3 text-[16px] rounded-full px-16 py-3 cursor-pointer`}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            customerType: "Residential",
                          });
                        }}
                      >
                        <MdOutlineHouse
                          size={20}
                          className={`${
                            formData.customerType === "Residential"
                              ? "text-white"
                              : "text-[#004A9C] group-hover:text-white"
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
                        className={`group border ${
                          formData.customerType === "Commercial"
                            ? "bg-[#004A9C] text-white"
                            : "border-[#004A9C] text-[#004A9C] hover:bg-[#004A9C] hover:text-white"
                        } flex gap-3 text-[16px] rounded-full px-16 py-3 cursor-pointer`}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            customerType: "Commercial",
                          });
                        }}
                      >
                        <MdOutlineHouse
                          size={20}
                          className={`${
                            formData.customerType === "Commercial"
                              ? "text-white"
                              : "text-[#004A9C] group-hover:text-white"
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
                  <div className="flex justify-center text-align">
                    {errors.customerType && (
                      <p className="text-red-500 text-sm mt-1 pl-4">
                        {errors.customerType}
                      </p>
                    )}
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
                        errors={errors}
                      />
                    )}
                    {step === 12 && (
                      <FullAddress
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
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
                                 ? "bg-[#004A9C] text-white"
                                 : "text-[#004A9C] border border-[#004A9C] hover:bg-[#004A9C] hover:text-white"
                             }`}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                connectionType: "Ongrid",
                              });
                            }}
                          >
                            On Grid
                          </h4>
                          <h4
                            className={`border border-[#004A9C] rounded-full font-[600] px-20 py-2 text-[16px] cursor-pointer
                             ${
                               formData.connectionType === "Offgrid"
                                 ? "bg-[#004A9C] text-white"
                                 : "text-[#004A9C] hover:bg-[#004A9C] hover:text-white"
                             }`}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                connectionType: "Offgrid",
                              });
                              setErrors([]);
                              //  setStep(29);
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
                            errors={errors}
                          />
                        )}
                        {needSubsidy && step === 16 && (
                          <TotalAreaRoof
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                          />
                        )}
                        {needSubsidy && step === 17 && (
                          <Installation
                            formData={formData}
                            handleChange={handleChange}
                            handleFileChange={handleFileChange}
                            errors={errors}
                          />
                        )}
                        {needSubsidy && step === 17 && (
                          <div>
                            <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4 flex items-center justify-center">
                              Roof Rights?
                              <div className="relative group z-[999]">
                                <FaInfoCircle className="text-[#8A6112] ml-2 cursor-pointer" />
                                <div className="absolute bottom-0 transform translate-y-full left-1/2 text-[14px] font-[500] -translate-x-1/2 w-80 p-2 bg-gray-700 text-white e border border-[#8A6112] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  For multi-story buildings/apartments,
                                  installers will require access rights to the
                                  roof for installation.
                                </div>
                              </div>
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
                                    roofRights ? "bg-[#0BB68D]" : "bg-gray-300"
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
                                  roofRights ? "text-gray-500" : "text-gray-400"
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
                            errors={errors}
                          />
                        )}
                        {needSubsidy && roofRights && step === 19 && (
                          <CapacitytoInstall
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                          />
                        )}
                        {needSubsidy && !roofRights && step === 20 && (
                          <Attachments
                            formData={formData}
                            changeHandle={changeHandle}
                            errors={errors}
                          />
                        )}
                        {needSubsidy && !roofRights && step === 21 && (
                          <CapacitytoInstall
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                          />
                        )}
                        {!needSubsidy && step >= 22 && step < 26 && (
                          <div>
                            {step === 22 && (
                              <CurrentSanction
                                formData={formData}
                                handleChange={handleChange}
                                errors={errors}
                              />
                            )}
                            {step === 23 && (
                              <TotalAreaRoof
                                formData={formData}
                                handleChange={handleChange}
                                handleFileChange={handleFileChange}
                                errors={errors}
                              />
                            )}
                            {step === 24 && (
                              <Installation
                                formData={formData}
                                handleChange={handleChange}
                                handleFileChange={handleFileChange}
                                errors={errors}
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
                                  errors={errors}
                                />
                              )}
                              {step === 26 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                  errors={errors}
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
                                  errors={errors}
                                />
                              )}
                              {step === 28 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                  errors={errors}
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
                            formData={formData}
                            handlePeakLoadChange={handlePeakLoadChange}
                            errors={errors}
                          />
                        )}
                        {step === 30 && (
                          <div>
                            <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                              Electricity Available?
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
                            errors={errors}
                          />
                        )}
                        {step === 32 && (
                          <Attachments
                            formData={formData}
                            changeHandle={changeHandle}
                            errors={errors}
                          />
                        )}
                        {step === 33 && (
                          <CapacitytoInstall
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                          />
                        )}
                        {step === 34 && (
                          <TotalAreaRoof
                            formData={formData}
                            handleChange={handleChange}
                            handleFileChange={handleFileChange}
                            errors={errors}
                          />
                        )}
                        {step === 35 && (
                          <Attachments
                            formData={formData}
                            changeHandle={changeHandle}
                            errors={errors}
                          />
                        )}
                        {step === 36 && (
                          <CapacitytoInstall
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
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
                        errors={errors}
                      />
                    )}
                    {step === 2 && (
                      <FullAddress
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
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
                          errors={errors}
                        />
                        <div className="flex items-center justify-center space-x-3 mt-9">
                          <h2 className="text-[#004A9C] font-[600] text-[16px] text-center">
                            Need Battery Backup?
                          </h2>
                          <label className="flex items-center justify-center cursor-pointer">
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={isEmpanelled}
                                onChange={(e) => handleToggle(e.target.checked)}
                                className="sr-only"
                              />
                              <div
                                className={`block w-14 h-8 rounded-full transition-colors ${
                                  isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
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
                                isEmpanelled ? "text-gray-500" : "text-gray-400"
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
                        errors={errors}
                      />
                    )}
                    {step === 6 && (
                      <AttachmentsSection
                        formData={formData}
                        changeHandle={changeHandle}
                        errors={errors}
                      />
                    )}
                    {step === 7 && (
                      <CapacitytoInstall
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
                      />
                    )}
                    {step === 8 && (
                      <TypeofRoof
                        formData={formData}
                        handleChange={handleChange}
                        handleRoofTypeChange={handleRoofTypeChange}
                        errors={errors}
                      />
                    )}
                    {step === 9 && (
                      <AttachmentsSection
                        formData={formData}
                        changeHandle={changeHandle}
                        errors={errors}
                      />
                    )}
                    {step === 10 && (
                      <CapacitytoInstall
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
                      />
                    )}
                  </div>
                </div>
              )}
              {/* <div className="flex justify-center gap-8 mt-8 w-full">
                  {errors.length > 0 && (
                    <div className="text-red-500">
                      {errors.map((error, index) => (
                        <div key={index} className="error-message">
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                </div> */}
              {step === 37 && (
                <PreviewDetails
                  formData={formData}
                  handleSubmit={handleSubmit}
                  loading={loading}
                />
              )}
              <div className="flex justify-center gap-8 pt-11 w-full">
                {step > 0 && step < 37 && (
                  <button
                    className="border-2 border-[#0BB68D] text-[16px] font-[400] rounded-md px-8 py-2 items-center text-[#0BB68D] flex gap-3"
                    onClick={handleBack}
                  >
                    <FiArrowLeftCircle className="" />
                    Back
                  </button>
                )}
                {!loading && step < 37 && (
                  <button
                    className={`border-2 text-[16px] border-[#0BB68D] font-[400] px-8 py-2 flex rounded-md items-center gap-3 bg-[#0BB68D] text-white`}
                    onClick={isLastStep ? handlePreviewShow : handleNextClick}
                  >
                    {isLastStep ? "Preview" : "Next"}
                    <FiArrowRightCircle className="" />
                  </button>
                )}
                {loading && step < 37 && (
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
      <ToastContainer />
    </div>
  );
};

export default GetQuote;
