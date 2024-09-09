import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Select from "react-select";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
  import { geographicalRegionsOptions } from "./geographicalRegionsOptions";
import { citiesOptions } from "./citiesOptions";
// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name_of_empanelled_electricity_board: Yup.array(),
  others: Yup.string(),
  states: Yup.array(),
  geographical_regions: Yup.array(),
  combined_capacity_of_total_installations_till_date: Yup.number().required(
    "Combined Capacity is Required."
  ),
  installed_capacity_of_largest_project_worked_on: Yup.number().required(
    "Largest Capacity Installed till date is required."
  ),
  list_of_product_brands: Yup.string().required("This field is required."),
  no_of_employees: Yup.number().required("This field is required."),
  total_no_of_installation_crews: Yup.number().required(
    "This field is required."
  ),
  reference_site_details: Yup.string().required("This field is required."),
  empanelled_with_state_board: Yup.bool(),

});

const JoinUsProjectDetails = ({ onNext, onPrevious, saveData, formData }) => {
  const [states, setStates]=useState([])
  const [activestates, setActivestates]=useState([]);
  useEffect(()=>{
    const fetchStatesAll= async ()=>{
      const response= await fetch(process.env.REACT_APP_API_URL+"company/getStatedetails",{
        method:"GET"
      })
      const res= await response.json();
      console.log(res)
      if (res.status===200){
        setStates(res.data)
      }else{
        console.log("Unable to load the states")
      }
    }
    const fetchStatesActive= async ()=>{
      const response= await fetch(process.env.REACT_APP_API_URL+"company/getStatedetailsActive",{
        method:"GET"
      })
      const res= await response.json();
      console.log(res)
      if (res.status===200){
        setActivestates(res.data)
      }else{
        console.log("Unable to load the Active states")
      }
    }
    fetchStatesAll();
    fetchStatesActive();
  },[])
  const [isothers, setIsothers] = useState(false);

  const formik = useFormik({
    initialValues: {
      name_of_empanelled_electricity_board:
        formData.name_of_empanelled_electricity_board || [],
      geographical_regions: formData.geographical_regions || [],
      states: formData.states || [],
      others: formData.others ? formData.others : "",
      combined_capacity_of_total_installations_till_date:
        formData.combined_capacity_of_total_installations_till_date
          ? formData.combined_capacity_of_total_installations_till_date
          : "",
      installed_capacity_of_largest_project_worked_on:
        formData.installed_capacity_of_largest_project_worked_on
          ? formData.installed_capacity_of_largest_project_worked_on
          : "",

      list_of_product_brands: formData.list_of_product_brands
        ? formData.list_of_product_brands
        : "",
      no_of_employees: formData.no_of_employees ? formData.no_of_employees : "",
      total_no_of_installation_crews: formData.total_no_of_installation_crews
        ? formData.total_no_of_installation_crews
        : "",
      reference_site_details: formData.reference_site_details
        ? formData.reference_site_details
        : "",
      empanelled_with_state_board: formData.empanelled_with_state_board
        ? formData.empanelled_with_state_board
        : false,
    },

    validationSchema,
    onSubmit: (values) => {
      saveData(values);
      onNext();
    },
  });
  const [cities, setCities] = useState([]);
  const handleSelectChange = (selectedOptions, actionMeta) => {
    const fieldName = actionMeta.name;
    formik.setFieldValue(
      fieldName,
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const empanelledOptions = [
    { value: 1, label: "Central Power Distribution Company of A.P. Ltd." },
    { value: 2, label: "Eastern Power Distribution Company of A.P. Ltd." },
    { value: 3, label: "Northern Power Distribution Company of A.P. Ltd." },
    { value: 4, label: "Central Assam Electricity Distribution Company Ltd." },
    { value: 5, label: "Lower Assam Electricity Distribution Company Ltd." },
    { value: 6, label: "Upper Assam Electricity Distribution Company Ltd." },
    { value: 7, label: "Bihar State Electricity Board" },
    { value: 8, label: "Chhattisgarh State Power Distribution Company Ltd." },
    { value: 9, label: "BSES Rajdhani Power Ltd." },
    { value: 10, label: "BSES Yamuna Power Ltd." },
    { value: 11, label: "New Delhi Municipal Council" },
    { value: 12, label: "North Delhi Power Ltd." },
    { value: 13, label: "Dakshin Gujarat Vij Company Ltd." },
    { value: 14, label: "Madhya Gujarat Vij Company Ltd." },
    { value: 15, label: "Paschim Gujarat Vij Company Ltd." },
    { value: 16, label: "Torrent Power Ltd." },
    { value: 17, label: "Uttar Gujarat Vij Company Ltd." },
    { value: 18, label: "Dakshin Haryana Bijli Vitran Nigam" },
    { value: 19, label: "Uttar Haryana Bijli Vitran Nigam Ltd." },
    { value: 20, label: "Himachal Pradesh State Electricity Board" },
    { value: 21, label: "Damodar Valley Corporation" },
    { value: 22, label: "Jamshedpur Utility and Services Company" },
    { value: 23, label: "Jharkhand State Electricity Board" },
    { value: 24, label: "Bokaro Power Supply Co Pvt. Ltd." },
    { value: 25, label: "Bangalore Electricity Supply Company Ltd." },
    { value: 26, label: "Chamundeshwari Electricity Supply Corporation Ltd." },
    { value: 27, label: "Gulbarga Electricity Supply Company Ltd." },
    { value: 28, label: "Hubli Electricity Supply Company Ltd." },
    { value: 29, label: "Mangalore Electricity Supply Company Ltd." },
    { value: 30, label: "Kerala State Electricity Board" },
    { value: 31, label: "Electricity Department, Manipur" },
    {
      value: 32,
      label: "Madhya Pradesh Paschim Kshetra Vidyut Vitran Co. Ltd.",
    },
    { value: 33, label: "M.P. Poorv Kshetra Vidyut Vitran Co." },
    { value: 34, label: "M.P. Madhya Kshetra Vidyut Vitran Co." },
    { value: 35, label: "Best Undertaking" },
    { value: 36, label: "Maharashtra State Electricity Distribution Co. Ltd." },
    { value: 37, label: "Reliance Energy Ltd." },
    { value: 38, label: "Tata Power Ltd." },
    { value: 39, label: "Meghalaya State Electricity Board" },
    { value: 40, label: "Central Electricity Supply Company of Orissa Ltd." },
    {
      value: 41,
      label: "North Eastern Electricity Supply Company of Orissa Ltd.",
    },
    { value: 42, label: "Southern Electricity Supply Company of Orissa Ltd." },
    { value: 43, label: "Western Electricity Supply Company of Orissa Ltd." },
    { value: 44, label: "Punjab State Electricity Board" },
    { value: 45, label: "Ajmer Vidyut Vitran Nigam Ltd." },
    { value: 46, label: "Jaipur Vidyut Vitran Nigam Ltd." },
    { value: 47, label: "Jodhpur Vidyut Vitran Nigam Ltd." },
    { value: 48, label: "Tamil Nadu Electricity Board" },
    { value: 49, label: "Tripura State Electricity Corporation Ltd." },
    { value: 50, label: "Uttarakhand Power Corporation Ltd." },
    { value: 51, label: "Dakshinanchal Vidyut Vitran Nigam Ltd." },
    { value: 52, label: "Kanpur Electric Supply Co. Ltd." },
    { value: 53, label: "Madhyanchal Vidyut Vitran Nigam Ltd." },
    { value: 54, label: "Noida Power Company Ltd." },
    { value: 55, label: "Paschimanchal Vidyut Vitran Nigam Ltd." },
    { value: 56, label: "Purvanchal Vidyut Vitran Nigam Ltd." },
    { value: 57, label: "Uttar Pradesh Power Corporation Ltd." },
    { value: 58, label: "Calcutta Electricity Supply Company Ltd." },
    { value: 59, label: "DPSC Ltd." },
    {
      value: 60,
      label: "West Bengal State Electricity Distribution Company Ltd.",
    },
    { value: 70, label: "If Others please provide detail" },
  ];

  function getCitiesForState(selectedStates) {
    if (!selectedStates || !Array.isArray(selectedStates)) return [];
    let combinedCities = [];
    selectedStates.forEach((stateCode) => {
      const citiesForState = citiesOptions[stateCode] || [];
      combinedCities = combinedCities.concat(citiesForState);
    });
    return combinedCities;
  }
  // function getAllCitiesAlphabetically() {
  //   let allCities = [];

  //   // Iterate over each state's cities and add them to the allCities array
  //   Object.values(citiesOptions).forEach((citiesForState) => {
  //     allCities = allCities.concat(citiesForState);
  //   });

  //   // Sort the combined cities alphabetically
  //   allCities.sort((a, b) => a.localeCompare(b));

  //   return allCities;
  // }

  useEffect(() => {
    if (formik.values.name_of_empanelled_electricity_board !== null) {
      if (formik.values.name_of_empanelled_electricity_board.includes(70)) {
        setIsothers(true);
      } else {
        setIsothers(false);
      }
    }
  }, [formik.values.name_of_empanelled_electricity_board]);
  useEffect(() => {
    const flattenedCitiesList = Object.values(citiesOptions).flat(); //getCitiesForState(formik.values.name_of_empanelled_electricity_board);
    const sortedCitiesList = flattenedCitiesList.sort((a, b) =>
      a.label.localeCompare(b.label)
    );
    setCities(sortedCitiesList);
  }, []);
  // useEffect(()=>{
  //   console.log(formik.values.states)
  //   if (formik.values.states.length>0){
  //     const flattenedCitiesList =  getCitiesForState(formik.values.states);
  //     const sortedCitiesList = flattenedCitiesList.sort((a, b) =>
  //       a.label.localeCompare(b.label)
  //     );
  //     setCities(sortedCitiesList);
  //   }else{
  //     const flattenedCitiesList = Object.values(citiesOptions).flat(); //getCitiesForState(formik.values.name_of_empanelled_electricity_board);
  //     const sortedCitiesList = flattenedCitiesList.sort((a, b) =>
  //       a.label.localeCompare(b.label)
  //     );
  //     setCities(sortedCitiesList);
  //   }
    
  // },[formik.values.states])
  useEffect(()=>{
    const fetchDistrictsByState= async ()=>{
      const response= await fetch(process.env.REACT_APP_API_URL+"company/getDistrictdetails",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',  // Set the content type to JSON
        },
        body:JSON.stringify({
          states: formik.values.states
        })
      })
      const res= await response.json();
      console.log(res)
      if (res.status===200){
        setCities(res.data)
      }else{
        console.log("Unable to load the Districts")
      }
    }
    if (formik.values.states){
      fetchDistrictsByState();
    }else{
      setCities([])
    }
  },[formik.values.states])
  return (
    <div>
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
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="flex items-center space-x-1">
              <span className="text-[14px] font-semibold text-[#004A9C] mr-7">
                Empanelled with Electricity Board
                <span className="text-[#004A9C]">*</span>
              </span>
              <div
                onClick={() =>
                  formik.setFieldValue(
                    "empanelled_with_state_board",
                    !formik.values.empanelled_with_state_board
                  )
                }
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                  formik.values.empanelled_with_state_board
                    ? "bg-[#0BB68D]"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full p-0.5 shadow-md transform ${
                    formik.values.empanelled_with_state_board
                      ? "translate-x-6"
                      : ""
                  } transition-transform duration-300`}
                />
              </div>
              <span
                className={`text-[14px] font-semibold ${
                  formik.values.empanelled_with_state_board
                    ? "text-[#0BB68D]"
                    : "text-gray-400"
                }`}
              >
                {formik.values.empanelled_with_state_board ? "Yes" : "No"}
              </span>
            </div>
            {formik.values.empanelled_with_state_board && (
              <div>
                <label
                  htmlFor="name_of_empanelled_electricity_board"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Name Of Electricity Boards Empanelled With
                  <span className="text-[#004A9C]">*</span>
                </label>
                <Select
                  id="name_of_empanelled_electricity_board"
                  isMulti
                  options={states}
                  value={states.filter((option) =>
                    formik.values.name_of_empanelled_electricity_board.includes(
                      option.value
                    )
                  )}
                  onChange={handleSelectChange}
                  name="name_of_empanelled_electricity_board"
                  placeholder="Select empanelled boards"
                  className="basic-single"
                  classNamePrefix="select"
                />
                {formik.errors.name_of_empanelled_electricity_board && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name_of_empanelled_electricity_board}
                  </p>
                )}
              </div>
            )}
            {/* Others */}
            {isothers && (
              <div>
                <label
                  htmlFor="others"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Others
                </label>
                <input
                  id="others"
                  type="text"
                  value={formik.values.others}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Electricity Board Name"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {formik.touched.others && formik.errors.others && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.others}
                  </p>
                )}
              </div>
            )}
            {/* Dropdown Fields in Flex */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="combined_capacity"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Combined Capacity Of total installations done till date{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="combined_capacity_of_total_installations_till_date"
                  type="number"
                  value={
                    formik.values
                      .combined_capacity_of_total_installations_till_date
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Combined Capacity  KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {formik.touched
                  .combined_capacity_of_total_installations_till_date &&
                  formik.errors
                    .combined_capacity_of_total_installations_till_date && (
                    <p className="text-red-500 text-xs mt-1">
                      {
                        formik.errors
                          .combined_capacity_of_total_installations_till_date
                      }
                    </p>
                  )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="installed_capacity_of_largest_project_worked_on"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Installation capacity of the largest project worked on{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="installed_capacity_of_largest_project_worked_on"
                  type="number"
                  value={
                    formik.values
                      .installed_capacity_of_largest_project_worked_on
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Installation Capacity KW"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {formik.touched
                  .installed_capacity_of_largest_project_worked_on &&
                  formik.errors
                    .installed_capacity_of_largest_project_worked_on && (
                    <p className="text-red-500 text-xs mt-1">
                      {
                        formik.errors
                          .installed_capacity_of_largest_project_worked_on
                      }
                    </p>
                  )}
              </div>
            </div>
            {/* Product Brands */}
            <div className="w-full">
              <label
                htmlFor="list_of_product_brands"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Brands You Deal With <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="list_of_product_brands"
                type="text"
                value={formik.values.list_of_product_brands}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Brand1,Brand2,Brand3"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
              {formik.touched.list_of_product_brands &&
                formik.errors.list_of_product_brands && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.list_of_product_brands}
                  </p>
                )}
            </div>

            <div>
                <label
                  htmlFor="name_of_empanelled_electricity_board"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  States
                  <span className="text-[#004A9C]">*</span>
                </label>
                <Select
                  id="states"
                  isMulti
                  options={activestates}
                  value={activestates.filter((option) =>
                    formik.values.states.includes(
                      option.value
                    )
                  )}
                  onChange={handleSelectChange}
                  name="states"
                  placeholder="Select State(s)"
                  className="basic-single"
                  classNamePrefix="select"
                />
                {formik.errors.states && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.states}
                  </p>
                )}
              </div>
            {/* Geographical Regions */}
            <div className="w-full">
              <label
                htmlFor="geographical_regions"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Geographical Regions Of Operations{" "}
                <span className="text-[#004A9C]">*</span>
              </label>
              <Select
                id="geographical_regions"
                isSearchable
                isMulti
                options={cities}
                value={cities.filter((option) =>
                  formik.values.geographical_regions.includes(option.value)
                )}
                onChange={handleSelectChange}
                name="geographical_regions"
                placeholder="Select geographical regions"
                className="basic-single"
                classNamePrefix="select"
              />
              {formik.errors.geographical_regions && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.geographical_regions}
                </p>
              )}
            </div>

            {/* Total Employees and Total Crews */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="no_of_employees"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Employees <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="no_of_employees"
                  type="number"
                  value={formik.values.no_of_employees}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Total Employees"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {formik.touched.no_of_employees &&
                  formik.errors.no_of_employees && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.no_of_employees}
                    </p>
                  )}
              </div>

              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="total_no_of_installation_crews"
                  className="block font-[600] text-[14px] text-[#004A9C] mb-3"
                >
                  Total Installation Crews Available
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total_no_of_installation_crews"
                  type="number"
                  value={formik.values.total_no_of_installation_crews}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Total Crews Available"
                  className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
                {formik.touched.total_no_of_installation_crews &&
                  formik.errors.total_no_of_installation_crews && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.total_no_of_installation_crews}
                    </p>
                  )}
              </div>
            </div>

            {/* Reference Site Details */}
            <div className="w-full">
              <label
                htmlFor="reference_site_details"
                className="block font-[600] text-[14px] text-[#004A9C] mb-3"
              >
                Reference Site Details <span className="text-[#004A9C]">*</span>
              </label>
              <textarea
                id="reference_site_details"
                value={formik.values.reference_site_details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Reference Site Details"
                className="ad mt-1 p-3 block w-full border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
              {formik.touched.reference_site_details &&
                formik.errors.reference_site_details && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.reference_site_details}
                  </p>
                )}
            </div>

            {/* Previous and Next Buttons */}
            <div className="flex gap-5">
              <div className="w-1/2 max-[600px]:w-full">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="px-4 py-3 border border-[#0BB68D] text-[#0BB68D] w-full rounded-md shadow-sm  focus:outline-none"
                >
                  Previous
                </button>
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <button
                  type="submit"
                  className="px-4 py-3 bg-[#0BB68D] text-white w-full rounded-md shadow-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsProjectDetails;
