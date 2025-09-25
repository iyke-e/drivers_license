import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = (props) => {
    console.log({...props.value, ...props.data})
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
            <div className="flex items-center">
                {props.index}
            </div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.value.applicationId}
        </th>
        <td className="px-6 py-4">
            {props.value.applicationType}
        </td>
        <td className="px-6 py-4">
            {props.value.applicationDate}
        </td>
        <td className="px-6 py-4">
            {props.value.applicationTime}
        </td>
        <td className="px-6 py-4">
            <Link to="/appointment" state={{...props.data,...props.value}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Print</Link>
        </td>
    </tr>
    )
}

export default TableRow
