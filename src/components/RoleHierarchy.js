import React from "react";
import { Card } from "../components/ui/card";

const RoleHierarchy = () => {
  const roleHierarchy = {
    name: "Admin",
    children: [
      {
        name: "Manager",
        children: [
          {
            name: "Editor",
            children: [
              {
                name: "Viewer",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  const RoleNode = ({ node, level = 0 }) => (
    <div className="relative">
      <div
        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-gray-700"
        style={{ marginLeft: `${level * 40}px` }}
      >
        <div className="p-2 rounded-full bg-primary/10">
          <span className="font-medium">{node.name}</span>
        </div>
      </div>
      {node.children?.map((child, index) => (
        <div key={index} className="mt-4">
          <div
            className="absolute w-px bg-gray-700"
            style={{
              left: `${level * 40 + 20}px`,
              top: "48px",
              height: "24px",
            }}
          />
          <RoleNode node={child} level={level + 1} />
        </div>
      ))}
    </div>
  );

  return (
    <Card className="p-6 bg-background-secondary">
      <h2 className="text-lg font-semibold mb-6">Role Hierarchy</h2>
      <RoleNode node={roleHierarchy} />
    </Card>
  );
};

export default RoleHierarchy;
