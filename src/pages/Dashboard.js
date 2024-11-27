import React from "react";
import { Card } from "../components/ui/card";
import { Users, Shield, Key, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", value: 3200 },
    { name: "Feb", value: 1200 },
    { name: "Mar", value: 2800 },
    { name: "Apr", value: 4600 },
    { name: "May", value: 2700 },
    { name: "Jun", value: 3400 },
  ];

  const stats = [
    { title: "Total Users", value: "2,350", change: "+180.1%", icon: Users },
    { title: "Active Roles", value: "12", change: "+19%", icon: Shield },
    { title: "Permissions", value: "45", change: "+20.1%", icon: Key },
    { title: "Active Now", value: "573", change: "+201", icon: Activity },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">
            Jan 20, 2023 - Feb 09, 2023
          </span>
          <button className="px-4 py-2 bg-primary rounded-lg text-white">
            Download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 bg-background-secondary">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-sm text-green-500 mt-1">{stat.change}</p>
              </div>
              <stat.icon className="h-8 w-8 text-primary opacity-80" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="col-span-2 p-6 bg-background-secondary">
          <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-background-secondary">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New user created</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
