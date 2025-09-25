import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ApplicationBody from "../../../components/layouts/admin/body/ApplicationBody";
import MetricsCard from "../../../components/admin/MetricsCard";
import Table from "../../../components/admin/Table";
import {
    newApplicantsData,
    newApplicantsColumns,
} from "../new-applicants/data";

const Reissue = () => {
    const { setPageName } = useOutletContext();

    useEffect(() => {
        setPageName("Reissue");
    }, []);
    return (
        <ApplicationBody
            metricsCard={
                <MetricsCard
                    title={"Total Reissue"}
                    type={"reissue"}
                    currentTotal={10293}
                    prevTotal={8000}
                />
            }
            table={
                <Table
                    tableData={newApplicantsData}
                    cols={newApplicantsColumns}
                    title="Reissue"
                />
            }
            chart={"chart should be here"}
        />
    );
};

export default Reissue;
