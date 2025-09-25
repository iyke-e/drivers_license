import React, { useState } from "react";
import SchoolCard from "./SchoolCard";
import { ChevronNext, ChevronPrevious } from "./icons";

const SchoolsList = ({
    filteredSchools,
    selectedSchool,
    handleSchoolClick,
}) => {
    // Define state to keep track of the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Set number of items to display per page
    const itemsPerpage = 10;

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredSchools.length / itemsPerpage);

    // Get the data to display on the current page
    const currentPageData =
        filteredSchools.length > itemsPerpage
            ? filteredSchools.slice(
                  (currentPage - 1) * itemsPerpage,
                  currentPage * itemsPerpage
              )
            : filteredSchools;

    // Handle navigation to a specific page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Helper function to generate the page numbers for pagination buttons
    const getPageNumbers = () => {
        const pageNumbers = [];
        const ellipsis = "...";

        // Display pages based on the current page and total pages
        if (totalPages <= 5) {
            // Display all pages when total pages are less than or equal to 5
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > 2) {
                // Show the first page and ellipsis if the current page is greater than 3
                pageNumbers.push(1);
                if (currentPage > 3) pageNumbers.push(ellipsis);
            }

            // Add the current page and pages around it
            for (
                let i = Math.max(1, currentPage - 1);
                i <= Math.min(currentPage + 1, totalPages);
                i++
            ) {
                pageNumbers.push(i);
            }

            // Add ellipsis and last page if the current page is not near the last page
            if (currentPage < totalPages - 1) {
                if (currentPage < totalPages - 2) pageNumbers.push(ellipsis);
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    // Handle navigation to previous page
    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    // Handle navigation to next page
    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="w-full flex flex-col gap-4 border-4 border-[#F4F5F8] p-5 rounded-2xl">
            {currentPageData.length > 0 ? (
                currentPageData.map((school, index) => (
                    <SchoolCard
                        key={index}
                        school={school}
                        selectedSchool={selectedSchool}
                        onClick={handleSchoolClick}
                    />
                ))
            ) : (
                <div className="min-h-40">
                    No driving school matches the search term
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-stretch gap-2 mt-4">
                    {/* Previous Page Button */}
                    <button
                        onClick={() =>
                            handlePageChange(Math.max(currentPage - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        <ChevronPrevious />
                    </button>

                    {/* Page Number Buttons */}
                    <div className="hidden md:flex gap-2">
                        {getPageNumbers().map((pageNumber, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    typeof pageNumber === "number" &&
                                    handlePageChange(pageNumber)
                                }
                                className={`px-3 py-2 border rounded ${
                                    pageNumber === currentPage
                                        ? "bg-custom-green text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                }`}
                                disabled={pageNumber === "..."}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                    {/* Next Page Button */}
                    <button
                        onClick={() =>
                            handlePageChange(
                                Math.min(currentPage + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                        <ChevronNext />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SchoolsList;
