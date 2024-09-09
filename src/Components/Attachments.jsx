import React, { useState } from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";

const Attachments = ({ formData, changeHandle, errors }) => {
  const [imageFiles, setImageFiles] = useState(formData.image || []);
  const [electricityBillFiles, setElectricityBillFiles] = useState(
    formData.electricityBill || []
  );

  const handleFileChange = (event, type) => {
    const files = Array.from(event.target.files);
    if (type === "image") {
      if (files.length + imageFiles.length > 5) {
        alert("You can only upload up to 5 images.");
        return;
      }
      setImageFiles([...imageFiles, ...files]);
      changeHandle(event, "image");
    } else if (type === "electricityBill") {
      if (files.length + electricityBillFiles.length > 3) {
        alert("You can only upload up to 3 electricity bills.");
        return;
      }
      setElectricityBillFiles([...electricityBillFiles, ...files]);
      changeHandle(event, "electricityBill");
    }
  };

  // const handleRemoveFile = (index, type) => {
  //   if (type === "image") {
  //     const newFiles = imageFiles.filter((_, i) => i !== index);
  //     setImageFiles(newFiles);
  //     changeHandle({ target: { name: "image", value: newFiles } }, "image");
  //   } else if (type === "electricityBill") {
  //     const newFiles = electricityBillFiles.filter((_, i) => i !== index);
  //     setElectricityBillFiles(newFiles);
  //     changeHandle(
  //       { target: { name: "electricityBill", value: newFiles } },
  //       "electricityBill"
  //     );
  //   }
  // };

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>

      {/* Video Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center  min-[1100px]:border-r  min-[1100px]:border-r-gray-500 mb-4  min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Video Upload (Only .mp4, .flv are supported)
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload only .mp4, .flv file format, Max file size should be
              200MB
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="video-upload"
            accept=".mp4,.flv"
            onChange={(e) => changeHandle(e, "video")}
            className="block text-sm text-[#757575] ml-0  min-[1100px]:ml-4 w-full  min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.video && (
            <div className="mt-4 flex justify-center">
              <video
                src={URL.createObjectURL(formData.video)}
                className="w-10 h-10 object-cover rounded-md shadow-md"
                controls
              />
            </div>
          )}
        </div>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col mb-6  min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col  items-center  min-[1100px]:border-r  min-[1100px]:border-r-gray-500 mb-4  min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Upload Site Images (Only .png, .jpg & .jpeg are supported)
            </label>
            <p className="text-[12px] mb-2 mt-5 text-center">
              Please upload in PNG, JPEG, JPG format, Max file size should be
              200MB
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image-upload"
            accept=".png,.jpg,.jpeg"
            multiple
            onChange={(e) => handleFileChange(e, "image")}
            className="block text-sm text-[#757575] ml-0  min-[1100px]:ml-4 w-full  min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {imageFiles.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center">
              {imageFiles.map((file, index) => (
                <div key={index} className="relative m-2">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Image Preview ${index + 1}`}
                    className="w-10 h-10 object-cover rounded-md shadow-md"
                  />
                  {/* <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => handleRemoveFile(index, "image")}
                  >
                    &times;
                  </button> */}
                </div>
              ))}
            </div>
          )}
          {errors.image && (
            <p className="text-red-500 text-sm mt-1 pl-4">{errors.image}</p>
          )}
        </div>
      </div>

      {/* Electricity Bill Upload */}
      <div className="flex flex-col min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4  min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center  min-[1100px]:border-r sm:border-r-gray-500 mb-4  min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Electricity Bill (Only .png, .jpg, .jpeg & .pdf are supported)
            </label>
            <p className="text-[12px] my-2 text-center mt-5">
              Please upload in PNG, JPEG, JPG, PDF format, Max file size should
              be 200MB
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="electricityBill-upload"
            accept=".png,.jpg,.jpeg,.pdf"
            multiple
            onChange={(e) => handleFileChange(e, "electricityBill")}
            className="block text-sm text-[#757575] ml-0  min-[1100px]:ml-4 w-full  min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {electricityBillFiles.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center">
              {electricityBillFiles.map((file, index) => (
                <div key={index} className="relative m-2">
                  {file.type === "application/pdf" ? (
                    <FaFilePdf size={48} className="text-red-500" />
                  ) : (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Electricity Bill Preview ${index + 1}`}
                      className="w-10 h-10 object-cover rounded-md shadow-md"
                    />
                  )}
                  {/* <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => handleRemoveFile(index, "electricityBill")}
                  >
                    &times;
                  </button> */}
                </div>
              ))}
            </div>
          )}
          {errors.electricityBill && (
            <p className="text-red-500 text-sm mt-1 pl-4">
              {errors.electricityBill}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attachments;
