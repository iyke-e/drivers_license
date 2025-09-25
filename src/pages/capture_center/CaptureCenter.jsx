import { useState, useEffect } from "react";
import SchoolCard from "../drivingschool/components/SchoolCard";
import SchoolInfo from "../drivingschool/components/SchoolInfo";
import SchoolsList from "../drivingschool/components/SchoolsList";
import Modal from "../../components/Modal";
import Filter from "../drivingschool/components/Filter";
import { Close } from "../drivingschool/components/icons";
import { centers } from "./constants";

const CaptureCenter = () => {
    const centersData = [
        ...centers,
        ...centers,
        ...centers,
        ...centers,
        ...centers,
        ...centers,
        ...centers,
    ];
    const [filteredCenters, setFilteredCenters] = useState(centersData);
    const [searchText, setSearchText] = useState("");
    const [selectedCenter, setSelectedCenter] = useState(null);
    const [selectedState, setSelectedState] = useState("");
    const [selectedLga, setSelectedLga] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let filteredData = [...centersData];

        // Apply search text filter
        if (searchText) {
            filteredData = filteredData.filter(
                (center) =>
                    center.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    center.address
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    center.email
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    center.state
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    center.phone.includes(searchText)
            );
        }

        // Apply state filter
        if (selectedState) {
            filteredData = filteredData.filter((center) =>
                center.state.toLowerCase().includes(selectedState.toLowerCase())
            );
        }

        // Apply LGA filter
        if (selectedLga) {
            filteredData = filteredData.filter((center) =>
                center.lga.toLowerCase().includes(selectedLga.toLowerCase())
            );
        }

        setFilteredCenters(filteredData);
    }, [searchText, selectedState, selectedLga]);

    const handleCenterClick = (center) => {
        setSelectedCenter(center);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCenter(null);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-14 px-10 md:px-20 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">
                Capture Center
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
                    inputPlaceholder="Search Capture Center..."
                />

                <div className="flex gap-5">
                    <SchoolsList
                        filteredSchools={filteredCenters}
                        selectedSchool={selectedCenter}
                        handleSchoolClick={handleCenterClick}
                    />

                    <div className={`${ selectedCenter ? "" : "w-1/3"} hidden lg:flex flex-col gap-4 self-start border-4 border-[#F4F5F8] p-5 rounded-2xl`}>
                        {selectedCenter ? (
                            <SchoolInfo selectedSchool={selectedCenter} />
                        ) : (
                            <div className="min-h-40">No center selected</div>
                        )}
                    </div>

                    <Modal isOpen={isModalOpen} mode="center Info Modal">
                        <Close
                            onClick={closeModal}
                            className="absolute top-4 right-4 lg:hidden"
                        />
                        <h3 className="text-lg mb-4">{selectedCenter?.name}</h3>
                        {selectedCenter && (
                            <SchoolInfo selectedSchool={selectedCenter} />
                        )}
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default CaptureCenter;
