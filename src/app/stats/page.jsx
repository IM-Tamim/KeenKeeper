"use client";
import React, { useContext } from "react";
import { TimelineContext } from "@/context/timelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#10b981", "#3b82f6", "#8b5cf6"];

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((e) => e.type === "Call").length;
  const textCount = timeline.filter((e) => e.type === "Text").length;
  const videoCount = timeline.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ].filter((d) => d.value > 0);

  return (
    <div className="w-11/12 mx-auto my-10 px-4">
      <h2 className="text-4xl font-bold mb-2">Friendship Analytics</h2>
      <p className="text-gray-500 mb-10">
        A visual breakdown of how you stay connected with your friends.
      </p>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-semibold mb-6">By Interaction Type</h3>
        {data.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No interaction data yet.</p>
            <p className="mt-1">
              Log check-ins from a friend page to see analytics here.
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
                dataKey="value"
              >
                {data.map((entry, index) => {
                  let colorIndex = 0;
                  if (entry.name === "Text") colorIndex = 0;
                  else if (entry.name === "Call") colorIndex = 1;
                  else if (entry.name === "Video") colorIndex = 2;
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[colorIndex % COLORS.length]}
                    />
                  );
                })}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default StatsPage;