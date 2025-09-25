import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/admin/Table";
import { paymentsColumns, paymentsData } from "./data";

const Payments = () => {
    const { setPageName } = useOutletContext();

    useEffect(() => {
        setPageName("Payment");
    }, []);

    return (
        <div className="space-y-5">
            <div className="">Chart here</div>

            <div className="">
                <Table
                    tableData={paymentsData}
                    cols={paymentsColumns}
                    title="All Payments"
                />
            </div>
        </div>
    );
};

export default Payments;
