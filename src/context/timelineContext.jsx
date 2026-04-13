"use client";
import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  const data = {
    timeline,
    setTimeline,
    addEntry,
  };

  return (
    <TimelineContext.Provider value={data}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;