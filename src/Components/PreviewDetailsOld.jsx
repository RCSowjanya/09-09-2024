// PreviewDetails.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const PreviewDetails = ({ formData, handleSubmit }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-md m-4">
      <h2 className="text-center font-bold text-lg mb-4">
        Preview Your Details
      </h2>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Personal Information</h3>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Mobile Number:</strong> {formData.mobileNumber}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Connection Details</h3>
        <p>
          <strong>Connection Type:</strong> {formData.connectionType}
        </p>
        <p>
          <strong>Need Subsidy?</strong> {formData.needSubsidy ? "Yes" : "No"}
        </p>
        <p>
          <strong>Current Sanction Load:</strong> {formData.sanctionLoad}
        </p>
        <p>
          <strong>Consumption Over Last Month:</strong>{" "}
          {formData.consumptionLastMonth}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Roof Details</h3>
        <p>
          <strong>Length:</strong> {formData.roofLength}
        </p>
        <p>
          <strong>Breadth:</strong> {formData.roofBreadth}
        </p>
        <p>
          <strong>Square Feet:</strong> {formData.roofSqft}
        </p>
        <p>
          <strong>Roof Layout:</strong> {formData.roofLayout}
        </p>
        <p>
          <strong>Floor Number:</strong> {formData.floorNumber}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-blue-600">Uploads</h3>
        <p>
          <strong>Video Upload:</strong> {formData.videoUpload}
        </p>
        <p>
          <strong>Image Upload:</strong> {formData.imageUpload}
        </p>
        <p>
          <strong>Electricity Bill:</strong> {formData.electricityBill}
        </p>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div
          className={`flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-md cursor-pointer ${
            formData.isChecked ? "bg-green-500" : "bg-white"
          }`}
        >
          {formData.isChecked && <FaCheck className="text-white" />}
        </div>
        <label className="text-gray-400 text-sm">
          By checking this, you accept the Terms & Conditions with Data Privacy.
        </label>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PreviewDetails;
