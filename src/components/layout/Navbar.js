import React, { useState } from "react";
import { Bell, Search, User } from "lucide-react";
import SearchModal from "../search/SearchModal";

const NotificationsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "New User Added",
      description: "John Doe was added as Admin",
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Permission Changed",
      description: "Editor role permissions updated",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="absolute right-0 top-16 mt-2 w-80 bg-background-secondary rounded-lg shadow-lg border border-gray-700 z-50">
      <div className="p-4">
        <h3 className="font-semibold mb-4">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-3 hover:bg-background/50 rounded-lg cursor-pointer"
            >
              <h4 className="font-medium text-sm">{notification.title}</h4>
              <p className="text-xs text-gray-400">
                {notification.description}
              </p>
              <span className="text-xs text-gray-500 mt-1">
                {notification.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg"
      >
        <Search className="h-4 w-4" />
        <span className="text-gray-400">Search...</span>
      </button>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-lg hover:bg-gray-800"
          >
            <Bell className="h-5 w-5 text-gray-400" />
          </button>
          {isNotificationsOpen && (
            <NotificationsPanel onClose={() => setIsNotificationsOpen(false)} />
          )}
        </div>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <span className="text-white">Admin</span>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default Navbar;
