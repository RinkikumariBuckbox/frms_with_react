import React from "react";
import { Download, FileCheck, Mail, Phone } from "lucide-react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MerchantInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mt-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Merchant Information</h2>
              <div className="flex items-center space-x-2">
                <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  Active
                </span>
                <span className="text-sm text-gray-600">MER123456789</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Business Information */}
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Business Information
                </h3>
                <p>
                  <strong>Business Name:</strong> Acme Store
                </p>
                <p>
                  <strong>Business Type:</strong> Retail
                </p>
                <p>
                  <strong>GST Number:</strong> 22AAAAA0000A1Z5
                </p>
                <p>
                  <strong>PAN Number:</strong> AAAAA0000A
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Contact Information
                </h3>
                <p>
                  <strong>Email:</strong> contact@acmestore.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 9876543210
                </p>
                <p>
                  <strong>Address:</strong> 123 Business District
                </p>
                <p>
                  <strong>City/State:</strong> Mumbai, Maharashtra
                </p>
              </div>
            </div>

            {/* Verification Status */}
            <h3 className="font-medium text-gray-800 mb-2">
              Verification Status
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border p-4 rounded-md hover:bg-gray-100">
                <p className="font-medium">KYC Status</p>
                <p className="text-gray-600">Verified</p>
              </div>
              <div className="border p-4 rounded-md hover:bg-gray-100">
                <p className="font-medium">PEP Check</p>
                <p className="text-gray-600">Cleared</p>
              </div>
              <div className="border p-4 rounded-md hover:bg-gray-100">
                <p className="font-medium">AML Status</p>
                <p className="text-gray-600">Verified</p>
              </div>
            </div>

            {/* Documents Section */}
            <h3 className="font-medium text-gray-800 mb-2">Documents</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "Business Registration",
                "PAN Card",
                "GST Certificate",
                "Bank Statements",
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border p-3 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <FileCheck className="w-4 h-4 text-gray-600" />
                    <span>{doc}</span>
                  </span>
                  <Download className="w-4 h-4 text-gray-600 cursor-pointer" />
                </div>
              ))}
            </div>

            {/* Support Section */}
            <div className="border p-4 rounded-md bg-gray-50">
              <p className="font-medium mb-2">Need to Update Information?</p>
              <p className="text-sm text-gray-600 mb-2">
                Contact our support team for any changes or updates to your
                information
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>support@merchantpay.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>1800-123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MerchantInfo;
