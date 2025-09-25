import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/admin/Table";
import {
    newApplicantsColumns,
    newApplicantsData,
} from "../new-applicants/data";

const Vio = () => {
    const { setPageName } = useOutletContext();

    useEffect(() => {
        setPageName("VIO Screen");
    }, []);

    return (
        <div>
            <Table
                tableData={newApplicantsData}
                cols={newApplicantsColumns}
                title="All Applicants"
            />
        </div>
    );
};

export default Vio;
