"use client";
import React, { useContext, useEffect, useState } from "react";
import { TimelineContext } from "@/context/timelineContext";

const SummaryCards = () => {
  const { timeline } = useContext(TimelineContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const overdue = friends.filter((f) => f.status === "overdue").length;

  const now = new Date();
  const interactionsThisMonth = timeline.filter((entry) => {
    const d = new Date(entry.date);
    return (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  }).length;

  const cards = [
    { label: "Total Friends", value: total },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: overdue },
    { label: "Interactions This Month", value: interactionsThisMonth },
  ];

  return (
    <div className="w-11/12 mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, ind) => (
          <div
            key={ind}
            className="rounded-2xl p-5 flex items-center gap-4 shadow-sm shadow-gray-300 text-center justify-center"
          >
            <div>
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="text-gray-500 text-sm font-medium">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;