import React from "react";

const ProcedureListItem = ({ listItemData }) => {
    return (
        <div className="flex items-start md:items-center gap-3 md:gap-6">
            <span className="flex justify-center items-center w-8 md:w-14 h-8 md:h-14 p-2 md:p-4 text-lg md:text-2xl font-bold bg-custom-green text-white rounded-full">
                {listItemData.id}
            </span>

            <p className="flex-1 md:text-lg text-grey leading-relaxed">{listItemData.description}</p>
        </div>
    );
};

export default ProcedureListItem;
