import React from "react";
import { Pencil, Upload, Calendar, Camera } from "lucide-react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function CustomerProfileEdit() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6 font-sans">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">Edit Customer Profile</h2>
                <p className="text-sm text-gray-500">Customer ID: BC25478</p>
              </div>

              <div className="flex justify-end space-x-4">
                <button className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded">
                  Re-verification Required
                </button>
                <button
                  onClick={() => navigate("/customer-profiles")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Personal Information */}
              <div className="col-span-2 bg-white shadow rounded p-6 space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>

                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                      <Camera className="h-4 w-4 text-blue-500" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Click to update profile photo
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Full Name
                    </label>
                    <div className="flex items-center border rounded px-2">
                      <input
                        className="w-full p-2 border-none outline-none"
                        defaultValue="Rajesh Kumar"
                      />
                      <Pencil className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Email
                    </label>
                    <div className="flex items-center border rounded px-2">
                      <input
                        className="w-full p-2 border-none outline-none"
                        defaultValue="rajesh.k@gmail.com"
                      />
                      <Pencil className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Phone Number
                    </label>
                    <div className="flex items-center border rounded px-2">
                      <input
                        className="w-full p-2 border-none outline-none"
                        defaultValue="+91 98765 43210"
                      />
                      <Pencil className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Date of Birth
                    </label>
                    <div className="flex items-center border rounded px-2">
                      <input
                        className="w-full p-2 border-none outline-none"
                        defaultValue="15-05-1990"
                      />
                      <Calendar className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Status */}
              <div className="bg-white shadow rounded p-6 space-y-4">
                <h3 className="text-lg font-semibold">Document Status</h3>
                {[
                  { type: "PAN Card", value: "ABCDE1234F" },
                  { type: "Aadhaar Card", value: "XXXX XXXX 1234" },
                  { type: "GST Certificate", value: "29ABCDE1234F1Z5" },
                ].map((doc) => (
                  <div key={doc.type} className="space-y-1 border p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{doc.type}</span>
                      <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
                        Unverified
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{doc.value}</span>
                      <span className="text-blue-500 flex items-center cursor-pointer">
                        <Upload className="h-4 w-4 mr-1" /> Upload New
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Re-verification Notice */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 text-sm space-y-2 rounded">
              <p className="font-semibold">Re-verification Required</p>
              <p>Any changes to documents will require:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>PEP (Politically Exposed Person) Check</li>
                <li>Silent Authentication</li>
                <li>Document Verification</li>
              </ul>
            </div>

            {/* Buttons */}
          </div>
        </main>
      </div>
    </div>
  );
}
