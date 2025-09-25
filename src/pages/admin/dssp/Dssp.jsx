import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/admin/Table";
import {
    newApplicantsColumns,
    newApplicantsData,
} from "../new-applicants/data";

const Dssp = () => {
    const { setPageName } = useOutletContext();

    useEffect(() => {
        setPageName("DSSP Request");
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

export default Dssp;
