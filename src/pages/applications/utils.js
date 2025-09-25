export const hasEmptyValue = (formData) => {
    return Object.values(formData).some((value) => Boolean(value) === false);
};

export const biodataFormValid = (formData) => {
    const requiredProps = [
        "first_name",
        "last_name",
        "gender",
        "date_of_birth",
        "mothers_maiden_name",
        "nin",
        "passport_photo",
        "vehicle_type"
    ];

    for (let prop of requiredProps) {
        if (!formData[prop] || formData[prop].trim() === "") return false;
    }
    return true;
};
