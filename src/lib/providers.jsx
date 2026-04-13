import TimelineProvider from "@/context/timelineContext";
import React from "react";

const Providers = ({ children }) => {
  return <TimelineProvider>{children}</TimelineProvider>;
};

export default Providers;