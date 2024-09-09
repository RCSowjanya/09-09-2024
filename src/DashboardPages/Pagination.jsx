import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        currentPage - Math.floor(maxPageNumbersToShow / 2),
        1
      );
      const endPage = Math.min(
        startPage + maxPageNumbersToShow - 1,
        totalPages
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        if (startPage > 2) {
          pageNumbers.unshift("...");
        }
        pageNumbers.unshift(1);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== "..." && paginate(number)}
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === number ? "bg-[#4348BD] text-white" : "bg-gray-300"
        }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded-md mr-2"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 rounded-md ml-2"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
