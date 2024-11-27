import React from "react";
import { Card } from "../components/ui/card";
import { UserPlus, Settings, Shield, Key, AlertCircle } from "lucide-react";

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      type: "user",
      action: "created",
      subject: "New user John Doe",
      timestamp: "2 minutes ago",
      actor: "Admin",
      icon: UserPlus,
    },
    {
      id: 2,
      type: "role",
      action: "modified",
      subject: "Editor role permissions",
      timestamp: "1 hour ago",
      actor: "Admin",
      icon: Shield,
    },
  ];

  const getActivityIcon = (type) => {
    const icons = {
      user: UserPlus,
      role: Shield,
      permission: Key,
      settings: Settings,
      alert: AlertCircle,
    };
    return icons[type] || AlertCircle;
  };

  return (
    <Card className="p-6 bg-background-secondary">
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-background/50"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.actor}</span>{" "}
                  {activity.action} {activity.subject}
                </p>
                <span className="text-xs text-gray-400">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActivityLog;
