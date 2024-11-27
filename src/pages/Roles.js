import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Search, Shield, Users, Edit, Trash2 } from "lucide-react";
import { RoleModal } from "../components/ui/modals/RoleModal";

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles] = useState([
    {
      id: 1,
      name: "Admin",
      users: 5,
      permissions: ["All Access"],
      description: "Full system access with all privileges",
    },
    {
      id: 2,
      name: "Editor",
      users: 12,
      permissions: ["Create", "Edit", "Delete"],
      description: "Can manage content and basic settings",
    },
    {
      id: 3,
      name: "Viewer",
      users: 45,
      permissions: ["View"],
      description: "Read-only access to system content",
    },
  ]);

  const handleAddRole = () => {
    setSelectedRole(null);
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Roles Management</h1>
        <button
          onClick={handleAddRole}
          className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg"
        >
          <Shield className="h-4 w-4" />
          Create Role
        </button>
      </div>

      <div className="grid gap-4">
        {roles.map((role) => (
          <Card key={role.id} className="p-6 bg-background-secondary">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{role.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{role.users} Users</span>
                    </div>
                    <div className="flex gap-2">
                      {role.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditRole(role)}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <RoleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={selectedRole}
      />
    </div>
  );
};

export default Roles;
