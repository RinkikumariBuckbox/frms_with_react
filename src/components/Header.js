import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
      <div className="flex items-center">
        <i className="fa-solid fa-shield-halved text-blue-600 text-xl mr-2"></i>
        <span className="text-xl font-semibold text-gray-800">RiskGuard</span>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <i className="fa-solid fa-bell text-gray-600"></i>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
          <i className="fa-solid fa-plus mr-2"></i>New Analysis
        </button>
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
          alt="Profile"
          onClick={() => navigate("/merchant-info")}
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
