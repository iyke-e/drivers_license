import React, { forwardRef, useState } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import FilterIcon from "./icons/FilterIcon";
import CalendarIcon from "./icons/CalendarIcon";

import { formatDate } from "./utils/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ columnFilters, setColumnFilters }) => {
    const [startDate, setStartDate] = useState();

    // Get the current type filter value
    const typeFilterValue =
        columnFilters.find((f) => f.id === "type")?.value || "";

    // Get the current status filter value
    const statusFilterValue =
        columnFilters.find((f) => f.id === "status")?.value || "";

    const handleChange = (id, value) => {
        if (value) {
            setColumnFilters((prev) =>
                prev.filter((f) => f.id !== id).concat({ id, value })
            );
        } else {
            setColumnFilters((prev) => prev.filter((f) => f.id !== id));
        }
    };

    const handleDateChange = (id, value) => {
        setColumnFilters((prev) =>
            prev.filter((f) => f.id !== id).concat({ id, value })
        );
    };

    const removeDateFilter = () => {
        setColumnFilters((prev) => prev.filter((f) => f.id !== "dateApplied"));
    };

    const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
        <div className="flex justify-between items-center gap-4">
            <h4 className="text-sm">Date</h4>

            <button className="" onClick={onClick} ref={ref}>
                <CalendarIcon />
            </button>

            {columnFilters.some((filter) => filter.id === "dateApplied") && (
                <button onClick={removeDateFilter}>
                    <IoMdCloseCircle className="text-red-600 size-4 cursor-pointer" />
                </button>
            )}
        </div>
    ));

    return (
        <div className="flex flex-col md:flex-row items-center md:divide-x border rounded-lg font-medium text-sm shadow-sm">
            <div className="p-4 hidden md:block">
                <FilterIcon />
            </div>

            <div className="p-4 hidden md:block">
                <p className="whitespace-nowrap">Filter By</p>
            </div>

            <div className="p-4 relative">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        const formattedDate = formatDate(date, "application");
                        setStartDate(formattedDate);
                        handleDateChange("dateApplied", formattedDate);
                    }}
                    customInput={<CustomDateInput />}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"                    
                />
            </div>

            <div className="p-4">
                <select
                    name="type"
                    id="type"
                    className="bg-transparent outline-none"
                    value={typeFilterValue}
                    onChange={(e) => handleChange("type", e.target.value)}
                >
                    <option value="">Order Type</option>
                    <option value="New Application">New Application</option>
                    <option value="Renewal">Renewal</option>
                    <option value="Reissue">Reissue</option>
                </select>
            </div>

            <div className="p-4">
                <select
                    name="status"
                    id="status"
                    className="pr-6 bg-transparent outline-none"
                    value={statusFilterValue}
                    onChange={(e) => handleChange("status", e.target.value)}
                >
                    <option value="">Order Status</option>
                    <option value="Completed" className="">
                        Completed
                    </option>
                    <option value="Processing">Processing</option>
                    <option value="In Transit">In Transit</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            {columnFilters.length !== 0 && (
                <div className="p-4">
                    <IoMdCloseCircle
                        className="hidden md:block text-red-600 size-6 cursor-pointer"
                        onClick={() => setColumnFilters([])}
                    />

                    <button className="md:hidden p-2 text-center bg-red-600 text-white rounded-lg" onClick={() => setColumnFilters([])}>Clear Filters</button>
                </div>
            )}
        </div>
    );
};

export default Filter;
