import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Check, Minus, Save } from "lucide-react";
import PermissionInheritance from "../components/PermissionInheritance";

const Permissions = () => {
  const [activeTab, setActiveTab] = useState("matrix");
  const [permissions, setPermissions] = useState({
    "Users Management": {
      Admin: { create: true, read: true, update: true, delete: true },
      Editor: { create: true, read: true, update: true, delete: false },
      Viewer: { create: false, read: true, update: false, delete: false },
    },
    "Roles Management": {
      Admin: { create: true, read: true, update: true, delete: true },
      Editor: { create: false, read: true, update: false, delete: false },
      Viewer: { create: false, read: true, update: false, delete: false },
    },
    Settings: {
      Admin: { create: true, read: true, update: true, delete: true },
      Editor: { create: false, read: true, update: false, delete: false },
      Viewer: { create: false, read: false, update: false, delete: false },
    },
  });

  const togglePermission = (module, role, action) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [role]: {
          ...prev[module][role],
          [action]: !prev[module][role][action],
        },
      },
    }));
  };

  const PermissionCell = ({ checked }) => (
    <div
      className={`w-6 h-6 rounded flex items-center justify-center
      ${checked ? "bg-primary/20 text-primary" : "bg-gray-800 text-gray-600"}`}
    >
      {checked ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Permissions Matrix</h1>
        <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="flex space-x-4 border-b border-gray-700">
        <button
          className={`px-4 py-2 ${
            activeTab === "matrix"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("matrix")}
        >
          Permissions Matrix
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "inheritance"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("inheritance")}
        >
          Role Inheritance
        </button>
      </div>
      {activeTab === "matrix" ? (
        <Card className="p-6 bg-background-secondary overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Module/Action</th>
                <th className="px-4 pb-4" colSpan={4}>
                  Admin
                </th>
                <th className="px-4 pb-4" colSpan={4}>
                  Editor
                </th>
                <th className="px-4 pb-4" colSpan={4}>
                  Viewer
                </th>
              </tr>
              <tr className="border-b border-gray-700">
                <th className="py-2"></th>
                {["Admin", "Editor", "Viewer"].map((role) => (
                  <React.Fragment key={role}>
                    <th className="px-4 py-2 font-normal">Create</th>
                    <th className="px-4 py-2 font-normal">Read</th>
                    <th className="px-4 py-2 font-normal">Update</th>
                    <th className="px-4 py-2 font-normal">Delete</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(permissions).map(([module, roles]) => (
                <tr key={module} className="border-b border-gray-700/50">
                  <td className="py-4 font-medium">{module}</td>
                  {Object.entries(roles).map(([role, actions]) =>
                    Object.entries(actions).map(([action, value]) => (
                      <td key={`${role}-${action}`} className="px-4 py-4">
                        <button
                          onClick={() => togglePermission(module, role, action)}
                          className="hover:scale-110 transition-transform"
                        >
                          <PermissionCell checked={value} />
                        </button>
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <PermissionInheritance />
      )}
    </div>
  );
};

export default Permissions;
