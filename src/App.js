import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import AgentProfile from "./components/agentProfile/AgentProfile";
import CustomerProfile from "./components/customerProfile/CustomerProfile";
import PayerRiskProfiles from "./components/riskAlerts/PayerRiskProfiles";
import TxnApprovalAss from "./components/transactions/TxnApprovalAss";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";
import ChargebackDashobard from "./components/chargeback/ChargebackDashobard";
import ComplaintDashboard from "./components/complaints/ComplaintDashboard";
import FraudDashboard from "./components/fraudPrevention/FraudDashboard";
import MerchantInfo from "./components/profile/MerchantInfo";
import AgentOnboarding from "./components/agentProfile/AgentOnboarding";
import AgentProfileInfo from "./components/profile/AgentProfileInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent-profiles" element={<AgentProfile />} />
        <Route path="/customer-profiles" element={<CustomerProfile />} />
        <Route path="/risk-alerts" element={<PayerRiskProfiles />} />
        <Route path="/transactions" element={<TxnApprovalAss />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/chargeback" element={<ChargebackDashobard />} />
        <Route path="/complaints" element={<ComplaintDashboard />} />
        <Route path="/fraud-prevention" element={<FraudDashboard />} />
        <Route path="/merchant-info" element={<MerchantInfo />} />
        <Route path="/agent-onboarding" element={<AgentOnboarding />} />
        <Route path="/agent-profile-info" element={<AgentProfileInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
