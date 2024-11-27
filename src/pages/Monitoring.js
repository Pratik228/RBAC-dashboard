import React from "react";
import ActivityLog from "../components/ActivityLog";
import RoleHierarchy from "../components/RoleHierarchy";

const Monitoring = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">System Monitoring</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityLog />
        <RoleHierarchy />
      </div>
    </div>
  );
};

export default Monitoring;
