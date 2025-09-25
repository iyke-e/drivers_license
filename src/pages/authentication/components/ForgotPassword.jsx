import React, { useState } from 'react';

const ForgotPassword = () => {
  const [input, setInput] = useState('johnsmith@gmail.com');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setIsValid(validateInput(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowModal(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Forgot Password
        </h2>
        <p className="text-xl text-gray-500 mb-12">
          Enter your email or phone number and we will send you a reset link
        </p>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label
              htmlFor="input"
              className="block text-lg font-medium text-gray-600 mb-4"
            >
              E-mail or phone number
            </label>

            <input
              id="input"
              type="text"
              value={input}
              onChange={handleInputChange}
              className={`w-full px-5 py-5 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200 bg-gray-50 text-lg ${
                isValid ? 'border-gray-300' : 'border-red-500'
              } ${isValid && input ? 'border-green-500' : ''}`}
              placeholder="johnsmith@gmail.com or +1234567890"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-5 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200"
            disabled={isLoading || !isValid}
          >
            {isLoading ? 'Sending...' : 'Send me the link'}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Success!</h3>
            <p className="text-lg text-gray-600 mb-6">
              A reset link has been sent to your email or phone number.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
