import React, { useState, useRef } from "react";
import logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bank");
  const [showOTP, setShowOTP] = useState(false);
  const otpRefs = useRef([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowOTP(false);
  };

  const handleOTPInput = (e, index) => {
    const value = e.target.value;
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const renderOTPInputs = () => (
    <div className="flex gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (otpRefs.current[i] = el)}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onInput={(e) => handleOTPInput(e, i)}
          onKeyDown={(e) => handleOTPKeyDown(e, i)}
        />
      ))}
    </div>
  );

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <img src={logo} height="100" width="200" alt="Logo" />
          </div>
          <p className="text-gray-600">
            Secure your transactions with intelligent risk management
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "bank"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("bank")}
            >
              <i className="fa-solid fa-building-columns mr-2" />
              Bank ID
            </button>
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "email"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("email")}
            >
              <i className="fa-regular fa-envelope mr-2" />
              Email
            </button>
          </div>

          {/* Bank ID Login */}
          {activeTab === "bank" && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Identifier
                </label>
                <input
                  type="text"
                  placeholder="Enter your bank ID"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                    <i className="fa-regular fa-eye" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Question 1
                </label>
                <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>Select a security question</option>
                  <option value="maiden">Mother's maiden name?</option>
                  <option value="pet">First pet's name?</option>
                  <option value="city">City of birth?</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Answer
                </label>
                <input
                  type="text"
                  placeholder="Enter your answer"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {!showOTP && (
                <button
                  onClick={() => setShowOTP(true)}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700"
                >
                  Request OTP
                </button>
              )}

              {showOTP && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP
                  </label>
                  {renderOTPInputs()}
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-500">
                      OTP sent to +1 (***) ***-4589
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      Resend OTP
                    </button>
                  </div>
                  {/* <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700">
                    Verify & Login
                  </button> */}

                  <button
                    onClick={handleLogin}
                    className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700"
                  >
                    Verify & Login
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Email Login */}
          {activeTab === "email" && (
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                    <i className="fa-regular fa-eye" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Question 1
                </label>
                <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>Select a security question</option>
                  <option value="school">First school?</option>
                  <option value="street">Street you grew up on?</option>
                  <option value="car">First car?</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Answer
                </label>
                <input
                  type="text"
                  placeholder="Enter your answer"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700">
                Send Verification Email
              </button>
            </div>
          )}
        </div>

        {/* Extra Options */}
        <div className="text-center space-y-4">
          <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
            Forgot Password?
          </span>
          <div className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
              Register Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
