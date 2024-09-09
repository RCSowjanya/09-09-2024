import React, { useState } from "react";
import { FaFilePdf, FaVideo } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";

const AttachmentsSection = ({ formData, changeHandle, errors }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [billPreviews, setBillPreviews] = useState([]);
  const [roofLayoutPreview, setRoofLayoutPreview] = useState(null);
  const [gstPreview, setGstPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [identityProofPreview, setIdentityProofPreview] = useState(null);

  const handleFileChange = (e, fileType, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      changeHandle(e, fileType); // Update formData

      if (file.type.includes("image")) {
        setPreview(URL.createObjectURL(file));
      } else if (file.type.includes("pdf")) {
        setPreview("pdf"); // Set a flag for PDF type
      } else if (file.type.includes("video")) {
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreviews.length <= 5) {
      changeHandle(e, "image"); // Update formData

      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews([...imagePreviews, ...previews]);
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };

  const handleBillChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + billPreviews.length <= 3) {
      changeHandle(e, "electricityBill"); // Update formData

      const previews = files.map((file) => URL.createObjectURL(file));
      setBillPreviews([...billPreviews, ...previews]);
    } else {
      alert("You can upload a maximum of 3 files.");
    }
  };

  // Function to render file info
  const renderFileInfo = (file, maxSizeMB, allowedTypes) => {
    if (!file) return null;

    const fileSizeMB = file.size / 1024 / 1024;
    const fileTypeValid = allowedTypes.includes(file.type);

    if (!fileTypeValid) {
      return (
        <p className="mt-4 text-red-600">
          Invalid file type. Please upload a {allowedTypes.join(", ")} file.
        </p>
      );
    }

    if (fileSizeMB > maxSizeMB) {
      return (
        <p className="mt-4 text-red-600">
          File size exceeds {maxSizeMB}MB. Please upload a smaller file.
        </p>
      );
    }

    return (
      <div className="mt-4">
        <p className="text-gray-700">{file.name}</p>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>

      {/* Roof Layout Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1000px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Roof Layout
            </label>
            <p className="text-[12px] text-center pt-3 my-2">
              Please upload in PNG, JPEG, JPG, Max file size should be 200MB
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          <input
            type="file"
            id="roofLayout-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "roofLayout", setRoofLayoutPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {roofLayoutPreview && (
            <div className="mt-4 flex justify-center">
              {roofLayoutPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={roofLayoutPreview}
                  className="w-10 h-10 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {/* {formData.roofLayout && (
            <div className="mt-2 flex justify-center">
              {renderFileInfo(formData.roofLayout, 200, [
                "image/jpeg",
                "image/png",
                "application/pdf",
              ])}
            </div>
          )} */}
          {errors.roofLayout && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.roofLayout}
            </p>
          )}
        </div>
      </div>

      {/* Video Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Video Upload
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload only .mp4, .avi file formats, Max file size should
              be 200MB
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="video-upload"
            accept="video/mp4, video/avi"
            onChange={(e) => handleFileChange(e, "video", setVideoPreview)}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {videoPreview && (
            <div className="mt-4 flex justify-center">
              <video
                src={videoPreview}
                className="w-16 h-16 object-cover rounded-md shadow-md"
                controls
              />
            </div>
          )}
          {/* {formData.video && (
            <div className="mt-2 flex justify-center">
              {renderFileInfo(formData.video, 200, ["video/mp4", "video/avi"])}
            </div>
          )} */}
        </div>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Upload Site Images
            </label>
            <p className="text-[12px] my-2 text-center">
              You can upload up to 5 images. Max file size should be 2MB each.
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image-upload"
            accept="image/jpeg, image/png"
            multiple
            onChange={handleImageChange}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="w-10 h-10 object-cover rounded-md shadow-md"
              />
            ))}
          </div>

          {errors.image && (
            <p className="text-red-500 text-sm mt-[-0.7rem] pl-4 absolute">
              {errors.image}
            </p>
          )}
        </div>
      </div>
      {/* Electricity Bill Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex  flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Electricity Bill
            </label>
            <p className="text-[12px] my-2 text-center">
              You can upload up to 3 files. Acceptable formats: PNG, JPG, PDF.
              Max file size should be 5MB each.
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="bill-upload"
            accept="image/jpeg, image/png, application/pdf"
            multiple
            onChange={handleBillChange}
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {billPreviews.map((preview, index) =>
              preview.endsWith(".pdf") ? (
                <FaFilePdf key={index} size={48} className="text-red-500" />
              ) : (
                <img
                  key={index}
                  src={preview}
                  alt={`Bill Preview ${index}`}
                  className="w-10 h-10 object-cover rounded-md shadow-md"
                />
              )
            )}
          </div>
          {errors.electricityBill && (
            <p className="text-red-500 text-sm mt-[-0.7rem] pl-4 absolute">
              {errors.electricityBill}
            </p>
          )}
        </div>
      </div>

      {/* GST Certificate Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              GST Certificate
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload in PNG, JPEG, JPG, PDF formats. Max file size should
              be 200MB.
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="gst-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "gstCertificate", setGstPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {gstPreview && (
            <div className="mt-4 flex justify-center">
              {gstPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={gstPreview}
                  alt="GST Certificate Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {/* {formData.gstCertificate && (
            <div className="mt-2 flex justify-center">
              {renderFileInfo(formData.gstCertificate, 200, [
                "image/jpeg",
                "image/png",
                "application/pdf",
              ])}
            </div>
          )} */}
          {errors.gstCertificate && (
            <p className="text-red-500 text-sm mt-1 pb-7 pl-4 absolute">
              {errors.gstCertificate}
            </p>
          )}
        </div>
      </div>

      {/* Identity Proof Upload */}
      <div className="flex flex-col mb-6 min-[1100px]:flex-row items-center border-dashed border-2 border-gray-300 p-4 min-[1100px]:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center min-[1100px]:border-r min-[1100px]:border-r-gray-500 mb-4 min-[1100px]:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Identity Proof
            </label>
            <p className="text-[12px] my-2 text-center">
              Please upload in PNG, JPEG, JPG, PDF formats. Max file size should
              be 200MB.
              <span className="text-[#004A9C]">*</span>.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="identity-proof-upload"
            accept="image/jpeg, image/png, application/pdf"
            onChange={(e) =>
              handleFileChange(e, "identityProof", setIdentityProofPreview)
            }
            className="block text-sm text-[#757575] ml-0 min-[1100px]:ml-4 w-full min-[1100px]:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {identityProofPreview && (
            <div className="mt-4 flex justify-center">
              {identityProofPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={identityProofPreview}
                  alt="Identity Proof Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {/* {formData.identityProof && (
            <div className="mt-2 flex justify-center">
              {renderFileInfo(formData.identityProof, 200, [
                "image/jpeg",
                "image/png",
                "application/pdf",
              ])}
            </div>
          )} */}
          {errors.identityProof && (
            <p className="text-red-500 text-sm mt-1 pl-4  absolute">
              {errors.identityProof}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttachmentsSection;
