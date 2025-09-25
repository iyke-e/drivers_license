import React from 'react';

const ApplicantTable = () => {
  const applicants = [
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'New Application',
      status: 'Completed',
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Renewal',
      status: 'Processing',
    },
    {
      id: '00003',
      name: 'Darrell Caldwell',
      address: '8587 Frida Ports',
      date: '23 Nov 2019',
      type: 'Reissue',
      status: 'Rejected',
    },
    {
      id: '00004',
      name: 'Gilbert Johnston',
      address: '768 Destiny Lake Suite 600',
      date: '05 Feb 2019',
      type: 'New Application',
      status: 'Completed',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Applicants</h2>
        <div className="flex space-x-2">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Date</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Order Type</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Order Status</option>
          </select>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs font-semibold text-gray-500 uppercase">
            <th className="pb-2">ID</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Address</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id} className="border-t">
              <td className="py-2 text-sm">{applicant.id}</td>
              <td className="py-2 text-sm">{applicant.name}</td>
              <td className="py-2 text-sm">{applicant.address}</td>
              <td className="py-2 text-sm">{applicant.date}</td>
              <td className="py-2 text-sm">{applicant.type}</td>
              <td className="py-2 text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    applicant.status
                  )}`}
                >
                  {applicant.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantTable;
