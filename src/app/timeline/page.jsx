"use client";
import React, { useContext, useState } from "react";
import { TimelineContext } from "@/context/timelineContext";
import { FaPhone, FaCommentSms, FaVideo, FaChevronDown } from "react-icons/fa6";

const iconMap = {
  All: null,
  Call: <FaPhone className="w-4 h-4 text-emerald-500" />,
  Text: <FaCommentSms className="w-4 h-4 text-blue-500" />,
  Video: <FaVideo className="w-4 h-4 text-purple-500" />,
};

const filterOptions = [
  { label: "All", value: "All", icon: null },
  { label: "Call", value: "Call", icon: <FaPhone className="w-4 h-4 text-emerald-500" /> },
  { label: "Text", value: "Text", icon: <FaCommentSms className="w-4 h-4 text-blue-500" /> },
  { label: "Video", value: "Video", icon: <FaVideo className="w-4 h-4 text-purple-500" /> },
];

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filtered =
    filter === "All"
      ? timeline
      : timeline.filter((entry) => entry.type === filter);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const currentFilterLabel = filterOptions.find(opt => opt.value === filter)?.label;

  return (
    <div className="w-11/12 mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Timeline</h1>
      
      <div className="relative mb-8">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <span>Filter timeline</span>
          <FaChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isDropdownOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsDropdownOpen(false)}
            />
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setFilter(option.value);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                    filter === option.value ? 'bg-gray-50' : ''
                  }`}
                >
                  {option.icon && <span className="w-4 h-4">{option.icon}</span>}
                  <span className={`text-sm ${filter === option.value ? 'font-medium text-emerald-600' : 'text-gray-700'}`}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">No timeline entries yet.</p>
          <p className="text-gray-400 mt-1">
            Go to a friend page and log a check-in!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sorted.map((entry, ind) => (
            <div
              key={ind}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    {entry.type === "Call" && <FaPhone className="w-3.5 h-3.5 text-emerald-500" />}
                    {entry.type === "Text" && <FaCommentSms className="w-3.5 h-3.5 text-blue-500" />}
                    {entry.type === "Video" && <FaVideo className="w-3.5 h-3.5 text-purple-500" />}
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        entry.type === "Call"
                          ? "bg-emerald-100 text-emerald-700"
                          : entry.type === "Text"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {entry.type}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;