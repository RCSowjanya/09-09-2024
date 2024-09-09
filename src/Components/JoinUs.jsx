import React, { useState } from "react";
import JoinUsBasicInfo from "./JoinUsBasicInfo";
import JoinUsProjectDetails from "./JoinUsProjectDetails";
import JoinUsUploads from "./JoinUsUploads";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JoinUs = () => {
  console.log(process.env.REACT_APP_API_URL);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const saveData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  // const saveFiles = (fieldName, file) => {
  //   setFiles((prevFiles) => ({ ...prevFiles, [fieldName]: file }));
  // };
  const saveFiles = (fieldName, file) => {
    setFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };

      if (Array.isArray(file)) {
        updatedFiles[fieldName] = [...(updatedFiles[fieldName] || []), ...file];
      } else {
        updatedFiles[fieldName] = file;
      }

      return updatedFiles;
    });
  };
  const handleSubmit = async () => {
    try {
      // Create a FormData object to handle multipart form data
      setIssubmit(true);
      const formDataToSubmit = new FormData();
      console.log(formData);
      // Append form data (text fields, etc.)
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });

      // Append files
      Object.keys(files).forEach((key) => {
        if (Array.isArray(files[key])) {
          files[key].forEach((file, index) => {
            formDataToSubmit.append(`${key}`, file);
          });
        } else {
          formDataToSubmit.append(key, files[key]);
        }
      });

      for (let pair of formDataToSubmit.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      // Send the form data to the API
      const response = await fetch(
        process.env.REACT_APP_API_URL + "company/postCompanydetails",
        {
          method: "POST",
          body: formDataToSubmit, // This automatically sets the Content-Type to multipart/form-data
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response: ", result);

      // Show success toast message
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      // Handle success (e.g., redirect, show success message, etc.)
    } catch (error) {
      console.error("Error during form submission: ", error);

      // Show error toast message
      toast.error("Failed to submit the form. Please try again.");
      setIssubmit(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <JoinUsBasicInfo
            onNext={() => setStep(2)}
            saveData={saveData}
            formData={formData}
          />
        );
      case 2:
        return (
          <JoinUsProjectDetails
            onNext={() => setStep(3)}
            onPrevious={() => setStep(1)}
            saveData={saveData}
            formData={formData}
          />
        );
      case 3:
        return (
          <JoinUsUploads
            onPrevious={() => setStep(2)}
            onSubmit={handleSubmit}
            saveFiles={saveFiles}
            saveData={saveData}
            issubmit={issubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      {renderStep()}
      <ToastContainer />
    </div>
  );
};

export default JoinUs;
