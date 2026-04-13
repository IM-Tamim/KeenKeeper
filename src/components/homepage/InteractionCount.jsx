import { TimelineContext } from "@/context/timelineContext";
import { useContext } from "react";

const InteractionCount = () => {
  const { timeline } = useContext(TimelineContext);
 
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
 
  const interactionsThisMonth = timeline.filter((entry) => {
    const d = new Date(entry.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;
 
  return (
    <div className="rounded-2xl p-5 flex items-center gap-4 shadow-sm shadow-gray-300 text-center justify-center">
      <div>
        <p className="text-3xl font-bold">{interactionsThisMonth}</p>
        <p className="text-gray-500 text-sm font-medium">Interactions This Month</p>
      </div>
    </div>
  );
};
 
export default InteractionCount;
 