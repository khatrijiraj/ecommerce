// components/admin/SettingsPage.tsx

import React from "react";

const SettingsPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mb-4">Settings</h2>
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">General Settings</h3>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <label className="block mb-1">Theme</label>
          <select className="border rounded-md px-2 py-1">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <label className="block mb-1">Language</label>
          <select className="border rounded-md px-2 py-1">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
      <div className="mt-4 bg-white rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <label className="block mb-1">Change Password</label>
          <input
            type="password"
            className="border rounded-md px-2 py-1"
            placeholder="Enter new password"
          />
        </div>
        <div className="border-t border-gray-200 mt-2 pt-2">
          <label className="block mb-1">Email Notifications</label>
          <select className="border rounded-md px-2 py-1">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
      </div>
      <button className="mt-4 bg-blue-700 text-white  hover:bg-[#4285F4]/90 py-2 px-4 rounded-md">
        Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
