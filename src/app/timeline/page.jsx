"use client";
import React, { useContext, useState } from "react";
import { TimelineContext } from "@/context/timelineContext";
import { FaPhone, FaCommentSms, FaVideo } from "react-icons/fa6";

const iconMap = {
  Call: <FaPhone className="text-emerald-500" />,
  Text: <FaCommentSms className="text-blue-500" />,
  Video: <FaVideo className="text-purple-500" />,
};

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Call", "Text", "Video"];

  const filtered =
    filter === "All"
      ? timeline
      : timeline.filter((entry) => entry.type === filter);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl font-bold mb-2">Timeline</h2>
      <p className="text-gray-500 mb-6">
        A history of all your interactions with friends.
      </p>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn btn-sm ${
              filter === f
                ? "bg-emerald-500 text-white border-emerald-500"
                : "btn-outline"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">No timeline entries yet.</p>
          <p className="text-gray-400 mt-1">
            Go to a friend page and log a check-in!
          </p>
        </div>
      ) : (
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="flex flex-col gap-6">
            {sorted.map((entry, ind) => (
              <div key={ind} className="flex gap-4 items-start pl-4">
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm shrink-0">
                  {iconMap[entry.type]}
                </div>

                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {entry.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                          entry.type === "Call"
                            ? "bg-emerald-100 text-emerald-600"
                            : entry.type === "Text"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {entry.type}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 shrink-0">
                      {new Date(entry.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;