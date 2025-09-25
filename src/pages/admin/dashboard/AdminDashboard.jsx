
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import React from 'react';
import StatCard from './components/StatCard';
import WeeklyApplicantChart from './components/WeeklyApplicantChart';
import RecentPaymentList from './components/RecentPaymentList';
import ApplicantTable from './components/ApplicantTable';


const AdminDashboard = () => {

  const { setPageName, pageName } = useOutletContext()

  useEffect(() => {
    setPageName('Overview')
  }, [])

  return (


    <>

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total New Applicant"
              value="40,689"
              icon={{
                component: <span className="text-purple-500">👤</span>,
                bgColor: 'bg-purple-100',
              }}
              change="8.5% Up from yesterday"
              changeType="up"
            />
            <StatCard
              title="Total Reissue"
              value="10293"
              icon={{
                component: <span className="text-yellow-500">📦</span>,
                bgColor: 'bg-yellow-100',
              }}
              change="1.3% Up from past week"
              changeType="up"
            />
            <StatCard
              title="Total Renewal"
              value="89000"
              icon={{
                component: <span className="text-green-500">📈</span>,
                bgColor: 'bg-green-100',
              }}
              change="4.3% Down from yesterday"
              changeType="down"
            />
            <StatCard
              title="Total Completed"
              value="2040"
              icon={{
                component: <span className="text-red-500">🕒</span>,
                bgColor: 'bg-red-100',
              }}
              change="1.8% Up from yesterday"
              changeType="up"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2">
              <WeeklyApplicantChart />
            </div>
            <div>
              <RecentPaymentList />
            </div>
          </div>
          <ApplicantTable />
        </div>
      </div>
    </>
  );
};


export default AdminDashboard;
