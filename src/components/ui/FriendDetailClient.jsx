"use client";
import React, { useContext, useState } from "react";
import { TimelineContext } from "@/context/timelineContext";
import { toast } from "react-toastify";
import {
  FaPhone,
  FaCommentSms,
  FaVideo,
  FaClock,
  FaBoxArchive,
  FaTrash,
  FaPen,
} from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const statusConfig = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-orange-100 text-orange-600",
  "on-track": "bg-emerald-100 text-emerald-600",
};

const FriendDetailClient = ({ friend }) => {
  const { addEntry } = useContext(TimelineContext);
  const [goal, setGoal] = useState(friend.goal);
  const [editingGoal, setEditingGoal] = useState(false);
  const [tempGoal, setTempGoal] = useState(friend.goal);

  const statusClass = statusConfig[friend.status] || statusConfig["on-track"];

  const handleCheckIn = (type) => {
    const entry = {
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
      friendId: friend.id,
    };
    addEntry(entry);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  const handleSaveGoal = () => {
    setGoal(tempGoal);
    setEditingGoal(false);
    toast.info("Relationship goal updated!");
  };

  return (
    <div className="w-11/12 mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex flex-col items-center text-center gap-3 mb-6">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={110}
                height={110}
                className="rounded-full object-cover border-4 border-gray-100"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {friend.name}
                </h2>
                <span className={`text-xs px-3 py-1 rounded-full mt-1 inline-block ${statusClass}`}>
                  {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm text-center mb-4">
              {friend.bio}
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <FaEnvelope className="text-gray-400" />
              <span>{friend.email}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm hover:bg-gray-50 shadow-sm">
                <FaClock /> Snooze 2 Weeks
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm hover:bg-gray-50 shadow-sm">
                <FaBoxArchive /> Archive
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm text-red-500 hover:bg-red-50 shadow-sm">
                <FaTrash /> Delete
              </button>
            </div>

          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-800">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-800">{goal}</p>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
              <p className="text-sm font-semibold text-gray-800">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">
                Relationship Goal
              </h3>
              {!editingGoal && (
                <button
                  onClick={() => setEditingGoal(true)}
                  className="text-xs px-2 py-1 rounded-md shadow-sm"
                >
                  <FaPen />
                </button>
              )}
            </div>

            {editingGoal ? (
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={tempGoal}
                  onChange={(e) => setTempGoal(Number(e.target.value))}
                  className="rounded px-2 py-1 w-20 text-sm shadow-sm border"
                  min={1}
                />
                <button
                  onClick={handleSaveGoal}
                  className="text-xs bg-gray-800 text-white px-3 py-1 rounded shadow-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => { setEditingGoal(false); setTempGoal(goal); }}
                  className="text-xs px-3 py-1 rounded shadow-sm"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                Connect every <span className="font-semibold">{goal} days</span>
              </p>
            )}
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 text-sm mb-3">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className="rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors"
              >
                <FaPhone className="text-emerald-500 text-xl" />
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors"
              >
                <FaCommentSms className="text-blue-500 text-xl" />
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors"
              >
                <FaVideo className="text-purple-500 text-xl" />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailClient;