import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import SchoolInfo from "./components/SchoolInfo";
import SchoolsList from "./components/SchoolsList";
import Modal from "../../components/Modal";
import { Close } from "./components/icons";
import { schools } from "./constants";

const DrivingSchool = () => {
    const schoolsData = [
        ...schools,
        ...schools,
        ...schools,
        ...schools,
        ...schools,
        ...schools,
        ...schools,
    ];
    const [filteredSchools, setFilteredSchools] = useState(schoolsData);
    const [searchText, setSearchText] = useState("");
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [selectedState, setSelectedState] = useState("");
    const [selectedLga, setSelectedLga] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let filteredData = [...schoolsData];

        // Apply search text filter
        if (searchText) {
            filteredData = filteredData.filter(
                (school) =>
                    school.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.address
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.email
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.state
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.phone.includes(searchText)
            );
        }

        // Apply state filter
        if (selectedState) {
            filteredData = filteredData.filter((school) =>
                school.state.toLowerCase().includes(selectedState.toLowerCase())
            );
        }

        // Apply LGA filter
        if (selectedLga) {
            filteredData = filteredData.filter((school) =>
                school.lga.toLowerCase().includes(selectedLga.toLowerCase())
            );
        }

        setFilteredSchools(filteredData);
    }, [searchText, selectedState, selectedLga]);

    const handleSchoolClick = (school) => {
        setSelectedSchool(school);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedSchool(null);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-14 px-10 md:px-20 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">
                Driving School
            </h1>
            <div className="space-y-8">
                <Filter
                    setSearchText={setSearchText}
                    stateLgaObj={{
                        selectedState,
                        setSelectedState,
                        selectedLga,
                        setSelectedLga,
                    }}
                    inputPlaceholder="Search Driving School..."
                />

                <div className="flex gap-5">
                    <SchoolsList
                        filteredSchools={filteredSchools}
                        selectedSchool={selectedSchool}
                        handleSchoolClick={handleSchoolClick}
                    />

                    <div className={`${ selectedSchool ? "" : "w-1/3"} hidden lg:flex flex-col gap-4 self-start border-4 border-[#F4F5F8] p-5 rounded-2xl`}>
                        {selectedSchool ? (
                            <SchoolInfo selectedSchool={selectedSchool} />
                        ) : (
                            <div className="min-h-40">No school selected</div>
                        )}
                    </div>

                    <Modal isOpen={isModalOpen} mode="school Info Modal">
                        <Close onClick={closeModal} className="absolute top-4 right-4 lg:hidden" />
                        <h3 className="text-lg mb-4">{selectedSchool?.name}</h3>
                        {selectedSchool && (
                            <SchoolInfo selectedSchool={selectedSchool} />
                        )}
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default DrivingSchool;
