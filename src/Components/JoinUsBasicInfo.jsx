import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Helmet } from "react-helmet";
const validationSchema = Yup.object().shape({
  company_name: Yup.string().required("Company Name is required"),
  business_role: Yup.string().required("Business Role is required"),
  type_of_entity: Yup.string().required("Entity Type is required"),
  total_years_in_solar_installation: Yup.number()
    .required("Total Years In Solar Installations is required")
    .typeError("Please enter a valid number"),
  gst_no: Yup.string()
    .required("GST No is required")
    .matches(
      /^([0-9]{2})([A-Z]{5}[0-9]{4}[A-Z]{1})([1-9A-Z]{1})(Z)([0-9A-Z]{1})$/,
      "Please enter a valid GST number"
    ),
  // pan_no: Yup.string()
  //   .required("PAN No is required")
  //   .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number"),
  // tan_no: Yup.string(),
  flat_number: Yup.string()
    .required("Registered Office Address is required")
    .min(4, "Minimum length should be 3"),
  street_name: Yup.string()
    .required("Street is required")
    .min(4, "Minimum length should be 3"),
  city: Yup.string()
    .required("City is required")
    .min(4, "Minimum length should be 3"),
  pin_code: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9][0-9]{5}$/, "Pincode Must be 6 Digits"),
  state: Yup.string()
    .required("State is required")
    .min(4, "Minimum length should be 3"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  // Mobile number validation with regex
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(
      /^[6-9]\d{9}$/,
      "Mobile number must start with 6, 7, 8, or 9 and be exactly 10 digits long"
    ),
});

const JoinUsBasicInfo = ({ onNext, saveData, formData }) => {
  const formik = useFormik({
    initialValues: {
      company_name: formData.company_name || "",
      mobile: formData.mobile || "",
      email: formData.email || "",
      business_role: formData.business_role || "",
      type_of_entity: formData.type_of_entity || "",
      total_years_in_solar_installation:
        formData.total_years_in_solar_installation || "",

      gst_no: formData.gst_no || "",
      // pan_no: formData.pan_no || "",
      // tan_no: formData.tan_no || "",
      flat_number: formData.flat_number || "",
      street_name: formData.street_name || "",
      city: formData.city || "",
      pin_code: formData.pin_code || "",
      state: formData.state || "",
    },
    validationSchema,
    onSubmit: (values) => {
      saveData(values); // Save the form data to the central state
      onNext(); // Proceed to the next step
    },
  });

  return (
    <div>
      <Helmet>
        <title>
          CUSP Solar: Innovative Platform for Solar Installers and End Users
        </title>
        <meta
          name="description"
          content="Join CUSP Solar Partners Get listed as a top solar installer. Reach motivated customers and boost your visibility Grow your business as a trusted installer."
        />
      </Helmet>

      {/* Background Image Section */}
      <div className="w-full h-full">
        <div className="common-bg flex items-center">
          <h2 className="text-3xl max-[600px]:text-xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Partner With Us
          </h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[5%] bg-white shadow-lg max-w-3xl h-full mx-auto py-[2%]">
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Company Name */}
            <div>
              <label
                htmlFor="company_name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company_name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575] mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                value={formik.values.company_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.company_name && formik.errors.company_name && (
                <p className="text-red-500 text-[12px]">
                  {formik.errors.company_name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company_name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Mobile Number <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="mobile"
                type="tel" // Use "tel" for better mobile number input handling
                placeholder="Mobile Number"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575] mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                maxLength="10" // Restricts input to 10 digits
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-[12px]">
                  {formik.errors.mobile}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company_name"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Email <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email ID"
                className="ad mt-1 p-3 text-[16px] block w-full placeholder-[#757575] mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-[12px]">
                  {formik.errors.email}
                </p>
              )}
            </div>
            {/* Business Role and Entity Type */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="mobile"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Business Role <span className="text-[#004A9C]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="business_role"
                    className="ad p-3 text-[16px] block w-full cursor-pointer placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    value={formik.values.business_role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ color: "#757575" }}
                  >
                    <option value="">Select Business Role</option>

                    <option value="MANUFACTURER">Manufacturer</option>
                    <option value="DISTRIBUTOR">Distributor</option>
                    <option value="INSTALLERS">Installers</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
                {formik.touched.business_role &&
                  formik.errors.business_role && (
                    <p className="text-red-500 text-[12px]">
                      {formik.errors.business_role}
                    </p>
                  )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="type_of_entity"
                  className="block text-[14px] ad text-[#004A9C] font-[600] mb-3"
                >
                  Type Of Entity <span className="text-[#004A9C]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="type_of_entity"
                    className="ad p-3 text-[16px] cursor-pointer block w-full placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none appearance-none"
                    value={formik.values.type_of_entity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ color: "#757575" }}
                  >
                    <option value="">Select Entity Type</option>
                    <option value="PS">ProprietorShip</option>
                    <option value="UP">Unregistered PartnerShip</option>
                    <option value="LLP">LLP</option>
                    <option value="IE">Incorporated Entity</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-[#757575]"
                    />
                  </div>
                </div>
                {formik.touched.type_of_entity &&
                  formik.errors.type_of_entity && (
                    <p className="text-red-500 text-[12px]">
                      {formik.errors.type_of_entity}
                    </p>
                  )}
              </div>
            </div>

            {/* Solar Installations and GST No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="total_years_in_solar_installation"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  Total Exp In Solar Installations{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total_years_in_solar_installation"
                  type="number"
                  placeholder="Enter Total Years"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.total_years_in_solar_installation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.total_years_in_solar_installation &&
                  formik.errors.total_years_in_solar_installation && (
                    <p className="text-red-500 text-[12px]">
                      {formik.errors.total_years_in_solar_installation}
                    </p>
                  )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="gst_no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  GST No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gst_no"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.gst_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.gst_no && formik.errors.gst_no && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.gst_no}
                  </p>
                )}
              </div>
            </div>

            {/* PAN No and TAN No 
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="pan_no"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  PAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="pan_no"
                  type="text"
                  placeholder="Enter PAN No"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.pan_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.pan_no && formik.errors.pan_no && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.pan_no}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="tanNo"
                  className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
                >
                  TAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="tan_no"
                  type="text"
                  placeholder="Enter TAN No"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.tan_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.tan_no && formik.errors.tan_no && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.tan_no}
                  </p>
                )}
              </div>
            </div>*}

            {/* Registered Office Address */}
            <div>
              <label
                htmlFor="registerOfficeAddress"
                className="block text-[#004A9C] text-[14px] ad font-[600] mb-3"
              >
                Registered Office Address{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="flat_number"
                type="text"
                placeholder="Enter Building Name /Flat No"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                value={formik.values.flat_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.flat_number && formik.errors.flat_number && (
                <p className="text-red-500 text-[12px]">
                  {formik.errors.flat_number}
                </p>
              )}
            </div>

            {/* Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="street_name"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.street_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.street_name && formik.errors.street_name && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.street_name}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.city}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <input
                  id="pin_code"
                  type="tel"
                  placeholder="Enter Pincode"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.pin_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength="6"
                />
                {formik.touched.pin_code && formik.errors.pin_code && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.pin_code}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state && (
                  <p className="text-red-500 text-[12px]">
                    {formik.errors.state}
                  </p>
                )}
              </div>
            </div>

            {/* Next Button */}
            <div>
              <button
                type="submit"
                className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsBasicInfo;
