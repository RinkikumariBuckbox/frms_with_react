import React from "react";
import {
  LineChartIcon,
  UserIcon,
  UsersIcon,
  AlertTriangleIcon,
  CreditCardIcon,
  PieChartIcon,
  TrendingUpIcon,
  MessageCircleIcon,
  ShieldIcon,
  SlidersIcon,
  SettingsIcon,
  PlugIcon,
  FileTextIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    section: "Main Menu",
    items: [
      {
        name: "Dashboard",
        icon: <LineChartIcon size={18} />,
        path: "/dashboard",
        active: true,
      },
      {
        name: "Agent Profiles",
        icon: <UserIcon size={18} />,
        path: "/agent-profiles",
      },
      {
        name: "Customer Profiles",
        icon: <UsersIcon size={18} />,
        path: "/customer-profiles",
      },
      {
        name: "Risk Alerts",
        icon: <AlertTriangleIcon size={18} />,
        path: "/risk-alerts",
      },
      {
        name: "Transactions",
        icon: <CreditCardIcon size={18} />,
        path: "/transactions",
      },
      {
        name: "Analytics",
        icon: <PieChartIcon size={18} />,
        path: "/analytics",
      },
    ],
  },
  {
    section: "Risk Management",
    items: [
      {
        name: "Chargebacks",
        icon: <TrendingUpIcon size={18} />,
        badge: 12,
        badgeColor: "bg-red-100 text-red-700",
        path: "/chargeback",
      },
      {
        name: "Complaints",
        icon: <MessageCircleIcon size={18} />,
        badge: 5,
        badgeColor: "bg-yellow-100 text-yellow-700",
        path: "/complaints",
      },
      {
        name: "Fraud Prevention",
        icon: <ShieldIcon size={18} />,
        path: "/fraud-prevention",
      },
      { name: "Risk Settings", icon: <SlidersIcon size={18} /> },
    ],
  },
  {
    section: "System",
    items: [
      { name: "Settings", icon: <SettingsIcon size={18} /> },
      { name: "Integrations", icon: <PlugIcon size={18} /> },
      { name: "Export Data", icon: <FileTextIcon size={18} /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-6">
      {menu.map((section, idx) => (
        <div key={idx}>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
            {section.section}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium space-x-3 hover:bg-gray-100 transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.icon}
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
