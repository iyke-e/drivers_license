import React from 'react';

const RecentPaymentList = () => {
  const payments = [
    { name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: '💰' },
    {
      name: 'Deposit Paypal',
      date: '25 January 2021',
      amount: 2500,
      icon: 'P',
    },
    { name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: '💰' },
    {
      name: 'Deposit Paypal',
      date: '25 January 2021',
      amount: 2500,
      icon: 'P',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Payment</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  payment.icon === 'P'
                    ? 'bg-blue-100 text-blue-500'
                    : 'bg-green-100 text-green-500'
                }`}
              >
                {payment.icon}
              </div>
              <div>
                <p className="font-semibold">{payment.name}</p>
                <p className="text-xs text-gray-500">{payment.date}</p>
              </div>
            </div>
            <p className="text-green-500 font-semibold">+${payment.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPaymentList;
