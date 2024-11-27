import React from "react";
import { Card } from "./ui/card";
import { Check, Minus, Shield } from "lucide-react";

const PermissionInheritance = () => {
  const inheritanceRules = {
    Admin: {
      inheritsFrom: null,
      permissions: ["create", "read", "update", "delete"],
    },
    Manager: {
      inheritsFrom: "Admin",
      permissions: ["create", "read", "update"],
    },
    Editor: {
      inheritsFrom: "Manager",
      permissions: ["read", "update"],
    },
    Viewer: {
      inheritsFrom: "Editor",
      permissions: ["read"],
    },
  };

  const permissionTypes = ["create", "read", "update", "delete"];

  return (
    <Card className="p-6 bg-background-secondary overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Permission Inheritance</h2>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left pb-4 pl-4">Role</th>
            {permissionTypes.map((type) => (
              <th key={type} className="text-center pb-4 px-4 capitalize">
                {type}
              </th>
            ))}
            <th className="text-left pb-4 pl-4">Inherits From</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(inheritanceRules).map(
            ([role, { inheritsFrom, permissions }]) => (
              <tr key={role} className="border-b border-gray-700/50">
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    {role}
                  </div>
                </td>
                {permissionTypes.map((perm) => (
                  <td key={perm} className="text-center py-4">
                    {permissions.includes(perm) ? (
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    ) : (
                      <Minus className="h-4 w-4 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
                <td className="py-4 pl-4 text-gray-400">
                  {inheritsFrom ? (
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-400" />
                      {inheritsFrom}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default PermissionInheritance;
