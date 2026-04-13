"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "@/context/timelineContext";
import { useContext } from "react";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((e) => e.type === "Call").length;
  const textCount = timeline.filter((e) => e.type === "Text").length;
  const videoCount = timeline.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#10b981" },
    { name: "Text", value: textCount, fill: "#3b82f6" },
    { name: "Video", value: videoCount, fill: "#8b5cf6" },
  ].filter((d) => d.value > 0);

  return (
    <div className="my-10 shadow p-10 rounded-md border border-slate-300 w-11/12 mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Friendship Analytics
      </h2>

      {data.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No interaction data yet.</p>
          <p className="mt-1">
            Log check-ins from a friend page to see analytics here.
          </p>
        </div>
      ) : (
        <PieChart
          style={{
            width: "50%",
            maxWidth: "300px",
            maxHeight: "70vh",
            margin: "auto",
            aspectRatio: 1,
          }}
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend className="flex gap-5 items-center justify-center" />
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default StatsPage;