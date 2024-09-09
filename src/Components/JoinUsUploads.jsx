import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { GrCloudUpload } from "react-icons/gr";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  gst_upload_doc: Yup.mixed().required("GST Certificate is required."),
  // pan_upload: Yup.mixed().required("PAN is required."),
  // tan_upload: Yup.mixed().nullable(),
  // empanellment_certificate_upload: Yup.mixed().required(
  //   "Empanelment Certificate is required."
  // ),
  reference_site_pictures_upload: Yup.array()
    .min(1, "At least one reference site picture is required.")
    .of(Yup.mixed().required("Reference site picture is required.")),
  isChecked: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions."
  ),
});

const JoinUsUploads = ({
  onPrevious,
  onSubmit,
  saveFiles,
  saveData,
  issubmit,
}) => {
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  function createDummyPngFile(fileName) {
    // 1KB of empty content for a PNG file
    const dummyContent = new Uint8Array(1024);

    // Creating a PNG header (just an example, this is not a valid PNG but serves as a dummy)
    dummyContent.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], 0);

    return new File([dummyContent], fileName, { type: "image/png" });
  }
  const formik = useFormik({
    initialValues: {
      gst_upload_doc: null,
      pan_upload: createDummyPngFile("pan_upload_dummy.png"),
      // tan_upload: createDummyPngFile("tan_upload_dummy.png"),
      empanellment_certificate_upload: createDummyPngFile(
        "empanellment_certificate_upload_dummy.png"
      ),
      reference_site_pictures_upload: [],
      isChecked: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("upload values", values);

      saveFiles("gst_upload_doc", values.gst_upload_doc);
      saveFiles("pan_upload", createDummyPngFile("pan_upload_dummy.png"));
      saveFiles("pan_upload", createDummyPngFile("pan_upload_dummy.png"));
      // saveFiles("tan_upload", createDummyPngFile("tan_upload_dummy.png"));
      saveFiles(
        "empanellment_certificate_upload",
        createDummyPngFile("empanellment_certificate_upload_dummy.png")
      );
      saveFiles(
        "empanellment_certificate_upload",
        createDummyPngFile("empanellment_certificate_upload_dummy.png")
      );
      saveFiles(
        "reference_site_pictures_upload",
        values.reference_site_pictures_upload
      );
      onSubmit(values);
    },
  });

  const handleFileUpload = (event, fieldName) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      formik.setFieldValue(fieldName, file, false);
      saveFiles(fieldName, file); // Immediate save after setting formik value
    } else {
      toast.error("Max file size should be 2MB.");
    }
  };

  const handleFilesUpload = (event, fieldName) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024);
    formik.setFieldValue(fieldName, validFiles, false);
    saveFiles(fieldName, validFiles); // Immediate save after setting formik value
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

  return (
    <div>
      <div className="w-full h-full">
        <div className="common-bg flex items-center">
          <h2 className="text-3xl max-[600px]:text-xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Partner With Us
          </h2>
        </div>
      </div>

      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg max-w-3xl h-full mx-auto py-[2%]">
          <button
            className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]"
            onClick={() => onPrevious()}
          >
            <FiArrowLeftCircle className="mt-1" />
            Back
          </button>

          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/*---GST Certificate----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500 pr-6">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="gst_upload_doc"
                    className="block text-[14px] font-[400] text-gray-600 text-center"
                  >
                    GST Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="gst_upload_doc"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, "gst_upload_doc")}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {formik.values.gst_upload_doc &&
                  renderUploadedFile(formik.values.gst_upload_doc)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB.<span className="text-[#004A9C]">*</span>
            </p>
            {formik.touched.gst_upload_doc && formik.errors.gst_upload_doc && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.gst_upload_doc}
              </p>
            )}
            {/* <>
           
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="pan_upload"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    PAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="pan_upload"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, "pan_upload")}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {formik.values.pan_upload &&
                  renderUploadedFile(formik.values.pan_upload)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {formik.touched.pan_upload && formik.errors.pan_upload && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.pan_upload}
              </p>
            )}

           
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="tan_upload"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    TAN
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="tan_upload"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) => handleFileUpload(e, "tan_upload")}
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {formik.values.tan_upload &&
                  renderUploadedFile(formik.values.tan_upload)}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {formik.touched.tan_upload && formik.errors.tan_upload && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.tan_upload}
              </p>
            )}

           
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="empanellment_certificate_upload"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Empanelment Certificate
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="empanellment_certificate_upload"
                  accept=".png, .jpeg, .jpg, .pdf"
                  onChange={(e) =>
                    handleFileUpload(e, "empanellment_certificate_upload")
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {formik.values.empanellment_certificate_upload &&
                  renderUploadedFile(
                    formik.values.empanellment_certificate_upload
                  )}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg, pdf formats only. Max file size
              should be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {formik.touched.empanellment_certificate_upload &&
              formik.errors.empanellment_certificate_upload && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.empanellment_certificate_upload}
                </p>
              )}
</> */}
            {/*---Reference Site Pictures----*/}
            <div className="flex items-center border-dashed border-2 border-gray-300 p-6">
              <div className="flex-1">
                <div className="flex flex-col items-center border-r border-r-gray-500">
                  <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
                  <label
                    htmlFor="reference_site_pictures_upload"
                    className="block text-[14px] font-[400] text-gray-600 pr-3 text-center"
                  >
                    Reference Site Pictures
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  id="reference_site_pictures_upload"
                  accept=".png, .jpeg, .jpg"
                  multiple
                  onChange={(e) =>
                    handleFilesUpload(e, "reference_site_pictures_upload")
                  }
                  className="block text-sm text-[#757575] ml-4 w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
                />
                {formik.values.reference_site_pictures_upload.length > 0 &&
                  renderUploadedFiles(
                    formik.values.reference_site_pictures_upload
                  )}
              </div>
            </div>
            <p className="text-gray-600 text-[12px]">
              Please upload in png, jpeg, jpg formats only. Max file size should
              be 2MB. <span className="text-[#004A9C]">*</span>
            </p>
            {formik.touched.reference_site_pictures_upload &&
              formik.errors.reference_site_pictures_upload && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.reference_site_pictures_upload}
                </p>
              )}

            {/*---Checkbox and Submit Button----*/}
            <div className="flex justify-center items-center py-4">
              <input
                type="checkbox"
                id="isChecked"
                checked={formik.values.isChecked}
                onChange={formik.handleChange}
                className={`w-5 h-5 mr-3 border-2 rounded-md ${
                  formik.values.isChecked
                    ? "bg-[#0BB68D] accent-[#0BB68D] text-white"
                    : "bg-white"
                } border-[#CECECE] cursor-pointer`}
              />

              <label htmlFor="isChecked" className="text-[#667085]">
                I have reviewed the{" "}
                <button
                  type="button"
                  onClick={() => setShowTermsDialog(true)}
                  className=""
                >
                  <span className="text-[#0BB68D]">Terms & Conditions</span>
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => setShowPrivacyDialog(true)}
                  className="text-[#0BB68D]"
                >
                  <span className="text-[#0BB68D]">Privacy Policy</span>
                </button>
                .
              </label>
            </div>
            {formik.touched.isChecked && formik.errors.isChecked && (
              <p className="text-red-500 text-xs mt-1 text-center">
                {formik.errors.isChecked}
              </p>
            )}

            <div className="flex justify-center items-center py-2">
              <button
                type="submit"
                disabled={issubmit}
                className={`py-2 px-4 bg-[#0BB68D] text-white rounded-md`}
              >
                {issubmit ? "Please wait.." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*---Terms & Conditions Dialog---*/}
      {showTermsDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">
                Terms and Conditions for partnering with and to to fulfil orders
                through CUSP
              </h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowTermsDialog(false)}
              >
                X
              </button>
            </div>
            <div className="h-96 overflow-y-scroll">
              <p className="text-[12px]">
                Welcome to CUSP, an e-commerce platform for connecting with
                solar panel installers for availing the solar panel installation
                services and products. By using our services, you (User) agree
                to the following Terms and Conditions to use the marketplace
                “CUSP”, a brand of Synergy Sustainability Solutions Pvt. Ltd.
                having registered office at B-102, Kalyani Apartment, Sector 6,
                Vasundhra, Ghaziabad -201012, Uttar Pradesh (CUSP).
              </p>

              <h4 className="font-bold mt-4 mb-2">Introduction</h4>
              <ul className="list-disc ml-6 mb-2 text-[12px]">
                <li>
                  CUSP operates a platform that connects end-users with solar
                  panel installers (SPIs) and original equipment manufacturers
                  (OEMs) within the solar industry.
                </li>
                <li>
                  SPI/OEM wishes to be listed on CUSP’s platform to offer its
                  services and/or products to potential customers.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                1. Service Provider Registration
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>1.1 Eligibility:</strong> SPI/OEM must meet all
                  regulatory and certification requirements necessary to operate
                  as an SPI or OEM in the region where services are provided.
                </li>
                <li className="mb-2">
                  <strong>1.2 Registration Process:</strong> SPI/OEM shall
                  complete the registration process on the CUSP platform,
                  providing accurate and up-to-date information regarding your
                  business, certifications, and capabilities.
                </li>
                <li className="mb-2">
                  <strong>1.3 Verification:</strong> CUSP reserves the right to
                  verify SPI/OEMs’credentials and business practices before
                  listing on the platform.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">2. Scope of Services</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>2.1 Listing on the Platform:</strong> Upon successful
                  registration, SPI/OEM will be listed on the CUSP platform,
                  allowing CUSP to share the requested quotes for services
                  and/or products. CUSP will facilitate the communication till
                  end-users’ acceptance of the quote.
                </li>
                <li className="mb-2">
                  <strong>2.2 Quote Submission:</strong> SPI/OEM shall promptly
                  respond within 24 hours to request CUSP submits on behalf of
                  the prospective end users.SPI/OEM shall be responsible for
                  ensuring submission of accurate and competitive quotes based
                  on the information provided by the User.
                </li>
                <li className="mb-2">
                  <strong>2.3 Service Provision:</strong> Upon acceptance of a
                  quote by a user, the Service Provider is responsible for
                  fulfilling the contract with the user, including the supply of
                  goods and/or services as specified. Time is of the essence in
                  the contract with the end user. It is of prime importance that
                  SPI/OEM meet all key performance metrics including contract
                  completion period.
                </li>
                <li className="mb-2">
                  <strong>2.4 No Guarantee:</strong> The prospective end-user’s
                  acceptance of a quote is based on their ranking after
                  comparing all the quotes shared by CUSP. CUSP does not commit,
                  warrant, or guarantee any business conversion for the quotes
                  submitted by SPI/OEM.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">3. Fees and Payments</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>3.1 Platform Fees:</strong> CUSP shall charge a
                  commission or convenience fee for the services provided
                  through the platform. The details of such fees will be
                  communicated to the Service Provider in advance. Any
                  communication on this between SPI/OEM and CUSP along with
                  these Terms & Conditions shall constitute the final contract.
                </li>
                <li className="mb-2">
                  <strong>3.2 Payment Terms:</strong> Platform fee from SPI/OEM
                  shall be payable in advance. The advance will be
                  non-refundable. All payments related to the services and/or
                  products offered by SPI/OEM will be handled directly between
                  SPI/OEM and the end-user. CUSP shall not be responsible for
                  the collection or distribution of these payments.
                </li>
                <li className="mb-2">
                  <strong>3.3 Subscription Fee:</strong> CUSP reserves the
                  right, with prior notice, to charge a subscription fee in
                  addition to the Platform Fee.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">4. Compliance and Conduct</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>4.1 Regulatory Compliance:</strong> SPI/OEM agrees to
                  comply with all applicable laws, regulations, and industry
                  standards in the provision of its services and/or products.
                </li>
                <li className="mb-2">
                  <strong>4.2 Ethical Conduct:</strong> SPI/OEM shall conduct
                  its business with integrity, transparency, and
                  professionalism, ensuring fair treatment of users and
                  adherence to ethical business practices.
                </li>
                <li className="mb-2">
                  <strong>4.3 User Data:</strong> SPI/OEM shall handle any user
                  data it receives in compliance with applicable data protection
                  laws and shall not misuse or disclose such data without the
                  user's consent.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                5. Timely Response and Service
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>5.1 Response Time:</strong> SPI/OEM shall respond to
                  installation requests and quotes within the timeframe
                  stipulated by CUSP.
                </li>
                <li className="mb-2">
                  <strong>5.2 Professional Service:</strong> SPI/OEM shall
                  provide timely and professional service to customers, adhering
                  to the agreed-upon timelines for project completion.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">6. Quality Assurance</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>6.1 Quality Materials:</strong> SPI/OEM shall use
                  high-quality materials and equipment that meet the industry
                  standards.
                </li>
                <li className="mb-2">
                  <strong>6.2 Qualified Personnel:</strong> SPI/OEM shall ensure
                  that all installations are performed by qualified and trained
                  personnel.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">7. Customer Communication</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>7.1 Clear Communication:</strong> SPI/OEM shall
                  maintain clear and professional communication with customers
                  throughout the installation process, including
                  pre-installation consultations, progress updates, and
                  post-installation support.
                </li>
                <li className="mb-2">
                  <strong>7.2 Customer Support:</strong> SPI/OEM shall address
                  customer inquiries, concerns, and complaints promptly.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                8. Warranty and Maintenance
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>8.1 Warranty:</strong> SPI/OEM shall offer a warranty
                  on the installation work and the products used, as required by
                  CUSP or industry standards.
                </li>
                <li className="mb-2">
                  <strong>8.2 Maintenance Services:</strong> SPI/OEM shall
                  provide maintenance services as per the warranty terms and any
                  additional service agreements with customers.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">9. Insurance</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>9.1 Insurance Coverage:</strong> SPI/OEM shall
                  maintain adequate insurance coverage, including liability
                  insurance, to cover potential damages or claims arising from
                  the installation work and supplies.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                10. Adherence to CUSP’s Policies
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>10.1 Compliance:</strong> SPI/OEM must comply with all
                  of CUSP’s platform policies, including those related to
                  subscription fees, platform fees, and other contractual
                  obligations.
                </li>
                <li className="mb-2">
                  <strong>10.2 Dispute Resolution:</strong> SPI/OEM agrees to
                  CUSP's dispute resolution mechanism for any conflicts arising
                  from the installation projects.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">11. Data and Reporting</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>11.1 Reporting Requirements:</strong> SPI/OEM shall
                  provide accurate and timely reports on installation progress,
                  project completion, and customer feedback as required by CUSP.
                </li>
                <li className="mb-2">
                  <strong>11.2 Record Maintenance:</strong> SPI/OEM must
                  maintain accurate records of all transactions and interactions
                  conducted through CUSP’s platform.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                12. Non-Compete and Exclusivity
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  Prior to engaging in competing business, SPI/OEM shall inform
                  CUSP to enable CUSP to determine its decision to continue its
                  business with SPI/OEM. SPI/OEM shall not engage in, directly
                  or indirectly, soliciting CUSP’s customers outside the
                  platform.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">13. Confidentiality</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>13.1 Definition of Confidential Information:</strong>{" "}
                  The term "Confidential Information" shall include all
                  information, whether written, oral, or otherwise, disclosed by
                  either party (the "Disclosing Party") to the other party (the
                  "Receiving Party") that is designated as confidential,
                  proprietary, or that should reasonably be understood to be
                  confidential given the nature of the information and the
                  circumstances of its disclosure. Confidential Information
                  includes, but is not limited to, business plans, customer
                  information, technical data, trade secrets, financial
                  information, and any other information related to the
                  operations, products, services, or business of the Disclosing
                  Party.
                </li>
                <li className="mb-2">
                  <strong>13.2 Obligations of the Receiving Party:</strong> The
                  Receiving Party agrees to:
                  <ul className="ml-6">
                    <li className="mb-2">
                      • Maintain the confidentiality of the Confidential
                      Information and not disclose it to any third party without
                      the prior written consent of the Disclosing Party.
                    </li>
                    <li className="mb-2">
                      • Use the Confidential Information solely for the purpose
                      of fulfilling its obligations under this Agreement and not
                      for any other purpose.
                    </li>
                    <li className="mb-2">
                      • Take all reasonable measures to protect the
                      confidentiality of the Confidential Information, including
                      implementing appropriate security measures and restricting
                      access to only those employees, agents, or contractors who
                      need to know the information for the purposes of this
                      Agreement.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>
                    13.3 Exclusions from Confidential Information:
                  </strong>
                  Confidential Information does not include information that:
                  <ul className="ml-6">
                    <li className="mb-2">
                      (i) Is or becomes publicly available through no fault of
                      the Receiving Party.
                    </li>
                    <li className="mb-2">
                      (ii) Is already in the possession of the Receiving Party
                      without obligation of confidentiality prior to disclosure
                      by the Disclosing Party.
                    </li>
                    <li className="mb-2">
                      (iii) Is independently developed by the Receiving Party
                      without use of or reference to the Disclosing Party’s
                      Confidential Information.
                    </li>
                    <li className="mb-2">
                      (iv) Is disclosed to the Receiving Party by a third party
                      who has the right to make such disclosure without any
                      obligation of confidentiality.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>13.4 Legal Disclosure:</strong> If the Receiving Party
                  is required by law, regulation, or court order to disclose any
                  Confidential Information, it shall promptly notify the
                  Disclosing Party in writing, if legally permissible, and
                  provide reasonable assistance in seeking a protective order or
                  other appropriate remedy. In the event that such protective
                  order or remedy is not obtained, the Receiving Party may
                  disclose only that portion of the Confidential Information
                  that it is legally required to disclose.
                </li>
                <li className="mb-2">
                  <strong>
                    13.5 Return or Destruction of Confidential Information:
                  </strong>
                  Upon the termination or expiration of this Agreement, or upon
                  the written request of the Disclosing Party, the Receiving
                  Party shall promptly return or destroy all copies of the
                  Confidential Information in its possession or control and
                  certify in writing that it has done so.
                </li>
                <li className="mb-2">
                  <strong>13.6 Duration of Confidentiality Obligations:</strong>{" "}
                  The obligations under this Confidentiality clause shall remain
                  in effect for a period of one (1) year from the date of
                  termination or expiration of this Agreement.
                </li>
                <li className="mb-2">
                  <strong>13.7 Survival:</strong> The provisions of this
                  Confidentiality clause shall survive the termination or
                  expiration of this Agreement.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">14. Termination</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>14.1 Termination by CUSP:</strong> CUSP reserves the
                  right to terminate this Agreement and remove SPI/OEM from the
                  platform if SPI/OEM violates any terms of this Agreement,
                  engages in fraudulent activities, or if CUSP, in its sole
                  discretion, deems it necessary for the safety and trust of the
                  platform.
                </li>
                <li className="mb-2">
                  <strong>14.2 Termination by Service Provider:</strong> SPI/OEM
                  may terminate this Agreement by providing written notice to
                  CUSP. Upon termination, SPI/OEM’s listing will be removed from
                  the platform.
                </li>
                <li className="mb-2">
                  <strong>14.3 Automatic Termination:</strong> This Agreement
                  will automatically terminate if the SPI/OEM fails to comply
                  with regulatory requirements, ceases operations, or fails to
                  respond to four quotes within a given quarter.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                15. Limitation of Liability
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>15.1 CUSP’s Liability:</strong> CUSP’s liability under
                  this Agreement shall be limited to the amount of any platform
                  fees paid by the Service Provider to CUSP. CUSP shall not be
                  liable for any indirect, incidental, loss of profit, business,
                  or consequential damages arising from the use of the platform.
                </li>
                <li className="mb-2">
                  <strong>15.2 Service Provider’s Liability:</strong> SPI/OEM
                  shall be solely responsible for the fulfillment of contracts
                  with end-users and any claims, disputes, or liabilities
                  arising from the provision of its services and/or products.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">16. Changes to Terms</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>16.1 Amendments:</strong> CUSP reserves the right to
                  update or modify this Agreement at any time. Any changes will
                  be effective upon posting the updated Agreement on the
                  platform. Continued use of the platform after any such changes
                  constitutes the Service Provider’s acceptance of the new
                  terms.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">17. Governing Law</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>17.1 Jurisdiction:</strong> This Agreement shall be
                  governed by and construed in accordance with the laws of
                  India. Any disputes arising under or in connection with this
                  Agreement shall be subject to the exclusive jurisdiction of
                  the courts in Ghaziabad, India.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">18. Contact Information</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  For any questions, concerns, or assistance, please reach out
                  to our customer support team and we will be happy to assist
                  you.
                </li>
              </ul>
              <div className="text-center">
                <button
                  onClick={() => setShowTermsDialog(false)}
                  className="bg-[#0BB68D] text-white px-6 py-2 rounded mt-5"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*---Privacy Policy Dialog---*/}
      {showPrivacyDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowPrivacyDialog(false)}
              >
                X
              </button>
            </div>
            <div className="h-96 overflow-y-scroll">
              <p className="text-[12px]">
                Welcome to CUSP, an e-commerce platform for connecting with
                solar panel installers for availing the solar panel installation
                services and products. By using our services, you (User) agree
                to the following Terms and Conditions to use the marketplace
                “CUSP”, a brand of Synergy Sustainability Solutions Pvt. Ltd.
                having registered office at B-102, Kalyani Apartment, Sector 6,
                Vasundhra, Ghaziabad -201012, Uttar Pradesh (CUSP).
              </p>

              <h4 className="font-bold mt-4 mb-2">Introduction</h4>
              <ul className="list-disc ml-6 mb-2 text-[12px]">
                <li>
                  CUSP operates a platform that connects end-users with solar
                  panel installers (SPIs) and original equipment manufacturers
                  (OEMs) within the solar industry.
                </li>
                <li>
                  SPI/OEM wishes to be listed on CUSP’s platform to offer its
                  services and/or products to potential customers.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                1. Service Provider Registration
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>1.1 Eligibility:</strong> SPI/OEM must meet all
                  regulatory and certification requirements necessary to operate
                  as an SPI or OEM in the region where services are provided.
                </li>
                <li className="mb-2">
                  <strong>1.2 Registration Process:</strong> SPI/OEM shall
                  complete the registration process on the CUSP platform,
                  providing accurate and up-to-date information regarding your
                  business, certifications, and capabilities.
                </li>
                <li className="mb-2">
                  <strong>1.3 Verification:</strong> CUSP reserves the right to
                  verify SPI/OEMs’credentials and business practices before
                  listing on the platform.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">2. Scope of Services</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>2.1 Listing on the Platform:</strong> Upon successful
                  registration, SPI/OEM will be listed on the CUSP platform,
                  allowing CUSP to share the requested quotes for services
                  and/or products. CUSP will facilitate the communication till
                  end-users’ acceptance of the quote.
                </li>
                <li className="mb-2">
                  <strong>2.2 Quote Submission:</strong> SPI/OEM shall promptly
                  respond within 24 hours to request CUSP submits on behalf of
                  the prospective end users.SPI/OEM shall be responsible for
                  ensuring submission of accurate and competitive quotes based
                  on the information provided by the User.
                </li>
                <li className="mb-2">
                  <strong>2.3 Service Provision:</strong> Upon acceptance of a
                  quote by a user, the Service Provider is responsible for
                  fulfilling the contract with the user, including the supply of
                  goods and/or services as specified. Time is of the essence in
                  the contract with the end user. It is of prime importance that
                  SPI/OEM meet all key performance metrics including contract
                  completion period.
                </li>
                <li className="mb-2">
                  <strong>2.4 No Guarantee:</strong> The prospective end-user’s
                  acceptance of a quote is based on their ranking after
                  comparing all the quotes shared by CUSP. CUSP does not commit,
                  warrant, or guarantee any business conversion for the quotes
                  submitted by SPI/OEM.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">3. Fees and Payments</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>3.1 Platform Fees:</strong> CUSP shall charge a
                  commission or convenience fee for the services provided
                  through the platform. The details of such fees will be
                  communicated to the Service Provider in advance. Any
                  communication on this between SPI/OEM and CUSP along with
                  these Terms & Conditions shall constitute the final contract.
                </li>
                <li className="mb-2">
                  <strong>3.2 Payment Terms:</strong> Platform fee from SPI/OEM
                  shall be payable in advance. The advance will be
                  non-refundable. All payments related to the services and/or
                  products offered by SPI/OEM will be handled directly between
                  SPI/OEM and the end-user. CUSP shall not be responsible for
                  the collection or distribution of these payments.
                </li>
                <li className="mb-2">
                  <strong>3.3 Subscription Fee:</strong> CUSP reserves the
                  right, with prior notice, to charge a subscription fee in
                  addition to the Platform Fee.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">4. Compliance and Conduct</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>4.1 Regulatory Compliance:</strong> SPI/OEM agrees to
                  comply with all applicable laws, regulations, and industry
                  standards in the provision of its services and/or products.
                </li>
                <li className="mb-2">
                  <strong>4.2 Ethical Conduct:</strong> SPI/OEM shall conduct
                  its business with integrity, transparency, and
                  professionalism, ensuring fair treatment of users and
                  adherence to ethical business practices.
                </li>
                <li className="mb-2">
                  <strong>4.3 User Data:</strong> SPI/OEM shall handle any user
                  data it receives in compliance with applicable data protection
                  laws and shall not misuse or disclose such data without the
                  user's consent.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                5. Timely Response and Service
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>5.1 Response Time:</strong> SPI/OEM shall respond to
                  installation requests and quotes within the timeframe
                  stipulated by CUSP.
                </li>
                <li className="mb-2">
                  <strong>5.2 Professional Service:</strong> SPI/OEM shall
                  provide timely and professional service to customers, adhering
                  to the agreed-upon timelines for project completion.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">6. Quality Assurance</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>6.1 Quality Materials:</strong> SPI/OEM shall use
                  high-quality materials and equipment that meet the industry
                  standards.
                </li>
                <li className="mb-2">
                  <strong>6.2 Qualified Personnel:</strong> SPI/OEM shall ensure
                  that all installations are performed by qualified and trained
                  personnel.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">7. Customer Communication</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>7.1 Clear Communication:</strong> SPI/OEM shall
                  maintain clear and professional communication with customers
                  throughout the installation process, including
                  pre-installation consultations, progress updates, and
                  post-installation support.
                </li>
                <li className="mb-2">
                  <strong>7.2 Customer Support:</strong> SPI/OEM shall address
                  customer inquiries, concerns, and complaints promptly.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                8. Warranty and Maintenance
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>8.1 Warranty:</strong> SPI/OEM shall offer a warranty
                  on the installation work and the products used, as required by
                  CUSP or industry standards.
                </li>
                <li className="mb-2">
                  <strong>8.2 Maintenance Services:</strong> SPI/OEM shall
                  provide maintenance services as per the warranty terms and any
                  additional service agreements with customers.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">9. Insurance</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>9.1 Insurance Coverage:</strong> SPI/OEM shall
                  maintain adequate insurance coverage, including liability
                  insurance, to cover potential damages or claims arising from
                  the installation work and supplies.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                10. Adherence to CUSP’s Policies
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>10.1 Compliance:</strong> SPI/OEM must comply with all
                  of CUSP’s platform policies, including those related to
                  subscription fees, platform fees, and other contractual
                  obligations.
                </li>
                <li className="mb-2">
                  <strong>10.2 Dispute Resolution:</strong> SPI/OEM agrees to
                  CUSP's dispute resolution mechanism for any conflicts arising
                  from the installation projects.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">11. Data and Reporting</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>11.1 Reporting Requirements:</strong> SPI/OEM shall
                  provide accurate and timely reports on installation progress,
                  project completion, and customer feedback as required by CUSP.
                </li>
                <li className="mb-2">
                  <strong>11.2 Record Maintenance:</strong> SPI/OEM must
                  maintain accurate records of all transactions and interactions
                  conducted through CUSP’s platform.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                12. Non-Compete and Exclusivity
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  Prior to engaging in competing business, SPI/OEM shall inform
                  CUSP to enable CUSP to determine its decision to continue its
                  business with SPI/OEM. SPI/OEM shall not engage in, directly
                  or indirectly, soliciting CUSP’s customers outside the
                  platform.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">13. Confidentiality</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>13.1 Definition of Confidential Information:</strong>{" "}
                  The term "Confidential Information" shall include all
                  information, whether written, oral, or otherwise, disclosed by
                  either party (the "Disclosing Party") to the other party (the
                  "Receiving Party") that is designated as confidential,
                  proprietary, or that should reasonably be understood to be
                  confidential given the nature of the information and the
                  circumstances of its disclosure. Confidential Information
                  includes, but is not limited to, business plans, customer
                  information, technical data, trade secrets, financial
                  information, and any other information related to the
                  operations, products, services, or business of the Disclosing
                  Party.
                </li>
                <li className="mb-2">
                  <strong>13.2 Obligations of the Receiving Party:</strong> The
                  Receiving Party agrees to:
                  <ul className="ml-6">
                    <li className="mb-2">
                      • Maintain the confidentiality of the Confidential
                      Information and not disclose it to any third party without
                      the prior written consent of the Disclosing Party.
                    </li>
                    <li className="mb-2">
                      • Use the Confidential Information solely for the purpose
                      of fulfilling its obligations under this Agreement and not
                      for any other purpose.
                    </li>
                    <li className="mb-2">
                      • Take all reasonable measures to protect the
                      confidentiality of the Confidential Information, including
                      implementing appropriate security measures and restricting
                      access to only those employees, agents, or contractors who
                      need to know the information for the purposes of this
                      Agreement.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>
                    13.3 Exclusions from Confidential Information:
                  </strong>
                  Confidential Information does not include information that:
                  <ul className="ml-6">
                    <li className="mb-2">
                      (i) Is or becomes publicly available through no fault of
                      the Receiving Party.
                    </li>
                    <li className="mb-2">
                      (ii) Is already in the possession of the Receiving Party
                      without obligation of confidentiality prior to disclosure
                      by the Disclosing Party.
                    </li>
                    <li className="mb-2">
                      (iii) Is independently developed by the Receiving Party
                      without use of or reference to the Disclosing Party’s
                      Confidential Information.
                    </li>
                    <li className="mb-2">
                      (iv) Is disclosed to the Receiving Party by a third party
                      who has the right to make such disclosure without any
                      obligation of confidentiality.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>13.4 Legal Disclosure:</strong> If the Receiving Party
                  is required by law, regulation, or court order to disclose any
                  Confidential Information, it shall promptly notify the
                  Disclosing Party in writing, if legally permissible, and
                  provide reasonable assistance in seeking a protective order or
                  other appropriate remedy. In the event that such protective
                  order or remedy is not obtained, the Receiving Party may
                  disclose only that portion of the Confidential Information
                  that it is legally required to disclose.
                </li>
                <li className="mb-2">
                  <strong>
                    13.5 Return or Destruction of Confidential Information:
                  </strong>
                  Upon the termination or expiration of this Agreement, or upon
                  the written request of the Disclosing Party, the Receiving
                  Party shall promptly return or destroy all copies of the
                  Confidential Information in its possession or control and
                  certify in writing that it has done so.
                </li>
                <li className="mb-2">
                  <strong>13.6 Duration of Confidentiality Obligations:</strong>{" "}
                  The obligations under this Confidentiality clause shall remain
                  in effect for a period of one (1) year from the date of
                  termination or expiration of this Agreement.
                </li>
                <li className="mb-2">
                  <strong>13.7 Survival:</strong> The provisions of this
                  Confidentiality clause shall survive the termination or
                  expiration of this Agreement.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">14. Termination</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>14.1 Termination by CUSP:</strong> CUSP reserves the
                  right to terminate this Agreement and remove SPI/OEM from the
                  platform if SPI/OEM violates any terms of this Agreement,
                  engages in fraudulent activities, or if CUSP, in its sole
                  discretion, deems it necessary for the safety and trust of the
                  platform.
                </li>
                <li className="mb-2">
                  <strong>14.2 Termination by Service Provider:</strong> SPI/OEM
                  may terminate this Agreement by providing written notice to
                  CUSP. Upon termination, SPI/OEM’s listing will be removed from
                  the platform.
                </li>
                <li className="mb-2">
                  <strong>14.3 Automatic Termination:</strong> This Agreement
                  will automatically terminate if the SPI/OEM fails to comply
                  with regulatory requirements, ceases operations, or fails to
                  respond to four quotes within a given quarter.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">
                15. Limitation of Liability
              </h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>15.1 CUSP’s Liability:</strong> CUSP’s liability under
                  this Agreement shall be limited to the amount of any platform
                  fees paid by the Service Provider to CUSP. CUSP shall not be
                  liable for any indirect, incidental, loss of profit, business,
                  or consequential damages arising from the use of the platform.
                </li>
                <li className="mb-2">
                  <strong>15.2 Service Provider’s Liability:</strong> SPI/OEM
                  shall be solely responsible for the fulfillment of contracts
                  with end-users and any claims, disputes, or liabilities
                  arising from the provision of its services and/or products.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">16. Changes to Terms</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>16.1 Amendments:</strong> CUSP reserves the right to
                  update or modify this Agreement at any time. Any changes will
                  be effective upon posting the updated Agreement on the
                  platform. Continued use of the platform after any such changes
                  constitutes the Service Provider’s acceptance of the new
                  terms.
                </li>
              </ul>
              <h4 className="font-bold mt-4 mb-2">17. Governing Law</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  <strong>17.1 Jurisdiction:</strong> This Agreement shall be
                  governed by and construed in accordance with the laws of
                  India. Any disputes arising under or in connection with this
                  Agreement shall be subject to the exclusive jurisdiction of
                  the courts in Ghaziabad, India.
                </li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">18. Contact Information</h4>
              <ul className="ml-6 mb-2 text-[12px]">
                <li className="mb-2">
                  For any questions, concerns, or assistance, please reach out
                  to our customer support team and we will be happy to assist
                  you.
                </li>
              </ul>

              <div className="text-center mt-4">
                <button
                  onClick={() => setShowPrivacyDialog(false)}
                  className="bg-[#0BB68D] text-white px-6 py-2 rounded mt-5"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUsUploads;
