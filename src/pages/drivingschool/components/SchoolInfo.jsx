import React from "react";
import FlexItem from "./FlexItem";
import ActionButton from "./ActionButton";
import {
    Clock,
    Home,
    PhoneDark,
    PhoneCall,
    EnvelopeDark,
    EnvelopeWhite,
    Action,
    BoxArchive,
    Close
} from "./icons";

const SchoolInfo = ({ selectedSchool }) => {
    return (
        <div className="space-y-9">
            <div className="bg-white px-6 py-5 space-y-6 rounded-xl shadow-custom-shadow">
            {/* <Close className="absolute top-4 right-6 lg:hidden" /> */}
                <div className="space-y-2">
                    <h5 className="text-xs font-bold text-[#1D1E21]">
                        Contacts
                    </h5>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <FlexItem
                            icon={<PhoneDark className="flex-none" />}
                            text={selectedSchool.phone}
                            textStyles="text-sm"
                        />

                        <FlexItem
                            icon={<EnvelopeDark className="flex-none" />}
                            text={selectedSchool.email}
                            textStyles="text-sm"
                        />
                    </div>

                    <FlexItem
                        icon={<Home className="flex-none" />}
                        text={selectedSchool.address}
                        textStyles="text-sm"
                    />
                </div>

                <div className="space-y-2">
                    <h5 className="text-xs font-bold text-[#1D1E21]">
                        Meeting with representative
                    </h5>

                    <FlexItem
                        icon={<Clock className="flex-none" />}
                        text={"Not Arranged"}
                        textStyles="text-sm"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <FlexItem
                    icon={<Action className="flex-none" />}
                    text={"Actions"}
                    textStyles="text-lg font-medium"
                />

                <div className="flex items-center justify-between gap-3">
                    <ActionButton
                        styles="text-white bg-custom-green hover:bg-green-800"
                        icon={<PhoneCall className="flex-none" />}
                    >
                        Call
                    </ActionButton>
                    <ActionButton
                        styles="text-white bg-[#438AF9] hover:bg-blue-500"
                        icon={<EnvelopeWhite className="flex-none" />}
                    >
                        Mail
                    </ActionButton>
                </div>

                <ActionButton
                    styles="text-[#1D1E21] bg-[#F4F5F8] hover:bg-neutral-200"
                    icon={<BoxArchive className="flex-none" />}
                >
                    Book Appointment
                </ActionButton>
            </div>
        </div>
    );
};

export default SchoolInfo;
