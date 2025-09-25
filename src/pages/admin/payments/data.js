import { formatDate } from "../../../components/admin/utils/date";
import { getMonetaryValue } from "../../../components/admin/utils/amount";

export const paymentsData = [
    {
        name: "Alice Johnson",
        licenseId: "#12548796",
        type: "New Application",
        status: "Completed",
        // country: "Nigeria",
        paymentDate: formatDate("11/24/2020", "payment"),
        amount: getMonetaryValue(35000),
        receipt: "#",
    },
    {
        name: "John Doe",
        licenseId: "#12548796",
        type: "Renewal",
        status: "Rejected",
        // country: "Nigeria",
        paymentDate: formatDate("10/12/2024", "payment"),
        amount: getMonetaryValue(40000),
        receipt: "#",
    },
    {
        name: "Jane Smith",
        licenseId: "#12548796",
        type: "Reissue",
        status: "Processing",
        // country: "Nigeria",
        paymentDate: formatDate("3/15/2023", "payment"),
        amount: getMonetaryValue(50000),
        receipt: "#",
    },
    {
        name: "Sani Yusuf Ibrahim",
        licenseId: "#12548796",
        type: "Renewal",
        status: "In Transit",
        // country: "Nigeria",
        paymentDate: formatDate("3/15/2023", "payment"),
        amount: getMonetaryValue(40000),
        receipt: "#",
    },
    {
        name: "Halimah Sadiya Adam",
        licenseId: "#12548796",
        type: "New Application",
        status: "On Hold",
        // country: "Nigeria",
        paymentDate: formatDate("3/15/2023", "payment"),
        amount: getMonetaryValue(35000),
        receipt: "#",
    },
];

export const paymentsColumns = [
    { id: "name", header: "Name" },
    { id: "licenseId", header: "License ID" },
    { id: "type", header: "Type" },
    { id: "status", header: "Status" },
    // { id: "country", header: "Country" },
    { id: "paymentDate", header: "Date" },
    { id: "amount", header: "Amount" },
    { id: "receipt", header: "Receipt" },
];