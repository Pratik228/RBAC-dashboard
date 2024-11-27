import React from "react";
import { NavLink } from "react-router-dom";
import { Users, Shield, Key, LayoutDashboard, Activity } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Shield, label: "Roles", path: "/roles" },
    { icon: Key, label: "Permissions", path: "/permissions" },
    { icon: Activity, label: "Monitoring", path: "/monitoring" },
  ];

  return (
    <div className="fixed h-full w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-500">VRV Security</h2>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
