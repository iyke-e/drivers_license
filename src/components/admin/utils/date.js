export const formatDate = (dateValue, column) => {
    const dateOptions = { day: "2-digit", month: "short", year: "numeric" };
    const datetimeOptions = {
        day: "2-digit",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };

    if (column === "payment") {
        return new Date(dateValue).toLocaleDateString("en-GB", datetimeOptions);
    } else {
        return new Date(dateValue).toLocaleDateString("en-GB", dateOptions);
    }
};
