import { useState } from "react";
import {
  MapPin,
  RefreshCcw,
  Shield,
  Upload,
  Camera,
  BadgeCheck,
  UserCheck,
  Users,
} from "lucide-react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import RegistrationSuccessModal from "./RegistrationSuccessModal";
const AgentOnboarding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState({
    lat: "19.0760° N",
    lng: "72.8777° E",
  });

  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="bg-gray-50 min-h-screen p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Agent Onboarding
            </h2>
            <p className="text-gray-500 mb-6">
              Complete the form below to register a new banking correspondent
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Left Section */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">First Name</label>
                    <input
                      className="w-full mt-1 border rounded-md p-2"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Last Name</label>
                    <input
                      className="w-full mt-1 border rounded-md p-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-gray-600">Mobile Number</label>
                  <div className="flex gap-2 mt-1">
                    <input
                      className="flex-1 border rounded-md p-2"
                      type="text"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Send OTP
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-gray-600">Email Address</label>
                  <div className="flex gap-2 mt-1">
                    <input
                      className="flex-1 border rounded-md p-2"
                      type="email"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Verify
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-gray-600">Address</label>
                  <textarea
                    className="w-full border rounded-md p-2"
                    rows="3"
                  ></textarea>
                </div>

                <p className="text-sm text-gray-500 mt-3">
                  <i className="fas fa-map-marker-alt mr-1" /> Location will be
                  auto-tagged on submission
                </p>
                <div className="bg-gray-100 rounded-md p-4 mt-2">
                  <h4 className="text-sm font-medium text-gray-800">
                    Current Location
                  </h4>
                  <div className="flex justify-between text-sm mt-1">
                    <p>
                      Latitude: <strong>19.0760° N</strong>
                    </p>
                    <p>
                      Longitude: <strong>72.8777° E</strong>
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Accuracy: High</p>
                </div>

                <div className="mt-6">
                  <label className="text-sm text-gray-600">
                    Area of Activity
                  </label>
                  <select className="w-full border mt-1 rounded-md p-2">
                    <option>Select Region</option>
                  </select>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Document Verification & Compliance Checks
                  </h3>
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                    <div className="flex gap-4">
                      <p className="text-sm">📱 Mobile Vintage Check</p>
                      <p className="text-sm">🧠 Device Profiling</p>
                    </div>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md">
                      In Progress
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                      "PAN Card",
                      "Aadhaar Card",
                      "GST Certificate",
                      "Live Photo",
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed rounded-md p-4 text-center"
                      >
                        <p className="font-medium">{doc}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {doc === "PAN Card" && "Auto verification enabled"}
                          {doc === "Aadhaar Card" && "With liveliness check"}
                          {doc === "GST Certificate" && "If applicable"}
                          {doc === "Live Photo" && "With liveliness check"}
                        </p>
                        <button className="mt-3 bg-gray-100 w-full py-2 rounded-md text-gray-700 hover:bg-gray-200">
                          {doc === "Live Photo" ? "Capture" : "Upload"}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 bg-gray-50 rounded-md p-4">
                    <h4 className="text-sm font-medium">
                      Automated Verification Status
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                      <p>✅ AML Check</p>
                      <p>👤 PEP Check</p>
                      <p>💳 Credit Score: 750</p>
                      <p>📍 Geo-Tagged</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    ML-Based Risk Assessment
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Overall Risk Score</p>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Low Risk (85/100)
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    <div>
                      <p className="mb-1">Identity Verification Score</p>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full w-[92%]" />
                      </div>
                      <p className="text-right text-xs">92%</p>
                    </div>
                    <div>
                      <p className="mb-1">Financial Stability</p>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="bg-blue-500 h-2 rounded-full w-[78%]" />
                      </div>
                      <p className="text-right text-xs">78%</p>
                    </div>
                    <div>
                      <p className="mb-1">Fraud Probability</p>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="bg-red-500 h-2 rounded-full w-[5%]" />
                      </div>
                      <p className="text-right text-xs">5%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                    <div className="bg-gray-100 p-3 rounded-md">
                      <p className="text-sm text-blue-700">
                        📈 Market Potential
                      </p>
                      <p className="text-md font-semibold">High</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md">
                      <p className="text-sm text-purple-700">
                        👥 Customer Base
                      </p>
                      <p className="text-md font-semibold">Medium</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Social & Behavioral Analysis
                  </h3>
                  <div className="text-sm">
                    <p className="mb-2 flex items-center justify-between">
                      Social Media Footprint
                      <span className="flex gap-2 text-blue-600">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                      </span>
                    </p>
                    <p className="mb-1">Behavioral Score</p>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="bg-green-400 h-2 rounded-full w-[85%]" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md">
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md"
                  >
                    Submit & Create Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {isOpen && <RegistrationSuccessModal />}
      </div>
    </div>
  );
};

export default AgentOnboarding;
