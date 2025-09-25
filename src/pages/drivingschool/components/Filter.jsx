import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { Lens } from "./icons";
import NaijaStates from "naija-state-local-government";

const Filter = ({ setSearchText, stateLgaObj, inputPlaceholder }) => {
    const [filterValue, setFilterValue] = useState("");
    const [lgas, setLgas] = useState([]);
    const states = NaijaStates.states();
    const { selectedState, setSelectedState, selectedLga, setSelectedLga } =
        stateLgaObj;

    // Set searchText with 1 second debounce
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSearchText(filterValue);
        }, 1000);

        return () => clearTimeout(timeOut);
    }, [filterValue]);

    // Set local government areas of the selected state
    useEffect(() => {
        setLgas((prev) => {
            if (selectedState) {
                return NaijaStates.lgas(selectedState).lgas;
            } else {
                return [];
            }
        });
    }, [selectedState]);

    const clearFilter = () => {
        setFilterValue("");
        setSelectedLga("");
        setSelectedState("");
    };

    return (
        <div className="flex items-center justify-between gap-4 md:gap-6 w-full bg-[#F2F2F2] px-6 md:px-16 py-5 rounded-2xl">
            <div className="w-full lg:max-w-[375px] bg-white border pl-4 pr-12 py-3 border-custom-green rounded-full relative">
                <input
                    type="text"
                    name="searchText"
                    className="w-full text-sm text-[#9E9E9E] font-medium outline-none bg-transparent"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    placeholder={inputPlaceholder}
                />

                <Lens className="absolute right-4 inset-y-3" />
            </div>

            <div className="hidden lg:flex items-center gap-5">
                <Dropdown
                    title="State"
                    options={states}
                    selectedOption={selectedState}
                    setSelectedOption={setSelectedState}
                    placeholder="Select State"
                />
                <Dropdown
                    title="LGA"
                    options={lgas}
                    selectedOption={selectedLga}
                    setSelectedOption={setSelectedLga}
                    placeholder="Select LGA"
                />
                {(filterValue || selectedState || selectedLga) && (
                    <button
                        onClick={clearFilter}
                        className="px-6 py-2 bg-custom-green hover:bg-green-800 text-sm font-medium text-white rounded-full"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};

export default Filter;
