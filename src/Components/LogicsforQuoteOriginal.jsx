import React, { useEffect, useState } from "react";

const LogicsforQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [step, setStep] = useState(0);
  const [fieldSets, setFieldSets] = useState([
    {
      id: Date.now(),
      equipmentName: "",
      capacity: "",
      operation: "",
      equipments: "",
    },
  ]);

  const [formData, setFormData] = useState({
    customerType: "",
    name: "",
   
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
   
    typeofRoof: "",
    typeofOrganization: "",
    load: [],
    phone: "",
    email: "",
    length: "",
    breadth: "",
    sft: "",
    connectionType: "",
    subsidy: "",
    sanctionLoad: "",
    consumption: "",
    loadName: "",
    operation: "",
    capacity: "",
    equipmentName: "",
    equipments: "",
    electricityConnectivity: false,
    roofLength: "",
    roofBreadth: "",
    file: null,
    floorNumber: "",
    roofLayout: null,
    video: null,
    image: null,
    gstCertificate: null,
    identityProof: null,
    electricityBill: null,
    location: "",
  });

  const handleBack = () => {
    alert(step)
    if (step === 0) {
      return; // Do nothing if already at step 0
    }
    if (step ===11){
      setStep(0);
      return;
    }

    // Handle back navigation from Battery Backup screens
    if (step === 5 || step === 8) {
      setStep(4); // Go back to the Battery Backup toggle screen
    } else if (step === 6 || step === 9) {
      setStep(5); // Go back one step from Type of Roof to Battery Backup step (5 or 8)
    } else if (step === 7 || step === 10) {
      setStep(6); // Go back one step from Attachments to Type of Roof step (6 or 9)
    } else if (step === 19 || step === 21) {
      setStep(18); // Go back to Roof Rights toggle from Roof Rights Yes/No steps
    } else if (step === 18 || step === 20) {
      setStep(17); // Go back to Roof Rights toggle
    } else if (step === 17) {
      setStep(16); // Go back to the step before Roof Rights
    } else if (step === 31 || step === 34) {
      setStep(30); // Go back to the Electricity Connectivity toggle screen
    } else if (step === 32 || step === 35) {
      setStep(31); // Go back one step from TotalAreaRoof to Electricity Connectivity screen (31 or 34)
    } else if (step === 33 || step === 36) {
      setStep(32); // Go back one step from Attachments to TotalAreaRoof screen (32 or 35)
    } else {
      // For all other steps, simply move back one step
      setStep((prevStep) => prevStep - 1);
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
      case 11:
        return (
          formData.name.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.email.trim() !== ""
        );
      case 2:
      case 12:
        return (
          formData.houseNumber.trim() !== "" &&
          formData.street.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.pinCode.trim() !== "" &&
          formData.state.trim() !== ""
        );

      case 3:
        return formData.typeofOrganization !== ""
        ;

      case 4:
      case 15:
      case 22:
        return (
          formData.load.length>0 && formData.consumption.trim() !== ""
        );
      case 5:
      case 8:
        return (
          (formData.typeofRoof) &&
          formData.length.trim() !== "" &&
          formData.breadth.trim() !== "" &&
          formData.sft.trim() !== ""
        );
      case 6:
      case 9:
        return (
          formData.roofLayout ||
          formData.video ||
          formData.image ||
          formData.electricityBill ||
          formData.gstCertificate ||
          formData.identityProof
        );
      case 18:
      case 20:
      case 25:
      case 27:
      case 32:
      case 35:
        return (
          formData.roofLayout ||
          formData.video ||
          formData.image ||
          formData.electricityBill ||
          formData.gstCertificate ||
          formData.identityProof
        );
      case 7:
      case 10:
      case 19:
      case 21:
      case 26:
      case 28:
      case 33:
      case 36:
        return (
          formData.capacity.trim() !== "" && formData.location.trim() !== ""
        );

      case 16:
      case 23:
      case 31:
      case 34:
        return (
          formData.length &&
          formData.length !== "" &&
          formData.breadth &&
          formData.breadth !== "" &&
          formData.sft &&
          formData.sft !== "" &&
          formData.file
        );
      case 17:
      case 24:
        return formData.floorNumber !== "";
      case 29:
        return formData?.load?.every(
          (fieldSet) =>
            (fieldSet.equipmentName?.trim() || "") !== "" &&
            (fieldSet.capacity?.trim() || "") !== "" &&
            (fieldSet.operation?.trim() || "") !== "" &&
            (fieldSet.equipments?.trim() || "") !== ""
        );

      default:
        return true;
    }
  };

  const handleNext = ({
    roofRights,
    electricityConnectivity,
    isOption,
    isEmpanelled,
  }) => {
    if (validateStep()) {
      setStep((prevStep) => {
        if (prevStep === 4) {
          return isEmpanelled ? 5 : 8;
        }

        if (prevStep === 17) {
          // Handle transition based on `roofRights`
          return roofRights ? 18 : 20;
        }

        if (prevStep === 24) {
          // Handle transition based on `isOption`
          return isOption ? 25 : 27;
        }

        if (prevStep === 30) {
          // Handle transition based on `electricityConnectivity`
          return electricityConnectivity ? 31 : 34;
        }

        // For other steps, just move to the next step
        return prevStep + 1;
      });
    }
  };
useEffect(()=>{
alert(step)
},[step])
  const handleOrganizationTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofOrganization: type,
    }));
  };
  const handleRoofTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofRoof: type,
      
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const changeHandle = (e, fileType) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fileType]: file,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };
  const handlePeakLoadChange = (updatedFieldSets) => {
    setFormData((prevState) => ({
      ...prevState,
      load: updatedFieldSets,
    }));
  };
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // Update state to show the "Thank You" page
  };

  const isLastStep = [7, 10, 19, 21, 26, 28, 33, 36].includes(step);

  return {
    step,
    formData,
    handleBack,
    handleNext,
    handleChange,
    changeHandle,
    handleSubmit,
    validateStep, // Make sure validateStep is included here
    isLastStep,
    setFormData,
    handleFileChange,
    handleOrganizationTypeChange,
    setStep,
    handleRoofTypeChange,
    isSubmitted,
    handlePeakLoadChange,
  };
};

export default LogicsforQuote;
