import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
const useLogicsforQuote = () => {
  const MAX_VIDEO_SIZE = 200 * 1024 * 1024; // 200 MB in bytes
  const MAX_IMAGE_SIZE_MB = 10;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [touched, setTouched] = useState(false); // New state variable for tracking submission attempts

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
    district: "",
    pinCode: "",
    typeofRoof: "",
    typeofOrganization: "",
    load: [],
    phone: "",
    email: "",
    lengthl: "",
    breadth: "",
    sft: "",
    connectionType: "",
    currentSanctionLoad: "",
    consumption: "",
    floorNumber: "",
    roofLayout: null,
    video: null,
    image: null,
    gstCertificate: null,
    identityProof: null,
    electricityBill: null,
    capacity: "",
    location: "",
    roofRights: false,
    electricityConnectivity: false,
    batteryBackup: false,
    isEmpanelled: false,
    needSubsity: false,
  });
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      name: "",
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      district: "",
      pinCode: "",
      typeofRoof: "",
      typeofOrganization: "",
      load: [],
      phone: "",
      email: "",
      lengthl: "",
      breadth: "",
      sft: "",
      connectionType: "",
      currentSanctionLoad: "",
      consumption: "",
      floorNumber: "",
      roofLayout: null,
      video: null,
      image: null,
      gstCertificate: null,
      identityProof: null,
      electricityBill: null,
      capacity: "",
      location: "",
      roofRights: false,
      electricityConnectivity: false,
      batteryBackup: false,
      isEmpanelled: false,
      needSubsity: false,
    }));
  }, [formData.customerType]);
  // Function to clear fields based on conditions
  const clearFieldsOnOptionChange = (option) => {
    if (option === "Ongrid") {
      // Clear offgrid specific fields when selecting ongrid
      setFormData((prevData) => ({
        ...prevData,
        load: [], // Clear peak load if related to offgrid
        batteryBackup: false, // Reset battery backup if applicable
        // Reset other offgrid-specific fields
      }));
    } else if (option === "Offgrid") {
      // Clear ongrid specific fields when selecting offgrid
      setFormData((prevData) => ({
        ...prevData,
        currentSanctionLoad: "", // Clear sanctioned load if related to ongrid
        consumption: "", // Reset consumption field if applicable
        // Reset other ongrid-specific fields
      }));
    }
  };

  // Monitor changes in connectionType (Ongrid vs Offgrid)
  useEffect(() => {
    if (formData.connectionType) {
      clearFieldsOnOptionChange(formData.connectionType);
    }
  }, [formData.connectionType]);

  // Monitor changes in roofRights
  useEffect(() => {
    if (!formData.roofRights) {
      setFormData((prevData) => ({
        ...prevData,
        roofLayout: null, // Clear roof layout if roof rights are switched off
      }));
    }
  }, [formData.roofRights]);

  // Monitor changes in electricityConnectivity
  useEffect(() => {
    if (!formData.electricityConnectivity) {
      setFormData((prevData) => ({
        ...prevData,
        electricityBill: null, // Clear electricity bill if electricity connectivity is not available
      }));
    }
  }, [formData.electricityConnectivity]);

  // Monitor changes in needSubsidy
  useEffect(() => {
    if (formData.needSubsidy === "No") {
      setFormData((prevData) => ({
        ...prevData,
        currentSanctionLoad: "", // Reset subsidy-related fields
        // Clear other subsidy-specific fields
      }));
    }
  }, [formData.needSubsidy]);

  // Monitor changes in isEmpanelled
  useEffect(() => {
    if (!formData.isEmpanelled) {
      setFormData((prevData) => ({
        ...prevData,
        roofRights: false, // Reset roof rights if not empanelled
        // Clear other empanelled-specific fields
      }));
    }
  }, [formData.isEmpanelled]);

  // Monitor changes in isOption (Battery Backup)
  useEffect(() => {
    if (!formData.batteryBackup) {
      setFormData((prevData) => ({
        ...prevData,
        batteryCapacity: "", // Clear battery-related fields if battery backup is not needed
      }));
    }
  }, [formData.batteryBackup]);

  // Define Yup schemas for each step
  const stepSchemas = {
    0: Yup.object().shape({
      customerType: Yup.string().trim().required("Customer Type is required"),
    }),
    1: Yup.object().shape({
      name: Yup.string().trim().required("Name is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    2: Yup.object().shape({
      houseNumber: Yup.string().trim().required("House Number is required"),
      street: Yup.string().trim().required("Street is required"),
      city: Yup.string().trim().required("City is required"),
      state: Yup.string().trim().required("State is required"),
      pinCode: Yup.string()
        .matches(/^\d{6}$/, "Pin Code must be 6 digits")
        .required("Pin Code is required"),
      district: Yup.string().trim().required("District is required"),
    }),
    3: Yup.object().shape({
      typeofOrganization: Yup.string()
        .trim()
        .required("Type of Organization is required"),
    }),
    4: Yup.object().shape({
      currentSanctionLoad: Yup.string().required(
        "Current Sanction Load is required"
      ),
      // .nullable(),
      consumption: Yup.string().trim().required("Consumption is required"),
    }),
    5: Yup.object().shape({
      typeofRoof: Yup.string().trim().required("Type of Roof is required"),
      lengthl: Yup.string().trim().required("Length is required"),
      breadth: Yup.string().trim().required("Breadth is required"),
      sft: Yup.string().trim().required("Square Footage is required"),
    }),
    6: Yup.object().shape({
      roofLayout: Yup.mixed()
        .required("Roof layout is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_VIDEO_SIZE}MB`,
          (value) => {
            if (value) {
              return value && value.size <= MAX_VIDEO_SIZE;
            } else {
              return true;
            }
          }
        ),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      gstCertificate: Yup.mixed()
        .required("GST Certificate is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      identityProof: Yup.mixed()
        .required("Identity Proof is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),
    }),
    7: Yup.object().shape({
      capacity: Yup.string().trim().required("Capacity is required"),
      location: Yup.string()
        .trim()
        .required("Select Auto Location is required"),
    }),
    8: Yup.object().shape({
      typeofRoof: Yup.string().trim().required("Type of Roof is required"),
      lengthl: Yup.string().trim().required("Length is required"),
      breadth: Yup.string().trim().required("Breadth is required"),
      sft: Yup.string().trim().required("Square Footage is required"),
    }),
    9: Yup.object().shape({
      roofLayout: Yup.mixed()
        .required("Roof layout is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_VIDEO_SIZE}MB`,
          (value) => {
            if (value) {
              return value && value.size <= MAX_VIDEO_SIZE;
            } else {
              return true;
            }
          }
        ),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      gstCertificate: Yup.mixed()
        .required("GST Certificate is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),

      identityProof: Yup.mixed()
        .required("Identity Proof is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test(
          "fileSize",
          `File size must be less than ${MAX_IMAGE_SIZE_MB}MB`,
          (value) => {
            return value && value.size <= MAX_IMAGE_SIZE_MB * 1024 * 1024;
          }
        ),
    }),
    10: Yup.object().shape({
      capacity: Yup.string().trim().required("Capacity is required"),
      location: Yup.string().trim().required("Location is required"),
    }),
    11: Yup.object().shape({
      name: Yup.string().trim().required("Name is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    12: Yup.object().shape({
      houseNumber: Yup.string().trim().required("House Number is Required"),
      street: Yup.string().trim().required("Street is required"),
      city: Yup.string().trim().required("City is required"),
      pinCode: Yup.string()
        .matches(/^\d{6}$/, "Pin Code must be 6 digits")
        .required("Pin Code is required"),
      state: Yup.string().trim().required("State is required"),
      district: Yup.string().trim().required("District is required"),
    }),
    13: Yup.object().shape({
      connectionType: Yup.string().required("Connection Type is Required"),
    }),
    14: Yup.object().shape({
      needSubsity: Yup.string().required("Subsidy is Required"),
    }),
    15: Yup.object().shape({
      currentSanctionLoad: Yup.string()
        .required("Current sanction Load is Required")
        .nullable(),
      consumption: Yup.number().required(
        "Consumption Over Last Month is Required"
      ),
    }),
    16: Yup.object().shape({
      lengthl: Yup.number()
        .required("Length is required")
        .positive("Length must be a positive number")
        .typeError("Length must be a number"),

      breadth: Yup.number()
        .required("Breadth is required")
        .positive("Breadth must be a positive number")
        .typeError("Breadth must be a number"),

      sft: Yup.number()
        .required("Total area (Sft) is required")
        .positive("Total area (Sft) must be a positive number")
        .typeError("Total area (Sft) must be a number"),

      roofLayout: Yup.mixed()
        .required("Roof layout file is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    17: Yup.object().shape({
      floorNumber: Yup.number()
        .required("Floor number is required")
        .min(0, "Floor number cannot be negative")
        .typeError("Floor number must be a valid number"),
    }),
    18: Yup.object().shape({
      video: Yup.mixed()
        .nullable()
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    19: Yup.object().shape({
      capacity: Yup.string().required("Capacity in Kilo Watt is Required"),
      location: Yup.string().required("Geo Cordinates are Required"),
    }),
    20: Yup.object().shape({
      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    21: Yup.object().shape({
      capacity: Yup.string().required("Capacity in Kilo Watt is Required"),
      location: Yup.string().required("Geo Cordinates are Required"),
    }),
    22: Yup.object().shape({
      currentSanctionLoad: Yup.string()
        .required("Current sanction Load is Required")
        .nullable(),
      consumption: Yup.number().required(
        "Consumption Over Last Month is Required"
      ),
    }),
    23: Yup.object().shape({
      lengthl: Yup.number()
        .required("Length is required")
        .positive("Length must be a positive number")
        .typeError("Length must be a number"),

      breadth: Yup.number()
        .required("Breadth is required")
        .positive("Breadth must be a positive number")
        .typeError("Breadth must be a number"),

      sft: Yup.number()
        .required("Total area (Sft) is required")
        .positive("Total area (Sft) must be a positive number")
        .typeError("Total area (Sft) must be a number"),

      roofLayout: Yup.mixed()
        .required("Roof layout file is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    24: Yup.object().shape({
      floorNumber: Yup.number()
        .required("Floor number is required")
        .min(0, "Floor number cannot be negative")
        .typeError("Floor number must be a valid number"),
    }),
    25: Yup.object().shape({
      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    26: Yup.object().shape({
      capacity: Yup.string().required("Capacity in Kilo Watt is Required"),
      location: Yup.string().required("Geo Cordinates are Required"),
    }),
    27: Yup.object().shape({
      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    28: Yup.object().shape({
      capacity: Yup.string().required("Capacity in Kilo Watt is Required"),
      location: Yup.string().required("Geo Cordinates are Required"),
    }),
    29: Yup.object().shape({
      load: Yup.array()
        .of(
          Yup.object().shape({
            equipmentName: Yup.string()
              .trim()
              .required("Appliance Name is required"),
            capacity: Yup.string().trim().required("Capacity is required"),
            operation: Yup.string().trim().required("Operation is required"),
            equipments: Yup.string().trim().required("Appliances are required"),
          })
        )
        .min(1, "At least one load entry is required"),
    }),
    30: Yup.object().shape({
      electricityConnectivity: Yup.string().required(
        "Electricity Connectivity is required"
      ),
    }),
    31: Yup.object().shape({
      lengthl: Yup.number()
        .required("Length is required")
        .positive("Length must be a positive number")
        .typeError("Length must be a number"),

      breadth: Yup.number()
        .required("Breadth is required")
        .positive("Breadth must be a positive number")
        .typeError("Breadth must be a number"),

      sft: Yup.number()
        .required("Total area (Sft) is required")
        .positive("Total area (Sft) must be a positive number")
        .typeError("Total area (Sft) must be a number"),

      roofLayout: Yup.mixed()
        .required("Roof layout file is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    32: Yup.object().shape({
      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    33: Yup.object().shape({
      capacity: Yup.string().trim().required("Capacity is required"),
      location: Yup.string().trim().required("Location is required"),
    }),
    34: Yup.object().shape({
      lengthl: Yup.number()
        .required("Length is required")
        .positive("Length must be a positive number")
        .typeError("Length must be a number"),

      breadth: Yup.number()
        .required("Breadth is required")
        .positive("Breadth must be a positive number")
        .typeError("Breadth must be a number"),

      sft: Yup.number()
        .required("Total area (Sft) is required")
        .positive("Total area (Sft) must be a positive number")
        .typeError("Total area (Sft) must be a number"),

      roofLayout: Yup.mixed()
        .required("Roof layout file is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    35: Yup.object().shape({
      video: Yup.mixed()
        .nullable()

        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["video/mp4", "video/mov", "video/avi"];
            return allowedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "Video size must be less than 200 MB", (value) => {
          if (value) {
            return value && value.size <= MAX_VIDEO_SIZE;
          } else {
            return true;
          }
        }),

      image: Yup.mixed()
        .required("Image is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),

      electricityBill: Yup.mixed()
        .required("Electricity bill is required")
        .test("fileFormat", "Unsupported file format", (value) => {
          if (value) {
            const allowedFormats = [
              "application/pdf",
              "image/jpeg",
              "image/png",
            ];
            return allowedFormats.includes(value.type);
          }
          return true;
        }),
    }),
    36: Yup.object().shape({
      capacity: Yup.string().trim().required("Capacity is required"),
      location: Yup.string().trim().required("Location is required"),
    }),
    // Add other step-specific schemas as needed
  };

  const validateStep = () => {
    setErrors([]); // Clear existing errors
    const currentSchema = stepSchemas[step];
    if (currentSchema) {
      try {
        currentSchema.validateSync(formData, { abortEarly: false });

        return true; // Validation passed
      } catch (error) {
        const errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        console.log(errors);
        setErrors(errors); // Set validation errors keyed by field name

        return false; // Validation failed
      }
    }
    return true; // If no schema exists for the current step, consider it valid
  };

  const handleBack = ({
    roofRights = false,
    electricityConnectivity = false,
    isOption = false,
    isEmpanelled = false,
  }) => {
    setStep((prevStep) => {
      let previousStep = prevStep - 1;

      if (prevStep === 5 || prevStep === 8) {
        previousStep = 4;
      }
      if (prevStep === 18 || prevStep === 20) {
        previousStep = 17;
      }
      if (prevStep === 25 || prevStep === 27) {
        previousStep = 24;
      }
      if (prevStep === 31 || prevStep === 34) {
        previousStep = 30;
      }
      if (prevStep === 11) {
        previousStep = 0;
      }
      if (prevStep === 29 && formData.connectionType === "Offgrid") {
        previousStep = 13;
      }
      return previousStep >= 0 ? previousStep : 0;
    });
    setTouched(false);
  };

  const handleNext = ({
    roofRights = false,
    electricityConnectivity = false,
    isOption = false,
    isEmpanelled = false,
  }) => {
    setTouched(true); // Mark that the user attempted to proceed
    if (validateStep()) {
      setStep((prevStep) => {
        let nextStep = prevStep + 1;
        if (prevStep === 0) {
          if (formData.customerType === "Residential") {
            setErrors([]);
            nextStep = 11;
          } else {
            setErrors([]);
            nextStep = 1;
          }
        }
        if (prevStep === 13 && formData.connectionType === "Offgrid") {
          nextStep = 29;
        }
        if (prevStep === 4) {
          nextStep = isEmpanelled ? 5 : 8;
        }
        if (prevStep === 17) {
          nextStep = roofRights ? 18 : 20;
        }
        if (prevStep === 24) {
          nextStep = isOption ? 25 : 27;
        }
        if (prevStep === 30) {
          nextStep = electricityConnectivity ? 31 : 34;
        }
        // Store the next step in session storage
        return nextStep;
      });
    }
  };

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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.includes(".")) {
  //     const [parent, child] = name.split(".");
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [parent]: {
  //         ...prevData[parent],
  //         [child]: value,
  //       },
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle dot notation for nested form fields
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
      // Ensure empty string remains as an empty string and not converted to zero
      setFormData((prevData) => ({
        ...prevData,
        [name]: value === "" ? "" : value,
      }));
    }
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sft: isNaN(formData.lengthl * formData.breadth)
        ? 0
        : formData.lengthl * formData.breadth,
    }));
  }, [formData.lengthl, formData.breadth]);
  const changeHandle = (e, fileType) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fileType]: file,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file); // Debugging line
    setFormData((prevData) => ({
      ...prevData,
      roofLayout: file || null,
    }));
  };

  const handlePeakLoadChange = (updatedFieldSets) => {
    setFormData((prevState) => ({
      ...prevState,
      load: updatedFieldSets,
    }));
  };
  // const handlePeakLoadChange = (updatedFieldSets) => {
  //   setFormData((prevState) => {
  //     // If there is no load field, initialize it as an empty array
  //     const existingLoad = prevState.load || [];

  //     // Iterate over the updated field sets to either update existing entries or add new ones
  //     const updatedLoad = updatedFieldSets.map((updatedFieldSet) => {
  //       const existingFieldSet = existingLoad.find(
  //         (loadItem) => loadItem.id === updatedFieldSet.id
  //       );

  //       // If the field set exists, update it, otherwise keep the new one
  //       return existingFieldSet
  //         ? { ...existingFieldSet, ...updatedFieldSet }
  //         : updatedFieldSet;
  //     });

  //     return {
  //       ...prevState,
  //       load: updatedLoad,
  //     };
  //   });
  // };

  const handleSubmit = async () => {
    if (validateStep()) {
      console.log("Form submitted:", formData);
      setIsloading(true);
      try {
        const formDataToSubmit = new FormData();

        // Create the payload by mapping the form data and files
        const payload = {
          name: formData.name,
          house_number: formData.houseNumber,
          street_name: formData.street,
          city: formData.city,
          pin_code: formData.pinCode,
          state: formData.state,
          mobile: formData.phone,
          email: formData.email,
          type: formData.customerType,
          connection_type: formData.connectionType,
          org_type: formData.typeofOrganization
            ? formData.typeofOrganization
            : "NA",
          load: JSON.stringify(formData.load), // Stringify array or object data
          electricity_connectivity:
            formData.electricityConnectivity === "on" ? "Yes" : "No",
          subsidy: formData.needSubsity ? "Yes" : "No",
          battery_backup: formData.batteryBackup ? "Yes" : "No",
          sanctioned_load: parseFloat(formData.currentSanctionLoad) || 0,
          consumption_last_month: parseFloat(formData.consumption) || 0,
          rf_type: formData.typeofRoof || "NA",
          length: parseFloat(formData.lengthl) || 0,
          breadth: parseFloat(formData.breadth) || 0,
          area_sqft: parseFloat(formData.sft) || 0,
          install_floor: parseFloat(formData.floorNumber) || 0,
          rf_rights: formData.roofRights ? "Yes" : "No",
          capacity_install: parseFloat(formData.capacity) || 0,
          latitude: formData.location.split(",")[0],
          longitude: formData.location.split(",")[1],
          district: formData.district,
        };

        // Append all fields in payload to formDataToSubmit
        Object.keys(payload).forEach((key) => {
          if (payload[key] !== undefined && payload[key] !== null) {
            formDataToSubmit.append(key, payload[key]);
          }
        });

        // Append files
        if (formData.electricityBill) {
          formDataToSubmit.append(
            "electricity_upload",
            formData.electricityBill
          );
        }
        if (formData.image) {
          formDataToSubmit.append("images_upload", formData.image);
        }
        if (formData.roofLayout) {
          formDataToSubmit.append("rf_layout_upload_doc", formData.roofLayout);
        }
        if (formData.video) {
          formDataToSubmit.append("video_upload", formData.video);
        }
        if (formData.gstCertificate) {
          formDataToSubmit.append("gst_upload", formData.gstCertificate);
        }
        if (formData.identityProof) {
          formDataToSubmit.append("id_upload", formData.identityProof);
        }

        // Debugging: log the formData contents
        for (let pair of formDataToSubmit.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
        //const url="http://localhost:3100/customer/postCustomerdetails"
        const url =
          process.env.REACT_APP_API_URL + "customer/postCustomerdetails";
        // Send the form data to the API
        const response = await fetch(url, {
          method: "POST",
          body: formDataToSubmit, // This automatically sets the Content-Type to multipart/form-data
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response: ", result);

        // Show success toast message
        toast.success("Quote Request Successful");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error during form submission: ", error);

        // Show error toast message
        toast.error("Failed to submit the Quote. Please try again.");
        setIsSubmitted(false);
      } finally {
        setIsloading(false);
      }
      // Update state to show the "Thank You" page
    }
  };

  const isLastStep = [7, 10, 19, 21, 26, 28, 33, 37].includes(step);

  return {
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
    handleRoofTypeChange,
    isSubmitted,
    handlePeakLoadChange,
    loading,
    setErrors,
  };
};

export default useLogicsforQuote;
