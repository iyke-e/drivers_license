import React from 'react';
import WelcomeEmail from '../../../assets/images/Mail.png';

const WelcomeModal = ({ name, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 flex flex-col items-center">
          <div className="w-24 h-24 mb-6">
            <img
              src={WelcomeEmail}
              alt="Envelope"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-green-600 mb-4">Hi! {name}</h2>

          <p className="text-gray-600 text-center mb-8">
            A confirmation message has been sent to your inbox
          </p>

          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            Confirm your Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
