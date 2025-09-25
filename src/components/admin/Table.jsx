import React, { forwardRef, useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    createColumnHelper,
    flexRender,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { MdFilterList, MdClose } from "react-icons/md";

import Pagination from "./Pagination";
import Filter from "./Filter";
import Modal from "../Modal";
import { formatDate } from "./utils/date";

const Table = ({ tableData, cols, title }) => {
    const [data] = useState(tableData);
    const [columnFilters, setColumnFilters] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const columnHelper = createColumnHelper();
    const columns = cols.map((col) => {
        if (col.id === "paymentDate") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => formatDate(info.getValue(), "payment"),
            });
        }

        if (col.id === "dateApplied") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => formatDate(info.getValue(), "application"),
                filterFn: "includesString",
            });
        }

        if (col.id === "status") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => {
                    const value = info.getValue();

                    return (
                        <div
                            className={`status-pill ${
                                value === "Completed"
                                    ? "bg-green-200 text-green-800"
                                    : value === "Processing"
                                    ? "bg-blue-200 text-blue-800"
                                    : value === "On Hold"
                                    ? "bg-orange-200 text-orange-800"
                                    : value === "In Transit"
                                    ? "bg-purple-200 text-purple-800"
                                    : "bg-red-200 text-red-800"
                            }`}
                        >
                            {value}
                        </div>
                    );
                },
            });
        }

        if (col.id === "receipt") {
            return columnHelper.accessor("receipt", {
                id: col.id,
                header: col.header,
                cell: (info) => (
                    <Link
                        to={info.getValue()}
                        className="px-3 py-2 rounded-full text-xs text-[#123288] border border-[#123288]                    "
                    >
                        Download
                    </Link>
                ),
            });
        }

        if (col.id === "type") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => (
                    <span>{info.getValue() ? info.getValue() : "-"}</span>
                ),
            });
        }

        if (col.id === "address") {
            return columnHelper.accessor(col.id, {
                id: col.id,
                header: col.header,
                cell: (info) => (
                    <span>
                        {info.getValue().length <= 30
                            ? info.getValue()
                            : `${info.getValue().substring(0, 30)}...`}
                    </span>
                ),
                filterFn: "includesString",
            });
        }

        return columnHelper.accessor(col.id, {
            id: col.id,
            header: col.header,
            cell: (info) => (
                <span>{info.getValue() ? info.getValue() : "-"}</span>
            ),
            filterFn: "includesString",
        });
    });

    // Table instance
    const table = useReactTable({
        data,
        columns,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        state: {
            columnFilters,
        },
    });

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-row justify-between items-start md:items-center gap-6">
                <h3 className="font-inter font-semibold text-[#343C6A] text-xl">
                    {title}
                </h3>

                <div className="hidden md:flex">
                    <Filter
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                </div>

                <div className="md:hidden">
                    <MdFilterList
                        onClick={() => setIsFilterOpen(true)}
                        className="text-3xl text-[#343C6A]"
                    />
                </div>
            </div>

            <div className="overflow-auto rounded-2xl border shadow-lg">
                <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-[#FCFDFD] dark:bg-gray-700 w-full">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="th">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="bg-white divide-y w-full divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row, i) => (
                                <tr
                                    key={row.id}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="table-data"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr className="text-center h-32">
                                <td colSpan={12}>No record found!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <Pagination table={table} tableData={tableData} />

            {/* Mobile Filter Modal */}
            <Modal isOpen={isFilterOpen}>
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Filter</h3>
                    <MdClose className="absolute top-0 right-4 text-2xl" onClick={() => setIsFilterOpen(false)} />
                    <Filter
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Table;
