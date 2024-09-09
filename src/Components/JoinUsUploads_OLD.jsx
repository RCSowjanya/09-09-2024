import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { GrCloudUpload } from "react-icons/gr";
import { Link } from "react-router-dom";

const JoinUsUploads = () => {
  const [gstCertificate, setGstCertificate] = useState(null);
  const [pan, setPan] = useState(null);
  const [tan, setTan] = useState(null);
  const [empanelmentCertificate, setEmpanelmentCertificate] = useState(null);
  const [referenceSitePictures, setReferenceSitePictures] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);

  const handleFileUpload = (event, setter) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setter(file);
    } else {
      alert("Max file size should be 2MB.");
    }
  };

  const handleFilesUpload = (event, setter) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024);
    setter((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const renderUploadedFile = (file) => (
    <div className="mt-4 text-center">
      <p className="text-[14px] font-semibold text-[#004A9C]">Uploaded File:</p>
      <p className="text-[12px] text-[#757575]">{file.name}</p>
    </div>
  );

  const renderUploadedFiles = (files) => (
    <div className="mt-4 text-center">
      <p className="text-[10px] font-semibold text-[#004A9C]">
        Uploaded Files:
      </p>
      <ul className="list-disc list-inside text-[9px] text-[#757575]">
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOpenTermsDialog = () => {
    setShowTermsDialog(true);
  };

  const handleOpenPrivacyDialog = () => {
    setShowPrivacyDialog(true);
  };

  const isSubmitEnabled = isChecked;

  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg max-w-3xl h-full mx-auto py-[2%]">
          <Link to="/JoinusForm">
            <button className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]">
              <FiArrowLeftCircle className="mt-1" />
              Back
            </button>
          </Link>
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-4">
            {/*---GST Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500 pr-6">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="gst-certificate"
                    className="block text-[14px] font-[400] text-gray-600 text-center"
                  >
                    GST Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="gst-certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setGstCertificate)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {gstCertificate && renderUploadedFile(gstCertificate)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB.<span className="text-[#004A9C]">*</span>
            </p>
            {/*---PAN----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="pan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    PAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="pan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setPan)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {pan && renderUploadedFile(pan)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---TAN-----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="tan"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    TAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="tan"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, setTan)}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {tan && renderUploadedFile(tan)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---Empanelment Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="certificate"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Empanelment Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="certificate"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) =>
                    handleFileUpload(e, setEmpanelmentCertificate)
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {empanelmentCertificate &&
                  renderUploadedFile(empanelmentCertificate)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---Reference Site Pictures----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="reference-pictures"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Reference Site Pictures
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="reference-pictures"
                  accept=".png, .jpeg, .jpg"
                  multiple
                  onChange={(e) =>
                    handleFilesUpload(e, setReferenceSitePictures)
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {referenceSitePictures.length > 0 &&
                  renderUploadedFiles(referenceSitePictures)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {/*---Checkbox and Submit Button----*/}
            <div className="flex justify-center items-center py-4">
              <input
                type="checkbox"
                id="consent"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`w-5 h-5 mr-3 border-2 rounded-md ${
                  isChecked
                    ? "bg-[#0BB68D] accent-[#0BB68D] text-white"
                    : "bg-white"
                } border-[#CECECE] cursor-pointer`}
              />

              <label htmlFor="consent" className="text-[#667085]">
                I have reviewed the{" "}
                <button
                  type="button"
                  onClick={handleOpenTermsDialog}
                  className=""
                >
                  <span className="text-[#0BB68D]">Terms & Conditions</span>
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={handleOpenPrivacyDialog}
                  className="text-[#0BB68D]"
                >
                  <span className="text-[#0BB68D]">Privacy Policy</span>
                </button>
                .
              </label>
            </div>
            <div className="flex justify-center items-center py-2">
              <button
                type="submit"
                disabled={!isSubmitEnabled}
                className={`py-2 px-4 bg-[#0BB68D] text-white rounded-md ${
                  !isSubmitEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*---Terms & Conditions Dialog---*/}
      {showTermsDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md">
            <h3 className="text-xl font-bold mb-2">Terms & Conditions</h3>
            <p className="mb-4">CUSP Terms and conditions</p>
            <button
              onClick={() => setShowTermsDialog(false)}
              className="bg-[#0BB68D] text-white px-6 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/*---Privacy Policy Dialog---*/}
      {showPrivacyDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md">
            <h3 className="text-xl font-bold mb-2">Privacy Policy</h3>
            <p className="mb-4">CUSP Privacy policies</p>
            <button
              onClick={() => setShowPrivacyDialog(false)}
              className="bg-[#0BB68D] text-white px-6 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUsUploads;
